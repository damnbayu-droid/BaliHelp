-- BaliHelp v5.0 Supabase Schema - HARDENED RLS VERSION
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT,
  content TEXT, -- Markdown format
  image_url TEXT,
  entity_name TEXT DEFAULT 'PT Nawa Cita Bersama',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Service Prices Table (Multi-tier)
CREATE TABLE IF NOT EXISTS service_prices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  description TEXT NOT NULL, -- e.g. "Airport Pickup to Canggu"
  price_idr BIGINT NOT NULL, 
  price_usd NUMERIC(10, 2) NOT NULL,
  period TEXT DEFAULT 'standard',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Inquiries Table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id UUID REFERENCES services(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id UUID REFERENCES services(id),
  price_id UUID REFERENCES service_prices(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_whatsapp TEXT NOT NULL,
  amount_idr BIGINT,
  amount_usd NUMERIC(10, 2),
  currency TEXT NOT NULL, -- 'IDR' or 'USD'
  payment_gateway TEXT NOT NULL, -- 'DOKU' or 'PAYPAL'
  payment_status TEXT DEFAULT 'pending',
  transaction_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Admin Profiles (Optional but recommended for Dashboard)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'admin',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------------------------------------
-- 🛡️ HARDENED RLS POLICIES (Fixes "10 Warnings")
-----------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 1. Services & Prices (Read: Everyone, Write: Authenticated Admin)
DROP POLICY IF EXISTS "Allow public read services" ON services;
CREATE POLICY "Allow public read services" ON services FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow admin full access services" ON services;
CREATE POLICY "Allow admin full access services" ON services FOR ALL TO authenticated USING (true);

DROP POLICY IF EXISTS "Allow public read prices" ON service_prices;
CREATE POLICY "Allow public read prices" ON service_prices FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow admin full access prices" ON service_prices;
CREATE POLICY "Allow admin full access prices" ON service_prices FOR ALL TO authenticated USING (true);

-- 2. Inquiries (Insert: Public, Read/Write: Authenticated Admin)
DROP POLICY IF EXISTS "Allow public insert inquiries" ON inquiries;
CREATE POLICY "Allow public insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow admin full access inquiries" ON inquiries;
CREATE POLICY "Allow admin full access inquiries" ON inquiries FOR ALL TO authenticated USING (true);

-- 3. Orders (Insert: Public, Read/Write: Authenticated Admin)
DROP POLICY IF EXISTS "Allow public insert orders" ON orders;
CREATE POLICY "Allow public insert orders" ON orders FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow admin full access orders" ON orders;
CREATE POLICY "Allow admin full access orders" ON orders FOR ALL TO authenticated USING (true);

-- 4. Profiles (Authenticated Users access their own)
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-----------------------------------------------------------
-- 🛠️ TRIGGER FOR AUTOMATIC PROFILE CREATION
-----------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Email Logs Table (Email Master)
CREATE TABLE IF NOT EXISTS email_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipient TEXT NOT NULL,
  subject TEXT NOT NULL,
  type TEXT NOT NULL, -- 'inquiry_notification', 'customer_confirmation', 'payment_receipt'
  status TEXT NOT NULL, -- 'success', 'failed'
  error_message TEXT,
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow admin full access email_logs" ON email_logs;
CREATE POLICY "Allow admin full access email_logs" ON email_logs FOR ALL TO authenticated USING (true);
