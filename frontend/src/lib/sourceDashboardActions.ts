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
