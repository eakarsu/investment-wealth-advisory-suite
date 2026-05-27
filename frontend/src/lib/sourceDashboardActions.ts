export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "family-office-manager",
    "label": "Family Office Manager",
    "description": "Open Family Office Manager workflows elevated from AIFamilyOfficeManager.",
    "href": "/family-office-dashboard",
    "sourceProjects": [
      "AIFamilyOfficeManager"
    ],
    "examples": [
      "Family Office Dashboard",
      "Asset Service Calendar",
      "Family Governance Notes"
    ],
    "count": 1
  },
  {
    "id": "vc-deal-flow-copilot",
    "label": "VC Deal Flow Copilot",
    "description": "Open VC Deal Flow Copilot workflows elevated from AIVCDealFlowCopilot.",
    "href": "/vc-deal-flow",
    "sourceProjects": [
      "AIVCDealFlowCopilot"
    ],
    "examples": [
      "VC Deal Flow",
      "Startup Screening",
      "Investment Memo Drafts"
    ],
    "count": 1
  },
  {
    "id": "m-a-deal-room",
    "label": "M&A Deal Room",
    "description": "Open M&A Deal Room workflows elevated from AIMandADealRoom.",
    "href": "/deal-room-diligence",
    "sourceProjects": [
      "AIMandADealRoom"
    ],
    "examples": [
      "Deal Room Diligence",
      "Buyer/Seller Tracker",
      "Deal Risk Brief"
    ],
    "count": 1
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIWealthManagementRoboAdvisor",
      "investment"
    ],
    "examples": [
      "backend/ai_helpers",
      "backend/main",
      "backend/openrouter",
      "client/src/components/AIResponse",
      "client/src/components/AISidebar",
      "client/src/components/DetailView"
    ],
    "count": 2
  }
];
