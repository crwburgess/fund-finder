import type { TreeNode } from "@/types";

/**
 * Decision tree faithful to IRE Funding (1).pdf (Miro flowchart).
 * Two top-level branches: Enterprise Ireland (scalable/export) and LEO (local business).
 * All leaf nodes are ResultNodes with the exact "what to say" copy from the source document.
 */
export const TREE: Record<string, TreeNode> = {

  // ─── ROOT ────────────────────────────────────────────────────────────────────
  root: {
    id: "root",
    type: "question",
    question: "Is your business based on a product or technology that can scale?",
    options: [
      { label: "Yes — we have a scalable product or technology", next: "target_outside_ireland" },
      { label: "No — we are a local service or trade business", next: "leo_trading" },
    ],
  },

  target_outside_ireland: {
    id: "target_outside_ireland",
    type: "question",
    question: "Will your business target customers outside Ireland?",
    options: [
      { label: "Yes — we intend to sell internationally", next: "scale_rapidly" },
      { label: "No — our market is Ireland only", next: "leo_trading" },
    ],
  },

  scale_rapidly: {
    id: "scale_rapidly",
    type: "question",
    question: "Could the business scale rapidly over the next few years?",
    options: [
      { label: "Yes — we have export potential and can grow revenue quickly", next: "ei_employees" },
      { label: "No — growth will be steady and local", next: "leo_trading" },
    ],
  },

  // ─── ENTERPRISE IRELAND BRANCH ───────────────────────────────────────────────

  ei_employees: {
    id: "ei_employees",
    type: "question",
    question: "Does your company currently have more than 10 employees?",
    options: [
      { label: "Yes — we are an established or scaling company", next: "ei_traction" },
      { label: "No — we are an early-stage startup", next: "ei_investor" },
    ],
  },

  // Early-stage startup path
  ei_investor: {
    id: "ei_investor",
    type: "question",
    question: "Do you already have investor commitment or previous state funding?",
    options: [
      { label: "Yes — we have investor backing or prior state investment", next: "result_hpsu" },
      { label: "No — we are pre-investment", next: "result_pssf" },
    ],
  },

  // Established company path
  ei_traction: {
    id: "ei_traction",
    type: "question",
    question: "Has your company already achieved meaningful commercial traction?",
    options: [
      { label: "Yes — we have paying customers, contracts, or early revenue", next: "ei_innovation" },
      { label: "No — we are pre-revenue or at idea stage", next: "ei_domestic_growth" },
    ],
  },

  ei_innovation: {
    id: "ei_innovation",
    type: "question",
    question: "Is your project focused on developing new technology or a new product?",
    options: [
      { label: "Yes — we are building something new or significantly improved", next: "ei_hire_plan" },
      { label: "No — this is operational or process-focused growth", next: "ei_project_size" },
    ],
  },

  ei_hire_plan: {
    id: "ei_hire_plan",
    type: "question",
    question: "What is your primary goal for this funding?",
    options: [
      { label: "Hire a recent graduate into a new digital role", next: "result_gradstart" },
      { label: "Develop a digital strategy and technology roadmap", next: "result_digital_discovery" },
      { label: "Neither — we want to develop or improve a product", next: "ei_project_size" },
    ],
  },

  ei_project_size: {
    id: "ei_project_size",
    type: "question",
    question: "Is your innovation project relatively small in scale (typically under €300k)?",
    options: [
      { label: "Yes — it is a focused, fast-moving project", next: "result_agile_innovation" },
      { label: "No — it is a large-scale R&D programme", next: "result_rdi" },
      { label: "Not sure — we need to explore our options first", next: "ei_test_ai_established" },
    ],
  },

  // Established company domestic/routine growth path
  ei_domestic_growth: {
    id: "ei_domestic_growth",
    type: "question",
    question: "Is your growth project primarily digital?",
    options: [
      { label: "Yes — we want to adopt digital tools or technologies", next: "ei_test_ai_established" },
      { label: "No — we are focused on capacity, headcount, or market expansion", next: "ei_scale_business" },
    ],
  },

  ei_test_ai_established: {
    id: "ei_test_ai_established",
    type: "question",
    question: "Do you want to test AI, data, or advanced digital technologies before committing to a larger investment?",
    options: [
      { label: "Yes — we want to run a pilot before fully committing", next: "result_data2sustain" },
      { label: "No — we are ready to implement digital tools now", next: "result_grow_digital" },
    ],
  },

  ei_scale_business: {
    id: "ei_scale_business",
    type: "question",
    question: "Are you looking to scale the business through hiring, new markets, or increased capacity?",
    options: [
      { label: "Yes — we want to grow the business", next: "ei_scale_test_ai" },
      { label: "No — we want to explore innovation options first", next: "result_exploring_innovation" },
    ],
  },

  ei_scale_test_ai: {
    id: "ei_scale_test_ai",
    type: "question",
    question: "Do you want to test AI or advanced digital technologies before investing more broadly?",
    options: [
      { label: "Yes — we want a pilot first", next: "result_data2sustain_edih" },
      { label: "No — we are ready to invest in growth now", next: "result_business_expansion" },
    ],
  },

  // ─── LEO BRANCH ─────────────────────────────────────────────────────────────

  leo_trading: {
    id: "leo_trading",
    type: "question",
    question: "Is your business currently trading?",
    options: [
      { label: "Yes — we are actively trading", next: "leo_under_18_months" },
      { label: "No — we are pre-launch or not yet trading", next: "leo_not_trading" },
    ],
  },

  // Trading — check age
  leo_under_18_months: {
    id: "leo_under_18_months",
    type: "question",
    question: "Has the business been trading for less than 18 months?",
    options: [
      { label: "Yes — we recently started trading", next: "result_priming_new" },
      { label: "No — we have been trading for over 18 months", next: "leo_scale_business" },
    ],
  },

  leo_scale_business: {
    id: "leo_scale_business",
    type: "question",
    question: "Are you looking to scale the business?",
    options: [
      { label: "Yes — we want to grow capacity, staff, or markets", next: "leo_digital_project" },
      { label: "No — we need advice, training, or strategic support", next: "result_training_mentoring" },
    ],
  },

  leo_digital_project: {
    id: "leo_digital_project",
    type: "question",
    question: "Is your growth project primarily digital?",
    options: [
      { label: "Yes — we want to improve our digital capabilities", next: "leo_test_ai" },
      { label: "No — we are focused on physical expansion or hiring", next: "result_business_expansion" },
    ],
  },

  leo_test_ai: {
    id: "leo_test_ai",
    type: "question",
    question: "Do you want to test AI or advanced digital technologies before committing to a larger investment?",
    options: [
      { label: "Yes — we want to run a pilot first", next: "result_data2sustain_edih" },
      { label: "No — we want to implement digital tools now", next: "result_grow_digital" },
    ],
  },

  // Not yet trading
  leo_not_trading: {
    id: "leo_not_trading",
    type: "question",
    question: "Do you need funding to test the technical or commercial feasibility of your idea?",
    options: [
      { label: "Yes — we need to validate before launching", next: "result_feasibility" },
      { label: "No — we are ready to prepare for launch", next: "leo_ready_soon" },
    ],
  },

  leo_ready_soon: {
    id: "leo_ready_soon",
    type: "question",
    question: "Are you looking to launch the business soon?",
    options: [
      { label: "Yes — we are close to launching and need startup support", next: "result_priming_prelaunch" },
      { label: "No — we need expert guidance before we are ready to launch", next: "result_training_mentoring" },
    ],
  },

  // ─── RESULT NODES ────────────────────────────────────────────────────────────

  // Enterprise Ireland results
  result_pssf: {
    id: "result_pssf",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Pre-Seed Start Fund (PSSF)",
    description:
      "We have a Minimum Viable Product (MVP) and early customer validation. We are seeking a Convertible Loan Note to reach technical milestones.",
    url: "https://www.enterprise-ireland.com/en/funding-supports/startups-early-stage-companies/pre-seed-start-fund/",
    agencyKeywords: ["MVP", "early customer validation", "technical milestones", "convertible loan note", "export potential", "scalable model"],
  },

  result_hpsu: {
    id: "result_hpsu",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "High Potential Start-Up (HPSU)",
    description:
      "We have commercial traction and protectable IP. We are ready for a co-funding investment to scale internationally.",
    url: "https://www.enterprise-ireland.com/en/funding-supports/startups-early-stage-companies/high-potential-start-up-fund/",
    agencyKeywords: ["commercial traction", "protectable IP", "co-funding", "scale internationally", "export-led job creation", "global markets"],
  },

  result_gradstart: {
    id: "result_gradstart",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "GradStart",
    description:
      "We want to hire a recent graduate to help build capability in areas such as software development, engineering, data analysis, marketing, or business development.",
    url: "https://www.enterprise-ireland.com/en/talent/gradstart/",
    agencyKeywords: ["graduate talent", "capability building", "digital skills", "software development", "engineering"],
  },

  result_digital_discovery: {
    id: "result_digital_discovery",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Digital Discovery",
    description:
      "We want to develop a clear digital strategy and roadmap to identify how technologies such as AI, data analytics, automation, or new platforms could transform the business.",
    url: "https://www.enterprise-ireland.com/en/innovation/digital-transformation/digital-discovery/",
    agencyKeywords: ["digital strategy", "technology roadmap", "AI", "data analytics", "automation", "digital transformation"],
  },

  result_agile_innovation: {
    id: "result_agile_innovation",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Agile Innovation Fund",
    description:
      "We have a project budget under €300k and need to respond quickly to a market opportunity.",
    url: "https://www.enterprise-ireland.com/en/innovation/agile-innovation-fund/",
    agencyKeywords: ["agile", "fast-moving", "market opportunity", "competitive advantage", "innovation project"],
  },

  result_rdi: {
    id: "result_rdi",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "R&D Fund",
    description:
      "This is a large-scale project aimed at a step-up in our company's overall research capability.",
    url: "https://www.enterprise-ireland.com/en/innovation/research-and-development/",
    agencyKeywords: ["research capability", "large-scale R&D", "step-change", "technical innovation", "competitiveness"],
  },

  result_data2sustain: {
    id: "result_data2sustain",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Data2Sustain (Test Before Invest)",
    description:
      "We want to test AI, data analytics, or digital technologies through pilot projects before committing to a larger innovation investment.",
    url: "https://www.enterprise-ireland.com/en/innovation/digital-transformation/",
    agencyKeywords: ["AI pilot", "data analytics", "test before invest", "digital technology", "innovation pilot"],
  },

  result_exploring_innovation: {
    id: "result_exploring_innovation",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Exploring Innovation",
    description:
      "We need to conduct a technical feasibility study to investigate disruptive technologies and evaluate project options through prototyping. This will allow us to stress-test our strategy, identify potential research partners, and perform a detailed commercial analysis before we commit to a full-scale R&D project.",
    url: "https://www.enterprise-ireland.com/en/innovation/research-and-development/",
    agencyKeywords: ["technical feasibility", "disruptive technologies", "prototyping", "research partners", "commercial analysis"],
  },

  // LEO results
  result_priming_new: {
    id: "result_priming_new",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Priming Grant",
    description:
      "We have recently started trading and need support for early business costs such as equipment, marketing, salaries, or operational setup to establish the business.",
    url: "https://www.localenterprise.ie/Discover-Business-Supports/Grants/Priming-Grant/",
    agencyKeywords: ["recently started trading", "early business costs", "equipment", "local job creation", "community impact", "micro-enterprise"],
  },

  result_priming_prelaunch: {
    id: "result_priming_prelaunch",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Priming Grant",
    description:
      "We are preparing to launch and need support for early business costs such as equipment, marketing, salaries, or operational setup to establish the business.",
    url: "https://www.localenterprise.ie/Discover-Business-Supports/Grants/Priming-Grant/",
    agencyKeywords: ["preparing to launch", "early business costs", "equipment", "local job creation", "community impact", "micro-enterprise"],
  },

  result_feasibility: {
    id: "result_feasibility",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Feasibility Grant",
    description:
      "We need to test whether this idea is technically and commercially viable. Funding will support market research, prototype development, technical validation, or feasibility studies before committing to launching the business.",
    url: "https://www.localenterprise.ie/Discover-Business-Supports/Grants/Feasibility-Study-Grant/",
    agencyKeywords: ["feasibility", "market research", "prototype development", "technical validation", "commercial viability"],
  },

  result_business_expansion: {
    id: "result_business_expansion",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Business Expansion Grant",
    description:
      "Our business is already trading and we are looking to grow by increasing capacity, hiring staff, purchasing equipment, or entering new markets.",
    url: "https://www.localenterprise.ie/Discover-Business-Supports/Grants/Business-Expansion-Grant/",
    agencyKeywords: ["business expansion", "increasing capacity", "hiring staff", "new markets", "local growth", "job retention"],
  },

  result_data2sustain_edih: {
    id: "result_data2sustain_edih",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Data2Sustain – EDIH Voucher Support",
    description:
      "We want to test AI, data analytics, or digital technologies through pilot projects before committing to a larger innovation investment.",
    url: "https://www.localenterprise.ie/",
    agencyKeywords: ["AI pilot", "data analytics", "EDIH", "digital technologies", "test before invest", "digital transformation"],
  },

  result_grow_digital: {
    id: "result_grow_digital",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Grow Digital Voucher",
    description:
      "We want to improve our digital capabilities by implementing systems such as e-commerce, CRM, automation tools, or cybersecurity solutions.",
    url: "https://www.localenterprise.ie/",
    agencyKeywords: ["digital capabilities", "e-commerce", "CRM", "automation", "cybersecurity", "digital sales"],
  },

  result_training_mentoring: {
    id: "result_training_mentoring",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Training / Mentoring",
    description:
      "Based on your answers, the LEO Mentor Programme is the right starting point. A mentor will work with you one-to-one to help clarify your situation, strengthen your thinking, and identify the right funding path for your business.",
    url: "https://www.localenterprise.ie/Discover-Business-Supports/Training-Programme/",
    agencyKeywords: ["business strategy", "financial planning", "marketing", "operational capabilities", "mentoring", "advisory"],
  },
};

export const ROOT_NODE_ID = "root";
