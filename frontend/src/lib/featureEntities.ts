export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['portfolios', 'Portfolios Records', 'Portfolios priority queue', 'Open', 'Portfolios exception list', 'Advisory Lead', '$0'],
  ['clients', 'Clients Records', 'Clients priority queue', 'Review', 'Clients exception list', 'Advisory Lead', '$0'],
  ['plans', 'Plans Records', 'Plans priority queue', 'Action needed', 'Plans exception list', 'Advisory Lead', '$0'],
  ['risk-profiles', 'Risk Profiles Records', 'Risk Profiles priority queue', 'Open', 'Risk Profiles exception list', 'Advisory Lead', '$0'],
  ['allocations', 'Allocations Records', 'Allocations priority queue', 'Review', 'Allocations exception list', 'Operations Lead', '$0'],
  ['rebalancing', 'Rebalancing Records', 'Rebalancing priority queue', 'Action needed', 'Rebalancing exception list', 'Operations Lead', '$0'],
  ['research', 'Research Records', 'Research priority queue', 'Open', 'Research exception list', 'Operations Lead', '$0'],
  ['proposals', 'Proposals Records', 'Proposals priority queue', 'Review', 'Proposals exception list', 'Operations Lead', '$0'],
  ['meetings', 'Meetings Records', 'Meetings priority queue', 'Action needed', 'Meetings exception list', 'Governance Lead', '$0'],
  ['compliance', 'Compliance Records', 'Compliance priority queue', 'Open', 'Compliance exception list', 'Governance Lead', '$0'],
  ['performance', 'Performance Records', 'Performance priority queue', 'Review', 'Performance exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
