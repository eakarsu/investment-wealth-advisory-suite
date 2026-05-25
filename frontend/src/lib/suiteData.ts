export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIWealthAdvisor', ownership: 'Portfolios source capabilities and workflows', coverage: ['Portfolios', 'Clients', 'Plans'] },
  { name: 'AIPortfolioRiskAnalyst', ownership: 'Clients source capabilities and workflows', coverage: ['Risk Profiles', 'Allocations', 'Rebalancing'] },
  { name: 'AIInvestmentResearchAssistant', ownership: 'Plans source capabilities and workflows', coverage: ['Research', 'Proposals', 'Meetings'] },
  { name: 'AIClientMeetingPrep', ownership: 'Risk Profiles source capabilities and workflows', coverage: ['Compliance', 'Performance', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Portfolios', value: '84', note: 'Active' },
  { label: 'Clients', value: '61', note: 'Open' },
  { label: 'Plans', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Portfolios operating view', 'Clients operating view', 'Plans operating view', 'Risk Profiles operating view', 'Allocations operating view', 'Rebalancing operating view', 'Research operating view', 'Proposals operating view'];
export const workflowHighlights = ['Portfolios workflow with records, approvals, audit, and reporting', 'Clients workflow with records, approvals, audit, and reporting', 'Plans workflow with records, approvals, audit, and reporting', 'Risk Profiles workflow with records, approvals, audit, and reporting', 'Allocations workflow with records, approvals, audit, and reporting'];
