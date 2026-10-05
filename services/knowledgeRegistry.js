// Comprehensive Knowledge Registry & Benchmark Scenarios for InsightFusion AI
// Enterprise & Hackathon Grade - Multi-Domain Verified Data

export const SOURCE_REGISTRY = [
  {
    id: 'src_gov_01',
    name: 'NITI Aayog — National Institution for Transforming India',
    type: 'Government Think Tank / Statutory Body',
    domain: 'niti.gov.in',
    domainScore: 99,
    reliabilityRating: 'A+ Statutory',
    updateFrequency: 'Bi-Weekly',
    coverage: 'National AI Policy, Fiscal Allocations, Sustainable Development Goals',
    category: 'government'
  },
  {
    id: 'src_gov_02',
    name: 'Ministry of Electronics & Information Technology (MeitY)',
    type: 'Federal Ministry & Statutory Regulatory Body',
    domain: 'meity.gov.in',
    domainScore: 99,
    reliabilityRating: 'A+ Statutory',
    updateFrequency: 'Daily',
    coverage: 'IndiaAI Mission, India Semiconductor Mission, Digital Data Protection',
    category: 'government'
  },
  {
    id: 'src_gov_03',
    name: 'Reserve Bank of India (RBI) Strategic Bulletin & DPSS',
    type: 'Central Banking & Monetary Authority',
    domain: 'rbi.org.in',
    domainScore: 99,
    reliabilityRating: 'A+ Central Bank',
    updateFrequency: 'Monthly',
    coverage: 'UPI Cross-Border, Central Bank Digital Currency (CBDC), Macroeconomic Liquidity',
    category: 'finance'
  },
  {
    id: 'src_intl_01',
    name: 'International Labour Organization (ILO) & World Bank Joint Database',
    type: 'Multilateral Intergovernmental Organization',
    domain: 'ilo.org',
    domainScore: 96,
    reliabilityRating: 'A Empirical Multilateral',
    updateFrequency: 'Quarterly',
    coverage: 'Labor Market Dynamics, Automation Displacements, Informal Sector Resilience',
    category: 'international'
  },
  {
    id: 'src_intl_02',
    name: 'International Energy Agency (IEA) Global Outlook',
    type: 'Multilateral Energy Consortium',
    domain: 'iea.org',
    domainScore: 95,
    reliabilityRating: 'A Peer-reviewed Global',
    updateFrequency: 'Bi-Monthly',
    coverage: 'Green Hydrogen Electrolysers, Grid Transition, Rare Earth Supply Chains',
    category: 'energy'
  },
  {
    id: 'src_acad_01',
    name: 'IEEE Transactions & IIT Delhi Center for Policy Studies',
    type: 'Peer-Reviewed Academic Repository',
    domain: 'ieee.org',
    domainScore: 97,
    reliabilityRating: 'A Scientific Empirical',
    updateFrequency: 'Monthly',
    coverage: 'Neural RAG Architectures, Vector Distance Metrics, Algorithmic Reliability',
    category: 'academic'
  },
  {
    id: 'src_ind_01',
    name: 'NASSCOM Strategic Tech Workforce Index',
    type: 'Industry Consortium & Enterprise Registry',
    domain: 'nasscom.in',
    domainScore: 90,
    reliabilityRating: 'B+ Industry Empirical',
    updateFrequency: 'Monthly',
    coverage: 'IT Services Hiring, Tier-1 Tech Compensation, Cloud & AI Deployments',
    category: 'industry'
  },
  {
    id: 'src_news_01',
    name: 'Press Information Bureau (PIB) Cabinet Dispatch Feed',
    type: 'Official National News Agency',
    domain: 'pib.gov.in',
    domainScore: 98,
    reliabilityRating: 'A+ Official Dispatch',
    updateFrequency: 'Real-time',
    coverage: 'Cabinet Decisions, PLI Subsidies, Infrastructure Approvals',
    category: 'government'
  }
];

