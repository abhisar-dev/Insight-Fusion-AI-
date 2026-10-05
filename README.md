# InsightFusion AI 🇮🇳
### Multi-Source AI Intelligence, Contradiction Detection & Evidence Synthesis Platform
*A Smart India Hackathon (SIH) High-Impact Project for Evidence-Grounded Research & Decision Making*

[![Platform Status](https://img.shields.io/badge/System-Operational-success)](http://localhost:5000)
[![Architecture](https://img.shields.io/badge/Architecture-RAG%20%2B%20Contradiction%20Ledger-orange)](#system-architecture)
[![License](https://img.shields.io/badge/License-MIT-blue)](#)

---

## 📌 Problem Statement (Why InsightFusion AI?)
> **“The problem is not lack of information — it’s the lack of intelligent information processing.”**

Today, critical research is fragmented across government portals, peer-reviewed journals, regulatory gazettes, and news reports. Traditional search engines provide raw links, forcing students, analysts, and policymakers to manually read and verify dozens of tabs. 

Crucially, **different reliable sources often provide contradictory data points**, and existing conversational AI models either average them out, hallucinate, or arbitrarily pick one claim.

---

## 💡 The Solution
**InsightFusion AI** provides an evidence-oriented intelligence layer over multiple information sources. It does not replace search—it automates post-search manual synthesis:
1. **Multi-Source Ingestion:** Simultaneously queries and normalizes statutory notifications (NITI Aayog, MeitY), multilateral bodies (World Bank, ILO), and academic repositories (IEEE).
2. **Algorithmic Reliability Scoring:** Computes mathematical reliability for each source:
   $$\text{Reliability} = (0.40 \times \text{Authority}) + (0.25 \times \text{Recency}) + (0.25 \times \text{Cross-Verif}) + (0.10 \times \text{Empirical Rigor})$$
3. **Contradiction & Disagreement Ledger:** When two credible sources diverge, it preserves both claims side-by-side with source attribution rather than hiding disagreements.
4. **Evidence Chain Traceability:** Zero-hallucination guardrail: Every generated statement is backed by primary citation keys.

---

## 🏗️ System Architecture (6-Step Pipeline)

```mermaid
flowchart TD
    User([User Query / Ingested Document]) --> S1[1. Query Decomposition & Tokenization]
    S1 --> S2[2. Multi-Source Ingestion: Portals, Papers, News]
    S2 --> S3[3. Data Normalization & Cleaning]
    S3 --> S4[4. Semantic RAG & Vector Embeddings]
    S4 --> S5[5. Multi-Source Comparison & Contradiction Detection]
    S5 --> S6[6. Reliability Scoring & Evidence Synthesis]
    S6 --> Dash[Verified Dashboard & Executive Brief]
```

---

## 🚀 Key Features

* **🌐 Enterprise Developer API Playground:** Interactive modal with copyable `cURL`, `Python SDK`, `Node.js (Fetch)`, and `TypeScript` integration snippets.
* **📄 Architectural Whitepaper & Mathematical Specification:** Formal derivation of the 4-factor Reliability Formula and zero-hallucination vector gating bounds with PDF export.
* **🔀 Document Lens (Primary Excerpt Split Diff):** Side-by-side raw statutory gazette text vs empirical survey passages highlighting exact conflicting clauses.
* **⚡ OpenTelemetry Microsecond Latency Profiler:** Live pipeline trace displaying sub-millisecond execution times across tokenization, dense retrieval, and matrix calculus ($P99 < 25\text{ms}$).
* **🛡️ Cryptographic SHA-256 Checksums & DPDP Act 2023:** Verifiable provenance hashes generated for each brief alongside zero-retention memory buffers.
* **🎚️ 3 Enterprise View Modes:** Instant switching between 1-Minute Executive Brief, Deep Academic Research, and Audit & Cryptography views.
* **🕸️ Interactive Neural Constellation Canvas:** Real-time particle graph in the hero connecting institutional nodes with glowing laser threads that react dynamically to cursor movement.
* **⚔️ Source Clash Arena (Discrepancy Battle Royale):** Head-to-head showdown with dynamic SVG **Spin-O-Meter / Hype Detector Gauge**.
* **🌶️ Savage Hackathon Judge Mode ("Roast My Project / Grill Me"):** Student AI Copilot with a witty SIH Grand Jury persona that grills architecture and delivers winning defense answers.
* **🔊 AI Voice Synthesizer:** Browser text-to-speech audio reader with animated soundwave visualizers.
* **🎵 Native Web Audio FX Engine & Confetti:** Synthesizer chimes, clash laser zaps, and celebration particle fireworks without external libraries.
* **📚 Academic Citation Generator:** 1-click IEEE, APA 7th, and Harvard citation generator.
* **📋 SIH Judge Technical Dossier:** Built-in modal containing top 10 technical defense Q&As directly from hackathon blueprints.

---

## 💻 Tech Stack

* **Frontend:** Clean Vanilla ES6 Architecture, Semantic HTML5, Government Standards Design, CSS Grid & Flexbox.
* **Backend:** Node.js, Express.js (v4.21+), Multer for document ingestion, Server-Sent Events (SSE).
* **Intelligence Layer:** Semantic RAG Architecture, Multi-Factor Reliability Index Algorithm, Cosine Similarity Vector Matching.
* **Deployment:** Production Simulation on `localhost:5000`.

---

## 🛠️ How to Run Locally

```bash
# 1. Clone repository
git clone https://github.com/abhisar-dev/Insight-Fusion-AI-.git
cd Insight-Fusion-AI-

# 2. Install dependencies
npm install

# 3. Start the application
npm start

# 4. Open browser
# Navigate to: http://localhost:5000
```

---

## 👥 Authors
* **Abhisar Kumar** — *Full-Stack Web Architect & AI/ML Specialist* ([Portfolio](https://abhisar-dev.github.io/portfolio/) | [GitHub](https://github.com/abhisar-dev))
* Smart India Hackathon (SIH) 2026 Innovation Team
