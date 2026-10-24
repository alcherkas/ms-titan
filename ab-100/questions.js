// AB-100 practice question bank. Original questions written against the official
// skills outline (as of 2026-11-16) and cited Microsoft Learn docs.
//
// Fields: id, domain (key of DOMAINS), type ("single" | "multi"), q, options,
// answer (array of option indexes), explain, src (URL).
window.DOMAINS = {
  plan: { name: "Plan AI-powered business solutions", weight: "35-40%" },
  design: { name: "Design AI-powered business solutions", weight: "30-35%" },
  deploy: { name: "Deploy AI-powered business solutions", weight: "20-25%" }
};

const SRC = {
  businessStrategyPlan: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan",
  conceptDataAgent: "https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent",
  optimizationSharepoint: "https://learn.microsoft.com/en-us/microsoft-365/copilot/employee-self-service/optimization-sharepoint",
  getReadyCopilotSharepointAdvancedManagement: "https://learn.microsoft.com/en-us/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management",
  knowledgeGraphVsPowerPlatformConnectors: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-graph-vs-power-platform-connectors",
  dataArchitecturePlan: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/data-architecture-plan",
  plan: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/plan",
  strategy: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy",
  technologySolutionsPlanStrategy: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/technology-solutions-plan-strategy",
  multiAgentPatterns: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/multi-agent-patterns",
  singleAgentMultipleAgents: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/single-agent-multiple-agents",
  aiGetStarted: "https://learn.microsoft.com/en-us/dynamics365/copilot/ai-get-started",
  adminDataLossPrevention: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention",
  guardrailsOverview: "https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview",
  knowledgeCopilotStudio: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio",
  agentsOverview: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview",
  modelTypes: "https://learn.microsoft.com/en-us/ai-builder/model-types",
  organizationalPrompts: "https://learn.microsoft.com/en-us/microsoft-365/copilot/organizational-prompts",
  whatIsFoundryLocal: "https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local",
  overview: "https://learn.microsoft.com/en-us/azure/foundry/fine-tuning/overview",
  promptEngineering: "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering",
  centerOfExcellence: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/center-of-excellence",
  costConsiderations: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/cost-considerations",
  agentBusinessValueMeasureImpact: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-business-value-measure-impact",
  agentBusinessValueDefineValue: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-business-value-define-value",
  modelRouter: "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router",
  extendCopilotChat: "https://learn.microsoft.com/en-us/dynamics365/sales/extend-copilot-chat",
  copilotMapCustomFields: "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/copilot-map-custom-fields",
  customConnectorAction: "https://learn.microsoft.com/en-us/microsoft-sales-copilot/custom-connector-action",
  configureBotVirtualAgent: "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-bot-virtual-agent",
  advancedGenerativeActions: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions",
  autonomousAgents: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/autonomous-agents",
  authoringSystemTopics: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics",
  choosingRightAiTool: "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/choosing-right-ai-tool",
  generativePages: "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-pages",
  addAgentsToApp: "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/add-agents-to-app",
  authoringSystemFallbackTopic: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic",
  groundingDataDesign: "https://learn.microsoft.com/en-us/azure/well-architected/ai/grounding-data-design",
  powerfxInPowerapps: "https://learn.microsoft.com/en-us/ai-builder/powerfx-in-powerapps",
  conversationDesign: "https://learn.microsoft.com/en-us/power-platform/well-architected/experience-optimization/conversation-design",
  languageUnderstanding: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/language-understanding",
  flowsOverview: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview",
  nluPromptNode: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-prompt-node",
  bringYourOwnModelPrompts: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/bring-your-own-model-prompts",
  extensibilityAgentsOverview: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview",
  addToolsCustomAgent: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent",
  agentExtendActionMcp: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp",
  computerUse: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use",
  authoringSelectAgentModel: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-select-agent-model",
  voiceOverview: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-overview",
  copilotStudioExperience: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-experience",
  copilotForFinanceOperations: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/copilot/copilot-for-finance-operations",
  configureCopilotFeatures: "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-copilot-features",
  researcherAgent: "https://learn.microsoft.com/en-us/microsoft-365/copilot/researcher-agent",
  setUpSalesChat: "https://learn.microsoft.com/en-us/microsoft-sales-copilot/set-up-sales-chat",
  tutorialAgentKnowledge: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/tutorial-agent-knowledge",
  extendCopilotGenerativeHelp: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/extend-copilot-generative-help",
  advancedBotFrameworkComposerCaptureTelemetry: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry",
  analyticsImproveAgentEffectiveness: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness",
  traceAgentConcept: "https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept",
  analyticsAgentEvaluationOverview: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-overview",
  predictionPerformance: "https://learn.microsoft.com/en-us/ai-builder/prediction-performance",
  p3ReviewPromptingBestPractices: "https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/3-review-prompting-best-practices",
  testingStrategyTestTypes: "https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/testing-strategy-test-types",
  manageConfigurationData: "https://learn.microsoft.com/en-us/power-platform/admin/manage-configuration-data",
  alm: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/alm",
  buildSecureProcess: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/build-secure-process",
  distributeModel: "https://learn.microsoft.com/en-us/ai-builder/distribute-model",
  enableCopilot: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot",
  migrateChannelConfigUsingSolutions: "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/migrate-channel-config-using-solutions",
  configureEntraId: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-entra-id",
  jailbreakDetection: "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection",
  responsibleUseOfAiOverview: "https://learn.microsoft.com/en-us/azure/foundry/responsible-use-of-ai-overview",
  deploymentTypes: "https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/deployment-types",
  searchDocumentLevelAccessOverview: "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview",
  securityAndGovernance: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance",
  analyticsAgentEvaluationCreate: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create",
  governanceSecurityAcrossOrganization: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/governance-security-across-organization"
};