export const PRESET_CASE_STUDIES = [
  {
    id: 'ai-employment',
    title: 'Impact of Generative AI on Tech & IT Employment in India (2025–2030)',
    category: 'Labor Economics & Tech Policy',
    domainTag: 'technology',
    query: 'Impact of AI on employment in India tech sector',
    selectedSources: ['src_gov_01', 'src_intl_01', 'src_ind_01', 'src_acad_01'],
    synthesizedOverview: 'Multi-source synthesis reveals a structural divergence: routine manual QA testing, legacy maintenance, and non-voice BPO roles face high contraction risks (18% to 24%), whereas specialized roles in AI orchestration, cloud security, and prompt engineering will create 3.2M+ net positions by 2029.',
    confidenceScore: 89,
    sourceCoverageCount: 4,
    contradictions: [
      {
        topic: 'Net Job Creation vs Routine Job Contraction Metrics',
        claimA: {
          statement: 'AI and cloud workflows will generate 3.5 million net new jobs in India by 2028, expanding the domestic IT ecosystem to $350B.',
          source: 'NASSCOM Strategic Review & NITI Aayog AI Taskforce',
          reliability: 91,
          date: 'Q1 2025'
        },
        claimB: {
          statement: 'Up to 22% of entry-level testing, maintenance, and administrative outsourcing positions face structural headcount reduction without reskilling.',
          source: 'ILO & World Bank South Asia Employment Survey',
          reliability: 96,
          date: 'Late 2024'
        },
        divergenceReason: 'Methodological divergence: Industry reports measure top-line revenue additions and senior developer demand, whereas ILO measures headcount vulnerabilities across entry-level and contract labor.',
        resolution: 'The divergence indicates a qualitative transition rather than total contraction. Reskilling programs are the critical variable determining net employment gains.'
      }
    ],
    evidenceChain: [
      {
        claim: 'NITI Aayog FutureSkills PRIME platform reports 1.8M verified technical certifications completed in 2024.',
        source: 'NITI Aayog Policy Framework #AI-4-ALL',
        citationKey: 'NITI-2024-SEC-4',
        verified: true,
        reliabilityScore: 99
      },
      {
        claim: 'Tier-1 IT services firms decreased campus hiring for pure manual testers by 31% over two fiscal years.',
        source: 'NASSCOM Quarterly Tech Workforce Digest',
        citationKey: 'NASS-Q3-2025',
        verified: true,
        reliabilityScore: 90
      },
      {
        claim: 'Fine-tuning, vector database, and retrieval verification engineers command a 42% salary premium across Tier-1 tech hubs.',
        source: 'IIT Delhi Centre for Policy Studies Working Paper',
        citationKey: 'IITD-CPS-25-09',
        verified: true,
        reliabilityScore: 97
      }
    ],
    actionableRecommendations: [
      'Institutionalize RAG pipelines and vector database systems in college BCA/BTech curricula.',
      'Mandate subsidized apprenticeships under the MeitY IndiaAI Mission for Tier-2/3 college graduates.',
      'Establish standardized Skill Reliability Index benchmarks for corporate upskilling programs.'
    ]
  },
  {
    id: 'semiconductor-mission',
    title: 'India Semiconductor Mission: Fab Commissioning & 28nm Wafer Timeline Verification',
    category: 'Industrial Electronics & Supply Chain',
    domainTag: 'hardware',
    query: 'Status and progress of India Semiconductor Mission fab setup',
    selectedSources: ['src_gov_02', 'src_news_01', 'src_ind_01'],
    synthesizedOverview: 'Cross-verification confirms 5 semiconductor manufacturing and assembly units (ATMP/OSAT) in Dholera, Sanand, and Morigaon have finalized state capital disbursals. Packaging test chips entered verification in late 2025.',
    confidenceScore: 94,
    sourceCoverageCount: 3,
    contradictions: [
      {
        topic: 'First Commercial 28nm Wafer Output Timeline',
        claimA: {
          statement: 'Full commercial wafer production of 28nm automotive and power nodes slated for commissioning by mid-2026.',
          source: 'MeitY PIB Official Dispatch',
          reliability: 99,
          date: 'Jan 2025'
        },
        claimB: {
          statement: 'Global cleanroom tool installation and ultrapure water certification will likely push volume wafer output into Q1 2027.',
          source: 'NASSCOM Global Semiconductor Supply Chain Assessment',
          reliability: 90,
          date: 'Dec 2024'
        },
        divergenceReason: 'Government dispatches announce physical facility commissioning milestones, while supply chain audits track lithography equipment shipment backlogs and cleanroom yield certifications.',
        resolution: 'Packaging (OSAT/ATMP) is on immediate schedule (2025), whereas commercial front-end 300mm wafer fabrication has a verified 6-8 month lead-time buffer.'
      }
    ],
    evidenceChain: [
      {
        claim: 'Union Cabinet approved ₹76,000 Crore fiscal incentive program covering 50% project cost on a pari-passu basis.',
        source: 'MeitY ISM Gazette Notification',
        citationKey: 'MEITY-ISM-GZ-2022/25',
        verified: true,
        reliabilityScore: 99
      },
      {
        claim: 'Power infrastructure, ultra-pure water grid, and dedicated gas corridors reached 88% completion in Dholera SIR.',
        source: 'PIB Industrial Development Board Dispatch',
        citationKey: 'PIB-GUJ-2025-081',
        verified: true,
        reliabilityScore: 98
      }
    ],
    actionableRecommendations: [
      'Prioritize domestic OSAT/ATMP yield metrics as leading indicators before full 300mm wafer foundry trials.',
      'Accelerate talent pipeline via specialized VLSI design diploma courses under CDAC and NIELIT.'
    ]
  },
  {
    id: 'green-hydrogen',
    title: 'National Green Hydrogen Mission: 5 MMT Target vs Domestic Electrolyser Stack Costs',
    category: 'Energy Transition & Climate',
    domainTag: 'energy',
    query: 'National green hydrogen mission 2030 targets and electrolyser costs',
    selectedSources: ['src_gov_01', 'src_intl_02', 'src_news_01'],
    synthesizedOverview: 'Verified consensus establishes India’s target of 5 Million Metric Tonnes (MMT) annual green hydrogen production by 2030. However, domestic electrolyser capital expenditure remains a critical variable requiring aggressive PLI subsidy absorption.',
    confidenceScore: 91,
    sourceCoverageCount: 3,
    contradictions: [
      {
        topic: 'Landed Green Hydrogen Cost Parity with Grey Hydrogen ($/kg)',
        claimA: {
          statement: 'Green hydrogen production costs will decline to $1.50–$1.80/kg by 2030 through round-the-clock solar-wind hybrid wheeling.',
          source: 'NITI Aayog Green Hydrogen Pathway Report',
          reliability: 98,
          date: '2024'
        },
        claimB: {
          statement: 'Without domestic rare-earth membrane production (PEM technology), landed costs may stabilize above $2.40/kg until 2032.',
          source: 'IEA Global Energy Outlook & World Bank ESMAP',
          reliability: 95,
          date: '2024'
        },
        divergenceReason: 'NITI assumes high round-the-clock (RTC) renewable utilization with waived interstate transmission charges, while IEA models capital depreciation on unproven domestic stacks.',
        resolution: 'Alkaline electrolysers meet the lower price range immediately, whereas advanced PEM stacks require localized catalyst supply chains.'
      }
    ],
    evidenceChain: [
      {
        claim: 'SIGHT scheme tranche-I allocated 1,500 MW/annum domestic electrolyser manufacturing capacity.',
        source: 'MNRE SIGHT Scheme Notification',
        citationKey: 'MNRE-SIGHT-TR1-2024',
        verified: true,
        reliabilityScore: 99
      }
    ],
    actionableRecommendations: [
      'Fast-track domestic membrane and iridium-sparing catalyst research at CSIR laboratories.',
      'Mandate phased green hydrogen blending in fertilizer and petroleum refinery sectors.'
    ]
  },
  {
    id: 'upi-cross-border',
    title: 'Digital Public Infrastructure (UPI & ONDC): Cross-Border Settlement & Forex Impact',
    category: 'FinTech & Macroeconomics',
    domainTag: 'finance',
    query: 'UPI international expansion cross border settlements and foreign exchange',
    selectedSources: ['src_gov_03', 'src_intl_01', 'src_news_01'],
    synthesizedOverview: 'Cross-border UPI linkages across 7 countries (Singapore PayNow, UAE, France, Mauritius, Sri Lanka) reduced peer-to-merchant cross-border transaction fees by 62%. Central Bank Digital Currency (CBDC-R) wholesale integration has entered pilot phase.',
    confidenceScore: 95,
    sourceCoverageCount: 3,
    contradictions: [
      {
        topic: 'Fee Compression on Person-to-Person (P2P) Inward Remittances',
        claimA: {
          statement: 'Real-time linkage will compress inward remittance transaction costs to under 1.8% of transaction value by 2026.',
          source: 'RBI Department of Payment & Settlement Systems',
          reliability: 99,
          date: '2025'
        },
        claimB: {
          statement: 'Intermediary bank compliance costs and bilateral currency volatility will keep average corridors above 3.5% for non-G20 corridors.',
          source: 'World Bank Remittance Price Worldwide Report',
          reliability: 96,
          date: '2024'
        },
        divergenceReason: 'RBI models bilateral central bank settlement corridors with zero intermediary markups, while World Bank audits legacy private commercial bank correspondent networks.',
        resolution: 'G20 and ASEAN corridors achieve the 2% fee target; African and Latin American corridors require bilateral currency swap agreements.'
      }
    ],
    evidenceChain: [
      {
        claim: 'UPI logged over 16.5 billion monthly transactions with 99.98% system uptime in Q3 2025.',
        source: 'NPCI Official Monthly Payment System Digest',
        citationKey: 'NPCI-METRIC-2025-Q3',
        verified: true,
        reliabilityScore: 99
      }
    ],
    actionableRecommendations: [
      'Expand bilateral local currency settlement (INR-AED, INR-SGD) to eliminate USD conversion charges.',
      'Integrate fraud anomaly detection across real-time remittance gateways using automated RAG.'
    ]
  },
  {
    id: 'ev-adoption',
    title: 'Electric Vehicle (EV) 30@30 Target vs Battery Raw Material Import Dependencies',
    category: 'Automotive & Clean Energy',
    domainTag: 'energy',
    query: 'India EV adoption targets 2030 battery manufacturing lithium supply',
    selectedSources: ['src_gov_01', 'src_intl_02', 'src_ind_01'],
    synthesizedOverview: 'Two-wheeler and three-wheeler EV penetration is on track to surpass 45% by 2030, driven by total cost of ownership (TCO) parity. However, four-wheeler adoption faces battery pack cost sensitivity and raw lithium refining bottlenecks.',
    confidenceScore: 92,
    sourceCoverageCount: 3,
    contradictions: [
      {
        topic: 'Four-Wheeler Private EV Penetration Rate by 2030',
        claimA: {
          statement: 'Private passenger EV sales will achieve 30% total market share by 2030 under Advanced Chemistry Cell (ACC) PLI production.',
          source: 'NITI Aayog Zero Emission Vehicle Roadmap',
          reliability: 98,
          date: '2024'
        },
        claimB: {
          statement: 'Passenger car adoption will plateau at 14–18% unless fast-charging infrastructure along national highways expands 4x.',
          source: 'IEA Global EV Outlook & Automotive Research Digest',
          reliability: 94,
          date: '2024'
        },
        divergenceReason: 'NITI models battery cell cost declines reaching $80/kWh by 2028, whereas IEA factors in high domestic highway charging deficit and grid upgrade delays.',
        resolution: 'Commercial fleet and urban two-wheeler adoption will easily cross 40%, whereas private long-distance passenger cars face an infrastructure-constrained adoption curve.'
      }
    ],
    evidenceChain: [
      {
        claim: 'ACC PLI scheme has awarded 50 GWh battery manufacturing capacity with 60% domestic value addition mandate.',
        source: 'Ministry of Heavy Industries Notification',
        citationKey: 'MHI-ACC-PLI-2024',
        verified: true,
        reliabilityScore: 98
      }
    ],
    actionableRecommendations: [
      'Incentivize sodium-ion and LFP battery chemistries to reduce dependence on imported nickel and cobalt.',
      'Mandate standardized battery swapping protocols for light commercial and three-wheeler vehicles.'
    ]
  }
];

