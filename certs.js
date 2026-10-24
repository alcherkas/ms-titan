// Certification manifest for the root hub (index.html).
//
// To add a cert: create a folder named after `id` with its own index.html,
// then add an entry here. Set status to "available" once the folder has content;
// "planned" entries render as non-clickable "Coming soon" cards.
//
// Cert pages may record progress in localStorage under `certs:<id>` as
// {"answered": n, "correct": n, "total": n}; the hub shows it on the card.
window.CERTS = [
  {
    id: "gh-300",
    code: "GH-300",
    title: "GitHub Copilot",
    vendor: "GitHub",
    status: "available",
    description: "Practice questions on Copilot plans and features, prompt engineering, responsible AI, privacy and content exclusions."
  },
  {
    id: "ab-100",
    code: "AB-100",
    title: "",
    vendor: "Microsoft",
    status: "planned",
    description: ""
  },
  {
    id: "ai-103",
    code: "AI-103",
    title: "Developing AI Apps and Agents on Azure",
    vendor: "Microsoft",
    status: "available",
    description: "Practice questions on Microsoft Foundry models and agents, RAG, responsible AI, vision, text and speech, and information extraction."
  }
];
