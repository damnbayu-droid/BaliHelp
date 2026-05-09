# Implementation Plan: BaliHelp v5.0 - Ecosystem Expansion & Payment Integration

This plan outlines the transition of `balihelp.id` from a static service information site to a dynamic **Service-on-Demand** platform, integrating a complex multi-entity legal matrix and robust payment infrastructure.

## 🛡️ Ecosystem & Legal Matrix Hardening (v5.0)
We will implement the **Legal Matrix Collective Authority** in JSON-LD to explain the relationship between the four core entities under the ownership of **Bayu Damopolii-Manoppo**.

### Legal Entity Mapping:
1. **PT Indonesian Visas Agency** (Flagship/Visa Hub)
2. **PT Nawa Cita Bersama** (Lifestyle/Moving/Concierge)
3. **PT Bali Surga Indah** (Supporting Entity)
4. **CV Tunas Raya** (Historical/Legacy Authority)

## 🛠️ Phase 1: Foundation (Supabase & Environment)
- [ ] Initialize `.env` with Supabase, Doku, and PayPal variables.
- [ ] Install `@supabase/supabase-js`.
- [ ] Define Database Schema:
  - `services`: Master catalog (slug, title, content, entity_mapping).
  - `service_prices`: Multi-tier pricing for each service (description, price_idr, price_usd).
  - `orders`: Transaction tracking.

## 🎨 Phase 2: Dynamic UI & Landing Page Update
- [ ] **Product Cards Section**: Move/Add a new section below Hero containing all lifestyle services as interactive cards.
- [ ] **Dynamic Service Pages**: Create `src/app/services/[slug]/page.tsx`.
  - Full service information rendering.
  - **Dual-Action Form**:
    - **Inquiry**: Submits to `inquiries` table.
    - **Order Now**: Triggers payment gateway flow based on selected price tier.

## 🔐 Phase 3: Admin Dashboard (Content & Pricing)
- [ ] **Auth Setup**: Implement Supabase Auth for Admin access.
- [ ] **Admin UI**: Create `/admin` dashboard.
  - CRUD for Services.
  - **Dynamic Price Manager**: Add/Remove multiple price points per service with custom descriptions.

## 💳 Phase 4: Payment Gateway Foundation
- [ ] **Doku (IDR)**: Setup foundation for IDR payments (QRIS/VA).
- [ ] **PayPal (USD)**: Setup foundation for international payments.
- [ ] **Price Sync**: Logic to toggle between IDR/USD based on selected gateway.

## 🔍 Phase 5: SEO & JSON-LD v5.0
- [ ] Update `src/app/structured-data.tsx`:
  - Map `PT Indonesian Visas Agency` as the `parentOrganization`.
  - Link all other entities using `memberOf` or `brand` within the same `Organization` group.
  - Explicitly list `Bayu Damopolii-Manoppo` as the `founder` across all entities to create a "Unified Trust Graph".

## 🚀 Execution Strategy
1. **Infrastructure**: Setup Supabase tables and `.env`.
2. **Data Migration**: Move current static data into Supabase.
3. **Admin Panel**: Build the management interface first so content can be adjusted.
4. **Service Frontend**: Build the dynamic pages and cards.
5. **Payment Bridge**: Implement the payment logic.

---
> [!IMPORTANT]
> Since this is a **Production Environment**, all database updates will be tested with a small subset of data before full rollout.
