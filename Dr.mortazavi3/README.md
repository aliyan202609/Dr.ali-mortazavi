# Dr. Ali Mortazavi — PRO MAX V6

Frontend rebuilt from zero as a Django-ready Persian RTL medical experience.

## Design direction
- Calm clinical palette: deep surgical teal + mineral ivory + restrained champagne accent.
- No page-wide horizontal motion, no aggressive parallax, no transform on root containers.
- Responsive-first navigation with a dedicated mobile drawer.
- Touch-friendly controls and visible focus states.
- Motion is progressive and disabled when `prefers-reduced-motion` is enabled.

## Information architecture
Home → Doctor → Specialties → Case Studies → Video Library → Magazine → Clinic/Contact.

## Django mapping
All demo content lives in `data/content.js`. Replace it with Django template context or API JSON later.
Recommended models:
- DoctorProfile
- Specialty
- CaseStudy (before_image, after_image, category, consent/status)
- Video (file, poster, category, duration)
- Article (title, slug, excerpt, body, featured_image, published_at)
- ClinicLocation
- SiteSettings

## Important content rule
Current Before/After images are explicitly demo UI assets. They must not be presented as the doctor's real results. Replace them with verified, consented, physician-approved media before production.

## QA targets
Test at: 320, 360, 375, 390, 414, 480, 600, 768, 834, 1024, 1280, 1440, 1920px; portrait + landscape. Also test 200% zoom and keyboard navigation.
