/**
 * All the potential facet options for the
 * `species` filter.
 *
 * These values would usually not be manually
 * hardcoded, and a search library such as:
 * https://www.algolia.com/
 *
 * This would allow us to fetch all the facet options
 * each filter would have. For simplicity, here I'm just
 * hard coding the options.
 */
export const speciesFacetOptions = [
  'Alien',
  'Animal',
  'Cronenberg',
  'Disease',
  'Human',
  'Humanoid',
  'Mythological Creature',
  'Poopybutthole',
  'Robot',
  'unknown',
] as const;

export type SpeciesFacetOption = typeof speciesFacetOptions[number];
