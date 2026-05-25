import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Wealth Management Robo Advisor Source Feature",
    "href": "/features/source-ai-wealth-management-robo-advisor",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIWealthManagementRoboAdvisor: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Investment Source Feature",
    "href": "/features/source-investment",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in investment: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "5 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Wealth Management Robo Advisor Source Feature",
      "Investment Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-wealth-management-robo-advisor": {
    "title": "AI Wealth Management Robo Advisor Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIWealthManagementRoboAdvisor, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIWealthManagementRoboAdvisor: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "21",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-investment": {
    "title": "Investment Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from investment, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in investment: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "5 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "5",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Wealth Management Robo Advisor Source Feature": {
    "sourceOwners": [
      "AIWealthManagementRoboAdvisor"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI",
      "Batch09 Gap Nonai",
      "Main"
    ],
    "outputs": [
      "AI Wealth Management Robo Advisor merged workflow register",
      "AI Wealth Management Robo Advisor API and route coverage map",
      "AI Wealth Management Robo Advisor AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Investment Source Feature": {
    "sourceOwners": [
      "investment"
    ],
    "operatingQueues": [
      "Openrouter",
      "Tailwind.Config",
      "Page",
      "AI Helpers"
    ],
    "outputs": [
      "Investment merged workflow register",
      "Investment API and route coverage map",
      "Investment AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-wealth-management-robo-advisor": {
    "workItems": [
      {
        "id": "source-ai-wealth-management-robo-advisor-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-work-2",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-work-3",
        "item": "Batch09 Gap Nonai",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/batch09GapNonai.js"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-work-4",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/main.jsx"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-work-5",
        "item": "AI Behavioral Coaching",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AIBehavioralCoaching.jsx"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-work-6",
        "item": "AI Churn Prediction",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AIChurnPrediction.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-wealth-management-robo-advisor-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-wealth-management-robo-advisor-log-1",
        "message": "Deep-merge feature generated from AIWealthManagementRoboAdvisor",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-investment": {
    "workItems": [
      {
        "id": "source-investment-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/openrouter.py"
      },
      {
        "id": "source-investment-work-2",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for web/tailwind.config.ts"
      },
      {
        "id": "source-investment-work-3",
        "item": "Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for web/app/ai-suite/page.tsx"
      },
      {
        "id": "source-investment-work-4",
        "item": "AI Helpers",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/ai_helpers.py"
      },
      {
        "id": "source-investment-work-5",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/main.py"
      },
      {
        "id": "source-investment-work-6",
        "item": "Openrouter",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for backend/openrouter"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-investment-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-investment-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-investment-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-investment-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-investment-log-1",
        "message": "Deep-merge feature generated from investment",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-investment-log-2",
        "message": "10 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-wealth-management-robo-advisor": {
    "title": "AI Wealth Management Robo Advisor Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-wealth-management-robo-advisor-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-entity-2",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-entity-3",
        "name": "Batch09 Gap Nonai",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-entity-4",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-wealth-management-robo-advisor-entity-5",
        "name": "AI Behavioral Coaching",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-investment": {
    "title": "Investment Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-investment-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-investment-entity-2",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-investment-entity-3",
        "name": "Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-investment-entity-4",
        "name": "AI Helpers",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-investment-entity-5",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIWealthManagementRoboAdvisor": "/features/source-ai-wealth-management-robo-advisor",
  "investment": "/features/source-investment"
};
