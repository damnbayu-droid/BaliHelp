export const runtime = 'edge';

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    
    const adminEmail = process.env.ADMIN_DEFAULT_EMAIL;
    const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json({ error: 'Admin credentials missing in .env' }, { status: 500 });
    }

    // Initialize Supabase Admin Client (using service_role key to bypass security)
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    console.log(`[SEED] Attempting to create admin user: ${adminEmail}`);

    // Create User in Supabase Auth
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: { full_name: 'Bayu Damopolii' }
    });

    if (error) {
      if (error.message.includes('already registered')) {
        return NextResponse.json({ message: 'Admin user already exists. You can login now.' });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Admin user created successfully!', 
      user: data.user.id 
    });

  } catch (error) {
    return NextResponse.json({ error: 'System error' }, { status: 500 });
  }
}
