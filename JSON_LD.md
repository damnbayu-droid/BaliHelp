# BaliHelp JSON-LD Structure Documentation
**Version**: 4.2 (Ecosystem Hardened)
**Master Blueprint**: `GLOBAL_DATA_SYNC.md`

This document outlines the structured data (JSON-LD) implementation for `balihelp.id`, ensuring maximum visibility in search engine Knowledge Graphs and maintaining technical alignment with the **Bali Enterprises Group** ecosystem.

## 🏗️ Core Architecture
The site follows a **Hub-and-Spoke** architecture where `balihelp.id` acts as a specialized concierge node pointing to the operational flagship `indonesianvisas.com`.

### 1. Master Identity Node
All schemas reference the flagship hub as the parent organization to consolidate authority signals.
- **Parent ID**: `https://indonesianvisas.com/#organization`
- **Parent Name**: `PT Indonesian Visas Agency™ (MYVISA)`
- **Tax ID**: `0100000008117681` (16-digit raw)

## 🔍 Schema Definitions

### 🏛️ Organization & LocalBusiness
- **Type**: `LocalBusiness`
- **ID**: `https://balihelp.id/#organization`
- **Historical Signal**: `foundingDate: "2010"`
- **Description**: Includes "(Operating since 2010)" and legacy context of the "Bali Help" brand.
- **Legal Data**: 
    - NIB: `0402260034806`
    - AHU: `AHU-00065.AH.02.01.TAHUN 2020`
    - SKT: `S-04449/SKT-WP-CT/KPP.1701/2026`

### 👤 Founder (E-E-A-T)
- **Name**: `Bayu Damopolii-Manoppo`
- **Title**: `Founder & Strategic Director`
- **Verification**: Linked to primary and legacy LinkedIn profiles.

### 🛠️ Service Catalog
- **Provider**: Linked to the LocalBusiness ID.
- **Area Served**: Bali, Indonesia.
- **Service Categories**:
    - Emergency Legal & Police Assistance
    - Company Formation Support (Funneled to Hub)
    - Digital Nomad Hub
    - Luxury & Lifestyle Concierge

### ❓ FAQPage
Strategic questions addressing license legitimacy, visa assistance methods (funneling to flagship), and unique selling points based on 15 years of local expertise.

## 🚀 Transactional Peak Mandate
In compliance with the **Transactional Peak** mandate, the JSON-LD explicitly identifies that visa and company formation processing are funneled through the secure flagship to ensure legal compliance.

## 🛠️ Technical Implementation
- **File**: `src/app/structured-data.tsx`
- **Injection**: Dynamically injected into the `<head>` via `RootLayout` in `src/app/layout.tsx`.
- **Validation**: Pass standard at https://validator.schema.org/

---
**Status**: ✅ FULLY SYNCED WITH ECOSYSTEM v4.2