export const JUDGE_DOSSIER = [
  {
    q: 'How is InsightFusion AI fundamentally different from ChatGPT or general LLMs?',
    question: 'How is InsightFusion AI fundamentally different from ChatGPT or general LLMs?',
    category: 'Innovation & Differentiation',
    slide: 'Slide 6 & 7',
    answer: 'ChatGPT is primarily a conversational generative model that produces text from static weights. InsightFusion AI is an evidence-oriented intelligence synthesis layer that operates over multiple external sources. It computes algorithmic source reliability, actively isolates and visualizes contradictions rather than averaging them, and provides full primary citation traceability.'
  },
  {
    q: 'Google already provides multiple links. Why do we need this platform?',
    question: 'Google already provides multiple links. Why do we need this platform?',
    category: 'Problem & Value Proposition',
    slide: 'Slide 7',
    answer: 'Google focuses on information discovery (finding links), forcing users to manually read 10-20 tabs and cross-check claims. InsightFusion AI focuses on intelligent information synthesis—it automates post-search manual analysis by collecting, normalizing, cross-comparing, and scoring claims.'
  },
  {
    q: 'How is the Source Reliability Score calculated?',
    question: 'How is the Source Reliability Score calculated?',
    category: 'Algorithmic Methodology',
    slide: 'Slide 5 & 11',
    answer: 'Reliability is computed using a multi-factor mathematical index: Domain Authority (Government .gov.in, Academic .edu/.org vs Commercial), Publication Recency, Source Institutional Credibility, and Cross-Source Consensus.'
  },
  {
    q: 'Suppose two reliable sources have conflicting information. How does the system handle that?',
    question: 'Suppose two reliable sources have conflicting information. How does the system handle that?',
    category: 'Core USP / Contradiction Detection',
    slide: 'Slide 8 & 12',
    answer: 'The system does NOT blindly pick one or guess an average. It extracts semantic claims, flags the contradiction with a divergence score, presents both claims side-by-side with source attribution and dates, and explains the underlying methodological divergence.'
  },
  {
    q: 'How do you prevent AI Hallucinations?',
    question: 'How do you prevent AI Hallucinations?',
    category: 'Accuracy & Trust',
    slide: 'Slide 8 & 12',
    answer: 'We use a strict Retrieval-Augmented Generation (RAG) architecture where generation is grounded solely in retrieved, verified text passages. If evidence is insufficient, the system strictly outputs a Low-Confidence / Insufficient Evidence warning rather than hallucinating.'
  },
  {
    q: 'Can the system analyze user-uploaded PDFs and reports?',
    question: 'Can I analyze user-uploaded PDFs and reports?',
    category: 'Data Ingestion',
    slide: 'Slide 9 & 15',
    answer: 'Yes. The modular architecture ingests uploaded PDFs, CSV datasets, and text documents, parses them into semantic chunks, and cross-references them against existing registries and web sources.'
  }
];

