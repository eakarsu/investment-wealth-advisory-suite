import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'portfolios',
    title: 'Portfolios',
    href: '/portfolios',
    category: 'Advisory',
    icon: BriefcaseBusiness,
    summary: 'Portfolios workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Portfolios queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Portfolios', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'clients',
    title: 'Clients',
    href: '/clients',
    category: 'Advisory',
    icon: Users,
    summary: 'Clients workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Clients queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Clients', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'plans',
    title: 'Plans',
    href: '/plans',
    category: 'Advisory',
    icon: ClipboardList,
    summary: 'Plans workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Plans queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Plans', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'risk-profiles',
    title: 'Risk Profiles',
    href: '/risk-profiles',
    category: 'Advisory',
    icon: CalendarCheck,
    summary: 'Risk Profiles workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Risk Profiles queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Risk Profiles', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'allocations',
    title: 'Allocations',
    href: '/allocations',
    category: 'Operations',
    icon: Activity,
    summary: 'Allocations workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Allocations queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Allocations', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'rebalancing',
    title: 'Rebalancing',
    href: '/rebalancing',
    category: 'Operations',
    icon: Workflow,
    summary: 'Rebalancing workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Rebalancing queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Rebalancing', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'research',
    title: 'Research',
    href: '/research',
    category: 'Operations',
    icon: FileText,
    summary: 'Research workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Research queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Research', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'proposals',
    title: 'Proposals',
    href: '/proposals',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Proposals workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Proposals queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Proposals', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'meetings',
    title: 'Meetings',
    href: '/meetings',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Meetings workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Meetings queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Meetings', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    href: '/compliance',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Compliance workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Compliance queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Compliance', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'performance',
    title: 'Performance',
    href: '/performance',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Performance workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Performance queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Performance', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Investment Wealth Advisory suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "deal-room-diligence",
    title: "Deal Room Diligence",
    href: "/deal-room-diligence",
    category: "M&A Deal Room",
    icon: Workflow,
    summary: "Deal Room Diligence elevated from the M&A Deal Room source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Deal Room Diligence queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Deal Room Diligence", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "buyer-seller-tracker",
    title: "Buyer/Seller Tracker",
    href: "/buyer-seller-tracker",
    category: "M&A Deal Room",
    icon: Workflow,
    summary: "Buyer/Seller Tracker elevated from the M&A Deal Room source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Buyer/Seller Tracker queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Buyer/Seller Tracker", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "deal-risk-brief",
    title: "Deal Risk Brief",
    href: "/deal-risk-brief",
    category: "M&A Deal Room",
    icon: Workflow,
    summary: "Deal Risk Brief elevated from the M&A Deal Room source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Deal Risk Brief queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Deal Risk Brief", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "vc-deal-flow",
    title: "VC Deal Flow",
    href: "/vc-deal-flow",
    category: "VC Deal Flow Copilot",
    icon: Workflow,
    summary: "VC Deal Flow elevated from the VC Deal Flow Copilot source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["VC Deal Flow queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "VC Deal Flow", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "startup-screening",
    title: "Startup Screening",
    href: "/startup-screening",
    category: "VC Deal Flow Copilot",
    icon: Workflow,
    summary: "Startup Screening elevated from the VC Deal Flow Copilot source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Startup Screening queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Startup Screening", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "investment-memo-drafts",
    title: "Investment Memo Drafts",
    href: "/investment-memo-drafts",
    category: "VC Deal Flow Copilot",
    icon: Workflow,
    summary: "Investment Memo Drafts elevated from the VC Deal Flow Copilot source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Investment Memo Drafts queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Investment Memo Drafts", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "family-office-dashboard",
    title: "Family Office Dashboard",
    href: "/family-office-dashboard",
    category: "Family Office Manager",
    icon: Workflow,
    summary: "Family Office Dashboard elevated from the Family Office Manager source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Family Office Dashboard queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Family Office Dashboard", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "asset-service-calendar",
    title: "Asset Service Calendar",
    href: "/asset-service-calendar",
    category: "Family Office Manager",
    icon: Workflow,
    summary: "Asset Service Calendar elevated from the Family Office Manager source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Asset Service Calendar queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Asset Service Calendar", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "family-governance-notes",
    title: "Family Governance Notes",
    href: "/family-governance-notes",
    category: "Family Office Manager",
    icon: Workflow,
    summary: "Family Governance Notes elevated from the Family Office Manager source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Family Governance Notes queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Family Governance Notes", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Investment Wealth Advisory documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Investment Wealth Advisory alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Investment Wealth Advisory source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Investment Wealth Advisory users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Investment Wealth Advisory assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Advisory', features: ['Portfolios', 'Clients', 'Plans', 'Risk Profiles'] },
  { name: 'Operations', features: ['Allocations', 'Rebalancing', 'Research', 'Proposals'] },
  { name: 'Governance', features: ['Meetings', 'Compliance'] },
  { name: 'M&A Deal Room', features: ["Deal Room Diligence","Buyer/Seller Tracker","Deal Risk Brief"] },
  { name: 'VC Deal Flow Copilot', features: ["VC Deal Flow","Startup Screening","Investment Memo Drafts"] },
  { name: 'Family Office Manager', features: ["Family Office Dashboard","Asset Service Calendar","Family Governance Notes"] },
  { name: 'Intelligence Layer', features: ['Performance', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIWealthAdvisor', 'AIPortfolioRiskAnalyst where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
