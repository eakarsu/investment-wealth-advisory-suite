export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "family-office-manager-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Family Office Manager workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIFamilyOfficeManager"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Family Office Manager source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIFamilyOfficeManager"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIFamilyOfficeManager"
    }
  ],
  "vc-deal-flow-copilot-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the VC Deal Flow Copilot workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIVCDealFlowCopilot"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste VC Deal Flow Copilot source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIVCDealFlowCopilot"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIVCDealFlowCopilot"
    }
  ],
  "m-a-deal-room-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the M&A Deal Room workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIMandADealRoom"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste M&A Deal Room source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIMandADealRoom"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIMandADealRoom"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-j615h1-exact-ai": [
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "answers",
      "label": "Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expected_retirement_age",
      "label": "Expected Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_situation",
      "label": "Family Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goal_type",
      "label": "Goal Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "holding_periods",
      "label": "Holding Periods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "income",
      "label": "Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "investment_amount",
      "label": "Investment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "life_event",
      "label": "Life Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "market_context",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthly_expenses",
      "label": "Monthly Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "questionnaire_responses",
      "label": "Questionnaire Responses",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_decisions",
      "label": "Recent Decisions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "social_security_estimate",
      "label": "Social Security Estimate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symbols",
      "label": "Symbols",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "target_allocation",
      "label": "Target Allocation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "target_amount",
      "label": "Target Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tax_bracket",
      "label": "Tax Bracket",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-wealth-management-robo-advisor-batch09-gap-nonai-wchrbt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap Nonai source input context",
      "options": [],
      "required": false,
      "source": "server/routes/batch09GapNonai.js"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-behavioral-coaching-73ytbl-exact-ai": [
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIBehavioralCoaching.jsx"
    },
    {
      "name": "life_event",
      "label": "Life Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIBehavioralCoaching.jsx"
    },
    {
      "name": "market_context",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIBehavioralCoaching.jsx"
    },
    {
      "name": "recent_decisions",
      "label": "Recent Decisions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIBehavioralCoaching.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-churn-prediction-1tkt5x-exact-ai": [
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIChurnPrediction.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-aiesg-analysis-1lusls-exact-ai": [
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIESGAnalysis.jsx"
    },
    {
      "name": "symbols",
      "label": "Symbols",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIESGAnalysis.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-estate-planning-1lrjga-exact-ai": [
    {
      "name": "family_situation",
      "label": "Family Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIEstatePlanning.jsx"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIEstatePlanning.jsx"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIEstatePlanning.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-goal-planning-1eh0p3-exact-ai": [
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIGoalPlanning.jsx"
    },
    {
      "name": "goal_type",
      "label": "Goal Type",
      "type": "text",
      "defaultValue": "retirement",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIGoalPlanning.jsx"
    },
    {
      "name": "target_amount",
      "label": "Target Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIGoalPlanning.jsx"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIGoalPlanning.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-investment-recs-1cqg9g-exact-ai": [
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIInvestmentRecs.jsx"
    },
    {
      "name": "investment_amount",
      "label": "Investment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIInvestmentRecs.jsx"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIInvestmentRecs.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-market-sentiment-1drhpg-exact-ai": [
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIMarketSentiment.jsx"
    },
    {
      "name": "symbols",
      "label": "Symbols",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIMarketSentiment.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-portfolio-analysis-11n9wr-exact-ai": [
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPortfolioAnalysis.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-rebalancing-7qmyq-exact-ai": [
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRebalancing.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-retirement-planning-fn6j8k-exact-ai": [
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRetirementPlanning.jsx"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRetirementPlanning.jsx"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRetirementPlanning.jsx"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRetirementPlanning.jsx"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRetirementPlanning.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-risk-assessment-ew666b-exact-ai": [
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "income_stability",
      "label": "Income Stability",
      "type": "text",
      "defaultValue": "stable",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "investment_experience",
      "label": "Investment Experience",
      "type": "text",
      "defaultValue": "beginner",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "loss_tolerance",
      "label": "Loss Tolerance",
      "type": "text",
      "defaultValue": "5-10%",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "5-10 years",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-tax-optimization-1makp2-exact-ai": [
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITaxOptimization.jsx"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITaxOptimization.jsx"
    },
    {
      "name": "tax_bracket",
      "label": "Tax Bracket",
      "type": "text",
      "defaultValue": "22%",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITaxOptimization.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-compliance-audit-trail-and-reviewer-queue-gap-non-asrbs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Compliance Audit Trail And Reviewer Queue Gap Non source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/Batch09/ComplianceAuditTrailAndReviewerQueueGapNon.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-source-workflow": [
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "answers",
      "label": "Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expected_retirement_age",
      "label": "Expected Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_situation",
      "label": "Family Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goal_type",
      "label": "Goal Type",
      "type": "text",
      "defaultValue": "retirement",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "holding_periods",
      "label": "Holding Periods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "income",
      "label": "Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "investment_amount",
      "label": "Investment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "life_event",
      "label": "Life Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "market_context",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthly_expenses",
      "label": "Monthly Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "questionnaire_responses",
      "label": "Questionnaire Responses",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_decisions",
      "label": "Recent Decisions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "social_security_estimate",
      "label": "Social Security Estimate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symbols",
      "label": "Symbols",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "target_allocation",
      "label": "Target Allocation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "target_amount",
      "label": "Target Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tax_bracket",
      "label": "Tax Bracket",
      "type": "text",
      "defaultValue": "22%",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap Nonai source input context",
      "options": [],
      "required": false,
      "source": "server/routes/batch09GapNonai.js"
    },
    {
      "name": "income_stability",
      "label": "Income Stability",
      "type": "text",
      "defaultValue": "stable",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "investment_experience",
      "label": "Investment Experience",
      "type": "text",
      "defaultValue": "beginner",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "loss_tolerance",
      "label": "Loss Tolerance",
      "type": "text",
      "defaultValue": "5-10%",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "5-10 years",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    }
  ],
  "ai-wealth-management-robo-advisor-ai-tools": [
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "answers",
      "label": "Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expected_retirement_age",
      "label": "Expected Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_situation",
      "label": "Family Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goal_type",
      "label": "Goal Type",
      "type": "text",
      "defaultValue": "retirement",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "holding_periods",
      "label": "Holding Periods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "income",
      "label": "Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "investment_amount",
      "label": "Investment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "life_event",
      "label": "Life Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "market_context",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthly_expenses",
      "label": "Monthly Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "questionnaire_responses",
      "label": "Questionnaire Responses",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_decisions",
      "label": "Recent Decisions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "social_security_estimate",
      "label": "Social Security Estimate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symbols",
      "label": "Symbols",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "target_allocation",
      "label": "Target Allocation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "target_amount",
      "label": "Target Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tax_bracket",
      "label": "Tax Bracket",
      "type": "text",
      "defaultValue": "22%",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap Nonai source input context",
      "options": [],
      "required": false,
      "source": "server/routes/batch09GapNonai.js"
    },
    {
      "name": "income_stability",
      "label": "Income Stability",
      "type": "text",
      "defaultValue": "stable",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "investment_experience",
      "label": "Investment Experience",
      "type": "text",
      "defaultValue": "beginner",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "loss_tolerance",
      "label": "Loss Tolerance",
      "type": "text",
      "defaultValue": "5-10%",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "5-10 years",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRiskAssessment.jsx"
    }
  ],
  "investment-page-lb0n8i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "web/app/ai-suite/page.tsx"
    }
  ],
  "investment-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "web/app/ai-suite/page.tsx"
    }
  ],
  "investment-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "web/app/ai-suite/page.tsx"
    }
  ]
};
