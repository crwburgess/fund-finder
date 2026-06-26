import type { TreeNode } from "@/types";

// Note: Irish (Gaeilge) translations should be reviewed by a native speaker.

export const TREE: Record<string, TreeNode> = {

  // ─── ROOT ──────────────────────────────────────────────────────────────────
  root: {
    id: "root",
    type: "question",
    question: "Is your business based on a product or technology that can scale?",
    questionGa: "An bhfuil do ghnó bunaithe ar tháirge nó ar theicneolaíocht is féidir a scálú?",
    options: [
      { label: "Yes — we have a scalable product or technology", labelGa: "Sea — tá táirge nó teicneolaíocht scálaithe againn", next: "target_outside_ireland" },
      { label: "No — we are a local service or trade business", labelGa: "Níl — is gnó seirbhíse nó trádála áitiúil muid", next: "leo_trading" },
    ],
  },

  target_outside_ireland: {
    id: "target_outside_ireland",
    type: "question",
    question: "Will your business target customers outside Ireland?",
    questionGa: "An ndíolfaidh do ghnó le custaiméirí lasmuigh d'Éirinn?",
    options: [
      { label: "Yes — we intend to sell internationally", labelGa: "Sea — tá sé ar intinn againn díol go hidirnáisiúnta", next: "scale_rapidly" },
      { label: "No — our market is Ireland only", labelGa: "Níl — tá ár margadh in Éirinn amháin", next: "leo_trading" },
    ],
  },

  scale_rapidly: {
    id: "scale_rapidly",
    type: "question",
    question: "Could the business scale rapidly over the next few years?",
    questionGa: "An bhféadfadh an gnó scálú go tapa sna blianta beaga atá romhainn?",
    hint: {
      intro: "Indicators of rapid scaling may include:",
      bullets: [
        "Export potential beyond Ireland",
        "Technology or IP creating competitive advantage",
        "Ability to grow revenue quickly without staff increases",
        "Potential to reach €1m+ revenue within a few years",
      ],
    },
    options: [
      { label: "Yes — we have export potential and can grow revenue quickly", labelGa: "Sea — tá acmhainn onnmhairiúcháin againn agus is féidir linn ioncam a fhás go tapa", next: "ei_employees" },
      { label: "No — growth will be steady and local", labelGa: "Níl — beidh fás cothrom agus áitiúil againn", next: "leo_trading" },
    ],
  },

  // ─── ENTERPRISE IRELAND ────────────────────────────────────────────────────
  ei_employees: {
    id: "ei_employees",
    type: "question",
    question: "Does your company currently have more than 10 employees?",
    questionGa: "An bhfuil níos mó ná 10 fostaí ag do chuideachta faoi láthair?",
    options: [
      { label: "Yes — we are an established or scaling company", labelGa: "Sea — is cuideachta seanbhunaithe nó ag scálú muid", next: "ei_traction" },
      { label: "No — we are an early-stage startup", labelGa: "Níl — is gnólacht nuathionscanta luath-chéime muid", next: "ei_investor" },
    ],
  },

  ei_investor: {
    id: "ei_investor",
    type: "question",
    question: "Do you already have investor commitment or previous state funding?",
    questionGa: "An bhfuil gealltanas infheisteoirí nó maoiniú stáit roimhe seo agat cheana féin?",
    options: [
      { label: "Yes — we have investor backing or prior state investment", labelGa: "Sea — tá tacaíocht infheisteoirí nó infheistíocht stáit roimhe seo againn", next: "result_hpsu" },
      { label: "No — we are pre-investment", labelGa: "Níl — táimid réamh-infheistíocht", next: "result_pssf" },
    ],
  },

  ei_traction: {
    id: "ei_traction",
    type: "question",
    question: "Has your company already achieved meaningful commercial traction?",
    questionGa: "An bhfuil tarraingt tráchtála chiallmhar bainte amach ag do chuideachta cheana?",
    hint: {
      intro: "Commercial traction may include:",
      bullets: [
        "Paying customers",
        "Signed contracts or strong pipeline",
        "Proven product-market fit",
        "Early revenue growth",
      ],
    },
    options: [
      { label: "Yes — we have paying customers, contracts, or early revenue", labelGa: "Sea — tá custaiméirí íocaíochta, conarthaí, nó ioncam luath againn", next: "ei_innovation" },
      { label: "No — we are pre-revenue or at idea stage", labelGa: "Níl — táimid réamh-ioncam nó ag céim smaoineamh", next: "ei_domestic_growth" },
    ],
  },

  ei_innovation: {
    id: "ei_innovation",
    type: "question",
    question: "Is your project focused on developing new technology or a new product?",
    questionGa: "An bhfuil do thionscadal dírithe ar theicneolaíocht nua nó táirge nua a fhorbairt?",
    hint: {
      intro: "Innovation funding typically supports:",
      bullets: [
        "Development of new technology or products",
        "Significant improvements to existing products",
        "Technical R&D activities",
      ],
    },
    options: [
      { label: "Yes — we are building something new or significantly improved", labelGa: "Sea — táimid ag tógáil rud éigin nua nó feabhsaithe go suntasach", next: "ei_hire_plan" },
      { label: "No — this is operational or process-focused growth", labelGa: "Níl — tá fás oibríochtúil nó próisis-dírithe ann", next: "ei_project_size" },
    ],
  },

  ei_hire_plan: {
    id: "ei_hire_plan",
    type: "question",
    question: "What is your primary goal for this funding?",
    questionGa: "Cad é do phríomhsprioc don mhaoiniú seo?",
    options: [
      { label: "Hire a recent graduate into a new digital role", labelGa: "Céimí déanach a earcú i ról digiteach nua", next: "result_gradstart" },
      { label: "Develop a digital strategy and technology roadmap", labelGa: "Straitéis dhigiteach agus treochlár teicneolaíochta a fhorbairt", next: "result_digital_discovery" },
      { label: "Neither — we want to develop or improve a product", labelGa: "Ceachtar — táimid ag iarraidh táirge a fhorbairt nó a fheabhsú", next: "ei_project_size" },
    ],
  },

  ei_project_size: {
    id: "ei_project_size",
    type: "question",
    question: "Is your innovation project relatively small in scale (typically under €300k)?",
    questionGa: "An bhfuil do thionscadal nuálaíochta beag ar scála (de ghnáth faoi bhun €300k)?",
    options: [
      { label: "Yes — it is a focused, fast-moving project", labelGa: "Sea — tá sé tapa agus dírithe", next: "result_agile_innovation" },
      { label: "No — it is a large-scale R&D programme", labelGa: "Níl — is clár R&D mórscála é", next: "result_rdi" },
      { label: "Not sure — we need to explore our options first", labelGa: "Níl mé cinnte — ní mór dúinn ár roghanna a iniúchadh ar dtús", next: "ei_test_ai_established" },
    ],
  },

  ei_domestic_growth: {
    id: "ei_domestic_growth",
    type: "question",
    question: "Is your growth project primarily digital?",
    questionGa: "An bhfuil do thionscadal fáis dírithe go príomha ar dhigiteach?",
    options: [
      { label: "Yes — we want to adopt digital tools or technologies", labelGa: "Sea — táimid ag iarraidh uirlisí nó teicneolaíochtaí digiteacha a ghlacadh", next: "ei_test_ai_established" },
      { label: "No — we are focused on capacity, headcount, or market expansion", labelGa: "Níl — táimid ag díriú ar acmhainneacht, daoine, nó leathnú margaidh", next: "ei_scale_business" },
    ],
  },

  ei_test_ai_established: {
    id: "ei_test_ai_established",
    type: "question",
    question: "Do you want to test AI, data, or advanced digital technologies before committing to a larger investment?",
    questionGa: "An dteastaíonn uait AI, sonraí, nó teicneolaíochtaí digiteacha ardleibhéil a thástáil sula dtiomnóidh tú infheistíocht níos mó?",
    options: [
      { label: "Yes — we want to run a pilot before fully committing", labelGa: "Sea — táimid ag iarraidh píolóta a reáchtáil sula dtiomnóimid go hiomlán", next: "result_data2sustain" },
      { label: "No — we are ready to implement digital tools now", labelGa: "Níl — táimid réidh uirlisí digiteacha a chur i bhfeidhm anois", next: "result_grow_digital" },
    ],
  },

  ei_scale_business: {
    id: "ei_scale_business",
    type: "question",
    question: "Are you looking to scale the business through hiring, new markets, or increased capacity?",
    questionGa: "An bhfuil tú ag iarraidh an gnó a scálú trí earcú, margaí nua, nó acmhainneacht mhéadaithe?",
    options: [
      { label: "Yes — we want to grow the business", labelGa: "Sea — táimid ag iarraidh an gnó a fhás", next: "ei_scale_test_ai" },
      { label: "No — we want to explore innovation options first", labelGa: "Níl — táimid ag iarraidh roghanna nuálaíochta a iniúchadh ar dtús", next: "result_exploring_innovation" },
    ],
  },

  ei_scale_test_ai: {
    id: "ei_scale_test_ai",
    type: "question",
    question: "Do you want to test AI or advanced digital technologies before investing more broadly?",
    questionGa: "An dteastaíonn uait AI nó teicneolaíochtaí digiteacha ardleibhéil a thástáil sula n-infheistíonn tú níos leithne?",
    options: [
      { label: "Yes — we want a pilot first", labelGa: "Sea — táimid ag iarraidh píolóta ar dtús", next: "result_data2sustain_edih" },
      { label: "No — we are ready to invest in growth now", labelGa: "Níl — táimid réidh infheistíocht a dhéanamh sa fhás anois", next: "result_business_expansion" },
    ],
  },

  // ─── LEO ───────────────────────────────────────────────────────────────────
  leo_trading: {
    id: "leo_trading",
    type: "question",
    question: "Is your business currently trading?",
    questionGa: "An bhfuil do ghnó ag trádáil faoi láthair?",
    options: [
      { label: "Yes — we are actively trading", labelGa: "Sea — táimid ag trádáil go gníomhach", next: "leo_under_18_months" },
      { label: "No — we are pre-launch or not yet trading", labelGa: "Níl — táimid réamh-sheoladh nó gan trádáil fós", next: "leo_not_trading" },
    ],
  },

  leo_under_18_months: {
    id: "leo_under_18_months",
    type: "question",
    question: "Has the business been trading for less than 18 months?",
    questionGa: "An bhfuil an gnó ag trádáil ar feadh níos lú ná 18 mí?",
    options: [
      { label: "Yes — we recently started trading", labelGa: "Sea — thosaíomar ag trádáil le déanaí", next: "result_priming_new" },
      { label: "No — we have been trading for over 18 months", labelGa: "Níl — táimid ag trádáil ar feadh níos mó ná 18 mí", next: "leo_scale_business" },
    ],
  },

  leo_scale_business: {
    id: "leo_scale_business",
    type: "question",
    question: "Are you looking to scale the business?",
    questionGa: "An bhfuil tú ag iarraidh an gnó a scálú?",
    hint: {
      intro: "Scaling may involve:",
      bullets: [
        "Hiring staff",
        "Increasing production capacity",
        "Entering new markets",
        "Investing in operational systems",
      ],
    },
    options: [
      { label: "Yes — we want to grow capacity, staff, or markets", labelGa: "Sea — táimid ag iarraidh acmhainneacht, foireann, nó margaí a fhás", next: "leo_digital_project" },
      { label: "No — we need advice, training, or strategic support", labelGa: "Níl — teastaíonn comhairle, oiliúint, nó tacaíocht straitéiseach uainn", next: "result_training_mentoring" },
    ],
  },

  leo_digital_project: {
    id: "leo_digital_project",
    type: "question",
    question: "Is your growth project primarily digital?",
    questionGa: "An bhfuil do thionscadal fáis dírithe go príomha ar dhigiteach?",
    options: [
      { label: "Yes — we want to improve our digital capabilities", labelGa: "Sea — táimid ag iarraidh ár gcumas digiteach a fheabhsú", next: "leo_test_ai" },
      { label: "No — we are focused on physical expansion or hiring", labelGa: "Níl — táimid ag díriú ar leathnú fisiciúil nó earcú", next: "result_business_expansion" },
    ],
  },

  leo_test_ai: {
    id: "leo_test_ai",
    type: "question",
    question: "Do you want to test AI or advanced digital technologies before committing to a larger investment?",
    questionGa: "An dteastaíonn uait AI nó teicneolaíochtaí digiteacha ardleibhéil a thástáil sula dtiomnóidh tú infheistíocht níos mó?",
    options: [
      { label: "Yes — we want to run a pilot first", labelGa: "Sea — táimid ag iarraidh píolóta a reáchtáil ar dtús", next: "result_data2sustain_edih" },
      { label: "No — we want to implement digital tools now", labelGa: "Níl — táimid ag iarraidh uirlisí digiteacha a chur i bhfeidhm anois", next: "result_grow_digital" },
    ],
  },

  leo_not_trading: {
    id: "leo_not_trading",
    type: "question",
    question: "Do you need funding to test the technical or commercial feasibility of your idea?",
    questionGa: "An dteastaíonn maoiniú uait chun inmharthanacht theicniúil nó tráchtála do smaoineamh a thástáil?",
    options: [
      { label: "Yes — we need to validate before launching", labelGa: "Sea — ní mór dúinn bailíochtú sula seolaimid", next: "result_feasibility" },
      { label: "No — we are ready to prepare for launch", labelGa: "Níl — táimid réidh ullmhúchán le haghaidh seolta", next: "leo_ready_soon" },
    ],
  },

  leo_ready_soon: {
    id: "leo_ready_soon",
    type: "question",
    question: "Are you looking to launch the business soon?",
    questionGa: "An bhfuil tú ag súil le do ghnó a sheoladh go luath?",
    options: [
      { label: "Yes — we are close to launching and need startup support", labelGa: "Sea — táimid gar do sheoladh agus teastaíonn tacaíocht tosaithe uainn", next: "result_priming_prelaunch" },
      { label: "No — we need expert guidance before we are ready to launch", labelGa: "Níl — teastaíonn treoir shaineolach uainn sula mbeimid réidh le seoladh", next: "result_training_mentoring" },
    ],
  },

  // ─── RESULTS ───────────────────────────────────────────────────────────────
  result_pssf: {
    id: "result_pssf",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Pre-Seed Start Fund (PSSF)",
    description: "We have a Minimum Viable Product (MVP) and early customer validation. We are seeking a Convertible Loan Note to reach technical milestones.",
    url: "https://www.enterprise-ireland.com/en/supports/pre-seed-start-fund",
    agencyKeywords: ["MVP", "early customer validation", "technical milestones", "convertible loan note", "export potential", "scalable model"],
  },

  result_hpsu: {
    id: "result_hpsu",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "High Potential Start-Up (HPSU)",
    description: "We have commercial traction and protectable IP. We are ready for a co-funding investment to scale internationally.",
    url: "https://www.enterprise-ireland.com/en/innovative-hpsu-fund",
    agencyKeywords: ["commercial traction", "protectable IP", "co-funding", "scale internationally", "export-led job creation", "global markets"],
  },

  result_gradstart: {
    id: "result_gradstart",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "GradStart",
    description: "We want to hire a recent graduate to help build capability in areas such as software development, engineering, data analysis, marketing, or business development.",
    url: "https://www.enterprise-ireland.com/en/supports/grad-start",
    agencyKeywords: ["graduate talent", "capability building", "digital skills", "software development", "engineering"],
  },

  result_digital_discovery: {
    id: "result_digital_discovery",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Digital Discovery",
    description: "We want to develop a clear digital strategy and roadmap to identify how technologies such as AI, data analytics, automation, or new platforms could transform the business.",
    url: "https://www.enterprise-ireland.com/en/supports/access-advice-digital-discovery",
    agencyKeywords: ["digital strategy", "technology roadmap", "AI", "data analytics", "automation", "digital transformation"],
  },

  result_agile_innovation: {
    id: "result_agile_innovation",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Agile Innovation Fund",
    description: "We have a project budget under €300k and need to respond quickly to a market opportunity.",
    url: "https://www.localenterprise.ie/discover-business-supports/research-development-and-innovation-support/agile-innovation-fund/agile-innovation-fund.html",
    agencyKeywords: ["agile", "fast-moving", "market opportunity", "competitive advantage", "innovation project"],
  },

  result_rdi: {
    id: "result_rdi",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "R&D Fund",
    description: "This is a large-scale project aimed at a step-up in our company's overall research capability.",
    url: "https://www.enterprise-ireland.com/en/supports/research-development-innovation-fund",
    agencyKeywords: ["research capability", "large-scale R&D", "step-change", "technical innovation", "competitiveness"],
  },

  result_data2sustain: {
    id: "result_data2sustain",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Data2Sustain (Test Before Invest)",
    description: "We want to test AI, data analytics, or digital technologies through pilot projects before committing to a larger innovation investment.",
    url: "https://data2sustain.ie/our-services/?filter=test",
    agencyKeywords: ["AI pilot", "data analytics", "test before invest", "digital technology", "innovation pilot"],
  },

  result_exploring_innovation: {
    id: "result_exploring_innovation",
    type: "result",
    organisation: "Enterprise Ireland",
    fund: "Exploring Innovation",
    description: "We need to conduct a technical feasibility study to investigate disruptive technologies and evaluate project options through prototyping. This will allow us to stress-test our strategy, identify potential research partners, and perform a detailed commercial analysis before we commit to a full-scale R&D project.",
    url: "https://www.enterprise-ireland.com/en/supports/exploring-innovation-grant",
    agencyKeywords: ["technical feasibility", "disruptive technologies", "prototyping", "research partners", "commercial analysis"],
  },

  result_priming_new: {
    id: "result_priming_new",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Priming Grant",
    description: "We have recently started trading and need support for early business costs such as equipment, marketing, salaries, or operational setup to establish the business.",
    url: "https://www.localenterprise.ie/discover-business-supports/financial-supports/priming-grant/",
    agencyKeywords: ["recently started trading", "early business costs", "equipment", "local job creation", "community impact", "micro-enterprise"],
  },

  result_priming_prelaunch: {
    id: "result_priming_prelaunch",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Priming Grant",
    description: "We are preparing to launch and need support for early business costs such as equipment, marketing, salaries, or operational setup to establish the business.",
    url: "https://www.localenterprise.ie/discover-business-supports/financial-supports/priming-grant/",
    agencyKeywords: ["preparing to launch", "early business costs", "equipment", "local job creation", "community impact", "micro-enterprise"],
  },

  result_feasibility: {
    id: "result_feasibility",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Feasibility Grant",
    description: "We need to test whether this idea is technically and commercially viable. Funding will support market research, prototype development, technical validation, or feasibility studies before committing to launching the business.",
    url: "https://www.localenterprise.ie/discover-business-supports/financial-supports/feasibility-grant/",
    agencyKeywords: ["feasibility", "market research", "prototype development", "technical validation", "commercial viability"],
  },

  result_business_expansion: {
    id: "result_business_expansion",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Business Expansion Grant",
    description: "Our business is already trading and we are looking to grow by increasing capacity, hiring staff, purchasing equipment, or entering new markets.",
    url: "https://www.localenterprise.ie/discover-business-supports/financial-supports/business-expansion-grant/",
    agencyKeywords: ["business expansion", "increasing capacity", "hiring staff", "new markets", "local growth", "job retention"],
  },

  result_data2sustain_edih: {
    id: "result_data2sustain_edih",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Data2Sustain – EDIH Voucher Support",
    description: "We want to test AI, data analytics, or digital technologies through pilot projects before committing to a larger innovation investment.",
    url: "https://data2sustain.ie/",
    agencyKeywords: ["AI pilot", "data analytics", "EDIH", "digital technologies", "test before invest", "digital transformation"],
  },

  result_grow_digital: {
    id: "result_grow_digital",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Grow Digital Voucher",
    description: "We want to improve our digital capabilities by implementing systems such as e-commerce, CRM, automation tools, or cybersecurity solutions.",
    url: "https://www.localenterprise.ie/growdigital/what-is-the-grow-digital-voucher-/",
    agencyKeywords: ["digital capabilities", "e-commerce", "CRM", "automation", "cybersecurity", "digital sales"],
  },

  result_training_mentoring: {
    id: "result_training_mentoring",
    type: "result",
    organisation: "Local Enterprise Office (LEO)",
    fund: "Training / Mentoring",
    description: "Based on your answers, the LEO Mentor Programme is the right starting point. A mentor will work with you one-to-one to help clarify your situation, strengthen your thinking, and identify the right funding path for your business.",
    url: "https://www.localenterprise.ie/discover-business-supports/mentoring/",
    agencyKeywords: ["business strategy", "financial planning", "marketing", "operational capabilities", "mentoring", "advisory"],
  },
};

export const ROOT_NODE_ID = "root";
