# UX / UI Notes

## Why this blue system
The palette uses a deep navy as the authority/reading surface, cobalt as the action color, cyan as a restrained highlight, and ice-blue/warm-white backgrounds for long-form patient content. Blue is widely used in healthcare interfaces for associations with calm, trust and professional competence; the implementation still requires contrast testing on the final production copy and imagery.

## Responsive rules
- No fixed page width.
- No component is allowed to create horizontal overflow.
- Mobile drawer is independent of document layout and uses an overlay + contained panel.
- Mobile CTA is fixed only below 620px.
- Landscape phones use a two-column hero only when viewport height is short.
- Touch targets remain generous on mobile.
- Reduced-motion mode disables nonessential transitions.

## Interaction rules
- Before/After uses a native range input over a local image comparison component.
- Case detail opens in an accessible modal.
- Escape closes drawer/modal.
- Menu background blocks page interaction.
- Video cards with no source are intentionally non-playing placeholders until CMS video URLs exist.
