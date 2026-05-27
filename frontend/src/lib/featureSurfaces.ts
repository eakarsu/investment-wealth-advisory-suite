export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['portfolios', 'Portfolios', 'Portfolios operating queue', 'Advisory Lead', 'Review and assign next action'],
  ['clients', 'Clients', 'Clients operating queue', 'Advisory Lead', 'Review and assign next action'],
  ['plans', 'Plans', 'Plans operating queue', 'Advisory Lead', 'Review and assign next action'],
  ['risk-profiles', 'Risk Profiles', 'Risk Profiles operating queue', 'Advisory Lead', 'Review and assign next action'],
  ['allocations', 'Allocations', 'Allocations operating queue', 'Operations Lead', 'Review and assign next action'],
  ['rebalancing', 'Rebalancing', 'Rebalancing operating queue', 'Operations Lead', 'Review and assign next action'],
  ['research', 'Research', 'Research operating queue', 'Operations Lead', 'Review and assign next action'],
  ['proposals', 'Proposals', 'Proposals operating queue', 'Operations Lead', 'Review and assign next action'],
  ['meetings', 'Meetings', 'Meetings operating queue', 'Governance Lead', 'Review and assign next action'],
  ['compliance', 'Compliance', 'Compliance operating queue', 'Governance Lead', 'Review and assign next action'],
  ['performance', 'Performance', 'Performance operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["deal-room-diligence","Deal Room Diligence","Deal Room Diligence review queue","M&A Deal Room","Review source context and assign owner"],
  ["buyer-seller-tracker","Buyer/Seller Tracker","Buyer/Seller Tracker review queue","M&A Deal Room","Confirm next action and update evidence"],
  ["deal-risk-brief","Deal Risk Brief","Deal Risk Brief review queue","M&A Deal Room","Confirm next action and update evidence"],
  ["vc-deal-flow","VC Deal Flow","VC Deal Flow review queue","VC Deal Flow Copilot","Review source context and assign owner"],
  ["startup-screening","Startup Screening","Startup Screening review queue","VC Deal Flow Copilot","Confirm next action and update evidence"],
  ["investment-memo-drafts","Investment Memo Drafts","Investment Memo Drafts review queue","VC Deal Flow Copilot","Confirm next action and update evidence"],
  ["family-office-dashboard","Family Office Dashboard","Family Office Dashboard review queue","Family Office Manager","Review source context and assign owner"],
  ["asset-service-calendar","Asset Service Calendar","Asset Service Calendar review queue","Family Office Manager","Confirm next action and update evidence"],
  ["family-governance-notes","Family Governance Notes","Family Governance Notes review queue","Family Office Manager","Confirm next action and update evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));
