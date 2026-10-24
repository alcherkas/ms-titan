// GH-300 practice question bank. Original questions written against the official
// skills outline (as of 2026-08-07) and cited GitHub / Microsoft Learn docs.
//
// Fields: id, domain (key of DOMAINS), type ("single" | "multi"), q, options,
// answer (array of option indexes), explain, src (URL).
window.DOMAINS = {
  responsible: { name: "Use GitHub Copilot responsibly", weight: "15-20%" },
  features: { name: "Use GitHub Copilot features", weight: "25-30%" },
  data: { name: "Understand GitHub Copilot data and architecture", weight: "10-15%" },
  prompt: { name: "Apply prompt engineering and context crafting", weight: "10-15%" },
  productivity: { name: "Improve developer productivity with GitHub Copilot", weight: "10-15%" },
  privacy: { name: "Configure privacy, content exclusions, and safeguards", weight: "10-15%" }
};

const SRC = {
  guide: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300",
  respUse: "https://docs.github.com/en/copilot/responsible-use/copilot-code-completion",
  plans: "https://docs.github.com/en/copilot/get-started/plans",
  ubb: "https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises",
  restSeats: "https://docs.github.com/en/rest/copilot/copilot-user-management",
  excludeHowTo: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot",
  cliInstall: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli",
  subagents: "https://code.visualstudio.com/docs/copilot/agents/subagents",
  prSummaries: "https://docs.github.com/en/copilot/responsible-use/pull-request-summaries",
  promptFoundations: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices",
  ideSettings: "https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide",
  orgPolicies: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies",
  translate: "https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/translate-code",
  cheat: "https://docs.github.com/en/copilot/reference/chat-cheat-sheet",
  promptEng: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering",
  flow: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow",
  data: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/4-github-copilot-data",
  exclusion: "https://docs.github.com/en/copilot/concepts/context/content-exclusion",
  cli: "https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli",
  cliRef: "https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference",
  codeRef: "https://docs.github.com/en/copilot/concepts/completions/code-referencing",
  custom: "https://docs.github.com/en/copilot/concepts/prompting/response-customization",
  policies: "https://docs.github.com/en/copilot/concepts/policies",
  spaces: "https://docs.github.com/en/copilot/concepts/context/spaces",
  audit: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-audit-logs",
  cloud: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent",
  review: "https://docs.github.com/en/copilot/concepts/agents/code-review"
};

