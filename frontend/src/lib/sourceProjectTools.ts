export const sourceProjectTools = [
  {
    "id": "family-office-manager-copilot",
    "title": "Family Office Manager Copilot",
    "category": "Family Office Manager",
    "description": "Focused Family Office Manager AI tool elevated inside the current merged suite.",
    "defaultPrompt": "Review the Family Office Manager context. Return a professional summary, risks, missing evidence, next actions, and audit-ready outputs.",
    "inputLabel": "Family Office Manager context",
    "outputLabel": "Family Office Manager AI response",
    "signals": [
      "Family Office Dashboard",
      "Asset Service Calendar",
      "Family Governance Notes"
    ]
  },
  {
    "id": "vc-deal-flow-copilot-copilot",
    "title": "VC Deal Flow Copilot Copilot",
    "category": "VC Deal Flow Copilot",
    "description": "Focused VC Deal Flow Copilot AI tool elevated inside the current merged suite.",
    "defaultPrompt": "Review the VC Deal Flow Copilot context. Return a professional summary, risks, missing evidence, next actions, and audit-ready outputs.",
    "inputLabel": "VC Deal Flow Copilot context",
    "outputLabel": "VC Deal Flow Copilot AI response",
    "signals": [
      "VC Deal Flow",
      "Startup Screening",
      "Investment Memo Drafts"
    ]
  },
  {
    "id": "m-a-deal-room-copilot",
    "title": "M&A Deal Room Copilot",
    "category": "M&A Deal Room",
    "description": "Focused M&A Deal Room AI tool elevated inside the current merged suite.",
    "defaultPrompt": "Review the M&A Deal Room context. Return a professional summary, risks, missing evidence, next actions, and audit-ready outputs.",
    "inputLabel": "M&A Deal Room context",
    "outputLabel": "M&A Deal Room AI response",
    "signals": [
      "Deal Room Diligence",
      "Buyer/Seller Tracker",
      "Deal Risk Brief"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-source-workflow",
    "title": "AI Wealth Management Robo Advisor Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIWealthManagementRoboAdvisor.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIWealthManagementRoboAdvisor to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Wealth Management Robo Advisor source context",
    "outputLabel": "AI Wealth Management Robo Advisor source analysis",
    "signals": [
      "server/services/openrouter",
      "server/routes/ai",
      "server/routes/batch09GapNonai",
      "client/src/main",
      "client/src/pages/AIBehavioralCoaching",
      "client/src/pages/AIChurnPrediction",
      "client/src/pages/AIESGAnalysis",
      "client/src/pages/AIEstatePlanning"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-tools",
    "title": "AI Wealth Management Robo Advisor AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIWealthManagementRoboAdvisor.",
    "defaultPrompt": "Review AIWealthManagementRoboAdvisor AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Wealth Management Robo Advisor AI prompt or tool context",
    "outputLabel": "AI Wealth Management Robo Advisor AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/routes/ai.js",
      "server/routes/batch09GapNonai.js",
      "client/src/main.jsx",
      "client/src/pages/AIBehavioralCoaching.jsx",
      "client/src/pages/AIChurnPrediction.jsx",
      "client/src/pages/AIESGAnalysis.jsx",
      "client/src/pages/AIEstatePlanning.jsx"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-j615h1-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Age",
      "Answers",
      "Client Id",
      "Current Age",
      "Current Savings",
      "Expected Retirement Age",
      "Family Situation",
      "Goal Type"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-batch09-gap-nonai-wchrbt-exact-ai",
    "title": "AI Wealth Management Robo Advisor: Batch09 Gap Nonai",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/batch09GapNonai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Batch09 Gap Nonai\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Batch09 Gap Nonai donor inputs",
    "outputLabel": "Batch09 Gap Nonai AI response",
    "signals": [
      "server/routes/batch09GapNonai.js"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-behavioral-coaching-73ytbl-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Behavioral Coaching",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIBehavioralCoaching.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Behavioral Coaching\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Behavioral Coaching donor inputs",
    "outputLabel": "AI Behavioral Coaching AI response",
    "signals": [
      "Client Id",
      "Life Event",
      "Market Context",
      "Recent Decisions"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-churn-prediction-1tkt5x-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Churn Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIChurnPrediction.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Churn Prediction\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Churn Prediction donor inputs",
    "outputLabel": "AI Churn Prediction AI response",
    "signals": [
      "Client Id"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-aiesg-analysis-1lusls-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AIESG Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIESGAnalysis.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AIESG Analysis\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AIESG Analysis donor inputs",
    "outputLabel": "AIESG Analysis AI response",
    "signals": [
      "Preferences",
      "Symbols"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-estate-planning-1lrjga-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Estate Planning",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIEstatePlanning.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Estate Planning\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Estate Planning donor inputs",
    "outputLabel": "AI Estate Planning AI response",
    "signals": [
      "Family Situation",
      "Goals",
      "Net Worth"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-goal-planning-1eh0p3-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Goal Planning",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIGoalPlanning.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Goal Planning\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Goal Planning donor inputs",
    "outputLabel": "AI Goal Planning AI response",
    "signals": [
      "Current Savings",
      "Goal Type",
      "Target Amount",
      "Timeline"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-investment-recs-1cqg9g-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Investment Recs",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIInvestmentRecs.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Investment Recs\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Investment Recs donor inputs",
    "outputLabel": "AI Investment Recs AI response",
    "signals": [
      "Goals",
      "Investment Amount",
      "Risk Level"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-market-sentiment-1drhpg-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Market Sentiment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIMarketSentiment.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Market Sentiment\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Market Sentiment donor inputs",
    "outputLabel": "AI Market Sentiment AI response",
    "signals": [
      "Sector",
      "Symbols"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-portfolio-analysis-11n9wr-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Portfolio Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPortfolioAnalysis.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Portfolio Analysis\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Portfolio Analysis donor inputs",
    "outputLabel": "AI Portfolio Analysis AI response",
    "signals": [
      "Portfolio Id"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-rebalancing-7qmyq-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Rebalancing",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIRebalancing.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Rebalancing\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Rebalancing donor inputs",
    "outputLabel": "AI Rebalancing AI response",
    "signals": [
      "Portfolio Id"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-retirement-planning-fn6j8k-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Retirement Planning",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIRetirementPlanning.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Retirement Planning\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Retirement Planning donor inputs",
    "outputLabel": "AI Retirement Planning AI response",
    "signals": [
      "Current Age",
      "Current Savings",
      "Monthly Contribution",
      "Retirement Age",
      "Risk Tolerance"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-risk-assessment-ew666b-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Risk Assessment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIRiskAssessment.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Risk Assessment\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Risk Assessment donor inputs",
    "outputLabel": "AI Risk Assessment AI response",
    "signals": [
      "Client Id",
      "Income Stability",
      "Investment Experience",
      "Loss Tolerance",
      "Time Horizon"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-ai-tax-optimization-1makp2-exact-ai",
    "title": "AI Wealth Management Robo Advisor: AI Tax Optimization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AITaxOptimization.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tax Optimization\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tax Optimization donor inputs",
    "outputLabel": "AI Tax Optimization AI response",
    "signals": [
      "Portfolio Id",
      "State",
      "Tax Bracket"
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-compliance-audit-trail-and-reviewer-queue-gap-non-asrbs-exact-ai",
    "title": "AI Wealth Management Robo Advisor: Compliance Audit Trail And Reviewer Queue Gap Non",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/Batch09/ComplianceAuditTrailAndReviewerQueueGapNon.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Compliance Audit Trail And Reviewer Queue Gap Non\" from AIWealthManagementRoboAdvisor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Compliance Audit Trail And Reviewer Queue Gap Non donor inputs",
    "outputLabel": "Compliance Audit Trail And Reviewer Queue Gap Non AI response",
    "signals": [
      "client/src/pages/Batch09/ComplianceAuditTrailAndReviewerQueueGapNon.jsx"
    ]
  },
  {
    "id": "investment-source-workflow",
    "title": "Investment Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from investment.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from investment to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Investment source context",
    "outputLabel": "Investment source analysis",
    "signals": [
      "backend/openrouter",
      "web/tailwind.config",
      "web/app/ai-suite/page",
      "backend/ai_helpers",
      "backend/main"
    ]
  },
  {
    "id": "investment-ai-tools",
    "title": "Investment AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from investment.",
    "defaultPrompt": "Review investment AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Investment AI prompt or tool context",
    "outputLabel": "Investment AI tool response",
    "signals": [
      "backend/openrouter.py",
      "web/tailwind.config.ts",
      "web/app/ai-suite/page.tsx",
      "backend/ai_helpers.py",
      "backend/main.py"
    ]
  },
  {
    "id": "investment-page-lb0n8i-exact-ai",
    "title": "Investment: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from web/app/ai-suite/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from investment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "web/app/ai-suite/page.tsx"
    ]
  }
];