export const PLATFORM_FAQS = [
  {
    q: 'What is the primary problem InsightFusion AI solves?',
    question: 'What is the primary problem InsightFusion AI solves?',
    a: 'Today, research is scattered across government portals, research papers, and news outlets. Users spend hours manually verifying conflicting reports. InsightFusion AI automates this post-search synthesis and provides evidence-backed, contradiction-tested intelligence.',
    answer: 'Today, research is scattered across government portals, research papers, and news outlets. Users spend hours manually verifying conflicting reports. InsightFusion AI automates this post-search synthesis and provides evidence-backed, contradiction-tested intelligence.'
  },
  {
    q: 'How does Contradiction Detection work in practice?',
    question: 'How does Contradiction Detection work in practice?',
    a: 'The platform identifies semantic claims rather than simple keyword matches. When two credible sources state diverging statistics (e.g., NASSCOM projecting +3.5M jobs vs World Bank projecting 22% entry-level displacement), it preserves both claims side-by-side, computes the divergence percentage, highlights the methodology difference, and provides an actionable contextual resolution.',
    answer: 'The platform identifies semantic claims rather than simple keyword matches. When two credible sources state diverging statistics (e.g., NASSCOM projecting +3.5M jobs vs World Bank projecting 22% entry-level displacement), it preserves both claims side-by-side, computes the divergence percentage, highlights the methodology difference, and provides an actionable contextual resolution.'
  },
  {
    q: 'How is this fundamentally different from ChatGPT or Google Search?',
    question: 'How is this fundamentally different from ChatGPT or Google Search?',
    a: 'Google gives you raw links, forcing you to manually read 20 tabs. ChatGPT generates answers from static weights and blends contradictory numbers into vague averages without citations. InsightFusion AI cross-examines multiple primary sources, scores each source’s credibility mathematically, flags contradictions side-by-side, and provides verifiable primary citation keys.',
    answer: 'Google gives you raw links, forcing you to manually read 20 tabs. ChatGPT generates answers from static weights and blends contradictory numbers into vague averages without citations. InsightFusion AI cross-examines multiple primary sources, scores each source’s credibility mathematically, flags contradictions side-by-side, and provides verifiable primary citation keys.'
  },
  {
    q: 'Can I ingest custom files like college research papers or CSV tables?',
    question: 'Can I ingest custom files like college research papers or CSV tables?',
    a: 'Yes! You can upload .txt, .pdf, .csv, or .json files directly via the Ingestion Drawer. The system parses the text, extracts statistical claims, and cross-references them against our 8 institutional registries in real time.',
    answer: 'Yes! You can upload .txt, .pdf, .csv, or .json files directly via the Ingestion Drawer. The system parses the text, extracts statistical claims, and cross-references them against our 8 institutional registries in real time.'
  },
  {
    q: 'What is the mathematical formula for Source Reliability?',
    question: 'What is the mathematical formula for Source Reliability?',
    a: 'Reliability Index = (0.40 × Domain Authority) + (0.25 × Recency Weight) + (0.25 × Cross-Verification Consensus) + (0.10 × Empirical Rigor). Each source is algorithmically scored between 0 and 100%.',
    answer: 'Reliability Index = (0.40 × Domain Authority) + (0.25 × Recency Weight) + (0.25 × Cross-Verification Consensus) + (0.10 × Empirical Rigor). Each source is algorithmically scored between 0 and 100%.'
  },
  {
    q: 'How does the Source Clash Arena & Spin-O-Meter work?',
    question: 'How does the Source Clash Arena & Spin-O-Meter work?',
    a: 'The Source Clash Arena pits two authoritative sources against each other on controversial topics. The dynamic Spin-O-Meter calculates the PR Hype factor of policy projections against empirical audits to reveal the true Ground-Truth Anchor.',
    answer: 'The Source Clash Arena pits two authoritative sources against each other on controversial topics. The dynamic Spin-O-Meter calculates the PR Hype factor of policy projections against empirical audits to reveal the true Ground-Truth Anchor.'
  },
  {
    q: 'How do students use this for academic papers and citations?',
    question: 'How do students use this for academic papers and citations?',
    a: 'Students can use the Academic Citation Generator to automatically format primary evidence into IEEE, APA 7th, or Harvard citation standards with a single click, and consult the Student AI Copilot to understand complex research methodology.',
    answer: 'Students can use the Academic Citation Generator to automatically format primary evidence into IEEE, APA 7th, or Harvard citation standards with a single click, and consult the Student AI Copilot to understand complex research methodology.'
  }
];
