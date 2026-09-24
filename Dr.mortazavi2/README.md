# Dr. Ali Mortazavi — PRO MAX V7 BLUE

Frontend-only medical experience, rebuilt from scratch around a distinctive blue healthcare visual system.

## Design direction
- Deep clinical navy + cobalt blue + cyan light
- Warm-white / ice-blue surfaces for calmer patient-facing reading
- Strong editorial typography and asymmetric layouts
- Motion kept local to components; no page-wide translate/parallax
- Mobile-first drawer navigation and fixed mobile consultation CTA

## UX architecture
1. Hero / doctor portrait
2. Introduction film
3. Physician profile
4. Specialties
5. Before / After case studies
6. Patient journey
7. Video library
8. Medical journal
9. Clinic / contact
10. Consultation CTA

## Django-ready data boundary
`data/site.js` is the temporary frontend data layer. Later replace it with Django context, template tags, or API JSON without changing the visual components.

Suggested models:
- DoctorProfile
- Specialty
- CaseStudy
- CaseImage
- Video
- Article
- ClinicLocation
- SiteSettings
- ConsultationRequest

## Important production note
The current case images are explicitly prototype/demo content. Real patient before/after media should only be published when it is authentic, approved, and authorized for public display.