window.QUESTIONS = [
  // ---------------------------------------------------------------- Responsible AI
  {
    id: "r01", domain: "responsible", type: "single",
    q: "A developer accepts a Copilot suggestion that later turns out to contain a SQL injection vulnerability. According to GitHub's responsible-use guidance, who bears the risk for that code?",
    options: [
      "GitHub, because the suggestion came from its service",
      "The model provider that trained the underlying LLM",
      "The user, who assumes the risks associated with generated code they accept",
      "The organization owner who enabled Copilot for the team"
    ],
    answer: [2],
    explain: "GitHub's guidance states that users assume all risks associated with generated code, including security vulnerabilities, bugs and IP infringement. That is why it tells you to review and test what you accept.",
    src: SRC.respUse
  },
  {
    id: "r02", domain: "responsible", type: "multi",
    q: "Which of the following are documented limitations of Copilot code completion? (Choose three.)",
    options: [
      "It may handle complex code structures or obscure languages less well",
      "Training-data biases may favor certain languages or coding styles",
      "Output can look valid while being semantically or syntactically incorrect",
      "It guarantees suggestions are free of security vulnerabilities",
      "It always reads your entire repository before suggesting code"
    ],
    answer: [0, 1, 2],
    explain: "GitHub lists limited scope, potential biases and inaccurate code as limitations, along with security risks and public code matches. Copilot doesn't guarantee secure code, and it builds suggestions from the code you're writing plus context such as open files. It doesn't read your whole repository for every suggestion.",
    src: SRC.respUse
  },
  {
    id: "r03", domain: "responsible", type: "single",
    q: "A team notices Copilot suggestions are noticeably weaker in a niche, rarely used programming language than in Python. What best explains this?",
    options: [
      "Copilot disables suggestions for languages without an official extension",
      "Suggestion quality depends on how much training data exists for the language",
      "The toxicity filter blocks most suggestions in unfamiliar languages",
      "Content exclusion is automatically applied to niche languages"
    ],
    answer: [1],
    explain: "Under 'limited scope', GitHub notes that suggestion quality depends on how much training data exists for each language. Obscure languages tend to get weaker suggestions.",
    src: SRC.respUse
  },
  {
    id: "r04", domain: "responsible", type: "single",
    q: "Which risk does GitHub describe as 'overreliance'?",
    options: [
      "Developers exceeding their monthly AI credit allowance",
      "Users accepting incorrect output, especially when mistakes are hard to detect",
      "Copilot calling too many tools in agent mode",
      "Organizations assigning more seats than they need"
    ],
    answer: [1],
    explain: "GitHub warns that users may rely on Copilot too much and accept incorrect output when errors are hard to spot. The mitigation is to review, test and validate suggestions.",
    src: SRC.respUse
  },
  {
    id: "r05", domain: "responsible", type: "single",
    q: "A team is building software that helps make lending decisions. In consequential domains such as finance, healthcare or housing, what does GitHub's guidance recommend?",
    options: [
      "Disable Copilot entirely for these projects",
      "Enable the public code filter, which removes bias from suggestions",
      "Ensure affected stakeholders can understand decisions, appeal them and update input data",
      "Rely on the post-processing filter to check fairness"
    ],
    answer: [2],
    explain: "For consequential or sensitive domains, the guidance is to make sure affected stakeholders can understand decisions, appeal them and update input data. None of the filters guarantees fairness.",
    src: SRC.respUse
  },
  {
    id: "r06", domain: "responsible", type: "single",
    q: "Which statement best reflects how GitHub positions Copilot in the development process?",
    options: [
      "A replacement for code review on low-risk changes",
      "A tool that supports human programming rather than replacing it",
      "An autonomous system that is accountable for the code it writes",
      "A compliance tool that certifies code against industry regulations"
    ],
    answer: [1],
    explain: "GitHub's mitigation guidance tells users to treat Copilot as a tool that supports human programming, not a replacement for it.",
    src: SRC.respUse
  },
  {
    id: "r07", domain: "responsible", type: "single",
    q: "Which practice most directly reduces the security risk of using Copilot-generated code?",
    options: [
      "Only accept suggestions longer than 150 characters",
      "Turn off content exclusions so Copilot sees more context",
      "Follow secure coding practices and apply normal code review to generated code",
      "Rely on Copilot's content filters alone to remove vulnerable code"
    ],
    answer: [2],
    explain: "GitHub recommends secure coding practices, such as avoiding hard-coded passwords and SQL injection, and normal code review for Copilot output. Copilot's content filters can block some harmful or insecure content, but GitHub says users should still review suggestions. A filter doesn't replace secure coding and code review.",
    src: SRC.respUse
  },
  {
    id: "r08", domain: "responsible", type: "single",
    q: "Copilot displays an inline suggestion in your editor. What happens to your file before you take any action?",
    options: [
      "The suggestion is written to disk and can be undone",
      "Nothing. No code changes occur without deliberate user action, such as accepting the suggestion",
      "The suggestion is committed to a temporary branch",
      "The suggestion is applied if it passes the post-processing checks"
    ],
    answer: [1],
    explain: "GitHub states that suggestions are applied only when the user accepts them. No code changes occur without deliberate user action.",
    src: SRC.respUse
  },
  {
    id: "r09", domain: "responsible", type: "single",
    q: "A compliance officer at a regulated company asks whether adopting Copilot automatically satisfies the company's industry regulations. What is the correct response?",
    options: [
      "Yes, Copilot Business and Enterprise are certified for all regulated industries",
      "Yes, as long as content exclusion is configured",
      "No. Customers need to evaluate their own specific legal and regulatory obligations",
      "No. Copilot cannot be used in regulated industries"
    ],
    answer: [2],
    explain: "Under its best practices, GitHub tells customers to evaluate legal and regulatory considerations. Customers need to evaluate their specific obligations, and AI platforms may not be appropriate for every industry or scenario.",
    src: SRC.respUse
  },
  {
    id: "r10", domain: "responsible", type: "single",
    q: "Why can a Copilot suggestion occasionally match code from its training set?",
    options: [
      "Copilot copies code from the most-starred repository for each language",
      "Copilot generates code probabilistically, so matches are possible though unlikely",
      "Copilot searches GitHub at runtime and pastes the best match",
      "Matches only happen when content exclusion is disabled"
    ],
    answer: [1],
    explain: "Copilot generates code probabilistically. GitHub describes the chance of reproducing training-set code as low but not zero, which is why the public code filter and code referencing exist.",
    src: SRC.respUse
  },

  // ---------------------------------------------------------------- Features
  {
    id: "f01", domain: "features", type: "single",
    q: "In Copilot Chat in VS Code, which slash command generates unit tests for the selected code?",
    options: ["/fix", "/explain", "/tests", "/new"],
    answer: [2],
    explain: "/tests generates unit tests for the selected code. /fix proposes a fix for problems in the selected code, and /explain explains the code in the active editor.",
    src: SRC.cheat
  },
  {
    id: "f02", domain: "features", type: "single",
    q: "You select a function that throws an error and want Copilot Chat to propose a fix for the problems in it. Which slash command fits best?",
    options: ["/explain", "/fix", "/tests", "/clear"],
    answer: [1],
    explain: "/fix proposes a fix for problems in the selected code.",
    src: SRC.cheat
  },
  {
    id: "f03", domain: "features", type: "single",
    q: "Which chat participant in VS Code knows about the integrated terminal shell and its contents?",
    options: ["@vscode", "@github", "@terminal", "@azure"],
    answer: [2],
    explain: "@terminal has context about the VS Code terminal shell and its contents. @vscode covers VS Code commands and features, @github provides GitHub-specific skills, and @azure covers Azure services (in preview).",
    src: SRC.cheat
  },
  {
    id: "f04", domain: "features", type: "single",
    q: "A developer wants to ask Copilot how to enable a particular editor setting in VS Code. Which chat participant is most appropriate?",
    options: ["@terminal", "@vscode", "@github", "@azure"],
    answer: [1],
    explain: "@vscode knows about VS Code commands and features, so it is the right participant for questions about the editor itself.",
    src: SRC.cheat
  },
  {
    id: "f05", domain: "features", type: "single",
    q: "Which chat variable includes the text you have highlighted in the editor in your prompt?",
    options: ["#file", "#project", "#selection", "#path"],
    answer: [2],
    explain: "#selection includes the currently selected text in the prompt. #file includes the current file's content, #project includes the project context, and #path includes the file path.",
    src: SRC.cheat
  },
  {
    id: "f06", domain: "features", type: "single",
    q: "You want Copilot CLI to complete a single task from a script and then exit, with no interactive session. How do you invoke it?",
    options: [
      "copilot --interactive \"<task>\"",
      "copilot -p \"<task>\"",
      "copilot init \"<task>\"",
      "copilot /ask \"<task>\""
    ],
    answer: [1],
    explain: "Programmatic mode passes a single prompt with -p or --prompt. The CLI completes the task and exits. Running 'copilot' with no prompt starts an interactive session.",
    src: SRC.cli
  },
  {
    id: "f07", domain: "features", type: "single",
    q: "A developer runs Copilot CLI with both --allow-all-tools and --deny-tool for a specific shell command. What is the effect?",
    options: [
      "--allow-all-tools wins, so the denied tool is still allowed",
      "The CLI refuses to start because the options conflict",
      "The denied tool is blocked. --deny-tool takes precedence over --allow-all-tools and --allow-tool",
      "Whichever option appears last on the command line wins"
    ],
    answer: [2],
    explain: "GitHub documents that --deny-tool takes precedence over the --allow-all-tools and --allow-tool options.",
    src: SRC.cli
  },
  {
    id: "f08", domain: "features", type: "single",
    q: "When you start Copilot CLI, it asks you to confirm trust for a directory. Why does GitHub advise against launching it from your home directory?",
    options: [
      "The CLI cannot read files in the home directory",
      "Trust covers the launch directory and its subdirectories, so you would grant access to everything under home",
      "Home-directory sessions use more AI credits",
      "Content exclusions are disabled in the home directory"
    ],
    answer: [1],
    explain: "Trust applies to the directory you launch from and its subdirectories. Launching from home would let Copilot work with everything under it, so GitHub says you typically should not launch from your home directory.",
    src: SRC.cli
  },
  {
    id: "f09", domain: "features", type: "single",
    q: "In a long Copilot CLI session, you want to free up context window space without starting over. Which slash command should you use?",
    options: ["/clear", "/compact", "/add-dir", "/agent"],
    answer: [1],
    explain: "/compact summarizes the conversation history to reduce context window usage. /clear (aliases /new and /reset) starts a new conversation and drops the history.",
    src: SRC.cliRef
  },
  {
    id: "f10", domain: "features", type: "single",
    q: "In an interactive Copilot CLI session, which slash command shows the MCP servers that are configured?",
    options: ["/agent", "/mcp", "/model", "/add-dir"],
    answer: [1],
    explain: "Copilot CLI supports MCP servers for extra tools and data sources, and /mcp lists the configured servers. /model changes the model.",
    src: SRC.cli
  },
  {
    id: "f11", domain: "features", type: "single",
    q: "A developer wants Copilot to research the repository, implement a change in the background and open a pull request while they keep working on something else. Which capability fits?",
    options: [
      "Inline code completion",
      "Copilot cloud agent, which works in an ephemeral cloud development environment",
      "The /explain slash command",
      "Copilot code review"
    ],
    answer: [1],
    explain: "Copilot cloud agent (formerly the coding agent) can research a repository, plan changes and implement them in the background. It runs in an ephemeral cloud development environment rather than your local IDE.",
    src: SRC.cloud
  },
  {
    id: "f12", domain: "features", type: "multi",
    q: "Which statements about Copilot cloud agent limits are correct? (Choose three.)",
    options: [
      "It can only change the repository specified when the task starts",
      "It opens one pull request per task",
      "Each session has a maximum execution time of 59 minutes",
      "It can work on several branches at once to parallelize a task",
      "Its session timeout can be raised above the maximum in copilot-setup-steps.yml"
    ],
    answer: [0, 1, 2],
    explain: "Cloud agent changes only the repository it was started in, opens one pull request per task, and works on one branch at a time. Sessions are capped at 59 minutes. You can set a shorter timeout with timeout-minutes in copilot-setup-steps.yml, but you can't extend the cap.",
    src: SRC.cloud
  },
  {
    id: "f13", domain: "features", type: "single",
    q: "A repository requires one approving review before merge. Copilot code review leaves feedback on a pull request. With default settings, does Copilot's review satisfy the requirement?",
    options: [
      "Yes, Copilot always submits an approving review when it finds no issues",
      "No. By default, Copilot's reviews do not count toward required approvals",
      "Yes, but only on Copilot Enterprise",
      "No, because Copilot cannot review pull requests in protected branches"
    ],
    answer: [1],
    explain: "By default, Copilot's reviews do not count toward required approvals. An opt-in Copilot approvals feature (in public preview) can change this, and new pushes dismiss that approval.",
    src: SRC.review
  },
  {
    id: "f14", domain: "features", type: "single",
    q: "Copilot reviewed a pull request, and the author has since pushed new commits. Automatic review of each push is not configured. How do they get Copilot to review again?",
    options: [
      "Copilot re-reviews automatically on every push",
      "Close and reopen the pull request",
      "Use the re-request button next to Copilot's name in the Reviewers menu",
      "Mention @copilot review in a commit message"
    ],
    answer: [2],
    explain: "Unless it is configured to review each push, Copilot reviews a pull request only once. Re-request a review from the Reviewers menu.",
    src: SRC.review
  },
  {
    id: "f15", domain: "features", type: "single",
    q: "A pull request edits .github/copilot-instructions.md and adds new review rules. When Copilot reviews this pull request, which version of the instructions does it use?",
    options: [
      "The version on the base branch",
      "The version on the head branch",
      "Neither. Code review ignores repository instructions",
      "The version on the repository's default branch, whichever branch is targeted"
    ],
    answer: [1],
    explain: "For pull requests, Copilot reads repository custom instructions, agent instructions and agent skills from the head branch, not the base branch.",
    src: SRC.review
  },
  {
    id: "f16", domain: "features", type: "single",
    q: "Where do you put repository-wide custom instructions so Copilot applies them to every request in that repository?",
    options: [
      ".github/copilot-instructions.md",
      ".copilot/config.yml",
      "docs/COPILOT.md",
      ".github/prompts/default.prompt.md"
    ],
    answer: [0],
    explain: "Repository-wide instructions go in a copilot-instructions.md file in the repository's .github directory.",
    src: SRC.custom
  },
  {
    id: "f17", domain: "features", type: "single",
    q: "You want custom instructions that apply only when Copilot works with files under a particular path. What should you create?",
    options: [
      "A NAME.instructions.md file in or below .github/instructions",
      "A second copilot-instructions.md file in that folder",
      "An organization-level policy",
      "A .copilotignore file"
    ],
    answer: [0],
    explain: "Path-specific instructions live in NAME.instructions.md files in or below .github/instructions. They apply to requests that involve matching files.",
    src: SRC.custom
  },
  {
    id: "f18", domain: "features", type: "single",
    q: "What is the key difference between prompt files and custom instructions?",
    options: [
      "Prompt files apply automatically, while custom instructions must be selected manually",
      "You choose when to use a prompt file in a chat, while custom instructions are applied automatically",
      "Prompt files work only in Copilot CLI",
      "Custom instructions can include only a single sentence"
    ],
    answer: [1],
    explain: "Prompt files hold reusable, task-specific instructions and context. Unlike custom instructions, you decide when to use them in a chat.",
    src: SRC.custom
  },
  {
    id: "f19", domain: "features", type: "single",
    q: "For Copilot Chat on GitHub.com, custom instructions exist at several levels. Which order runs from highest to lowest precedence?",
    options: [
      "Organization, then repository, then personal",
      "Repository, then personal, then organization",
      "Personal, then repository, then organization",
      "All levels have equal precedence"
    ],
    answer: [2],
    explain: "On GitHub.com, personal instructions take precedence, then repository instructions (path-specific, then repository-wide, then agent instructions), then organization instructions. Clients such as VS Code and Copilot CLI combine applicable files without a general precedence order.",
    src: SRC.custom
  },
  {
    id: "f20", domain: "features", type: "single",
    q: "A team wants to curate repositories, issues, design notes and uploaded diagrams into one reusable context that teammates can share when chatting with Copilot. Which feature fits?",
    options: ["Copilot Spaces", "Prompt files", "Content exclusion", "Copilot code review"],
    answer: [0],
    explain: "Copilot Spaces organize the context Copilot uses to answer questions. They can hold repositories, code, pull requests, issues, free text, images and uploads, and they can be shared. GitHub-based sources stay updated automatically.",
    src: SRC.spaces
  },
  {
    id: "f21", domain: "features", type: "single",
    q: "A developer gets Copilot licenses from two organizations in the same enterprise, and the organizations have conflicting settings for a policy. Which setting usually applies?",
    options: [
      "The most restrictive setting",
      "The least restrictive setting",
      "The setting of the organization that assigned the seat first",
      "The developer chooses in their personal settings"
    ],
    answer: [1],
    explain: "For organizations in the same enterprise, the least restrictive setting usually applies, with some exceptions. When licenses come from different enterprises, the most restrictive setting almost always applies.",
    src: SRC.policies
  },
  {
    id: "f22", domain: "features", type: "single",
    q: "At the enterprise level, which options are typically available to an enterprise owner for a Copilot feature policy?",
    options: [
      "Enabled or disabled only",
      "Enabled, disabled, or let organizations decide",
      "Organizations always decide. Enterprises cannot set policies",
      "Allowed for admins only, or allowed for everyone"
    ],
    answer: [1],
    explain: "For most policies, enterprise administrators can explicitly enable or disable the policy, or let organizations decide.",
    src: SRC.policies
  },
  {
    id: "f23", domain: "features", type: "single",
    q: "A security team wants to use the GitHub audit log to see which prompts developers sent to Copilot in their IDEs. Is this possible?",
    options: [
      "Yes, search for action:copilot.prompt",
      "Yes, but only on Copilot Enterprise",
      "No. The audit log does not include client session data such as the prompts users send locally",
      "Only for the last 28 days"
    ],
    answer: [2],
    explain: "The audit log records plan changes (settings, policies, license changes) and agent activity on GitHub. It does not include client session data such as locally sent prompts.",
    src: SRC.audit
  },
  {
    id: "f24", domain: "features", type: "multi",
    q: "Which statements about Copilot events in the audit log are correct? (Choose two.)",
    options: [
      "The search term action:copilot shows events related to your Copilot plan",
      "The audit log retains events for the last 180 days",
      "Audit log events are kept indefinitely",
      "Each accepted inline suggestion is recorded as an audit event"
    ],
    answer: [0, 1],
    explain: "Use action:copilot to filter Copilot plan events, such as copilot.cfb_seat_assignment_created when a license is assigned. The audit log keeps events for 180 days, and GitHub recommends streaming to a SIEM for longer history.",
    src: SRC.audit
  },
  {
    id: "f25", domain: "features", type: "single",
    q: "Which of the following is NOT included in Copilot Free?",
    options: [
      "Agent mode",
      "MCP support",
      "Blocking suggestions that match public code",
      "Copilot cloud agent"
    ],
    answer: [3],
    explain: "Agent mode, MCP and blocking public-code matches are on every plan. Cloud agent is in Pro, Pro+, Business and Enterprise, but not Free.",
    src: SRC.plans
  },
  {
    id: "f26", domain: "features", type: "multi",
    q: "Which plans include content exclusion and organization-wide policy management? (Choose two.)",
    options: ["Copilot Free", "Copilot Pro", "Copilot Business", "Copilot Enterprise", "Copilot Pro+"],
    answer: [2, 3],
    explain: "Content exclusion and organization-wide policy management are in Copilot Business and Copilot Enterprise only.",
    src: SRC.plans
  },
  {
    id: "f27", domain: "features", type: "single",
    q: "Under the usage-based billing GitHub introduced on June 1, 2026, how are included AI credits handled for Copilot Business and Enterprise?",
    options: [
      "Each user's unused credits expire, and overage is blocked",
      "Included credits are pooled across the enterprise, and extra usage is billed per credit unless capped by budget controls",
      "Credits apply only to code completions",
      "Credits are shared across all GitHub customers"
    ],
    answer: [1],
    explain: "Business ($19, 1,900 credits per user) and Enterprise ($39, 3,900 credits per user) include AI credits pooled at the billing-entity level, for example across the enterprise. Additional usage is enabled by default and billed at $0.01 per credit unless an admin disables paid usage or caps spending with budget controls. Code completions are not billed in AI credits. Older study material may still describe premium requests, the legacy model.",
    src: SRC.ubb
  },

  // ---------------------------------------------------------------- Data & architecture
  {
    id: "d01", domain: "data", type: "single",
    q: "Which sequence correctly describes the inbound flow of a Copilot prompt?",
    options: [
      "Toxicity filter, then context gathering, then LLM, then proxy",
      "Secure transmission and context gathering, then proxy filter, then toxicity filter, then LLM code generation",
      "LLM code generation, then proxy filter, then context gathering",
      "Proxy filter, then LLM code generation, then context gathering, then toxicity filter"
    ],
    answer: [1],
    explain: "The prompt is sent over HTTPS while context is gathered. It then passes through a proxy filter and toxicity filtering before reaching the LLM for code generation.",
    src: SRC.flow
  },
  {
    id: "d02", domain: "data", type: "single",
    q: "Where is the Copilot proxy hosted, and what does it block on the inbound path?",
    options: [
      "On the developer's machine. It blocks oversized files",
      "In a GitHub-owned Microsoft Azure tenant. It blocks attempts to hack the prompt or make the system reveal how it generates suggestions",
      "In the customer's own cloud. It blocks private repositories",
      "In the model provider's data center. It blocks non-English prompts"
    ],
    answer: [1],
    explain: "The proxy runs in a GitHub-owned Microsoft Azure tenant. It filters traffic and blocks attempts to hack the prompt or manipulate the system into revealing how the model generates suggestions.",
    src: SRC.flow
  },
  {
    id: "d03", domain: "data", type: "multi",
    q: "Which of the following does Copilot gather as context when building a code completion prompt? (Choose three.)",
    options: [
      "Code before and after the cursor",
      "The filename and type of the file being edited",
      "Information from adjacent open tabs",
      "The developer's browser history",
      "Every private repository in the user's account"
    ],
    answer: [0, 1, 2],
    explain: "Context includes code around the cursor, the filename and file type, adjacent open tabs, project structure and file paths, and languages and frameworks. Copilot doesn't collect browser history or scan every repository you own.",
    src: SRC.flow
  },
  {
    id: "d04", domain: "data", type: "single",
    q: "What does the Fill-in-the-Middle (FIM) technique let Copilot do?",
    options: [
      "Fill gaps in training data with synthetic code",
      "Consider both the code before and after the cursor when generating a suggestion",
      "Insert license headers in the middle of files",
      "Split a prompt between two models"
    ],
    answer: [1],
    explain: "FIM pre-processing considers both the preceding and the following code. This widens the context the model uses and makes suggestions more accurate.",
    src: SRC.flow
  },
  {
    id: "d05", domain: "data", type: "multi",
    q: "During post-processing, what can happen to a model response before it reaches the developer? (Choose two.)",
    options: [
      "It is checked for common vulnerabilities such as XSS or SQL injection",
      "If it fails a check, it can be truncated or discarded",
      "It is automatically committed to the repository",
      "It is reviewed by a GitHub employee"
    ],
    answer: [0, 1],
    explain: "The toxicity filter removes harmful content. The proxy then checks code quality, including common bugs and vulnerabilities, and optionally applies the public code filter. Responses that fail are truncated or discarded.",
    src: SRC.flow
  },
  {
    id: "d06", domain: "data", type: "multi",
    q: "According to Microsoft Learn's description of the prompt flow, what does Copilot's toxicity filtering target? (Choose two.)",
    options: [
      "Hate speech and inappropriate content",
      "Personal data such as names, addresses or identification numbers",
      "Code with failing unit tests",
      "Deprecated API calls"
    ],
    answer: [0, 1],
    explain: "Toxicity filtering aims to keep hate speech, offensive or inappropriate content, and personal data out of prompts and responses.",
    src: SRC.flow
  },
  {
    id: "d07", domain: "data", type: "single",
    q: "According to Microsoft Learn, what happens to the prompt (code and context) that Copilot in the code editor uses to produce a code suggestion?",
    options: [
      "It is stored for two years for model training",
      "It is discarded once the suggestion is returned and not retained to train the foundation models",
      "It is copied into the organization's audit log",
      "It is published to the public code index"
    ],
    answer: [1],
    explain: "Microsoft Learn states that Copilot in the code editor does not retain prompts to train the foundation models and discards them once a suggestion is returned. GitHub has since changed its policy: from April 24, 2026, interaction data from Copilot Free, Pro and Pro+ users is used to train GitHub's models unless the user opts out. Copilot Business and Enterprise are not affected.",
    src: SRC.data
  },
  {
    id: "d08", domain: "data", type: "single",
    q: "According to Microsoft Learn, how long does GitHub typically retain prompts, suggestions and supporting context for Copilot Chat used outside the code editor (for example on GitHub.com, in the CLI or on mobile)?",
    options: ["They are never stored", "24 hours", "28 days", "1 year"],
    answer: [2],
    explain: "Microsoft Learn says that for Copilot Chat outside the code editor, including the CLI, mobile and GitHub.com, GitHub typically retains prompts, suggestions and supporting context for 28 days.",
    src: SRC.data
  },
  {
    id: "d09", domain: "data", type: "single",
    q: "A developer pastes an entire large codebase into one chat prompt and gets a shallow, incomplete answer. Which LLM limitation is the most likely cause, and what helps?",
    options: [
      "Toxicity filtering. Rephrase politely",
      "The limited context window. Break the problem into smaller, focused queries and provide only relevant snippets",
      "Content exclusion. Ask an admin to disable it",
      "The public code filter. Turn it off"
    ],
    answer: [1],
    explain: "Copilot can process only a limited amount of code and text at once. Microsoft Learn recommends breaking complex problems into smaller queries and providing relevant snippets.",
    src: SRC.data
  },

  // ---------------------------------------------------------------- Prompt engineering
  {
    id: "p01", domain: "prompt", type: "single",
    q: "According to GitHub's prompt engineering guidance, which parts of a prompt does Copilot give extra weight to?",
    options: [
      "The middle",
      "The beginning and the end",
      "Only the last sentence",
      "Any text written in uppercase"
    ],
    answer: [1],
    explain: "GitHub notes that Copilot gives extra weight to instructions at the beginning and end of a prompt.",
    src: SRC.promptEng
  },
  {
    id: "p02", domain: "prompt", type: "single",
    q: "What is the recommended structure for a prompt asking Copilot to build a feature?",
    options: [
      "List edge cases first, then the goal",
      "State the broad goal first, then the specific requirements, most important first",
      "Write only the function name and let Copilot infer the rest",
      "Put all requirements in a single long sentence"
    ],
    answer: [1],
    explain: "Start general, then get specific: describe the broad goal, then list specific requirements, with the most important first.",
    src: SRC.promptEng
  },
  {
    id: "p03", domain: "prompt", type: "single",
    q: "A developer wants Copilot to write a function that exactly matches expected behavior. What does GitHub's guidance suggest?",
    options: [
      "Ask Copilot to write the function, then generate tests that match its output",
      "Have Copilot write unit tests first as examples, then write a function that makes them pass",
      "Avoid examples because they bias the model",
      "Use the longest possible prompt with no examples"
    ],
    answer: [1],
    explain: "Examples help Copilot. Unit tests can serve as examples, so GitHub suggests having Copilot write tests first and then a function that satisfies them.",
    src: SRC.promptEng
  },
  {
    id: "p04", domain: "prompt", type: "single",
    q: "You need Copilot to build a word search puzzle generator. Which approach does GitHub recommend?",
    options: [
      "One prompt: 'Build a word search generator'",
      "Break it into steps: generate a grid, find words in it, generate a grid with at least 10 words, then print the grid and words",
      "Ask for the whole program in agent mode with no description",
      "Copy a public implementation into the prompt"
    ],
    answer: [1],
    explain: "GitHub recommends breaking complex tasks into simple, smaller tasks. Its own example splits the word search generator into exactly these steps.",
    src: SRC.promptEng
  },
  {
    id: "p05", domain: "prompt", type: "single",
    q: "In the IDE, which action most directly improves the relevance of Copilot's suggestions for the file you are working on?",
    options: [
      "Open the related files Copilot should consider and close unrelated ones",
      "Open as many files as possible",
      "Disable syntax highlighting",
      "Clear the chat history before every keystroke"
    ],
    answer: [0],
    explain: "GitHub's 'Provide relevant context' guidance says Copilot uses your open files to understand your request, so open any relevant files and close irrelevant ones.",
    src: SRC.promptEng
  },
  {
    id: "p06", domain: "prompt", type: "single",
    q: "A developer has several functions open and asks Copilot Chat, 'What does this do?' The answer describes the wrong function. What is the best fix?",
    options: [
      "Ask the same question again",
      "Avoid ambiguity: name the specific function, or select it and reference it with #selection",
      "Switch to a different model",
      "Restart the IDE"
    ],
    answer: [1],
    explain: "GitHub advises avoiding ambiguity, for example by naming the exact code you mean instead of 'this', and by using chat variables to give precise context.",
    src: SRC.promptEng
  },
  {
    id: "p07", domain: "prompt", type: "single",
    q: "After a long Copilot Chat conversation about a database migration, a developer switches to an unrelated front-end task. What does GitHub's guidance recommend?",
    options: [
      "Continue in the same thread so Copilot remembers everything",
      "Keep history relevant: start a new thread or remove requests that no longer help",
      "Paste the whole previous conversation into the new prompt",
      "Switch the chat participant to @terminal"
    ],
    answer: [1],
    explain: "Conversational surfaces use your conversation history as context. GitHub recommends starting a new conversation or session for a new task and, where the surface supports it, removing or rolling back turns that are no longer relevant.",
    src: SRC.promptEng
  },
  {
    id: "p08", domain: "prompt", type: "single",
    q: "Copilot's first response to a prompt is not what you wanted. According to GitHub, what should you do?",
    options: [
      "Accept it and fix it by hand. Prompts cannot be refined",
      "Experiment and iterate: refine the prompt and try again, or ask follow-up questions",
      "Report a bug to GitHub",
      "Switch off code completion"
    ],
    answer: [1],
    explain: "GitHub's guidance includes 'experiment and iterate'. If the result isn't helpful, rephrase, add detail or ask for adjustments in follow-ups.",
    src: SRC.promptEng
  },
  {
    id: "p09", domain: "prompt", type: "single",
    q: "In VS Code Copilot Chat, which element gives Copilot explicit, scoped context, such as a file's content?",
    options: [
      "Chat variables such as #file",
      "Slash commands such as /clear",
      "The model picker",
      "Keyboard shortcuts"
    ],
    answer: [0],
    explain: "Chat variables (#file, #selection, #function and so on) add specific context to a prompt. Participants such as @terminal add domain knowledge, and slash commands are shortcuts for common tasks.",
    src: SRC.cheat
  },

  // ---------------------------------------------------------------- Developer productivity
  {
    id: "dp01", domain: "productivity", type: "single",
    q: "A developer joins a project written in a language they don't know. Which Copilot capability most directly helps them understand an unfamiliar function?",
    options: [
      "Selecting the function and using /explain in Copilot Chat",
      "Running /tests on an empty file",
      "Enabling content exclusion",
      "Requesting a Copilot code review"
    ],
    answer: [0],
    explain: "/explain describes how the code in the active editor or selection works, which helps with learning new languages and codebases.",
    src: SRC.cheat
  },
  {
    id: "dp02", domain: "productivity", type: "single",
    q: "Copilot generated unit tests for a legacy function, and all of them pass. What should the developer do next?",
    options: [
      "Merge immediately, since passing tests prove the function is correct",
      "Check that the assertions reflect intended behavior, because tests generated from existing code can encode its existing bugs",
      "Delete the tests, since generated tests are not allowed",
      "Ask Copilot to make the tests longer"
    ],
    answer: [1],
    explain: "Generated output can look valid without being correct. Tests derived from current code may lock in current bugs, so review whether the assertions match intended behavior.",
    src: SRC.respUse
  },
  {
    id: "dp03", domain: "productivity", type: "single",
    q: "A team has a backlog of small, well-defined issues, such as adding missing tests and fixing lint warnings. How can Copilot raise throughput while developers focus on design work?",
    options: [
      "Delegate the issues to Copilot cloud agent, then review the pull requests it opens",
      "Turn off code review to speed up merges",
      "Use /clear before each commit",
      "Increase the context window in settings"
    ],
    answer: [0],
    explain: "Cloud agent works in the background and opens a pull request per task, which suits well-scoped issues. Humans still review the pull requests.",
    src: SRC.cloud
  },
  {
    id: "dp04", domain: "productivity", type: "single",
    q: "A developer sees a failing command in the VS Code terminal and wants an explanation and a fix. Which approach uses the right context?",
    options: [
      "Ask @terminal about the error output",
      "Ask @azure",
      "Use /tests",
      "Open a new empty file and ask Copilot to guess"
    ],
    answer: [0],
    explain: "@terminal has context about the terminal shell and its contents, so it can reason about the failing command and its output.",
    src: SRC.cheat
  },
  {
    id: "dp05", domain: "productivity", type: "single",
    q: "Your team wants Copilot code review to enforce internal conventions, such as error-handling style. What is the most effective way to set that up?",
    options: [
      "Add the conventions to repository custom instructions, such as .github/copilot-instructions.md, or to path-specific instruction files",
      "Paste the conventions into every pull request description",
      "Set the conventions as an enterprise billing policy",
      "Copilot code review cannot be customized"
    ],
    answer: [0],
    explain: "Copilot code review uses repository-wide instructions (.github/copilot-instructions.md), path-specific .instructions.md files and AGENTS.md. Copilot is not guaranteed to spot every problem in a pull request, so validate its feedback and keep human review.",
    src: SRC.review
  },
  {
    id: "dp06", domain: "productivity", type: "single",
    q: "A developer refactors a large legacy module with Copilot's help. Which practice best protects quality?",
    options: [
      "Accept all suggestions in one batch to keep the refactor consistent",
      "Work in small steps and validate each change with tests and review",
      "Disable tests during the refactor",
      "Let Copilot code review approve the pull request automatically"
    ],
    answer: [1],
    explain: "Breaking work into small steps improves Copilot's output, and reviewing and testing generated code is the core mitigation for inaccurate suggestions.",
    src: SRC.promptEng
  },
  {
    id: "dp07", domain: "productivity", type: "single",
    q: "Your team keeps rewriting the same detailed instructions to scaffold a new API endpoint in Copilot Chat. What should they adopt?",
    options: [
      "A reusable prompt file that teammates can run when needed",
      "Content exclusion for the API folder",
      "A longer context window",
      "The audit log"
    ],
    answer: [0],
    explain: "Prompt files hold reusable, task-specific instructions that you choose to run in a chat, which makes repeated tasks consistent across the team.",
    src: SRC.custom
  },
  {
    id: "dp08", domain: "productivity", type: "single",
    q: "In a terminal-centric workflow, a developer wants Copilot to help generate a shell script and organize files without leaving the shell. Which tool fits?",
    options: ["Copilot CLI", "Copilot code review", "Copilot Spaces only", "Inline completions in the browser"],
    answer: [0],
    explain: "Copilot CLI brings Copilot to the terminal for tasks such as generating scripts and managing files. Both appear in the GH-300 skills outline.",
    src: SRC.guide
  },

  // ---------------------------------------------------------------- Privacy & safeguards
  {
    id: "pr01", domain: "privacy", type: "multi",
    q: "Who can configure content exclusion for GitHub Copilot? (Choose three.)",
    options: [
      "Repository administrators",
      "Organization owners",
      "Enterprise owners",
      "Any Copilot Pro user, for public repositories",
      "Repository contributors with write access"
    ],
    answer: [0, 1, 2],
    explain: "Repository administrators (for their own repositories), organization owners (for users with a seat through their organization) and enterprise owners can configure content exclusion. It is a Business and Enterprise feature.",
    src: SRC.exclusion
  },
  {
    id: "pr02", domain: "privacy", type: "multi",
    q: "A file is excluded from Copilot through content exclusion. What are the effects? (Choose three.)",
    options: [
      "Inline suggestions are unavailable in that file",
      "The file does not inform suggestions in other files or chat responses",
      "The file is skipped in Copilot code review",
      "The file is hidden from other developers in the repository",
      "The file is deleted from Copilot's training data"
    ],
    answer: [0, 1, 2],
    explain: "Excluded files get no inline suggestions, are not used as context for other suggestions or chat, and are skipped by Copilot code review. Exclusion doesn't change repository access for people.",
    src: SRC.exclusion
  },
  {
    id: "pr03", domain: "privacy", type: "single",
    q: "An organization excludes secrets/** from Copilot, but a developer reaches those files through a symbolic link elsewhere in the repository. What does GitHub document?",
    options: [
      "Exclusions follow symlinks automatically",
      "Content exclusions currently do not apply to symlinks or to repositories on remote filesystems",
      "Symlinked files are deleted",
      "The IDE blocks symlinks when exclusions are active"
    ],
    answer: [1],
    explain: "GitHub lists this limitation: content exclusions currently do not apply to symbolic links or to repositories located on remote filesystems.",
    src: SRC.exclusion
  },
  {
    id: "pr04", domain: "privacy", type: "single",
    q: "Even with content exclusion configured, which kind of information from excluded files might still reach Copilot indirectly?",
    options: [
      "The full file contents",
      "Semantic information the IDE provides, such as type information or hover-over definitions",
      "Nothing at all",
      "The file's Git history"
    ],
    answer: [1],
    explain: "The IDE may still pass semantic information from excluded files, such as type information, hover-over definitions and build configuration, to Copilot indirectly.",
    src: SRC.exclusion
  },
  {
    id: "pr05", domain: "privacy", type: "single",
    q: "According to GitHub's current support table, which VS Code Copilot capability does NOT honor content exclusion?",
    options: ["Inline suggestions", "Chat (ask)", "Agent mode", "None. All modes honor it"],
    answer: [2],
    explain: "In VS Code, content exclusion applies to inline suggestions and chat, but the Edit and Agent modes are not supported. Feature support changes, so check the current table.",
    src: SRC.exclusion
  },
  {
    id: "pr06", domain: "privacy", type: "single",
    q: "How does Copilot check an inline suggestion for matches with public code?",
    options: [
      "It compares the suggestion plus about 150 characters of surrounding code against an index of public GitHub repositories",
      "It searches all repositories, including private ones, for exact matches",
      "It sends the suggestion to a third-party plagiarism service",
      "It checks only the suggestion's function name"
    ],
    answer: [0],
    explain: "Copilot compares the potential suggestion and about 150 characters of surrounding code with an index of public repositories on GitHub.com. Private repositories and code hosted outside GitHub are not searched.",
    src: SRC.codeRef
  },
  {
    id: "pr07", domain: "privacy", type: "single",
    q: "With code referencing in effect, a developer accepts an unchanged inline suggestion that matches public code. What does Copilot provide?",
    options: [
      "Nothing. Matches are silently allowed",
      "Information about the match, such as the matching file URLs and any detected licenses",
      "An automatic license file in the repository",
      "An email to the original author"
    ],
    answer: [1],
    explain: "When matching suggestions are allowed, Copilot records the matching file URLs and any detected licenses. Matches are rare, typically under one percent of suggestions.",
    src: SRC.codeRef
  },
  {
    id: "pr08", domain: "privacy", type: "single",
    q: "Depending on the policy that applies to a user or organization, what can happen to suggestions that match public code?",
    options: [
      "They are always shown with no indication",
      "They can be blocked, or shown with information about the matching code",
      "They are rewritten to avoid the match",
      "They are converted to comments"
    ],
    answer: [1],
    explain: "Depending on the applicable policy, matching suggestions are either blocked or shown with information about the matching code (code referencing).",
    src: SRC.codeRef
  },
  {
    id: "pr09", domain: "privacy", type: "single",
    q: "A developer on Copilot Pro, an individual plan, wants to block suggestions that match public code. Is that option available to them?",
    options: [
      "No, it is only in Copilot Enterprise",
      "No, it is only in Business and Enterprise",
      "Yes, blocking suggestions that match public code is available on every plan",
      "Only through the REST API"
    ],
    answer: [2],
    explain: "Blocking suggestions that match public code is available on every Copilot plan. Content exclusion, by contrast, is Business and Enterprise only.",
    src: SRC.plans
  },
  {
    id: "pr10", domain: "privacy", type: "single",
    q: "When content exclusion is active, the Copilot client sends the current repository URL to GitHub. Why?",
    options: [
      "To log which repositories each developer works on",
      "So GitHub can return the correct content exclusion policy for that repository",
      "To index the repository for public code matching",
      "To bill AI credits per repository"
    ],
    answer: [1],
    explain: "The client sends the repository URL so GitHub can return the correct policy. GitHub states that these URLs are not logged.",
    src: SRC.exclusion
  },

  // ---------------------------------------------------------------- Coverage additions
  {
    id: "f28", domain: "features", type: "single",
    q: "An organization owner removes a member's Copilot seat with DELETE /orgs/{org}/copilot/billing/selected_users. The member was not assigned Copilot through a team. What happens to the seat?",
    options: [
      "It is removed immediately and a prorated refund is issued",
      "It moves to pending cancellation, and the user keeps access until the end of the current billing cycle",
      "The user is removed from the organization",
      "The request fails, because only enterprise owners can manage seats through the API"
    ],
    answer: [1],
    explain: "The Copilot user management API puts removed seats into pending cancellation, and access ends at the close of the billing cycle. A user who also has access through a team keeps it. The same API lists seats (GET /orgs/{org}/copilot/billing/seats) and adds users or teams.",
    src: SRC.restSeats
  },
  {
    id: "f29", domain: "features", type: "multi",
    q: "Which are documented ways to install GitHub Copilot CLI? (Choose three.)",
    options: [
      "npm install -g @github/copilot",
      "brew install --cask copilot-cli on macOS or Linux",
      "winget install GitHub.Copilot on Windows",
      "pip install github-copilot-cli",
      "Enabling it from the Copilot section of repository settings"
    ],
    answer: [0, 1, 2],
    explain: "The install page lists npm (Node.js 22 or later), Homebrew, WinGet, an install script and direct download. You need an active Copilot subscription, and users can't use the CLI if their organization or enterprise has disabled it by policy.",
    src: SRC.cliInstall
  },
  {
    id: "f30", domain: "features", type: "single",
    q: "During a long agent session in VS Code, a developer asks the agent to delegate research on three logging libraries to a subagent. What is the main benefit, and what must they keep in mind?",
    options: [
      "The subagent shares the full conversation history, so no extra detail is needed",
      "The subagent works in its own context and returns a focused result, keeping the main conversation lean. A local subagent doesn't inherit the main history, so the task should be self-contained",
      "Subagents bypass content exclusion, so they can read more files",
      "Subagents permanently enlarge the main agent's context window"
    ],
    answer: [1],
    explain: "VS Code subagents work in their own context and return a focused result to the main agent, so intermediate research doesn't fill the main conversation. A local subagent doesn't inherit the main conversation history, so the docs recommend a self-contained task: goal, context, allowed actions and expected result. Delegation also adds model usage.",
    src: SRC.subagents
  },
  {
    id: "f31", domain: "features", type: "multi",
    q: "Which statements about Copilot pull request summaries on GitHub.com are correct? (Choose two.)",
    options: [
      "English is the only supported language",
      "A generated summary is not refreshed automatically when the pull request changes",
      "Copilot automatically posts a summary whenever a pull request is opened",
      "Files of any size are always included in the summary"
    ],
    answer: [0, 1],
    explain: "Summaries are generated on demand from the code diff. Very large files (more than 400 combined additions and deletions) are left out, English is the only supported language, and summaries don't refresh automatically. Review a summary for accuracy before publishing it.",
    src: SRC.prSummaries
  },
  {
    id: "f32", domain: "features", type: "single",
    q: "An organization on Copilot Business wants to stop its members from using MCP servers with Copilot. Where should the organization owner act?",
    options: [
      "Add every MCP server's URL to content exclusion",
      "Set the 'MCP servers in Copilot' policy to disabled in the organization's Copilot policies, unless the enterprise has already enforced it",
      "Delete .vscode/mcp.json from every repository",
      "Search the audit log for MCP events and revoke seats"
    ],
    answer: [1],
    explain: "The 'MCP servers in Copilot' policy controls MCP use in Copilot. If the enterprise has set this policy, the organization can't override it. Deleting config files doesn't stop users from adding servers, and content exclusion governs files, not tools.",
    src: SRC.orgPolicies
  },
  {
    id: "pr11", domain: "privacy", type: "single",
    q: "An organization owner wants Copilot to ignore every .env file for its users, in all repositories and also in files outside Git repositories. Which entry in the organization's content exclusion settings does this?",
    options: [
      "\"*\": [\"**/.env\"]",
      "octo-repo: [\".env\"]",
      "A .copilotignore file at the root of each repository",
      "/.env in each repository's own settings"
    ],
    answer: [0],
    explain: "In organization settings, a \"*\" key with path patterns matches files in all file-system roots, Git and non-Git. A repository key such as octo-repo limits the rule to that repository. Copilot has no .copilotignore file. Patterns use fnmatch notation and are case-insensitive.",
    src: SRC.excludeHowTo
  },
  {
    id: "pr12", domain: "privacy", type: "single",
    q: "A repository admin just added src/secrets/** to content exclusion. A developer who already had VS Code open still sees inline suggestions in src/secrets/config.ts. What is the most likely cause and quickest fix?",
    options: [
      "Content exclusion applies only to Copilot Chat, so nothing can be done",
      "Changes can take up to 30 minutes to reach IDEs that already loaded the settings. Reload the VS Code window to apply them now",
      "The developer must reinstall the Copilot extension",
      "The pattern must be uppercase, because matching is case-sensitive"
    ],
    answer: [1],
    explain: "Content exclusion changes can take up to 30 minutes to take effect in IDEs that already loaded the settings. In VS Code, run 'Developer: Reload Window'. In JetBrains IDEs and Visual Studio, restart the application. Matching is case-insensitive.",
    src: SRC.excludeHowTo
  },
  {
    id: "pr13", domain: "privacy", type: "single",
    q: "A Copilot Pro user wants inline suggestions on for every language in VS Code except YAML and plain text. What should they do?",
    options: [
      "Ask an organization owner to add *.yaml and *.txt to content exclusion",
      "Set editor.inlineSuggest.enabled to false",
      "In settings.json, set \"github.copilot.enable\": { \"*\": true, \"yaml\": false, \"plaintext\": false }",
      "Create a .copilotignore file listing yaml and plaintext"
    ],
    answer: [2],
    explain: "github.copilot.enable takes language IDs set to true or false, and \"*\" sets the default. Setting editor.inlineSuggest.enabled to false turns inline suggestions off everywhere. Content exclusion is a Business and Enterprise admin feature that an individual Pro user can't configure.",
    src: SRC.ideSettings
  },
  {
    id: "p10", domain: "prompt", type: "single",
    q: "A developer's prompt includes several input/output examples (morning, afternoon, evening greetings) before asking Copilot to write a time-of-day greeting function. Which technique is this?",
    options: ["Zero-shot prompting", "One-shot prompting", "Few-shot prompting", "Role prompting"],
    answer: [2],
    explain: "Zero-shot prompting gives a description with no examples, one-shot gives a single example, and few-shot gives several. Few-shot prompting suits implementations with several scenarios and edge cases.",
    src: SRC.promptFoundations
  },
  {
    id: "dp09", domain: "productivity", type: "single",
    q: "A team wants Copilot Chat to port a legacy Perl script to TypeScript on Node.js. Which prompt best follows GitHub's guidance?",
    options: [
      "\"Make this script modern.\"",
      "\"Convert this Perl script to TypeScript. The functionality and output should be exactly the same as the existing one. Also tell me how to run it with Node.\"",
      "\"Rewrite this in the best language for the job.\"",
      "\"Translate this script\", then accept the first answer, since Copilot Chat responses are deterministic"
    ],
    answer: [1],
    explain: "GitHub's cookbook recipe names the target language and runtime and requires identical functionality and output. Copilot Chat responses are non-deterministic, so review and validate the result.",
    src: SRC.translate
  }
];