window.QUESTIONS = [
  {
    id: "pl01", domain: "plan", type: "single",
    q: "A finance operations team at Contoso is choosing the first process to automate with an AI agent. The architect applies the Cloud Adoption Framework guidance on when agents add value and when simpler approaches are better. Which candidate process is the best fit for an AI agent?",
    options: [
      "Copying the previous day's ledger entries from one database to another on a nightly schedule",
      "Processing expense claims by reading receipts, checking policy rules, calling an approval API, and updating finance systems",
      "Calculating monthly payroll deductions by applying fixed tax tables and rules that never vary by case",
      "Answering employee questions by summarizing a fixed set of published finance policy documents"
    ],
    answer: [1],
    explain: "Agents fit work that needs multistep decisions and calls several tools or systems in a flexible order, which is exactly the expense-processing example in the guidance. Payroll deductions and the nightly ledger copy are structured, predictable tasks that regular code or nongenerative AI handles faster, cheaper, and more reliably. Summarizing a fixed set of documents is static knowledge retrieval, where a classic RAG approach is enough and an agent is unnecessary.",
    src: SRC.businessStrategyPlan
  },
  {
    id: "pl02", domain: "plan", type: "single",
    q: "Fabrikam keeps its sales data in a Fabric lakehouse and a Power BI semantic model in OneLake. Sales leaders want to ask plain-language analytical questions and get answers computed by queries against that governed data, using their own permissions. The solution must not be able to modify data, and leaders want to use it from Microsoft 365 Copilot. What should the architect recommend?",
    options: [
      "Create a Fabric data agent that uses the lakehouse and the semantic model as its data sources",
      "Use a Copilot connector to copy and index the lakehouse tables into Microsoft Graph",
      "Enable the Dataverse MCP server and have agents run its read_query tool",
      "Have sales leaders use Copilot in Fabric notebooks to generate the queries they need"
    ],
    answer: [0],
    explain: "A Fabric data agent turns questions into SQL for lakehouses and DAX for semantic models, uses the requesting user's permissions, is read-only, and can be surfaced in Microsoft 365 Copilot. A Copilot connector copies content into a search index and does not generate analytical queries against the tables. Copilot in Fabric helps with tasks inside Fabric such as writing notebook code and is not a standalone agent for business users. The Dataverse MCP server works on Dataverse tables, not on data stored in OneLake.",
    src: SRC.conceptDataAgent
  },
  {
    id: "pl03", domain: "plan", type: "multi",
    q: "Northwind's Employee Self-Service agent is grounded on an HR SharePoint library. Employees report that the agent sometimes cites an older version of the travel policy. A review shows that the library holds drafts, superseded copies, and duplicate uploads of the same policies. Which actions should the architect recommend to make the grounding data accurate and current?",
    options: [
      "Archive or delete duplicated and outdated documents so that one authoritative copy remains",
      "Add every departmental SharePoint site as an extra knowledge source to widen coverage",
      "Convert the policy pages into large tables so that the agent can parse them more easily",
      "Enable versioning with approval so that only the latest approved version is visible to users",
      "Turn on Restricted Content Discovery for the HR site so that drafts are hidden from the agent"
    ],
    answer: [0, 3],
    explain: "Versioning with approval keeps drafts hidden and shows only the latest approved version. Archiving or deleting duplicates and outdated documents leaves one authoritative copy for the agent to ground on. Restricted Content Discovery would keep the whole HR site out of Copilot and agent experiences, including the current policies. Adding unrelated sites adds noise when knowledge sources should be small and accurate. The guidance says to use tables sparingly because models work best with well-structured text.",
    src: SRC.optimizationSharepoint
  },
  {
    id: "pl04", domain: "plan", type: "single",
    q: "Tailwind Traders has hundreds of inactive SharePoint sites from closed projects. Compliance requires the company to keep the content, permissions, and metadata, but nobody needs day-to-day access to these sites. The architect wants Copilot and agents to work from current content only, and wants to reduce active SharePoint storage consumption. What should the architect recommend?",
    options: [
      "Apply Restricted Access Control so that each site is limited to a security group",
      "Apply Restricted Content Discovery to each closed-project site",
      "Delete the sites after exporting a site permissions baseline report",
      "Move the sites to Microsoft 365 Archive"
    ],
    answer: [3],
    explain: "Microsoft 365 Archive keeps content, permissions, and metadata, removes the sites from active storage quota, and Copilot isn't trained on archived content. Restricted Content Discovery hides sites from Copilot but leaves them in active storage, and it is meant for content that must stay accessible. Restricted Access Control only limits who can open a site, so its members still get its content in Copilot and storage stays the same. Deleting the sites breaks the requirement to keep the content.",
    src: SRC.getReadyCopilotSharepointAdvancedManagement
  },
  {
    id: "pl05", domain: "plan", type: "single",
    q: "An IT organization keeps thousands of knowledge base articles in ServiceNow. It wants Microsoft 365 Copilot, Microsoft Search, and several Copilot Studio agents to ground answers in these articles with citations, and to respect the source access controls. It doesn't want to build a separate integration for each agent. What should the architect recommend?",
    options: [
      "Copy the articles into a Dataverse table and turn on the Dataverse MCP server for the environment",
      "Add a ServiceNow Power Platform connector as a tool in each Copilot Studio agent",
      "Export the articles and upload them as files to the knowledge of each Copilot Studio agent",
      "Set up the ServiceNow Copilot connector in the Microsoft 365 admin center to index the articles into Microsoft Graph"
    ],
    answer: [3],
    explain: "A Copilot connector indexes external content into Microsoft Graph once and respects source access control lists. That content can then ground Microsoft 365 Copilot and custom agents with citations, and it also appears in Microsoft Search. A Power Platform connector tool is a live API bridge that each agent configures separately, and it doesn't make the content available in Microsoft Search. Uploading files to each agent and copying the articles into Dataverse both drop the ServiceNow access controls, and neither makes the articles available in Microsoft Search.",
    src: SRC.knowledgeGraphVsPowerPlatformConnectors
  },
  {
    id: "pl06", domain: "plan", type: "single",
    q: "A manufacturer's sales, supply chain, and finance business units each keep their data in separate systems. The architect must make this business data available as one trusted, governed foundation that Microsoft Foundry agents, Copilot Studio agents, and analytics workloads can all use. What should the architect recommend?",
    options: [
      "Have each business unit upload periodic data extracts as files to the agents that need them",
      "Move the business data into SharePoint libraries so that agents can reach it through Microsoft Graph",
      "Have each agent team build custom connections directly to every source system",
      "Have data domains publish governed data products in Microsoft Fabric OneLake for agents to use"
    ],
    answer: [3],
    explain: "The Cloud Adoption Framework recommends a unified platform in which data domains publish governed data products in OneLake. Agents then use those products through Fabric IQ, Foundry IQ, and Copilot Studio, which preserves governance and security boundaries. Uploading extracts to each agent and building custom connections per team both produce the fragmented, ungoverned data that the guidance warns leads to misleading results. SharePoint and Microsoft 365 are meant for collaboration, reference, and organizational knowledge, not for the shared business data foundation used for analytics.",
    src: SRC.dataArchitecturePlan
  },
  {
    id: "pl07", domain: "plan", type: "single",
    q: "A retail chain is working through the AI planning step of the Cloud Adoption Framework. One candidate use case is helping store managers draft weekly staff communications and prepare for meetings inside Outlook and Word, which they already use every day. How should the architect classify this use case to guide the later technology choice?",
    options: [
      "As a nongenerative AI use case, because the same input should always produce the same output",
      "As an individual work use case that aligns strongly to generative AI solutions such as Microsoft 365 Copilot",
      "As a business automation use case that requires bring-your-own models on Azure Virtual Machines",
      "As a business automation use case that requires a custom machine learning model in Azure Machine Learning"
    ],
    answer: [1],
    explain: "The CAF planning guidance classifies use cases that improve how individuals or teams work inside existing tools, such as writing assistance or meeting preparation, as individual work, which aligns strongly to Microsoft 365 Copilot. Business automation use cases change how the organization operates, such as customer routing or demand forecasting, so neither the Azure Machine Learning option nor the Virtual Machines option fits. Drafting content is unstructured and tolerates variation, so it is not a deterministic nongenerative AI case.",
    src: SRC.plan
  },
  {
    id: "pl08", domain: "plan", type: "single",
    q: "An insurance company has assessed its AI maturity and ranked its AI use cases by strategic value and feasibility. Leadership now wants a first proof of concept that validates the approach while limiting risk, as recommended by the Cloud Adoption Framework. Which use case should the architect select?",
    options: [
      "A use case that needs a maturity level well above the current assessment, to accelerate skills growth",
      "Every prioritized use case at the same time, so the results can be compared in parallel",
      "A high-value internal, non-customer-facing use case that matches the organization's current AI maturity level",
      "The most technically complex customer-facing use case, to prove the platform can handle the hardest scenario"
    ],
    answer: [2],
    explain: "CAF recommends choosing a high-value project from the prioritized list that matches the current AI maturity level and starting with internal, non-customer-facing projects to limit risk. A complex customer-facing use case increases risk instead of limiting it. A use case beyond current maturity is exactly the overcommitment CAF warns against, and running every use case at once is not a focused proof of concept.",
    src: SRC.plan
  },
  {
    id: "pl09", domain: "plan", type: "single",
    q: "A manufacturer wants agents that automate purchase-request intake. Business analysts will build and maintain the agents with low-code tools, and a Copilot Studio prototype already meets every functional requirement. An IT lead proposes hosting an open-source model on Azure Virtual Machines to get maximum control. What should the architect recommend?",
    options: [
      "Use Azure Kubernetes Service, because greater customization reduces the organization's operational ownership",
      "Use Azure Virtual Machines, because Azure infrastructure is the default starting point for AI adoption",
      "Use Copilot Studio, because the organization should approve the solution that meets its requirements with the least operational responsibility",
      "Train a custom model in Azure Machine Learning, because agents need models trained on company data"
    ],
    answer: [2],
    explain: "CAF says organizations should approve the solution that meets their requirements with the least operational responsibility, and Copilot Studio already meets the requirements. CAF also states Azure infrastructure shouldn't be the default approach, and greater customization requires more operational ownership, not less. Nothing in the scenario requires training a custom model, so Azure Machine Learning adds effort without need.",
    src: SRC.strategy
  },
  {
    id: "pl10", domain: "plan", type: "single",
    q: "A logistics company has confirmed that no ready-to-use SaaS agent covers its shipment exception process, so it must build a custom agent. The architects can't agree whether to use Copilot Studio or Microsoft Foundry. According to the Cloud Adoption Framework technology plan for agents, what should the architect do next?",
    options: [
      "Run short time-boxed prototypes on each candidate platform and compare development speed, functional coverage, and integration complexity",
      "Select GPUs and containers, because self-hosted infrastructure removes the need to compare platforms",
      "Build the full production solution on both platforms in parallel and retire one of them after go-live",
      "Select Microsoft Foundry immediately, because pro-code platforms always deliver more value than low-code platforms"
    ],
    answer: [0],
    explain: "CAF recommends time-boxed experiments that build short prototypes on each candidate platform, comparing Copilot Studio and Foundry on development speed, functional coverage, and integration complexity. It doesn't claim pro-code always wins, and building two full production solutions is the opposite of a short experiment. GPUs and containers are a third option for highly customized workloads and don't remove the need to validate platform fit.",
    src: SRC.technologySolutionsPlanStrategy
  },
  {
    id: "pl11", domain: "plan", type: "single",
    q: "Contoso is building an employee help agent in Copilot Studio. It also needs a pricing capability that the Sales team owns. The pricing capability has its own tools and knowledge, needs different access controls from the help agent, and will be reused by several other agents. How should the architect implement the pricing capability?",
    options: [
      "By describing pricing rules in the help agent's instructions so it answers from the model's general knowledge",
      "As an inline child agent topic inside the help agent, so it shares the help agent's context",
      "By copying the Sales team's tools and knowledge sources into the help agent and ending separate ownership",
      "As a connected agent with its own orchestration, tools, and knowledge that the help agent delegates to"
    ],
    answer: [3],
    explain: "Connected agents are separate agents with their own orchestration, tools, and knowledge, and Copilot Studio guidance recommends a separate agent when a subtask has its own tools or knowledge, needs different access controls, or is reused by many main agents. An inline child agent lives inside the main agent and shares its context, so it can't provide separate governance. Copying the tools into the help agent removes the required access boundary, and answering from general knowledge drops the Sales team's tools and data altogether.",
    src: SRC.multiAgentPatterns
  },
  {
    id: "pl12", domain: "plan", type: "multi",
    q: "A bank is designing an agentic loan-processing solution. The architect must decide whether to start with a multi-agent system or first test a single agent, following the Cloud Adoption Framework. Which conditions justify starting with a multi-agent system?",
    options: [
      "The process involves distinct roles such as planner, reviewer, and executor",
      "Regulations require strict data isolation and separation of duties between the agent that prepares transactions and the one that validates them",
      "Getting a first version to market quickly is the top priority",
      "Separate underwriting and fraud teams own different knowledge areas and release on independent development cycles",
      "Keeping token usage and API costs low is a priority"
    ],
    answer: [1, 3],
    explain: "CAF says to start with a multi-agent system when the use case crosses security and compliance boundaries, involves multiple teams, or has planned future growth. Regulated data isolation with separation of duties, and separate teams owning separate knowledge areas, both meet those criteria. CAF says distinct roles don't automatically justify multiple agents, and rapid time-to-market and low cost both point to testing a single agent first.",
    src: SRC.singleAgentMultipleAgents
  },
  {
    id: "pl13", domain: "plan", type: "single",
    q: "In Copilot Studio, a parent agent orchestrates an HR subagent and an IT subagent. During testing, users get duplicate and partial answers because the subagents and the parent all post messages to the user in the same turn. The design calls for the parent to deliver every final answer. What should the architect change?",
    options: [
      "Give both subagents access to the same SharePoint sites so that their answers stay consistent",
      "Rewrite the subagent instructions in soft language, such as asking them to please try not to message the user",
      "Give both subagents the same generic description so the parent can route to either one",
      "State in the parent's instructions that it alone responds to the user, and tell each subagent not to reply to the user directly"
    ],
    answer: [3],
    explain: "Copilot Studio multi-agent guidance says only one agent should talk to the user per turn: the parent delivers the final response, and every subagent is told it is a subagent that must not reply directly. Sharing the same knowledge sources is a documented anti-pattern that produces duplicate results. Soft, polite phrasing loses priority against platform instructions, and identical generic descriptions prevent the parent from routing correctly.",
    src: SRC.multiAgentPatterns
  },
  {
    id: "pl14", domain: "plan", type: "single",
    q: "A professional services firm has Microsoft 365 Copilot licenses for all consultants. Consultants want an agent that synthesizes information from their Microsoft 365 data into research summaries. A developer proposes building a custom agent in Microsoft Foundry right away. According to the Cloud Adoption Framework agent decision tree, what should the architect do first?",
    options: [
      "Build the custom agent in Microsoft Foundry, because prebuilt agents can't use Microsoft 365 data",
      "Train a custom model in Azure Machine Learning on the consultants' documents before choosing an agent",
      "Host an open-source model on GPU-backed containers, because SaaS agents offer no customization",
      "Check whether a prebuilt agent in Microsoft 365 Copilot, such as Researcher, meets the functional requirements, and adopt it if it does"
    ],
    answer: [3],
    explain: "The CAF agent decision tree starts by asking whether a SaaS agent meets the functional requirements, and if one does, the organization adopts the prebuilt solution. CAF lists Researcher among the Microsoft 365 Copilot agents that synthesize information from Microsoft 365 data, so the claim that prebuilt agents can't use that data is false. GPU-backed containers and custom model training are build options that apply only when no SaaS agent fits.",
    src: SRC.technologySolutionsPlanStrategy
  },
  {
    id: "pl15", domain: "plan", type: "single",
    q: "A utility company uses Dynamics 365 Customer Service. Service representatives spend much of their time manually filling in case details as they create, update, resolve, and close cases. The company wants a prebuilt agent that reduces this effort. Which agent should the architect include in the solution?",
    options: [
      "Quality Evaluation Agent",
      "Customer Knowledge Management Agent",
      "Case Management Agent",
      "Customer Intent Agent"
    ],
    answer: [2],
    explain: "The Case Management Agent automates the case lifecycle, including create, update, resolve, and close, so representatives spend less time filling in case details manually. The Customer Knowledge Management Agent creates and manages knowledge articles from closed cases. The Quality Evaluation Agent assesses customer interactions, and the Customer Intent Agent identifies common customer intents. None of those three automates case data entry.",
    src: SRC.aiGetStarted
  },
  {
    id: "pl16", domain: "plan", type: "single",
    q: "A healthcare provider's security policy says no Copilot Studio agent may be published so that anyone with the link can chat with it without signing in. Agent makers must be technically prevented from selecting the No authentication option. Which constraint should the Power Platform administrator configure?",
    options: [
      "A data policy that blocks the Microsoft Copilot Studio connector",
      "A data policy that blocks the HTTP connector",
      "A data policy that blocks the Chat without Microsoft Entra ID authentication in Copilot Studio connector",
      "An agent content moderation level set to Highest in the Generative AI settings"
    ],
    answer: [2],
    explain: "Copilot Studio documents that blocking the Chat without Microsoft Entra ID authentication in Copilot Studio connector in a data policy prevents makers from publishing agents that don't require authentication. Blocking the HTTP connector stops HTTP request nodes, and blocking the Microsoft Copilot Studio connector stops event triggers. Content moderation filters harmful content and has no effect on authentication.",
    src: SRC.adminDataLossPrevention
  },
  {
    id: "pl17", domain: "plan", type: "single",
    q: "A media company is designing a research tool on a model sold by Azure that it deploys in Microsoft Foundry. The research team wants harmful-content filtering turned off for model outputs. Which constraint must the architect include in the solution plan?",
    options: [
      "Apply for modified guardrails, because only approved customers can turn off content harm filtering for outputs",
      "Set the output blocking level to High, which is the least restrictive level",
      "Turn off the output filters in a custom guardrail, because every customer can disable output filtering",
      "Skip guardrails entirely, because guardrails apply only to agents and never to model deployments"
    ],
    answer: [0],
    explain: "For models sold by Azure, only customers approved for modified guardrails can turn off content filtering for outputs, so the plan must include that approval. High is the most restrictive blocking level, not the least. Every customer can turn off content harm filtering for inputs, but not for outputs. Guardrails apply to model deployments as well as agents, and models get the Microsoft.DefaultV2 guardrail by default.",
    src: SRC.guardrailsOverview
  },
  {
    id: "pl18", domain: "plan", type: "single",
    q: "A pharmacy chain is building a Copilot Studio agent with generative orchestration. Compliance requires the agent to block any response in a turn where it didn't use a knowledge source or tool, so that it never answers only from the model's general knowledge. Which setting should the architect specify?",
    options: [
      "Turn off Allow ungrounded responses",
      "Turn on Use information from the web",
      "Mark the policy knowledge source as an official source",
      "Turn on Tenant graph grounding with semantic search"
    ],
    answer: [0],
    explain: "When Allow ungrounded responses is turned off, the agent blocks any response from a turn where it didn't use a knowledge source or tool, and the fallback topic triggers. Use information from the web adds Bing web results, which broadens what the agent can answer from. Official sources aren't compatible with generative orchestration, and tenant graph grounding improves retrieval quality without blocking ungrounded answers.",
    src: SRC.knowledgeCopilotStudio
  },
  {
    id: "pl19", domain: "plan", type: "single",
    q: "An HR team is grounding a Copilot Studio agent in SharePoint sites. Some documents on those sites are restricted to HR managers. Leadership worries that regular employees could get answers drawn from restricted documents. How should the architect explain the agent's behavior?",
    options: [
      "SharePoint permissions are ignored unless the documents are first uploaded to Dataverse as files",
      "SharePoint knowledge uses the maker's permissions, so every user can get answers from any document the maker can open",
      "SharePoint knowledge requires no authentication, so restricted documents must be removed from the sites first",
      "SharePoint knowledge uses the agent user's Microsoft Entra ID authentication, so the agent surfaces only content that the asking user can access"
    ],
    answer: [3],
    explain: "Copilot Studio lists the agent user's Microsoft Entra ID authentication for SharePoint knowledge, which means the agent surfaces only content that the specific user can access. The agent doesn't answer with the maker's permissions. SharePoint is listed as requiring authentication, not none, and uploading files to Dataverse isn't needed to enforce SharePoint permissions.",
    src: SRC.knowledgeCopilotStudio
  },
  {
    id: "pl20", domain: "plan", type: "single",
    q: "An insurer wants an agent in Microsoft 365 Copilot and Teams that messages claims adjusters proactively when a claim's status changes, with no user prompt. The agent must also use the insurer's own domain-specific language model. Which approach should the architect choose?",
    options: [
      "A declarative agent built in Agent Builder that uses Copilot's orchestrator and models",
      "A custom engine agent that brings its own orchestration and models",
      "An organizational prompt published to Microsoft 365 Copilot Chat",
      "A declarative agent built with Microsoft 365 Agents Toolkit that adds custom instructions and actions"
    ],
    answer: [1],
    explain: "Custom engine agents support proactive messaging without user interaction and let you use your own or domain-specific models. Declarative agents, whether built in Agent Builder or with Agents Toolkit, are limited to Copilot's orchestrator and models and rely on user-initiated interactions. An organizational prompt is a reusable prompt for users, not an agent that can act on events.",
    src: SRC.agentsOverview
  },
  {
    id: "pl21", domain: "plan", type: "multi",
    q: "An IT department wants a helpdesk agent that employees invoke with @mentions in Teams. The team wants a fast low-code build and no hosting infrastructure to manage, and the security office wants the agent to stay within Microsoft 365's existing compliance boundary. The architect recommends a declarative agent. Which characteristics of declarative agents support this recommendation?",
    options: [
      "They can trigger actions proactively without any user input",
      "They can be published to channels outside Microsoft 365",
      "They inherit the Microsoft 365 security, compliance, and Responsible AI standards",
      "They let the team bring its own fine-tuned language model",
      "They use Copilot's orchestrator and foundation model, so no additional hosting is required"
    ],
    answer: [2, 4],
    explain: "Declarative agents run on Copilot's orchestrator and foundation model, so they need no additional hosting, and because they use Copilot's AI infrastructure they adhere to Microsoft 365 security, compliance, and Responsible AI requirements. Proactive interactions, bringing your own models, and availability outside Microsoft 365 are all characteristics of custom engine agents, not declarative agents.",
    src: SRC.agentsOverview
  },
  {
    id: "pl22", domain: "plan", type: "single",
    q: "A distributor is building a Power Platform solution to automate inventory taking. The solution must recognize and count the company's own products in photos of warehouse shelves. Which approach should the architect specify?",
    options: [
      "Build, train, and publish a custom object detection model by using images of the company's own products",
      "Use the prebuilt receipt processing model and map product names to receipt fields",
      "Use the prebuilt text recognition model, because prebuilt models need no training",
      "Use the prebuilt invoice processing model and extract SKUs from supplier invoices"
    ],
    answer: [0],
    explain: "AI Builder guidance says to use custom models for data that's unique to your business, and it lists object detection, a custom model type, for automating inventory taking. Text recognition reads text, not product objects in images. The receipt and invoice processing models handle common business documents and can't detect products on shelves.",
    src: SRC.modelTypes
  },
  {
    id: "pl23", domain: "plan", type: "single",
    q: "A company keeps a spreadsheet of vetted Copilot prompts for its departments. It wants an admin-managed prompt library that every user can see in Microsoft Copilot Chat, with filters by department and task type, typeahead suggestions, and adoption analytics for each prompt. What should the architect recommend?",
    options: [
      "Store the spreadsheet in SharePoint and add it as a knowledge source to a Copilot Studio agent",
      "Publish the prompts as organizational prompts in the Microsoft 365 admin center by using bulk import",
      "Ask each user to save the prompts under Your Prompts in Prompt Gallery",
      "Paste all of the prompts into the instructions of a declarative agent"
    ],
    answer: [1],
    explain: "Organizational prompts are created and published by admins in the Microsoft 365 admin center. Users can filter them by task type and department in the prompt lab and get them as typeahead suggestions, admins get per-prompt analytics, and bulk import is designed for migrating a prompt library spreadsheet. Your Prompts in Prompt Gallery is a personal collection, not an admin-managed library. Agent instructions and a knowledge source don't present prompts to users as a filterable library.",
    src: SRC.organizationalPrompts
  },
  {
    id: "pl24", domain: "plan", type: "single",
    q: "An energy company's field inspectors use laptops at remote sites that often have no network connectivity. They want AI summaries of their inspection notes, and the notes are sensitive and must never leave the device. Which approach should the architect recommend?",
    options: [
      "Embed a small model in the inspection app by using Foundry Local so that inference runs on the device",
      "Build a hosted agent in Foundry Agent Service and call it from the laptops",
      "Deploy a small model to Azure Container Apps with serverless GPU support",
      "Build a Copilot Studio agent that has Use information from the web turned on"
    ],
    answer: [0],
    explain: "Foundry Local runs small, optimized models entirely on the user's device, so the app works offline and the data never leaves the device. A hosted agent in Foundry Agent Service and a model on Azure Container Apps both run in the cloud, so they need connectivity and send the notes off the device. A Copilot Studio agent with web search also needs connectivity and adds public web results.",
    src: SRC.whatIsFoundryLocal
  },
  {
    id: "pl25", domain: "plan", type: "single",
    q: "A telecom company classifies support tickets with a large model in Microsoft Foundry. Accuracy is good, but at production volume the per-request cost and latency are too high. The team has high-quality, task-specific examples. Which approach should the architect recommend?",
    options: [
      "Add many more few-shot examples to every prompt sent to the large model",
      "Fine-tune a smaller model on teacher-generated examples, then compare it with the baseline on held-out data",
      "Fine-tune the model on daily product price lists so that it no longer needs retrieval for current prices",
      "Train a new model from scratch on Azure Virtual Machines"
    ],
    answer: [1],
    explain: "Foundry fine-tuning guidance says teacher-generated examples can help a smaller model meet task requirements at lower cost and latency, and it recommends held-out evaluation against the baseline. Fine-tuning doesn't replace retrieval for current information, so the price-list option is wrong. Adding more few-shot examples raises token cost and latency, and fine-tuning builds on a pretrained model instead of training one from scratch.",
    src: SRC.overview
  },
  {
    id: "pl26", domain: "plan", type: "multi",
    q: "A bank is writing prompt engineering guidelines for an internal policy Q&A app built on a non-reasoning chat model in Microsoft Foundry. Testers report that the app sometimes fabricates policy details. Which techniques should the guidelines require?",
    options: [
      "Raise the temperature so that the model produces more divergent responses",
      "Ask the model to include inline citations to the source material for its statements",
      "Provide grounding data from the policy documents for the model to draw its responses from",
      "Tell the model to answer every question, even when the answer isn't in the provided text",
      "Remove the system message so that the model relies only on its training data"
    ],
    answer: [1, 2],
    explain: "Foundry prompt engineering guidance strongly recommends grounding data for use cases that need reliable information, and it says asking for citations, especially inline ones, makes statements much more likely to be grounded. A higher temperature makes output more random, which suits creative tasks rather than policy answers. Removing the system message drops the instructions and grounding, and forcing an answer contradicts the advice to give the model an out, such as responding not found.",
    src: SRC.promptEngineering
  },
  {
    id: "pl27", domain: "plan", type: "single",
    q: "A team uses the Chat Completions API with a non-reasoning model to categorize support tickets. Without examples, the model guesses inconsistently at which categories to use. The team wants to show the desired behavior with sample inputs and outputs in the prompt. How should the guidelines tell them to include the examples?",
    options: [
      "Add the examples as example user and assistant interactions in the messages array after the initial system message",
      "Send the examples in a separate earlier API call so that the model permanently learns them",
      "Place the examples ahead of the system message so that they take precedence over the instructions",
      "Raise the temperature so that the model infers the categories from more varied outputs"
    ],
    answer: [0],
    explain: "With the Chat Completions API, few-shot examples are typically added to the messages array as example user and assistant interactions after the initial system message. Few-shot examples condition only the current inference and don't permanently change the model, so a separate earlier call doesn't help. The system message comes first in the message structure, and raising the temperature makes output more random rather than more consistent.",
    src: SRC.promptEngineering
  },
  {
    id: "pl28", domain: "plan", type: "single",
    q: "A global manufacturer already runs a mature Cloud Center of Excellence that owns cloud governance and platform standards. Executives now want an AI Center of Excellence to prevent fragmented AI adoption. Existing teams can support AI adoption, and no critical risks have been identified. Where should the architect recommend placing the AI CoE?",
    options: [
      "Within the existing Cloud Center of Excellence, by integrating AI practices and expertise into that team",
      "Within each business unit, with no central function that owns AI policies",
      "Nowhere yet, because an AI CoE should be formed only after AI adoption has matured",
      "As a new standalone AI team that is kept separate from the Cloud Center of Excellence"
    ],
    answer: [0],
    explain: "CAF says that if you already operate a Cloud Center of Excellence, you should integrate AI practices and expertise into that team, and create a standalone AI team only if current teams can't support AI adoption or critical risks exist. Neither condition applies here. Removing central ownership invites the fragmented adoption the CoE is meant to prevent, and CAF recommends a centralized CoE early in the AI journey, not after adoption matures.",
    src: SRC.centerOfExcellence
  },
  {
    id: "pl29", domain: "plan", type: "single",
    q: "A company runs Dynamics 365 Sales, Dynamics 365 Customer Service, and Dynamics 365 Customer Insights. The architect is designing an AI solution and wants the same model-driven app Copilot and AI capabilities available to users in all three apps. Which design assumption is correct?",
    options: [
      "The data from all three apps must be merged into one app before AI capabilities can be used",
      "Copilot and AI capabilities are available only in the finance and operations apps, not in customer engagement apps",
      "Each app needs its own Microsoft Foundry deployment before any Copilot capability is available in it",
      "Because these apps are model-driven apps that run on Dataverse, Copilot and AI capabilities from model-driven apps are available across them"
    ],
    answer: [3],
    explain: "Sales, Customer Service, and Customer Insights are model-driven apps built in Power Apps that run on Microsoft Dataverse, so the Copilot and AI capabilities in model-driven apps are available across them, though some features might need to be enabled. No per-app Foundry deployment or data merge is required. The customer engagement apps have their own Copilot and agent capabilities, so the finance-and-operations-only claim is false.",
    src: SRC.aiGetStarted
  },
  {
    id: "pl30", domain: "plan", type: "multi",
    q: "Contoso plans an internal custom engine agent built with Microsoft Foundry and published to Microsoft 365 Copilot Chat. Every employee who will use it already holds a Microsoft 365 Copilot add-on license, and the agent grounds its answers on SharePoint content. The CFO asks the solution architect for a total cost of ownership estimate. Which cost items belong in the estimate?",
    options: [
      "Microsoft 365 Copilot hosting fees charged for running the custom engine agent's runtime",
      "Copilot Credits consumption each time a licensed employee's request grounds on SharePoint content",
      "An additional Microsoft 365 Copilot add-on license per employee to unlock access to custom engine agents",
      "Ongoing evaluation, incident response, servicing, and eventual retirement of the agent",
      "Hosting for the agent's orchestrator, APIs, and model endpoints that run outside Microsoft 365 Copilot"
    ],
    answer: [3, 4],
    explain: "Custom engine agents are hosted outside Microsoft 365 Copilot on your own orchestrator and models, so external hosting is a real cost, and the cost categories also include support, evaluation, servicing and retirement. Users with a Microsoft 365 Copilot license don't incur additional usage charges, so Copilot Credits for these employees are wrong. Microsoft 365 Copilot doesn't host custom engine agents, and no additional license is required to access them.",
    src: SRC.costConsiderations
  },
  {
    id: "pl31", domain: "plan", type: "single",
    q: "A finance shared-services team plans an agent that validates supplier invoices before they are posted. The sponsor's main goal is to cut posting mistakes that currently require costly rework. The architect is using the four value drivers from the Copilot Studio business value guidance to build the ROI model. How should this benefit be classified and priced?",
    options: [
      "Strategic, priced as an option premium on capability plus the retention value of talent",
      "Efficiency, priced as error rate before minus error rate after, multiplied by volume and cost per error",
      "Revenue, priced as conversion delta multiplied by volume, unit revenue, and attribution discount",
      "Quality, priced as error rate before minus error rate after, multiplied by volume and cost per error"
    ],
    answer: [3],
    explain: "Error reduction falls under the Quality value driver, which is priced as the change in error rate multiplied by volume and cost per error. Efficiency measures productive hours returned and is priced by hours times the fully loaded hourly value, so pairing it with the error formula is wrong. Revenue covers top-line lift and Strategic covers decision velocity and resilience, neither of which describes fewer posting mistakes.",
    src: SRC.agentBusinessValueMeasureImpact
  },
  {
    id: "pl32", domain: "plan", type: "single",
    q: "Fabrikam will launch a Copilot Studio agent that handles Tier-1 IT tickets, and its business case must hold up in the first quarterly finance review. The project lead proposes an employee survey on how long tickets seem to take as the only baseline. What should the architect recommend for the ROI analysis?",
    options: [
      "Keep the survey as the only baseline, because it captures how employees experience the process",
      "Skip the pre-launch baseline and use Copilot Studio session counts after launch to demonstrate value",
      "Use the default $72 hourly rate in place of a baseline, since it is derived from government labor data",
      "Capture a pre-launch baseline from the ticketing system, including median, P90, and P99 cycle times and fully loaded cost per transaction"
    ],
    answer: [3],
    explain: "A defensible baseline comes from a telemetry system, ticketing export, or ERP extract and covers cycle-time distribution and fully loaded cost per transaction before launch. Surveys can supplement a baseline but can't replace it. Session counts show usage rather than value, and a default hourly rate only prices hours; it doesn't measure the current process.",
    src: SRC.agentBusinessValueDefineValue
  },
  {
    id: "pl33", domain: "plan", type: "single",
    q: "An AI program office is scoring candidate agents for the next funding cycle. One candidate would need a new connector and data pipeline and take more than a quarter to build. Its projected annual value is narrow, and nobody would miss the work if it stayed manual. Following the impact-and-effort prioritization guidance, how should the program office treat this candidate?",
    options: [
      "Request dedicated program funding and build it after one quick win reaches baseline",
      "Fund it from the operating budget and build it first alongside the other quick wins",
      "Don't fund it now, and revisit it in six months when lower-cost options might reduce effort",
      "Queue it for the citizen-maker community to iterate on without central funding"
    ],
    answer: [2],
    explain: "A new connector or pipeline and a build longer than a quarter mean high effort, and narrow value that wouldn't be missed means low impact, which puts the candidate in the Reconsider quadrant: don't fund now and revisit in six months. Operating-budget funding applies to quick wins, which are high impact and low effort. Dedicated program funding applies to strategic investments, which are high impact. Citizen-maker queuing applies to nice-to-have items, which are low effort.",
    src: SRC.agentBusinessValueDefineValue
  },
  {
    id: "pl34", domain: "plan", type: "single",
    q: "A consulting firm wants an agent that synthesizes information from employees' Microsoft 365 data into research briefs. In an evaluation, the Researcher agent in Microsoft 365 Copilot meets every functional requirement. Leadership asks the architect whether to build a custom agent. Following the Cloud Adoption Framework AI agent decision tree, what should the architect recommend?",
    options: [
      "Build a custom retrieval agent in Microsoft Copilot Studio before evaluating SaaS options",
      "Build a code-first hosted agent in Microsoft Foundry for full control of the logic",
      "Adopt the Researcher agent as a ready-to-use SaaS agent",
      "Host a custom model on GPU-backed containers in Azure Kubernetes Service"
    ],
    answer: [2],
    explain: "The decision tree's primary question is whether a SaaS agent meets the functional requirements, and if it does, you adopt the prebuilt solution. Researcher is a Microsoft 365 Copilot SaaS agent that already meets the requirements here. Building in Foundry, Copilot Studio, or on GPUs and containers is the path only when no SaaS agent fits.",
    src: SRC.technologySolutionsPlanStrategy
  },
  {
    id: "pl35", domain: "plan", type: "single",
    q: "A logistics company found no SaaS agent that fits its shipment-exception process, so it will build a custom agent. The team is split between a low-code agent in Microsoft Copilot Studio and a pro-code agent in Microsoft Foundry. According to the Cloud Adoption Framework, how should the architect validate the platform choice?",
    options: [
      "Host the models on GPU containers first so that both platforms can share one model endpoint",
      "Choose Microsoft Foundry by default, because pro-code always gives the most control at the lowest cost",
      "Commit to production in Copilot Studio right away and revisit the platform choice after a year",
      "Run one-to-two-week prototypes on each platform, and proceed with low-code if it meets functional and security requirements"
    ],
    answer: [3],
    explain: "The guidance is to run time-boxed experiments of one to two weeks per option, comparing development speed, functional coverage and integration complexity. If the low-code solution meets functional and security requirements, the team proceeds with it. Defaulting to pro-code or committing without experimentation contradicts this validation step. GPU hosting is for running your own models, not a prerequisite for comparing platforms.",
    src: SRC.technologySolutionsPlanStrategy
  },
  {
    id: "pl36", domain: "plan", type: "single",
    q: "A law firm uses model router in Microsoft Foundry for contract review. Compliance requires that prompts are processed only by an approved list of models, including when one model has a transient outage. The firm also wants requests to keep flowing during such outages. What should the architect configure?",
    options: [
      "A custom deployment with a model subset that contains at least two approved models",
      "A quick deployment in Balanced mode, relying on default failover to stay within the approved models",
      "A custom deployment with a model subset that contains a single approved model to guarantee failover",
      "A custom deployment in Cost mode, because Cost mode routes only to approved low-cost models"
    ],
    answer: [0],
    explain: "In a custom deployment, the model subset also acts as the fallback set, so prompts aren't processed by unapproved models, and you need at least two models in the subset to benefit from failover. A default deployment routes to all supported models, so it doesn't enforce an approved list. Routing modes trade quality against cost but don't restrict which models are eligible. A single-model subset has nothing to fail over to.",
    src: SRC.modelRouter
  },
  {
    id: "de01", domain: "design", type: "single",
    q: "Contoso added a custom column named custom revenue to the opportunity table. Sellers ask Copilot in Dynamics 365 Sales questions such as which opportunities have the highest deal value, but Copilot doesn't relate the phrase deal value to that column. What should the solution architect configure?",
    options: [
      "Turn on case summaries in Copilot Service admin center and map the custom revenue column as a summary field.",
      "Edit the SalesSparks topic so that the prompt guide shows a suggested prompt about deal value.",
      "Add deal value as a trigger phrase in the Escalate system topic of the Copilot in Dynamics 365 Sales agent.",
      "In Copilot Studio, add deal value as a synonym for the custom revenue column in the SalesSpecificQnA knowledge of the Copilot in Dynamics 365 Sales agent."
    ],
    answer: [3],
    explain: "Synonyms in the SalesSpecificQnA knowledge of the Copilot in Dynamics 365 Sales agent map alternative names that sellers use to real table columns, so Copilot can answer questions phrased with business terms. Case summary field mapping is a Customer Service feature for summaries, not Sales chat vocabulary. Editing SalesSparks only changes the suggested prompts in the prompt guide, and the Escalate topic handles handoff to a human, not term mapping.",
    src: SRC.extendCopilotChat
  },
  {
    id: "de02", domain: "design", type: "multi",
    q: "A utility company uses Copilot case summaries in Dynamics 365 Customer Service. Representatives want each case summary to also summarize the work orders linked to the case, with the most recently modified work order first. Supervisors also complain that summaries show empty sections when a case lacks some data. Which configurations should the architect include?",
    options: [
      "Turn on Deterministic response in the Customer Support agent settings.",
      "Add trusted webpages in the Customer Support agent email settings.",
      "Add automated filters on a knowledge base field for the Ask a question feature.",
      "Turn on the option to remove information from the summary that can't be found.",
      "Include related records in the case summary, selecting Work Order, its Parent Case lookup field, and Modified Date as the priority field."
    ],
    answer: [3, 4],
    explain: "The related record summary option adds summaries of linked records such as work orders to case summaries and orders them by a chosen field such as Modified Date, and the remove-information toggle stops empty sections from appearing when data is missing. Deterministic response controls repeatable Ask a question output, automated filters scope knowledge articles for Ask a question, and trusted webpages are sources for drafting emails, so none of them change case summary content.",
    src: SRC.copilotMapCustomFields
  },
  {
    id: "de03", domain: "design", type: "single",
    q: "Fabrikam wants sellers to see order-status insights from its internal order management API inside the Sales experience in Outlook and Teams. A developer will build a custom connector and then a connector action in Copilot Studio. Which connector design should the architect approve?",
    options: [
      "Create the connector in an environment with Dynamics 365 apps enabled and use OAuth 2.0 with Microsoft Entra ID as the identity provider.",
      "Create the connector in the default environment and use OAuth 2.0 with Microsoft Entra ID as the identity provider.",
      "Create the connector in the default environment and secure it with an API key.",
      "Create the connector in an environment with Dynamics 365 apps enabled and use basic authentication with a shared service account."
    ],
    answer: [0],
    explain: "Custom connectors that extend Sales must be built in an environment where Dynamics 365 apps are enabled and must use OAuth 2.0 with Microsoft Entra ID so the back end receives Entra ID tokens. The default environment isn't supported for these connectors, so both default-environment options fail. API key and basic authentication don't meet the required OAuth 2.0 with Entra ID setup.",
    src: SRC.customConnectorAction
  },
  {
    id: "de04", domain: "design", type: "single",
    q: "A retailer built a billing agent and a technical support agent in Copilot Studio. Both must take the first turn of live chat conversations in Dynamics 365 Contact Center and then hand customers to service representatives with the full conversation history. How should the architect configure routing?",
    options: [
      "Add both agents to a single pick-based live chat workstream.",
      "Add both agents to a single push-based live chat workstream and select the agent by using context variables.",
      "Add each agent to its own push-based workstream and configure escalation to a representative in each agent.",
      "Add each agent to its own pick-based workstream and configure escalation to a representative in each agent."
    ],
    answer: [2],
    explain: "Only one agent can be added to a workstream, and agents receive conversations only from push-based workstreams, so each agent needs its own push-based workstream. Each agent also needs escalation configured so it can hand off with the full history and variables. Putting both agents in one workstream breaks the one-agent limit, and pick-based workstreams never deliver conversations to agents.",
    src: SRC.configureBotVirtualAgent
  },
  {
    id: "de05", domain: "design", type: "single",
    q: "An IT team is building a task agent in Copilot Studio that opens service tickets through a connector. The connector requires a category, a priority, and a description, and users often leave some of these out. The team wants the agent to choose the connector from the user's request and ask for any missing values without authoring a question node for each input. Which design meets the requirement?",
    options: [
      "Customize the Conversational boosting system topic to call the connector when no topic matches.",
      "Keep the Multiple Topics Matched system topic turned on so that it collects the missing values.",
      "Use generative orchestration and add the connector as a tool with a clear name and description.",
      "Use classic orchestration, add trigger phrases to a ticket topic, and call the connector from that topic."
    ],
    answer: [2],
    explain: "With generative orchestration, the agent picks tools by their name and description and automatically generates questions for any missing inputs. Classic orchestration calls tools only from topics and needs question nodes to collect inputs, which breaks the requirement. Conversational boosting generates answers from knowledge, and Multiple Topics Matched handles disambiguation, so neither fills tool inputs.",
    src: SRC.advancedGenerativeActions
  },
  {
    id: "de06", domain: "design", type: "multi",
    q: "A finance team plans an autonomous agent in Copilot Studio that reads incoming supplier emails and updates vendor bank details for payments in the ERP system. Which design choices follow Microsoft guidance for autonomous agents?",
    options: [
      "Turn off logging of agent decisions to reduce storage and noise.",
      "Require approval from a person before the agent changes vendor bank details.",
      "Give the agent broad read and write permissions across finance systems so that it never fails mid-task.",
      "Release the agent to all suppliers at full autonomy on day one to gather performance data quickly.",
      "Validate that triggering emails come from expected, verified senders before the agent acts."
    ],
    answer: [1, 4],
    explain: "The guidance keeps a human in the loop for high-stakes actions and requires checking that triggering events, such as emails, are authentic, for example by validating the sender. Broad permissions break least-privileged access, and releasing everything at full autonomy goes against testing and gradual rollout. Turning off logging removes the audit trail that the guidance requires.",
    src: SRC.autonomousAgents
  },
  {
    id: "de07", domain: "design", type: "single",
    q: "An HR agent in Copilot Studio uses classic orchestration. It has a few curated topics for leave requests, and the HR policy documents are stored in SharePoint. When an employee asks a policy question that no topic covers, the agent should generate an answer from those documents. Which system topic provides this behavior?",
    options: [
      "Escalate",
      "Multiple Topics Matched",
      "Conversational boosting",
      "Fallback"
    ],
    answer: [2],
    explain: "Conversational boosting runs when the agent can't match the query to a topic, and it creates generative answers from data sources such as SharePoint. Fallback only tells the user the query couldn't be matched and asks them to try again. Multiple Topics Matched asks the user to choose between topics that match closely, and Escalate hands the user to a human.",
    src: SRC.authoringSystemTopics
  },
  {
    id: "de08", domain: "design", type: "single",
    q: "A health insurer receives free-form patient referral letters from many clinics. It needs to extract the referring doctor, the diagnosis, and the requested service. It has no labeled training samples and wants to describe the fields in plain language. Which Foundry Tool should the architect propose?",
    options: [
      "Azure Content Understanding custom analyzer",
      "Azure Translator document translation",
      "Azure Document Intelligence custom model trained on labeled samples",
      "Azure Document Intelligence prebuilt invoice model"
    ],
    answer: [0],
    explain: "For custom extraction from unstructured documents such as referral letters, without labels, Microsoft recommends a Content Understanding custom analyzer, where you describe the fields in plain language. A Document Intelligence custom model needs labeled samples and suits highly structured documents. The prebuilt invoice model targets invoices, and Translator translates text rather than extracting fields.",
    src: SRC.choosingRightAiTool
  },
  {
    id: "de09", domain: "design", type: "single",
    q: "A development team must add a custom React-based dashboard page to a model-driven app. They want to work in TypeScript in their own IDE, use the newest frontier AI models for generation, and deliver the page through a solution. Which approach should the architect propose?",
    options: [
      "Create the page in Plan designer so that it's generated directly as a generative page.",
      "Create the generative page with an AI code generation tool such as GitHub Copilot CLI.",
      "Use the in-browser generative page designer and select a newer frontier model in the model picker.",
      "Generate the page in a canvas app by using Copilot in Power Apps Studio."
    ],
    answer: [1],
    explain: "Microsoft recommends AI code generation tools such as GitHub Copilot CLI for generative pages. They give access to the latest models and a code-first TypeScript and React workflow in the IDE, and the pages are solution-aware. Generative pages work only in model-driven apps, not canvas apps. The in-browser designer currently offers only GPT-4.1, and Plan designer has no direct integration with generative pages.",
    src: SRC.generativePages
  },
  {
    id: "de10", domain: "design", type: "single",
    q: "An autonomous process creates booking records in a Dataverse table. Booking coordinators work in a model-driven app. They must review each booking the agent processes and step in when the agent needs input, without leaving the app. Which design should the architect propose?",
    options: [
      "Configure the app assistant agent with custom topics so that it posts review tasks to coordinators.",
      "Build an autonomous agent in Copilot Studio that uses the Power Apps MCP server and a Dataverse trigger, and add it to the app's agent feed.",
      "Add the agent feed to the Customer Service workspace app that coordinators also use.",
      "Rebuild the coordinator experience as a canvas app and add the agent feed to it."
    ],
    answer: [1],
    explain: "The agent feed shows tasks from autonomous Copilot Studio agents that use the Power Apps MCP server. This lets users in a model-driven app review results and supply input in human-in-the-loop flows. The agent feed isn't available for canvas apps or for apps with another left pane, such as the Customer Service workspace app. The app assistant agent adds topics and knowledge to the in-app chat and doesn't create feed tasks.",
    src: SRC.addAgentsToApp
  },
  {
    id: "de11", domain: "design", type: "single",
    q: "A support agent in Copilot Studio uses classic orchestration. When a user's message doesn't match any topic, the business wants the agent to send the user's exact text to an internal search API and show the results, and to still escalate if that doesn't help. How should the architect design this?",
    options: [
      "Reset the Fallback topic to default so that it calls back-end systems.",
      "Customize the Fallback system topic to pass the UnrecognizedTriggerPhrase variable to a flow that calls the search API.",
      "Customize the Multiple Topics Matched system topic to call the search API.",
      "Add the most common unmatched questions as trigger phrases on the Fallback topic."
    ],
    answer: [1],
    explain: "The Fallback topic triggers on unknown intent and can be customized. Its UnrecognizedTriggerPhrase variable holds the unrecognized input, which can be passed to a flow that calls a back-end system, while the topic keeps its escalation path. Fallback has no trigger phrases because it captures unknown input. Multiple Topics Matched handles disambiguation between close matches, and resetting to default removes customizations and restores the rephrase-then-escalate behavior.",
    src: SRC.authoringSystemFallbackTopic
  },
  {
    id: "de12", domain: "design", type: "multi",
    q: "A distributor is building an agent grounded on product and order data in a busy ERP database. Answers are slow, the ERP team reports extra load from AI queries, and the budget for search storage is tight. Which design changes align with grounding data design guidance?",
    options: [
      "Index all personal data from customer records in case users ask about it later.",
      "Update the index in place by default to avoid the temporary duplicate storage of a rebuild.",
      "Copy the grounding data into a search index optimized for the expected queries instead of querying the ERP database on every turn.",
      "Enable searchable, filterable, and retrievable attributes only on fields that the expected queries use.",
      "Mark every index field as retrievable and sortable so that future queries are supported."
    ],
    answer: [2, 3],
    explain: "The guidance moves grounding data out of the source system into a search index, which keeps AI queries from loading the ERP. It also enables index capabilities only on fields that queries need, which controls storage cost. Making every field retrievable adds storage cost with no use case. Indexing personal data that queries don't need goes against the sensitive-data guidance, and side-by-side rebuilds, not in-place updates, are recommended in most cases.",
    src: SRC.groundingDataDesign
  },
  {
    id: "de13", domain: "design", type: "single",
    q: "Field inspectors type observations into a Power Apps canvas app. The business process requires a custom AI Builder model to classify each observation before submission, and the classification appears in two labels on the screen. The architect wants to minimize AI Builder credit consumption. Which design should be used?",
    options: [
      "Call the model's Predict function from a Timer control that runs every few seconds.",
      "Call the model's Predict function from a button's OnSelect property, store the result in a variable by using Set, and reference the variable in both labels.",
      "Call the model's Predict function in the text input's OnChange property so that results refresh as users type.",
      "Call the model's Predict function in the Text property of each label that shows the classification."
    ],
    answer: [1],
    explain: "Microsoft recommends triggering predictions from a single action, such as a button select, and saving the result in a variable for reuse, which uses AI Builder credits efficiently. Calling Predict in OnChange runs a prediction on every edit. Calling it in each label's Text property repeats the call for every label, and a recurring timer keeps using credits whether or not anything changed.",
    src: SRC.powerfxInPowerapps
  },
  {
    id: "de14", domain: "design", type: "single",
    q: "During a Power Platform Well-Architected review of an intelligent app, reviewers find that its embedded agent answers every request it can't interpret with the same message saying it didn't understand, and users get stuck repeating themselves. Which recommendation from the Experience Optimization pillar should the architect apply?",
    options: [
      "Avoid telling users what the agent can't do, so that they aren't discouraged from using it.",
      "Repeat the same rephrase prompt until the user enters a request that the agent recognizes.",
      "End the conversation as soon as the agent can't interpret a request, to avoid wasting the user's time.",
      "Ask clarifying questions and, after repeated misunderstandings, offer escalation to a human or links to help documentation."
    ],
    answer: [3],
    explain: "The Experience Optimization guidance for conversation design calls for fallback that asks clarifying questions and, after repeated misunderstandings, escalates to a human or points to help documentation. It says not to end conversations abruptly, and it recommends being upfront about what the AI can't do. Repeating the same rephrase prompt indefinitely is the dead end that the guidance tells you to avoid.",
    src: SRC.conversationDesign
  },
  {
    id: "de15", domain: "design", type: "single",
    q: "An airline's Copilot Studio agent runs in an environment where the admin has turned off generative orchestration. The agent must understand industry-specific vocabulary and extract several entities of the same type from one utterance, such as the departure and arrival airports. The data science team already maintains a trained language model for these intents. Which approach should the architect choose?",
    options: [
      "Use the built-in NLU model with closed list entities for airports.",
      "Integrate an Azure conversational language understanding (CLU) model and map its intents to Copilot Studio topics.",
      "Rely on the Conversational boosting system topic to extract the airport entities.",
      "Turn on generative orchestration for the agent so that it handles multiple intents."
    ],
    answer: [1],
    explain: "When generative orchestration can't be used, CLU integration supports custom models for industry-specific vocabulary and complex entity extraction, such as several from-type entities, with CLU intents mapped to topics. The built-in NLU can't be extended and needs disambiguation to fill several entities of the same type. Generative orchestration is ruled out because the admin turned it off, and Conversational boosting generates answers from knowledge rather than extracting entities.",
    src: SRC.languageUnderstanding
  },
  {
    id: "de16", domain: "design", type: "single",
    q: "An agent in Copilot Studio must submit expense adjustments by running the same validation, approval, and posting steps every time, with identical results for identical inputs. The orchestrator must be able to call this process as a tool. Which design should the architect propose?",
    options: [
      "Create a prompt tool that lists the steps and returns the posting result.",
      "Describe the steps in the agent's instructions and let generative orchestration plan them at run time.",
      "Build an agent flow that uses the When an agent calls the flow trigger and add it to the agent as a tool.",
      "Build an agent flow that uses a Recurrence trigger and add it to the agent as a tool."
    ],
    answer: [2],
    explain: "Agent flows are deterministic, so the same input always gives the same output, and flows with the When an agent calls the flow trigger can be added to an agent as tools. Planning the steps through instructions or a prompt relies on generative output, which doesn't guarantee identical results. A flow with a Recurrence trigger runs on a schedule and can't be added as a tool for the agent to call.",
    src: SRC.flowsOverview
  },
  {
    id: "de17", domain: "design", type: "single",
    q: "A public website agent in Copilot Studio allows anonymous users. The team adds a prompt tool that must ground its output in product data from a Dataverse table, but the prompt can't use the Dataverse table as knowledge. What should the architect change?",
    options: [
      "Move the prompt from the agent's Tools to a prompt node inside a topic.",
      "Configure the agent to require user authentication.",
      "Raise the prompt's temperature so that it draws on more knowledge.",
      "Choose a different chat model for the prompt."
    ],
    answer: [1],
    explain: "Agents that allow anonymous users can't use Dataverse tables as knowledge sources for prompts, so the agent must require authentication. Temperature only controls how random and creative the output is, and changing the model is still possible for anonymous agents but doesn't lift the Dataverse restriction. A prompt runs under the same agent authentication setting whether it's added as a tool or as a topic node.",
    src: SRC.nluPromptNode
  },
  {
    id: "de18", domain: "design", type: "single",
    q: "Contoso Insurance's data science team fine-tuned a chat completion model in Microsoft Foundry to classify claim descriptions. A solution architect is designing a Microsoft Copilot Studio agent that must call this model as a discrete, single-turn classification step, and the Power Platform admins want to govern its use with data policies. Which design should the architect choose?",
    options: [
      "Replace the agent's primary model with the fine-tuned deployment so that every orchestration turn runs through the classifier.",
      "Add the Foundry model deployment as a knowledge source for the agent and restrict it with a Microsoft Purview sensitivity label.",
      "Add a Prompt tool that connects to the model's Responses API endpoint, and govern it from the Agents page in the Microsoft 365 admin center.",
      "Add a Prompt tool that connects to the model's chat completions endpoint by its exact deployment name, and govern it through the connector's data policy in the Power Platform admin center."
    ],
    answer: [3],
    explain: "Foundry models are brought into Copilot Studio through the Prompt tool, which must point to the chat completions endpoint and use the deployment name exactly as it appears in Foundry; the connection is governed as a connector in the Power Platform admin center. A Responses API endpoint fails with a Resource not found error, and the Microsoft 365 admin center Agents page does not govern this connector. A knowledge source grounds answers in content and does not run a model, and the primary model powers generative orchestration for every turn rather than a discrete classification step.",
    src: SRC.bringYourOwnModelPrompts
  },
  {
    id: "de19", domain: "design", type: "single",
    q: "Fabrikam Finance wants a loan-review agent that appears in Microsoft 365 Copilot and Teams. The agent must apply precise approval rules across several credit-check systems, use a domain-specific model the bank already hosts, and post updates to a Teams channel without a user prompting it. Which agent approach should the architect recommend?",
    options: [
      "A custom engine agent that brings its own orchestrator and model",
      "A declarative agent built with Microsoft 365 Agents Toolkit that adds API actions for the credit systems",
      "A declarative agent built in Agent Builder with the credit policies added as knowledge",
      "A declarative agent whose custom instructions tell Copilot to post channel updates on a schedule"
    ],
    answer: [0],
    explain: "A custom engine agent fits because the scenario needs custom orchestration for precise business rules across several systems, its own domain-specific model, and proactive messaging. All three declarative options use Copilot's orchestrator and models and support only user-initiated interactions. Adding knowledge, API actions, or scheduling instructions does not change those limits.",
    src: SRC.extensibilityAgentsOverview
  },
  {
    id: "de20", domain: "design", type: "single",
    q: "Northwind Traders has a Copilot Studio agent that uses generative orchestration. It includes a custom connector tool that creates purchase requests. Testers report that the agent rarely chooses the tool when users ask to order equipment, although the connector works when a topic calls it explicitly. What should the architect change first?",
    options: [
      "Rewrite the tool's name and description to state clearly what it does and when to use it",
      "Set the tool's Ask the end user before running option to Yes",
      "Switch the tool's authentication from end user to maker-provided credentials",
      "Add trigger phrases such as order equipment to the tool's configuration"
    ],
    answer: [0],
    explain: "Generative orchestration chooses a tool mainly from its name and description, so a vague description makes the agent skip it. Trigger phrases belong to topics, not to tools. The confirmation prompt only asks the user before the tool runs, and the authentication mode controls whose credentials are used. Neither setting affects whether the orchestrator selects the tool.",
    src: SRC.addToolsCustomAgent
  },
  {
    id: "de21", domain: "design", type: "single",
    q: "A retailer's platform team runs an MCP server that exposes inventory lookup and stock-transfer functions, and it adds or retires functions every few weeks. Several Copilot Studio agents must use these functions without makers re-authoring each agent whenever the server changes. Which design meets the requirement?",
    options: [
      "Connect each agent to the MCP server and keep classic orchestration so that topics call each function",
      "Add the MCP server's endpoint URL to each agent as a public website knowledge source",
      "Connect each agent to the MCP server as a tool, with generative orchestration turned on",
      "Create a separate custom connector action for every function and update the agents when functions change"
    ],
    answer: [2],
    explain: "When an agent connects to an MCP server, every tool the server publishes becomes available, and Copilot Studio reflects added, updated, or removed tools automatically. MCP requires generative orchestration, so a classic-orchestration design does not work. Separate custom connector actions require makers to update the agents by hand, which breaks the requirement. A website knowledge source only grounds answers in content and cannot call functions.",
    src: SRC.agentExtendActionMcp
  },
  {
    id: "de22", domain: "design", type: "single",
    q: "Every night, Tailspin Toys must enter supplier invoices into a vendor web portal that has no API. The portal's layout changes occasionally. The security team requires the automation to interact only with that portal and to run with minimal privileges. Which Copilot Studio design should the architect propose?",
    options: [
      "A Prompt tool that receives the portal URL and the invoice data and submits the form in a single model call",
      "A REST API tool generated from an OpenAPI description of the vendor portal, using maker-provided credentials",
      "A computer use tool on an employee's everyday workstation, with access control turned off so that it can reach any site an invoice references",
      "A computer use tool in an autonomous agent on a dedicated machine, with stored credentials and access control limited to the portal's domain"
    ],
    answer: [3],
    explain: "Computer use automates websites that have no API, adapts when the interface changes, and works best in autonomous agents. A dedicated machine and an access control allow list meet the security requirements. A REST API tool needs an API, and the portal has none. A shared everyday workstation with access control turned off breaks the guidance to use dedicated machines and an allow list. A Prompt tool is a single-turn model call and cannot operate a website.",
    src: SRC.computerUse
  },
  {
    id: "de23", domain: "design", type: "single",
    q: "A legal operations team is building a production Copilot Studio agent that reviews supplier contracts against company policy, calls tools across several systems, and cites the clauses it relied on. Accuracy matters more than response time or cost. Which primary model choice fits best?",
    options: [
      "An experimental model tagged Deep",
      "A generally available model tagged Deep",
      "A preview model tagged Auto",
      "A generally available model tagged General"
    ],
    answer: [1],
    explain: "Models tagged Deep are optimized for deliberate, multistep reasoning and tool-supported workflows, including policy and contract analysis, at the cost of higher latency. A generally available model is required for production. General models are optimized for speed and cost and offer only shallow-to-moderate reasoning. Preview and experimental models are meant for exploration and testing, not production.",
    src: SRC.authoringSelectAgentModel
  },
  {
    id: "de24", domain: "design", type: "single",
    q: "A utility company uses Dynamics 365 Contact Center and wants callers on its phone line to talk naturally with a Copilot Studio agent instead of navigating IVR menus. The agent must use generative orchestration and respond with low latency, and it must still accept DTMF input. Which design should the architect choose?",
    options: [
      "A basic voice agent that relies on NLU intent recognition and entity extraction",
      "A text agent published to a website channel with deep reasoning turned on",
      "A real-time voice agent that uses a speech-to-speech real-time model",
      "A declarative agent in Microsoft 365 Copilot with voice-friendly instructions"
    ],
    answer: [2],
    explain: "Real-time voice agents run under generative orchestration and use a speech-to-speech real-time model for low-latency, natural conversation, and voice agents accept both speech and DTMF. Basic voice agents use classic orchestration, which fails the generative orchestration requirement. A declarative agent in Microsoft 365 Copilot and a text agent on a website channel offer no telephony voice channel.",
    src: SRC.voiceOverview
  },
  {
    id: "de25", domain: "design", type: "multi",
    q: "A project manager built an agent in Agent Builder that answers questions from the project's SharePoint library for a five-person team. Leadership now wants to extend the agent. Which new requirements justify copying the agent to Copilot Studio?",
    options: [
      "Team members must keep authoring the agent with natural language in the Microsoft 365 Copilot app",
      "The agent must move through development, test, and production environments with versioning",
      "The agent must answer only from content that each user already has permission to access",
      "The agent must be published to external customers on the company website",
      "The agent must keep answering questions from the project's SharePoint documents"
    ],
    answer: [1, 3],
    explain: "Copilot Studio is the right tool when an agent needs a broader audience, such as external customers, or lifecycle management with versioning and separate development, test, and production environments. Agent Builder already handles natural language authoring in the Microsoft 365 Copilot app, permission-trimmed answers, and Q&A over SharePoint content for a small team. None of those requirements calls for moving the agent.",
    src: SRC.copilotStudioExperience
  },
  {
    id: "de26", domain: "design", type: "single",
    q: "Fabrikam uses Dynamics 365 Finance. Its accounts receivable team works mainly in the Collections coordinator workspace. The team wants an AI-generated summary of each customer's collections situation in that workspace, and it wants AI-written text in the reminder letters it sends to overdue customers. The architect must use a built-in Copilot feature rather than build a custom agent. Which feature should the architect recommend?",
    options: [
      "Analyze demand plans with Copilot",
      "Customer page summary",
      "Workflow history summary",
      "Collections coordinator summary"
    ],
    answer: [3],
    explain: "Collections coordinator summary shows AI-generated summary text in the Collections coordinator workspace and generates reminder letters that contain AI-generated text, which matches both requirements. Customer page summary only shows a summary at the top of the customer page and doesn't write reminder letters. Workflow history summary summarizes workflow history. Analyze demand plans with Copilot is a Supply Chain Management demand planning feature.",
    src: SRC.copilotForFinanceOperations
  },
  {
    id: "de27", domain: "design", type: "single",
    q: "Contoso runs Dynamics 365 Customer Service. An administrator opted in to Copilot features in Copilot Service admin center, and representatives who use Copilot Service workspace can now ask questions and summarize cases. Representatives who work in Customer Service Hub still can't see any Copilot features. What should the administrator do so that Customer Service Hub users get Copilot?",
    options: [
      "Create a custom experience profile in Copilot Service admin center that turns on Copilot features, and assign it to the Customer Service Hub representatives",
      "In Copilot Studio, add the Customer Service Hub representatives as users of the Copilot for finance and operations apps agent",
      "In Power Platform admin center, open the Dynamics 365 Customer Service Copilot settings for the environment and select Enable AI-powered Copilot features",
      "In Power Platform admin center, turn on data sharing for Dynamics 365 Copilot features so that Microsoft can review Copilot data"
    ],
    answer: [2],
    explain: "Copilot in Customer Service Hub and custom apps requires the Enable AI-powered Copilot features setting for the environment in Power Platform admin center. Once it is on, the features are available to all Hub representatives. Experience profiles control Copilot access only in Copilot Service workspace. Data sharing only lets Microsoft review Copilot data and doesn't turn on features. The Copilot for finance and operations apps agent belongs to finance and operations apps, not Customer Service.",
    src: SRC.configureCopilotFeatures
  },
  {
    id: "de28", domain: "design", type: "single",
    q: "A corporate strategy team at Northwind Traders has Microsoft 365 Copilot licenses. Before each quarterly review, analysts must investigate a market question by combining public web information with internal files, emails, and meeting content. They need a structured report with cited sources that they can share with leadership. Which Microsoft 365 agent should the architect propose?",
    options: [
      "Service Agent in Microsoft 365 Copilot",
      "Researcher agent in Microsoft 365 Copilot",
      "Generative help and guidance in finance and operations apps",
      "Sales agent in Microsoft 365 Copilot"
    ],
    answer: [1],
    explain: "Researcher is built for complex, multi-step research. It draws on both the web and work content such as files, emails, meetings, and chats, and it produces source-cited reports. The Sales agent works with CRM sales data, and Service Agent works with customer service cases and records. Generative help and guidance answers questions about using finance and operations apps, not market research.",
    src: SRC.researcherAgent
  },
  {
    id: "de29", domain: "design", type: "multi",
    q: "Adatum uses Dynamics 365 Sales and is rolling out the Sales agent in Microsoft 365 Copilot (formerly Microsoft 365 Copilot for Sales). Sellers must be able to ask the agent about records in a custom Partner Account table. Sales leadership also wants the account summary that the agent generates to include a custom Strategic Tier field. Which actions should the architect include in the configuration plan?",
    options: [
      "In the Sales agent administrator settings, under Features, open Sales Chat and add the custom Partner Account table as a record type",
      "In the Copilot for finance and operations apps agent, turn on Allow the AI to use its own general knowledge",
      "In Copilot Service admin center, create a custom experience profile that turns on Copilot features for sellers",
      "Under Custom AI instructions, edit the Account summary and @mention the Strategic Tier field so it's included",
      "Remove the Partner Account table from Dataverse search to reduce index storage costs"
    ],
    answer: [0, 3],
    explain: "Admins add out-of-the-box or custom CRM tables to the Sales agent under Features > Sales Chat. They change what account summaries contain by editing the custom AI instructions and @mentioning the fields to include. Removing a table from Dataverse search means the Sales agent can no longer query it. Experience profiles in Copilot Service admin center apply to Customer Service representatives. General knowledge in the finance and operations agent has nothing to do with Sales agent data.",
    src: SRC.setUpSalesChat
  },
  {
    id: "de30", domain: "design", type: "single",
    q: "A regional bank receives customer loan application forms in a layout unique to the bank. It wants a Power Automate flow to extract the applicant fields from each submitted form into Dataverse. Makers will build the solution from AI hub in Power Apps and Power Automate without writing code. Which AI Builder model should the architect propose?",
    options: [
      "The prebuilt receipt processing model",
      "The prebuilt business card reader model",
      "A custom object detection model trained on photos of the forms",
      "A custom document processing model that makers build, train, and publish"
    ],
    answer: [3],
    explain: "AI Builder maps the scenario of automating customer application processing to the document processing model. That is a custom model you build, train, and publish for data unique to your business, and makers create it from AI hub > AI models. Receipt processing is for expense receipts, and business card reader is for contact cards. Object detection finds and counts objects in images. None of these three extracts fields from custom application forms.",
    src: SRC.modelTypes
  },
  {
    id: "de31", domain: "design", type: "single",
    q: "Warehouse supervisors at Litware use Dynamics 365 Supply Chain Management. They want to ask the Copilot chat in the finance and operations apps client questions such as how much stock is available for an item in each company. Answers must reflect current data in finance and operations apps, with no scheduled exports or file uploads. Virtual entities for finance and operations apps are already enabled. What should the architect recommend?",
    options: [
      "Turn on Allow the AI to use its own general knowledge for the Copilot for finance and operations apps agent",
      "Add the on-hand inventory table under Features > Sales Chat in the Sales agent administrator settings",
      "Upload a weekly on-hand inventory export as a PDF file on the agent's Knowledge tab in Copilot Studio",
      "In Copilot Studio, use Add knowledge > Dynamics 365 to add the on-hand inventory virtual entity to the Copilot for finance and operations apps agent, and then publish"
    ],
    answer: [3],
    explain: "Virtual entities expose live finance and operations data as Dataverse tables. When you add one as a Dynamics 365 knowledge source on the Copilot for finance and operations apps agent, the in-client chat can answer questions in natural language from current data. A weekly PDF export is static and breaks the no-export requirement. General knowledge draws on the language model and Bing, not finance and operations data. Sales Chat settings configure the Sales agent for CRM data.",
    src: SRC.tutorialAgentKnowledge
  },
  {
    id: "de32", domain: "design", type: "single",
    q: "A manufacturer uses generative help and guidance with Copilot in Dynamics 365 Finance. It wants the in-app help to also answer questions from the company's internal finance procedures, which are stored on a SharePoint site and change often. What should the architect recommend?",
    options: [
      "Add your own topic to the Copilot for finance and operations apps agent in Copilot Studio that uses the SharePoint site as a knowledge source, and then publish",
      "Add the SharePoint site as knowledge in the Customer Support agent settings in Copilot Service admin center",
      "Rely on the out-of-box conversational boosting topic, which reads SharePoint sites in the tenant automatically",
      "Turn on Allow the AI to use its own general knowledge so that Copilot finds the procedures through Bing Search"
    ],
    answer: [0],
    explain: "For in-app help, the out-of-box topic covers files uploaded to Copilot Studio. Knowledge from other sources, such as SharePoint, requires adding your own topic to the Copilot for finance and operations apps agent. By default the out-of-box topic covers only published product documentation, not SharePoint. General knowledge adds language model and Bing content, not internal SharePoint procedures. The Customer Support agent configures Copilot for Customer Service representatives, not finance and operations apps.",
    src: SRC.extendCopilotGenerativeHelp
  },
  {
    id: "dp01", domain: "deploy", type: "single",
    q: "A logistics company runs a customer-facing Microsoft Copilot Studio agent. The operations team already monitors its other applications with Azure Monitor. They want to write their own KQL queries over the agent's telemetry, build custom workbook tiles, and make sure conversations that makers run in the test canvas don't skew the production numbers. What should the solution architect recommend?",
    options: [
      "Turn on Sentiment Analysis in the agent's advanced settings and download the conversation outcomes chart as a CSV file after each test run.",
      "Turn on the Collect user reactions setting under User feedback so that test canvas conversations are tagged and left out of Monitor page metrics.",
      "Enter an Application Insights connection string in the agent's advanced settings, then query the logged events with KQL and filter on the designMode custom dimension.",
      "Block the Application Insights in Copilot Studio connector with a Power Platform data policy so that the agent writes its telemetry to the environment's Dataverse tables for querying."
    ],
    answer: [2],
    explain: "You connect a Copilot Studio agent to Application Insights by entering a connection string in its advanced settings. The telemetry can then be queried with Kusto, and the designMode custom dimension lets queries exclude test canvas conversations. Blocking the Application Insights in Copilot Studio connector stops agent-level telemetry; it doesn't send the data anywhere else. Sentiment analysis and CSV downloads don't support KQL or filter out test traffic, and the reactions setting collects thumbs up and thumbs down feedback without tagging test conversations.",
    src: SRC.advancedBotFrameworkComposerCaptureTelemetry
  },
  {
    id: "dp02", domain: "deploy", type: "multi",
    q: "An HR department publishes a Microsoft Copilot Studio agent to Microsoft Teams and to the Microsoft Copilot channel. The product owner wants to read users' thumbs-down comments from both channels on the agent's Monitor page and use them to prioritize the improvement backlog. Today, no feedback from the Microsoft Copilot channel appears, and the product owner can't see any comment text. Which actions should the architect take?",
    options: [
      "Turn on Node execution events in the agent's Application Insights settings so that comments appear on the Monitor page.",
      "Have an admin grant consent in the Microsoft 365 admin center to share user feedback from the Microsoft Copilot channel.",
      "Assign the product owner the Bot Transcript Viewer security role.",
      "Set the conversationOutcome parameter to ResolvedConfirmed in each tool so that users are prompted to leave a comment.",
      "Turn on Sentiment Analysis in the agent's advanced settings so that comments from the Microsoft Copilot channel are captured."
    ],
    answer: [1, 2],
    explain: "Agents published to the Microsoft Copilot channel need admin consent in the Microsoft 365 admin center before user feedback, including reactions and comments, is shared and shown on the Monitor page. Viewing comments also requires the Bot Transcript Viewer security role. Sentiment analysis is an AI score of user messages and doesn't collect comments. Node execution events only add topic node logging to Application Insights. The conversationOutcome parameter sets a session outcome and doesn't prompt users for feedback.",
    src: SRC.analyticsImproveAgentEffectiveness
  },
  {
    id: "dp03", domain: "deploy", type: "single",
    q: "An insurance company's Microsoft Copilot Studio agent answers policy questions with generative answers from several knowledge sources. Before tuning the instructions and knowledge sources, the architect wants a built-in, AI-based assessment of whether answered questions were complete, relevant, and grounded, plus a reason for each low-quality answer. No custom tooling should be built. What should the architect use?",
    options: [
      "The Customer satisfaction section on the Monitor page, drilling down to sessions with Dissatisfied survey scores",
      "The Conversation outcomes chart on the Monitor page, comparing the share of Resolved confirmed and Resolved implied sessions",
      "Answer quality in the Generated answer rate and quality section, which labels sampled answers Good or Poor and gives reasons for Poor ones",
      "The Tool use section on the Monitor page, comparing how often each tool is called successfully over time"
    ],
    answer: [2],
    explain: "Answer quality uses AI to check a sample of answered questions for completeness, relevance, and groundedness. It labels each sampled answer Good or Poor and gives a reason for each Poor rating, which tells the team what to tune. Conversation outcomes show how sessions ended, not how good the answers were. The CSAT score comes from user surveys, not AI analysis of answer content. Tool use tracks how often tools are called and succeed, not the quality of generated answers.",
    src: SRC.analyticsImproveAgentEffectiveness
  },
  {
    id: "dp04", domain: "deploy", type: "single",
    q: "A bank's Microsoft Copilot Studio agent handles money transfers. By design, a business rule escalates any transfer over a set threshold to a human. The contact center manager sees a rising escalation count and wants to track only the escalations where the agent automatically handed off a user who couldn't finish a task, for example after several failed attempts. Which conversation outcome reason should the manager monitor?",
    options: [
      "Escalated sessions with the System unintended reason",
      "Escalated sessions with the User requested reason",
      "Escalated sessions with the System intended reason",
      "Resolved sessions with the Resolved implied reason"
    ],
    answer: [0],
    explain: "System unintended escalations happen automatically when a session exceeds thresholds a maker set, such as repeated failures, and usually mean the user is stuck. System intended escalations come from deliberate business rules like the transfer threshold, so they're expected and need no investigation. User requested escalations happen when a user explicitly asks for a human. Resolved implied is a resolved outcome, not an escalation.",
    src: SRC.analyticsImproveAgentEffectiveness
  },
  {
    id: "dp05", domain: "deploy", type: "single",
    q: "A retailer runs a prompt agent in Foundry Agent Service that calls several tools to check inventory and pricing. Users report occasional slow responses, and the team needs to find out which step of a slow run (a model call or a particular tool call) is adding the latency before deciding what to tune. What should the architect recommend?",
    options: [
      "Review the Tool use section on the Microsoft Copilot Studio Monitor page to compare tool success rates over time",
      "Schedule red team scans on the agent to detect which adversarial prompts are causing the slow responses",
      "Create a continuous evaluation rule that runs the built-in violence evaluator on every agent response completion",
      "Connect Application Insights to the Foundry project for tracing and inspect the spans of slow runs to see the duration of each model and tool call"
    ],
    answer: [3],
    explain: "Foundry tracing, which is generally available for prompt agents, stores telemetry in Application Insights. It records the inputs, outputs, tool calls, token use, and latency of each step as spans in the order they ran, so the team can see which step caused a latency spike. The violence evaluator checks content safety, not latency. Red team scans look for security risks such as data leakage. The Copilot Studio Monitor page covers Copilot Studio agents, not Foundry Agent Service agents.",
    src: SRC.traceAgentConcept
  },
  {
    id: "dp06", domain: "deploy", type: "single",
    q: "A retailer is preparing to deploy an HR policy agent built in Microsoft Copilot Studio. The test team used agent evaluation to generate a full question set from the HR policy documents. Subject matter experts have not written any expected responses yet. The release manager still wants an aggregate score now that shows whether answers are relevant, grounded in the retrieved policies, and complete. Which test method should the architect recommend for this first evaluation run?",
    options: [
      "Text similarity, with a cosine similarity pass threshold",
      "Exact match against each generated question",
      "Compare meaning, with a pass score set on intent similarity",
      "General quality, scored by a large language model"
    ],
    answer: [3],
    explain: "General quality uses an LLM to score relevance, groundedness, completeness and abstention, and it is the only listed method that needs no expected answers. Compare meaning, text similarity and exact match all compare the agent's answer to an expected answer. Any test case without one returns an Invalid result, so none of them can score this test set yet.",
    src: SRC.analyticsAgentEvaluationOverview
  },
  {
    id: "dp07", domain: "deploy", type: "single",
    q: "A distributor trained an AI Builder prediction model to flag invoices that are likely to be paid late. Historically, about half of the invoices were paid late. After training, the model reports an accuracy of about 99.5 percent and a performance grade of D. The architect must define the validation criteria that decide whether the model can be published. How should the architect handle this result?",
    options: [
      "Approve the model for publishing, because accuracy near 100 percent is the strongest evidence of a production-ready model",
      "Add more columns that correlate strongly with the late-payment outcome so that the grade moves from D to A",
      "Treat the score as likely overfitting, then check top influencers and remove any column directly correlated with the outcome before retraining",
      "Cut the training data down to the minimum row count so that the model generalizes instead of memorizing"
    ],
    answer: [2],
    explain: "AI Builder gives a D grade when a model scores at or near 100 percent. That score usually means a data column is directly correlated with the result, so the guidance is to remove that column and retrain. Publishing on that score ignores the overfit warning. Shrinking the data goes against the advice to add more correctly labeled rows. Adding highly correlated columns makes the leakage worse.",
    src: SRC.predictionPerformance
  },
  {
    id: "dp08", domain: "deploy", type: "multi",
    q: "A consulting firm is building a shared library of approved Microsoft 365 Copilot prompts. The architect reviews a submitted prompt that reads: summarize the Atlas project, also draft next year's budget and tell me what competitors are doing. The architect must give feedback that brings the prompt in line with Copilot prompting best practices. Which recommendations should the architect make?",
    options: [
      "State the purpose, tone, and required length of the output that Copilot should produce",
      "Approve the prompt for reuse once the first response looks fine, because Copilot output does not need review",
      "Shorten the prompt to a few keywords, the way a user would enter a web search query",
      "Split the unrelated requests into separate prompts and finish one task before starting the next",
      "Rewrite the prompt in the team's informal slang so that Copilot mirrors the team's voice"
    ],
    answer: [0, 3],
    explain: "The guidance says not to combine multiple or conflicting requests in one prompt and to finish one task before starting another. It also says to be clear and specific about topic, purpose, tone and required length. Cutting the prompt to keywords makes it vaguer, and the guidance says to be as specific as possible. Slang tends to produce low-quality responses. Responses should always be checked for accuracy and the prompt refined.",
    src: SRC.p3ReviewPromptingBestPractices
  },
  {
    id: "dp09", domain: "deploy", type: "single",
    q: "A manufacturer is implementing Dynamics 365 Sales, Dynamics 365 Customer Service, and Dynamics 365 Supply Chain Management. Copilot agents are embedded across the prospect-to-cash process, and the solution integrates with an external transportation system. The architect must design the end-to-end testing approach that confirms readiness for go-live. Which approach should the architect recommend?",
    options: [
      "Test each Dynamics 365 app in isolation and leave cross-app and transportation integrations to the mock cutover",
      "Have developers run end-to-end tests on individual forms, fields, and workflows in the development environment",
      "Run a single end-to-end cycle after the build is complete, using demo data in a developer environment",
      "Plan multiple end-to-end cycles in an integrated test environment with fully migrated legacy data and the latest solution version"
    ],
    answer: [3],
    explain: "End-to-end testing connects every in-scope process and integration in an integrated test environment. It needs a full set of migrated legacy data and the latest solution version, and the guidance recommends planning multiple cycles. A single late cycle on demo data is the risky pattern the guidance warns against. Developer tests on individual components are unit testing. Mock cutover rehearses the deployment process and does not replace integrated cross-app testing.",
    src: SRC.testingStrategyTestTypes
  },
  {
    id: "dp10", domain: "deploy", type: "single",
    q: "Contoso's customer service agent reads routing and escalation rules from custom Dataverse configuration tables. The architect plans to move these rows from development to test and production with the Configuration Migration tool, and every release will reimport the full dataset. Rerunning an import must update matching records instead of creating duplicates. What should the architect specify?",
    options: [
      "Disable plug-ins on the target tables before export and leave them disabled after import",
      "Rely on the tool's Validate Schema step to detect records that already exist in the target and skip them during import",
      "Define a uniqueness condition for each table in the export schema, based on a combination of fields compared against the target",
      "Configure the tool to automatically move DateTime fields forward at import"
    ],
    answer: [2],
    explain: "The Configuration Migration tool compares each record against the target by using the uniqueness condition defined for the entity. If it finds a match it updates the record, and if it doesn't it creates one, so reimports don't produce duplicates. Schema validation only checks that the selected entities have their required dependencies and data before export, and it doesn't match or skip records in the target. Moving DateTime fields forward is meant for demo environments. Disabling plug-ins is a temporary import setting that the tool re-enables afterward, and it has nothing to do with duplicate detection.",
    src: SRC.manageConfigurationData
  },
  {
    id: "dp11", domain: "deploy", type: "multi",
    q: "Fabrikam builds Copilot Studio agents that call a custom connector and Power Automate flow actions. The connector's endpoint URL and API key differ between development, test, and production, and nobody may edit the production agent directly. Which practices should the architect include in the ALM design?",
    options: [
      "Create a separate solution for every topic, action, and connector, even when they always release together",
      "Apply urgent fixes to topics and actions directly in production, then copy the changes back to development",
      "Export the solution as managed and deploy that managed solution to test and production",
      "Configure the test environment as a production type environment so it matches production exactly",
      "Use environment variables for the connector settings and secrets that change across environments"
    ],
    answer: [2, 4],
    explain: "The Copilot Studio ALM golden rules call for environment variables for settings and secrets that change between environments, and for exporting and deploying solutions as managed to every environment except development. Fixing agents directly in production breaks the rule against customizing outside a development environment. Separate solutions are recommended only when components must deploy independently. The guidance says test, like development, should be a sandbox type environment, and only production should be a production type environment.",
    src: SRC.alm
  },
  {
    id: "dp12", domain: "deploy", type: "single",
    q: "Northwind builds prompt-based agents in Foundry Agent Service. Someone edited an agent's instructions directly in the production project, answer quality dropped, and nobody could tell what had changed or roll it back quickly. The architect must design an ALM process that makes instruction changes auditable and reversible and checks their quality before they reach production. What should the architect recommend?",
    options: [
      "Run evaluations only against live production traffic after each release, and skip pre-deployment checks to speed up delivery",
      "Store agent instructions in source control as configuration code and run shared evaluations as a gate in the CI/CD pipeline before deployment",
      "Move every agent to the largest available model so that instruction changes have less effect on output quality",
      "Keep editing instructions in the production project and rely on tracing to detect degraded responses after each change"
    ],
    answer: [1],
    explain: "The Cloud Adoption Framework says to treat agent instructions as configuration code kept in source control, which gives version control, peer review, and rollback. It also says to put evaluations in CI/CD pipelines so issues are caught before production deployment. Editing in production and relying on tracing, or evaluating only after release, catches problems only once users are already affected. Defaulting to the largest model raises cost and quota pressure and doesn't make changes auditable or reversible.",
    src: SRC.buildSecureProcess
  },
  {
    id: "dp13", domain: "deploy", type: "single",
    q: "Adatum uses an AI Builder document processing model in a Power Automate invoice flow. The model was built in a development environment and deployed to production in a managed solution. The finance team has new invoice layouts and wants the model to recognize them. What should the architect include in the ALM process?",
    options: [
      "Import the solution as unmanaged in production so that makers can retrain and republish the model there",
      "Add the training documents to the solution so the production environment can retrain the model after import",
      "Train a new version of the imported model directly in the production environment by using the new sample documents",
      "Train and publish a new model version in the development environment, then export the solution and import the update into production"
    ],
    answer: [3],
    explain: "A solution carries only the AI model's executable, not its training data. For imported document processing models, creating and training new versions is disabled. Retraining therefore has to happen in the development environment, and the newly published version is redeployed through the solution. Training in production isn't possible because the training data doesn't move with the model. Changing an imported model creates unmanaged customizations that can block future updates, and importing as unmanaged still wouldn't bring the training dataset across.",
    src: SRC.distributeModel
  },
  {
    id: "dp14", domain: "deploy", type: "single",
    q: "Litware runs Dynamics 365 Finance and Supply Chain Management. Its draft ALM plan has developers validate Copilot summaries in their developer environments deployed through Lifecycle Services before promoting changes to sandbox and production. What should the architect change in the plan?",
    options: [
      "Enable dual-write in every environment, because Copilot features in finance and operations apps require it",
      "Validate Copilot features in environments that have Power Platform Integration enabled, because Copilot isn't supported in developer environments deployed through Lifecycle Services",
      "Disable the Publish bots with AI features tenant setting until changes reach production, so that Copilot stays off in test environments",
      "Install the Copilot for finance and operations apps solution in the developer environments so that Copilot summaries work there"
    ],
    answer: [1],
    explain: "Copilot features in finance and operations apps need Power Platform Integration enabled in Lifecycle Services, and Copilot and AI agents aren't supported in developer environments deployed through Lifecycle Services. Validation therefore has to move to environments that meet those requirements. Dual-write isn't required. Installing the Copilot apps doesn't make developer environments supported. Disabling the tenant setting would turn off Copilot features altogether, so nothing could be tested.",
    src: SRC.enableCopilot
  },
  {
    id: "dp15", domain: "deploy", type: "single",
    q: "A company runs Dynamics 365 Contact Center. Its chat workstreams hand conversations to Copilot Studio agents and send Customer Voice surveys after each conversation. The architect is writing the runbook for moving channel and workstream configuration from test to production with solutions and the Configuration Migration tool. Which step should the runbook include?",
    options: [
      "Before export, review the solution components and record which ones reference Copilot Studio agents or Customer Voice surveys so they can be configured in production",
      "Migrate the channel workstreams first, and then migrate queues and skill-based routing rulesets",
      "Rely on the solution import to carry over the AI and analytics settings for the channels",
      "Include the post-conversation survey columns in the Configuration Migration tool schema so that survey records move with the workstreams"
    ],
    answer: [0],
    explain: "The guidance says to review solution components before export and note records that reference Copilot Studio copilots, Customer Voice surveys, or Azure Communication Services, because those need configuration in the destination environment. Survey columns must be left out of the schema, because survey records sync with Customer Voice in each environment and can't be migrated. Workstreams come last, after rulesets, capacity profiles, and queues. AI and analytics settings are explicitly out of scope for this migration.",
    src: SRC.migrateChannelConfigUsingSolutions
  },
  {
    id: "dp16", domain: "deploy", type: "single",
    q: "Contoso lets business makers build and publish agents in Microsoft Copilot Studio. The security team discovered that a maker published an agent set to No authentication, so anyone with the link could chat with it. The admin must centrally prevent any agent from being published without Microsoft Entra ID sign-in, while makers can still publish authenticated agents. What should the architect recommend?",
    options: [
      "Turn off the tenant setting in the Power Platform admin center that allows publishing agents that use generative AI features",
      "Create a data policy in the Power Platform admin center that blocks the Chat without Microsoft Entra ID authentication in Copilot Studio connector",
      "Create a data policy in the Power Platform admin center that blocks the HTTP connector",
      "Configure environment routing so that makers build their agents in personal developer environments"
    ],
    answer: [1],
    explain: "Blocking the Chat without Microsoft Entra ID authentication in Copilot Studio connector in a data policy forces makers to use Authenticate with Microsoft or Authenticate manually, so users must sign in. Turning off generative AI agent publishing would block authenticated agents too. Blocking the HTTP connector only stops HTTP request nodes, and environment routing gives makers a safe space to build but does not enforce user authentication.",
    src: SRC.adminDataLossPrevention
  },
  {
    id: "dp17", domain: "deploy", type: "single",
    q: "Northwind Traders runs an agent backend in Azure Container Apps that calls several models deployed in a Microsoft Foundry resource, including OpenAI models and a Mistral model. The security policy forbids API keys or other shared secrets and requires least-privilege access for inference calls. Any keys that were already handed out must stop working. What should the architect design?",
    options: [
      "Store the resource keys in Azure Key Vault and have the app retrieve them at startup, regenerating the keys on a schedule",
      "Assign the Contributor role on the Foundry resource to the app's managed identity and keep key-based authentication enabled as a fallback",
      "Assign the Cognitive Services User role to the app's managed identity, disable key-based authentication on the resource, and regenerate the existing keys",
      "Assign the Cognitive Services OpenAI User role to the app's managed identity and disable key-based authentication on the resource"
    ],
    answer: [2],
    explain: "Cognitive Services User is the role required to make inference calls with Microsoft Entra ID across the Foundry resource, and disabling key-based authentication plus regenerating keys removes shared secrets, including keys already distributed. Contributor does not grant inference access and keeping keys violates the policy. Key Vault still relies on keys, and Cognitive Services OpenAI User only grants access to OpenAI models, so the Mistral calls would fail.",
    src: SRC.configureEntraId
  },
  {
    id: "dp18", domain: "deploy", type: "single",
    q: "Fabrikam built an agent in Foundry Agent Service that processes inbound supplier emails and can call a tool to update supplier payment details. The application passes the content of each email to the agent as document content in the request. During testing, a red team sent an email containing hidden text that instructed the agent to change a supplier's bank account. The agent's guardrail uses the default settings. Which change best mitigates this attack?",
    options: [
      "Rely on the default user prompt attack detection, because it already scans all content that the model receives",
      "Lower the severity threshold for the hate and violence content categories in the guardrail",
      "Enable document attack detection in the guardrail assigned to the agent so that Prompt Shields scan the email content for embedded instructions",
      "Add groundedness detection so that the agent's responses are checked against the source emails"
    ],
    answer: [2],
    explain: "Hidden instructions inside emails are document (indirect) attacks, and document attack detection is off by default and must be enabled in the guardrail for the model deployment or agent. Default user prompt attack detection only targets attacks in the user prompt. Harmful content category thresholds do not detect injected instructions, and groundedness detection checks whether output is supported by sources rather than whether sources contain attacks.",
    src: SRC.jailbreakDetection
  },
  {
    id: "dp19", domain: "deploy", type: "single",
    q: "Woodgrove Bank's review board checks a claims-processing agent built in Microsoft Foundry against the Discover, Protect, and Govern pattern from the Microsoft Responsible AI Standard. The team has already configured content filters and guardrails, and has set up tracing and continuous monitoring for production. The board says one stage has no activity yet. Which activity should the team add?",
    options: [
      "Enable customer-managed keys to encrypt the agent's stored data",
      "Configure monitoring alerts that detect anomalies in agent behavior in production",
      "Test the agent with adversarial prompts to identify potential jailbreak vulnerabilities",
      "Assign an additional guardrail that blocks harmful outputs before they reach users"
    ],
    answer: [2],
    explain: "The missing stage is Discover, which covers finding quality, safety, and security risks, for example by testing the agent with adversarial prompts for jailbreak vulnerabilities. Additional guardrails belong to Protect and production monitoring belongs to Govern, both of which the team already covers. Customer-managed keys are an encryption control and are not part of the Discover stage.",
    src: SRC.responsibleUseOfAiOverview
  },
  {
    id: "dp20", domain: "deploy", type: "single",
    q: "Lucerne Publishing, based in the EU, is building an agent on a GPT model in Microsoft Foundry. Legal requires that prompts and completions are processed only within the EU Data Boundary. Traffic is bursty, so the company wants pay-per-token billing, and it wants higher default quota than geography-based deployment types provide. Which deployment type should the architect choose?",
    options: [
      "Data Zone Standard in a region within the EU data zone",
      "Developer",
      "Global Provisioned",
      "Global Standard"
    ],
    answer: [0],
    explain: "Data Zone Standard is pay-per-token, keeps processing within the Microsoft-defined data zone (the EU zone follows the Azure EU Data Boundary), and has higher default quotas than geography-based types. Global Standard and Global Provisioned may process data in any Azure region, and Global Provisioned uses reserved capacity. Developer is only for fine-tuned model evaluation and has no data residency guarantee.",
    src: SRC.deploymentTypes
  },
  {
    id: "dp21", domain: "deploy", type: "single",
    q: "Alpine Ski House is building a Foundry agent grounded on an Azure AI Search index. The content comes from a custom claims system that uses its own user and group permission model, not Microsoft Entra ID, and an application pushes the documents into the index. Each user must receive grounding only from documents they are entitled to see, using a generally available approach. What should the architect design?",
    options: [
      "Use native ACL and RBAC scope enforcement by passing each user's Microsoft Entra token with the query",
      "Configure the indexer to ingest Microsoft Purview sensitivity labels from the claims system",
      "Store the permitted user and group identifiers in a string field on each document and pass the caller's identity as a filter on every query",
      "Grant each user the Search Index Data Reader role on the index"
    ],
    answer: [2],
    explain: "Security filters store identities as strings in the index and trim results at query time; they are generally available and suited to custom access models and push-model indexes. Search Index Data Reader grants access to the whole index, not per document. Native ACL and RBAC scope enforcement is preview and relies on Entra permission metadata from ADLS Gen2 or Azure blobs, and Purview label ingestion only supports sources such as Blob Storage, ADLS Gen2, SharePoint, and OneLake.",
    src: SRC.searchDocumentLevelAccessOverview
  },
  {
    id: "dp22", domain: "deploy", type: "multi",
    q: "Tailspin Toys' compliance team needs an audit trail showing who changed the authentication settings of Microsoft Copilot Studio agents and who published them. The security operations center also wants to receive alerts when such agent activity occurs. Which actions should the architect recommend?",
    options: [
      "Enable customer-managed encryption keys for the Copilot Studio environments",
      "Use Microsoft Sentinel to monitor and alert on agent activities from the audit logs",
      "Configure environment routing so that maker changes are tracked in personal developer environments",
      "Search the Microsoft Purview audit logs for Copilot Studio maker activities such as authentication and publishing changes",
      "Enable Customer Lockbox so that every change to an agent's configuration is recorded"
    ],
    answer: [1, 3],
    explain: "Admins get full visibility into maker audit logs, such as authentication updates and publishing, in Microsoft Purview, and they can monitor and receive alerts on agent activities through Microsoft Sentinel. Customer Lockbox governs secure access to customer data and does not cover audit logging. Customer-managed keys only control encryption, and environment routing gives makers a safe space to build without creating an audit trail.",
    src: SRC.securityAndGovernance
  },
  {
    id: "dp23", domain: "deploy", type: "single",
    q: "An insurer built a claims-policy agent in Microsoft Copilot Studio that uses generative orchestration. The agent's knowledge is a set of individual PDF and Word files stored in SharePoint. The agent hasn't been released yet, so it has no production conversations. The test lead wants Copilot Studio to generate about 80 test questions drawn from the content of the policy documents. What should the architect recommend?",
    options: [
      "Generate a full question set that uses the agent's topics as the reference for the questions",
      "Generate a full question set that uses the agent's knowledge sources as the reference, and set the number of questions to generate",
      "Create the test set from a theme in the agent's analytics so that it reflects grouped user questions",
      "Create a quick question set, which Copilot Studio generates from the agent's description, instructions, and capabilities"
    ],
    answer: [1],
    explain: "A full question set lets Copilot Studio generate test cases from a knowledge source and lets the maker choose how many questions to generate. The knowledge reference scans the agent's knowledge, works best for agents that use generative orchestration, and supports individual PDF, Word, and SharePoint files. A quick question set produces only 10 questions, and it builds them from the agent's description, instructions, and capabilities rather than from the document content. The topics reference builds questions from the agent's topics and is meant for agents that use classic orchestration. Theme-based test sets come from questions real users have asked, and this unreleased agent has none.",
    src: SRC.analyticsAgentEvaluationCreate
  },
  {
    id: "dp24", domain: "deploy", type: "single",
    q: "A bank runs dozens of agents built in Microsoft Copilot Studio, Foundry Agent Service, and a third-party platform. A security review found agents that nobody could link to an owner, and several agents share one service account. Agent 365 hasn't been adopted at scale. The CISO wants a governance baseline that makes every agent's actions traceable to that agent and keeps every agent under governance. What should the architect recommend?",
    options: [
      "Let each platform team keep its own agent list and team-level rules, and keep the shared service account so that access can be revoked in one place",
      "Record every agent in one organizational inventory with its owner, purpose, platform, and access scope, and run each agent under its own distinct identity managed in Microsoft Entra Agent ID",
      "Run AI Red Teaming Agent scans on every agent to find the agents that have no assigned owner",
      "Block creation of new agents in every environment until Agent 365 is purchased, and start the agent inventory only after that"
    ],
    answer: [1],
    explain: "The Cloud Adoption Framework recommends recording every agent in a single organizational inventory with its ownership, purpose, platform, and access scope. It also says each agent should run under a distinct identity, so that every action can be traced to that agent. When Agent 365 isn't available at scale, it recommends Microsoft Entra Agent ID as the authoritative source for agent identities and ownership. Separate team lists and team-level rules are what the guidance warns against, and a shared service account makes actions impossible to trace to one agent. Blocking all agent creation while waiting for Agent 365 ignores the recommended Entra Agent ID fallback and the advice to start with an audit-based approach. Red teaming looks for vulnerabilities such as prompt injection and data leakage, not for missing owners.",
    src: SRC.governanceSecurityAcrossOrganization
  }
];
