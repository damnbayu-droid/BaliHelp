# Bali Help - Company Formation Website

A comprehensive, production-ready Next.js 16 website for company formation and business setup services in Bali, Indonesia. Built with modern web technologies and optimized for performance, SEO, and accessibility.

## 🎨 Design System

### Color Scheme
- **Primary Color**: Purple Dark Gradient (`from-purple-700 via-purple-800 to-purple-900`)
- **Secondary Color**: Yellow-Orange-Red Gradient (`from-yellow-500 via-orange-500 to-red-500`)
- **Accent Colors**: Purple and Orange variations for interactive elements
- **Background**: White with subtle purple and orange gradients

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code/technical)
- **Headings**: Bold, large sizes (4xl to 6xl)
- **Body**: Regular weight, readable sizes (base to xl)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page with all sections
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── globals.css           # Global styles
│   ├── structured-data.tsx   # SEO structured data (JSON-LD)
│   └── api/
│       └── fetch-website/    # API for fetching website content
├── components/
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── mock-data.ts          # Comprehensive service and package data
│   └── utils.ts              # Utility functions
└── hooks/
    ├── use-mobile.ts         # Mobile detection hook
    └── use-toast.ts          # Toast notification hook
```

## ✨ Features Implemented

### 1. Hero Section
- Animated gradient background with purple and orange accents
- Licensed & Compliant badge
- Bold headline with gradient text
- Call-to-action buttons with gradient styling
- Three feature cards (PT PMA, Licensed, Efficient Process)
- Responsive layout (mobile-first design)

### 2. Why Bali Section
- Six benefit cards with icons
- Hover effects with scale animation
- Gradient icon backgrounds
- Content: Growing Economy, Strategic Location, Skilled Workforce, Government Support, Diverse Sectors, Quality of Life

### 3. Services Section (Company Formation)
**Categories:**
- Company Formation (3 services)
- Business Licensing (3 services)
- Tax & Compliance (3 services)
- Additional Support (2 services)

**Interactive Features:**
- Clickable service cards
- Detailed modal popups for each service
- Modal content includes:
  - Full description
  - Key features list
  - Requirements
  - Processing time
  - Pricing (where applicable)
  - "Get Started" CTA button

**Services Included:**
- PT PMA
- PT Local Company
- Virtual Office
- NIB Registration
- OSS Registration
- KBLI Alignment
- NPWP Registration
- PKP Registration
- Periodic Reporting
- Bank Account Assistance
- Investor KITAS Support

### 4. Packages Section
Three pricing tiers:
- **Starter** ($1,500+) - Essential for small businesses
- **Business** ($3,500+) - Most popular, complete setup for foreign investors
- **Enterprise** (Custom) - Full-service with ongoing support

**Interactive Features:**
- Highlighted "Most Popular" badge on Business package
- Detailed modals with:
  - Full package description
  - Complete list of included services
  - Pricing information
  - CTA button to contact

### 5. Visa Services Section
Five visa types with detailed information:
- B211A Visit Visa
- Investor KITAS
- Working KITAS
- Permanent Stay Permit (KITAP)
- E-VOZ Multiple Entry

**Modal Content:**
- Full description
- Eligibility criteria
- Required documents
- Processing time
- Apply CTA button

### 6. Additional Services Section
Four service cards:
- Accounting & Tax
- HR & Payroll
- Legal Advisory
- Market Research

### 7. Trust Section
Dark purple gradient background with:
- Statistics (500+ Companies, 98% Success Rate, 15+ Years, 24/7 Support)
- Three trust badges (Licensed & Certified, Industry Experts, Fast Processing)

### 8. Contact Section
**Contact Information:**
- Email addresses
- Phone numbers
- WhatsApp
- Physical address

**Contact Form:**
- First/Last name fields
- Email input
- Phone number
- Service interest dropdown
- Message textarea
- Submit button with gradient styling

### 9. Footer
- Company branding
- Services links
- Company links
- Legal links
- Copyright information

## 🚀 Technical Implementation

### SEO Optimization
- Comprehensive metadata
- Rich structured data (JSON-LD):
  - Organization schema
  - Local business schema
  - Service schema
  - FAQ schema
  - Breadcrumb schema
- Open Graph tags
- Twitter Card tags
- Robots configuration
- Semantic HTML structure

### Performance
- Next.js 16 with App Router
- Turbopack for fast builds
- Client-side rendering with React Server Components
- Optimized images (using next/image)
- CSS-in-JS with Tailwind CSS
- Minimal JavaScript bundle

### Accessibility (WCAG AA Compliant)
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management in modals
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts
- Touch-friendly buttons (min 44px)
- Mobile navigation menu
- Optimized typography for all screen sizes

### UI Components (shadcn/ui)
- Button (with gradient variants)
- Card (multiple styles)
- Dialog (for modals)
- Badge
- Input
- Textarea
- Separator
- Toast notifications
- And many more...

## 🎯 Key Features

### Interactive Modals
- All service cards open detailed modals
- Package cards open comprehensive pricing modals
- Visa services show detailed requirements
- Smooth animations and transitions
- "Get Started" CTA buttons in each modal

### Navigation
- Fixed header with scroll detection
- Smooth scroll to sections
- Active section highlighting
- Mobile hamburger menu
- Responsive navigation

### Animations
- Hover effects on all interactive elements
- Scale animations on cards
- Gradient backgrounds with blur effects
- Smooth transitions
- Loading states

### Color Scheme
- **Primary**: Purple dark gradients (from-purple-700 via-purple-800 to-purple-900)
- **Secondary**: Yellow-orange-red gradients (from-yellow-500 via-orange-500 to-red-500)
- Consistent application throughout the site
- Dark mode support

## 📱 Mobile Responsiveness

- Fully responsive on all devices
- Mobile-first design approach
- Touch-friendly interactions
- Optimized layouts for:
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (1024px+)

## 🔧 Development

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect)
- **Form Handling**: Native HTML forms

### Available Scripts
```bash
bun run dev      # Start development server
bun run lint     # Run ESLint
bun run build    # Build for production
bun run start    # Start production server
```

## 📊 Mock Data

Comprehensive mock data includes:
- 11 services with full details
- 3 pricing packages
- 5 visa services
- 6 why-bali benefits
- 4 trust statistics
- All modal content and descriptions

## 🎨 Customization

### Colors
To customize the color scheme, update the Tailwind classes:
- Primary: `from-purple-700 via-purple-800 to-purple-900`
- Secondary: `from-yellow-500 via-orange-500 to-red-500`

### Content
All content is managed in `src/lib/mock-data.ts`:
- Service information
- Package details
- Visa requirements
- Trust statistics

### SEO Metadata
Update in `src/app/layout.tsx`:
- Title and description
- Keywords
- Open Graph tags
- Twitter Card tags

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Best Practices Implemented

1. **Performance**
   - Code splitting
   - Lazy loading
   - Optimized images
   - Minimal CSS

2. **SEO**
   - Semantic HTML
   - Structured data
   - Meta tags
   - Sitemap-ready

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - Focus management

4. **Code Quality**
   - TypeScript strict mode
   - ESLint configuration
   - Component organization
   - Reusable patterns

5. **User Experience**
   - Fast loading
   - Smooth animations
   - Clear CTAs
   - Intuitive navigation

## 📝 Notes

- The website is a single-page application with smooth scrolling
- All services have detailed modal popups
- Pricing packages include comprehensive breakdowns
- Contact form is ready for backend integration
- Mobile menu is fully functional
- Dark mode support is built-in

## 🎯 Use Case

This website is perfect for:
- Company formation agencies
- Business consulting firms
- Legal service providers
- Immigration consultants
- Business setup services

## 📄 License

This project is built as a demonstration/production template for company formation services.

## 🤝 Support

For questions or support, refer to the Next.js documentation and shadcn/ui documentation.

---

Built with ❤️ using Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui
