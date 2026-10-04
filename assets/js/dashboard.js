"use strict";
(() => {
const qbrData = {
        metadata: {
          organization: "Jabil",
          title: "Digital Transformation",
          program: "Jabil InControl & Factory of the Future",
          quarter: "Q3 2026",
          health: "On Track",
          healthStatement:
            "Foundations are progressing; five governance approvals are the key near-term delivery gates.",
          healthBasis:
            "Illustrative portfolio assessment for this prototype QBR.",
        },
        phases: [
          {
            id: "crawl",
            name: "Crawl",
            description: "Establish the Foundation",
            timing: "Year 1",
          },
          {
            id: "walk",
            name: "Walk",
            description: "Validate and Scale",
            timing: "Year 2",
          },
          {
            id: "run",
            name: "Run",
            description: "Optimize and Lead",
            timing: "Year 3+",
          },
        ],
        kpiGroups: [
          {
            id: "leading",
            title: "Leading Indicators",
            subtitle: "Building the Foundation",
          },
          {
            id: "lagging",
            title: "Lagging Indicators",
            subtitle: "Measuring Real Business Impact",
          },
        ],
        kpis: [
          {
            id: "data-readiness",
            group: "leading",
            name: "Data Readiness",
            value: 78,
            target: "90%",
            signal: "↑ Building",
            kind: "prototype",
            definition:
              "Required sources meeting ingestion and data-quality standards.",
            formula:
              "Compliant required sources ÷ total required sources × 100",
            source: "Illustrative prototype value",
          },
          {
            id: "factory-connectivity",
            group: "leading",
            name: "Factory Connectivity",
            value: 64,
            target: "85%",
            signal: "↑ Building",
            kind: "prototype",
            definition:
              "Targeted factory data sources integrated with Azure IoT / cloud architecture.",
            formula: "Integrated target sources ÷ planned target sources × 100",
            source: "Illustrative prototype value",
          },
          {
            id: "workforce-readiness",
            group: "leading",
            name: "Workforce Readiness",
            value: 71,
            target: "90%",
            signal: "↑ Building",
            kind: "prototype",
            definition:
              "Impacted employees trained and able to operate transformed workflows.",
            formula:
              "Employees meeting readiness criteria ÷ impacted employees × 100",
            source: "Illustrative prototype value",
          },
          {
            id: "supply-chain-cost",
            group: "lagging",
            name: "Supply Chain Cost Reduction",
            value: 43,
            target: "40%",
            signal: "↑ Above reference",
            kind: "documented",
            definition:
              "Reported reduction in supply-chain costs from the Kymeta InControl deployment.",
            formula: "Documented result; calculation method not specified here",
            source: "Documented Jabil outcome",
          },
          {
            id: "defect-accuracy",
            group: "lagging",
            name: "Defect Prediction Accuracy",
            value: 80,
            target: "Not supplied",
            signal: "Documented result",
            kind: "documented",
            definition:
              "Reported defect-prediction accuracy from the AOI predictive pilot.",
            formula: "Documented result; calculation method not specified here",
            source: "Documented Jabil outcome",
          },
          {
            id: "scrap-rework",
            group: "lagging",
            name: "Scrap & Rework Reduction",
            value: 17,
            target: "Not supplied",
            signal: "Documented result",
            kind: "documented",
            definition:
              "Reported reduction in scrap and rework from predictive-quality work.",
            formula: "Documented result; calculation method not specified here",
            source: "Documented Jabil outcome",
          },
        ],
        initiatives: [
          {
            id: 1,
            phase: "crawl",
            path: "supply",
            timing: "Year 1 · Q1–Q3",
            name: "InControl Intelligent Digital Supply Chain Platform",
            capability:
              "Centralized data layer normalizing fragmented supply-chain data into a single enterprise pipeline.",
            summary:
              "Normalize fragmented supply-chain data into a shared enterprise pipeline.",
            status: "At Risk",
            progress:
              "Illustrative readiness: data model and named owners remain dependent on executive approvals.",
            why: "Supply-chain data is fragmented across systems and business units. Without a common model and accountable data owners, later InControl deployments cannot scale consistently.",
            impact:
              "Establishes the trusted data foundation for Kymeta deployment and later predictive risk scoring. The 43% documented cost reduction is associated with the Kymeta deployment, not this platform initiative.",
            action:
              "Confirm the common data model, appoint business-unit data owners, and align access policy before building the enterprise pipeline.",
            decisionIds: [1, 4],
          },
          {
            id: 2,
            phase: "crawl",
            path: "factory",
            timing: "Year 1 · Q2–Q4",
            name: "Microsoft Azure IoT Cloud Architecture Integration",
            capability:
              "Enterprise cloud and ML foundation capable of ingesting high-volume factory imagery and sensor data.",
            summary:
              "Create a cloud and ML foundation for factory imagery and sensor data.",
            status: "Not Started",
            progress:
              "Illustrative status: kickoff is gated by funding, contract scope, and enterprise standards.",
            why: "The predictive-quality pilot depends on a consistent, scalable architecture for factory imagery, sensor data, and machine-learning workloads.",
            impact:
              "Unblocks the AOI pilot and reduces the risk of incompatible site-level platforms. No separate financial outcome is attributed to this foundation initiative.",
            action:
              "Finalize agreement scope, approve Azure as the enterprise cloud / ML standard, and define ingestion standards before site integration.",
            decisionIds: [1, 2, 3],
          },
          {
            id: 3,
            phase: "walk",
            path: "supply",
            timing: "Year 2 · Q1–Q2",
            name: "Kymeta InControl Supply Chain Deployment",
            capability:
              "Deploy InControl for the Kymeta partnership using the shared digital supply-chain platform.",
            summary:
              "Deploy the shared InControl platform for the Kymeta partnership.",
            status: "On Target",
            progress:
              "Illustrative status: deployment follows the Crawl platform and data-readiness gate.",
            why: "The deployment is the first scaled use of the shared InControl platform and depends on Initiative 1's normalized data pipeline.",
            impact:
              "Documented Jabil outcome: 43% reduction in supply-chain costs. This result is tied to the Kymeta InControl deployment.",
            action:
              "Validate deployment scope, confirm the source-to-platform data map, and track realized cost reduction against the approved baseline.",
            decisionIds: [],
          },
          {
            id: 4,
            phase: "walk",
            path: "factory",
            timing: "Year 2 · Q3–Q4",
            name: "Automated Optical Inspection (AOI) Predictive Pilot",
            capability:
              "Deploy Azure Machine Learning on a single 32-step SMT production line.",
            summary:
              "Pilot predictive inspection on one 32-step SMT production line.",
            status: "Behind Target",
            progress:
              "Illustrative exception: the pilot is behind its planned sequence; management can recover within current authority.",
            why: "The pilot depends on Azure ingestion standards and a production-ready factory data path from Initiative 2.",
            impact:
              "Documented Jabil outcomes include 80% defect-prediction accuracy and increased first-pass yield. The accuracy figure is a result, not a target-attainment percentage.",
            action:
              "Re-sequence line integration, validate image and sensor data quality, and update the recovery plan with plant QA and operations leads.",
            decisionIds: [],
          },
          {
            id: 5,
            phase: "run",
            path: "supply",
            timing: "Year 3 · Q1+",
            name: "InControl Predictive Supply Chain Analytics Expansion",
            capability:
              "Scale from passive visualization to active automated risk scoring across global business units.",
            summary:
              "Expand from visibility to automated risk scoring across business units.",
            status: "Not Started",
            progress:
              "Illustrative status: the Run phase follows validated Walk outcomes and agreed scale thresholds.",
            why: "Global expansion should follow proof of value, trusted shared data, and an executive-approved definition of acceptable supply-chain impact.",
            impact:
              "Moves procurement from manual order entry toward managing AI-generated exceptions and model oversight. Scale benefits are not quantified in this prototype.",
            action:
              "Set the cost-reduction success threshold; prepare procurement roles, exception workflows, and model-monitoring ownership for scale.",
            decisionIds: [5],
          },
          {
            id: 6,
            phase: "run",
            path: "factory",
            timing: "Year 3 · Q3+",
            name: "Enterprise Factory Predictive Quality Rollout",
            capability:
              "Scale the predictive-quality model from one SMT line to global manufacturing facilities.",
            summary:
              "Extend validated predictive quality across global manufacturing.",
            status: "Not Started",
            progress:
              "Illustrative status: global rollout follows successful pilot thresholds and workflow readiness.",
            why: "The single-line AOI pilot must demonstrate repeatable prediction quality and operational response before global deployment.",
            impact:
              "Requires redesign of global QA workflows and retraining operators to respond to AI-driven alerts rather than scheduled manual checks. Enterprise-wide benefits are not quantified here.",
            action:
              "Define the defect-accuracy scale gate, standardize alert handling, and develop a site-by-site QA transition and training plan.",
            decisionIds: [5],
          },
        ],
        decisions: [
          {
            id: 1,
            description:
              "Approve Year 1 Crawl funding for InControl (Initiative 1) and Azure integration (Initiative 2)",
            accountable: "EVP & CFO",
            due: "Week 4",
            unblocks: "Both Crawl initiatives start on schedule",
          },
          {
            id: 2,
            description: "Approve Microsoft Azure agreement scope and terms",
            accountable: "SVP, Global Procurement & Supply Chain",
            due: "Week 6",
            unblocks: "Initiative 2 kickoff",
          },
          {
            id: 3,
            description:
              "Set Azure as the enterprise cloud / ML standard, including ingestion standards for factory imagery and sensor data",
            accountable: "SVP & CIO",
            due: "Week 8",
            unblocks:
              "Initiative 2 build and prevents site-level platform drift before Initiative 4",
          },
          {
            id: 4,
            description:
              "Approve the InControl common data model, named business-unit data owners, and cross-business-unit access policy",
            accountable: "SVP & CIO",
            due: "Week 10",
            unblocks: "Initiative 1 data normalization",
          },
          {
            id: 5,
            description:
              "Set Walk-to-Run success thresholds for minimum supply-chain cost reduction and minimum defect-prediction accuracy",
            accountable: "CEO",
            due: "Week 12",
            unblocks: "Objective scale gate before Year 2 pilots",
          },
        ],
      };

      const statusClasses = {
        "On Target": "status-on-target",
        "At Risk": "status-at-risk",
        "Behind Target": "status-behind-target",
        "Not Started": "status-not-started",
      };
      const phaseById = Object.fromEntries(
        qbrData.phases.map((phase) => [phase.id, phase]),
      );
      const decisionById = Object.fromEntries(
        qbrData.decisions.map((decision) => [decision.id, decision]),
      );
      function escapeHtml(value) {
        return String(value).replace(
          /[&<>"']/g,
          (character) =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            })[character],
        );
      }

      function statusPill(status) {
        return `<span class="status-pill ${statusClasses[status] || "status-not-started"}">${escapeHtml(status)}</span>`;
      }

      function renderDetail(initiative) {
        const phase = phaseById[initiative.phase];
        const linkedDecisions = initiative.decisionIds
          .map((id) => decisionById[id])
          .filter(Boolean);
        document.getElementById("detail-context").textContent =
          `Initiative ${String(initiative.id).padStart(2, "0")} · ${phase.name}`;
        document.getElementById("detail-number").textContent = String(
          initiative.id,
        ).padStart(2, "0");
        document.getElementById("detail-name").textContent = initiative.name;
        document.getElementById("detail-meta").innerHTML =
          `<span><strong>Phase:</strong> ${escapeHtml(phase.name)} · ${escapeHtml(phase.description)}</span><span><strong>Timing:</strong> ${escapeHtml(initiative.timing)}</span><span><strong>Capability:</strong> ${escapeHtml(initiative.capability)}</span>`;
        document.getElementById("detail-summary").textContent = initiative.summary;
        document.getElementById("detail-status").innerHTML = statusPill(
          initiative.status,
        );
        const decisionContent = linkedDecisions.length
          ? `<p class="decision-required">DECISION REQUIRED</p><p>Executive action is needed to resolve a governance gate; this is separate from execution status.</p><div class="decision-cards">${linkedDecisions.map((decision) => `<div class="decision-card"><strong>${escapeHtml(decision.description)}</strong><span>Accountable: ${escapeHtml(decision.accountable)} · Due: ${escapeHtml(decision.due)}<br>Unblocks: ${escapeHtml(decision.unblocks)}</span></div>`).join("")}</div>`
          : `<p class="decision-normal">No decision required</p><p>Any execution issue can be managed within existing authority. No executive escalation is currently assigned to this initiative.</p>`;
        const sections = [
          {
            title: "Current Status",
            content: `<div class="detail-status-panel">${statusPill(initiative.status)}<span>Illustrative execution status</span></div><p>${escapeHtml(initiative.progress)}</p>`,
          },
          { title: "Why", content: `<p>${escapeHtml(initiative.why)}</p>` },
          {
            title: "Impact",
            content: `<p>${escapeHtml(initiative.impact)}</p>`,
          },
          {
            title: "Action",
            content: `<p>${escapeHtml(initiative.action)}</p>`,
          },
          { title: "Decision Required", content: decisionContent },
        ];
        document.getElementById("detail-sections").innerHTML = sections
          .map(
            (section, index) =>
              `<section class="detail-section"><div class="detail-section-heading"><span class="detail-section-index">${index + 1}</span><h2>${section.title}</h2></div>${section.content}</section>`,
          )
          .join("");
      }

      function renderReport() {
        const kpiRows = qbrData.kpis
          .map(
            (kpi) =>
              `<tr><td><strong>${escapeHtml(kpi.name)}</strong></td><td>${kpi.value}%</td><td>${escapeHtml(kpi.target)}</td><td>${escapeHtml(kpi.source)}</td><td>${escapeHtml(kpi.definition)}</td></tr>`,
          )
          .join("");
        const initiativeRows = qbrData.initiatives
          .map((initiative) => {
            const phase = phaseById[initiative.phase];
            const required = initiative.decisionIds.length > 0;
            const decisionStatus = required
              ? "DECISION REQUIRED"
              : "No decision required";
            return `<tr><td><strong>${String(initiative.id).padStart(2, "0")}. ${escapeHtml(initiative.name)}</strong><br>${escapeHtml(phase.name)} · ${escapeHtml(initiative.timing)}</td><td><span class="report-status ${statusClasses[initiative.status]}">${escapeHtml(initiative.status)}</span><br><small>${escapeHtml(initiative.progress)}</small></td><td>${escapeHtml(initiative.why)}<br><br><strong>Impact:</strong> ${escapeHtml(initiative.impact)}</td><td><strong class="report-decision-state ${required ? "required" : "normal"}">${decisionStatus}</strong>${required ? `<br>${initiative.decisionIds.map((id) => `#${id}`).join(", ")}` : ""}</td></tr>`;
          })
          .join("");
        const decisionRows = qbrData.decisions
          .map(
            (decision) =>
              `<tr><td>${String(decision.id).padStart(2, "0")}</td><td><strong>${escapeHtml(decision.description)}</strong></td><td>${escapeHtml(decision.accountable)}</td><td>${escapeHtml(decision.due)}</td><td>${escapeHtml(decision.unblocks)}</td></tr>`,
          )
          .join("");
        document.getElementById("report-document").innerHTML = `
        <div class="report-title-block"><div><p class="eyebrow">${escapeHtml(qbrData.metadata.organization)} · Executive QBR</p><h1 id="report-title">${escapeHtml(qbrData.metadata.title)}</h1><p>${escapeHtml(qbrData.metadata.program)}</p></div><div class="report-period">${escapeHtml(qbrData.metadata.quarter)}<br>Transformation review</div></div>
        <div class="report-health"><strong>${escapeHtml(qbrData.metadata.health.toUpperCase())}</strong><span>${escapeHtml(qbrData.metadata.healthStatement)} ${escapeHtml(qbrData.metadata.healthBasis)}</span></div>
        <section class="report-section"><h2>Transformation KPIs</h2><div class="report-table-wrap"><table class="report-table"><thead><tr><th>KPI</th><th>Current</th><th>Target / reference</th><th>Basis</th><th>Definition</th></tr></thead><tbody>${kpiRows}</tbody></table></div><p class="report-source-note">Readiness values and target thresholds are illustrative prototype values. Supply-chain cost reduction (43%), defect-prediction accuracy (80%), and scrap &amp; rework reduction (17%) are documented outcomes; targets were not supplied where noted.</p></section>
        <section class="report-section"><h2>Initiative Execution &amp; Governance</h2><div class="report-table-wrap"><table class="report-table"><thead><tr><th>Initiative / phase / timing</th><th>Execution status</th><th>Reasoning &amp; impact</th><th>Governance state</th></tr></thead><tbody>${initiativeRows}</tbody></table></div></section>
        <section class="report-section"><h2>Executive Decisions Required</h2><div class="report-table-wrap"><table class="report-table"><thead><tr><th>#</th><th>Decision</th><th>Accountable</th><th>Due</th><th>What it unblocks</th></tr></thead><tbody>${decisionRows}</tbody></table></div></section>
        <div class="report-footer"><span>Jabil · Digital Transformation</span><span>Prototype QBR artifact · ${escapeHtml(qbrData.metadata.quarter)}</span></div>`;
      }

      
function renderHealth() {
  const {health, healthStatement} = qbrData.metadata;
  const normalized = health.toLowerCase().replace(/[^a-z]/g, "");
  const state = normalized === "ontrack" ? "on-track" : normalized === "atrisk" ? "at-risk" : "critical";
  const card = document.getElementById("overall-health");
  card.dataset.health = state;
  card.setAttribute("aria-label", `Overall transformation health: ${health}`);
  document.getElementById("health-value").textContent = health.toUpperCase();
  document.getElementById("health-statement").textContent = healthStatement;
}
function renderKpis() {
  document.getElementById("kpi-groups").innerHTML = qbrData.kpiGroups.map(group => `
    <section class="col-12 col-xl-6 kpi-group" aria-labelledby="group-${group.id}">
      <div class="kpi-group-heading d-flex flex-wrap align-items-baseline gap-2 mb-2"><h2 class="dashboard-group-title mb-0" id="group-${group.id}">${escapeHtml(group.title)}</h2><span class="text-secondary small">${escapeHtml(group.subtitle)}</span></div>
      <div class="row g-3">${qbrData.kpis.filter(kpi=>kpi.group===group.id).map(kpi=>`
        <div class="col-12 col-md-4"><article class="card kpi-card h-100" data-kind="${kpi.kind}" aria-label="${escapeHtml(kpi.name)} — ${escapeHtml(kpi.source)}">
          <h3>${escapeHtml(kpi.name)}</h3>
          <div class="kpi-metric-labels"><strong class="kpi-value">${kpi.value}%</strong><span>Target: <strong>${escapeHtml(kpi.target)}</strong></span></div>
          <div class="kpi-chart" role="img" aria-label="${escapeHtml(kpi.name)}: current ${kpi.value}%, target ${escapeHtml(kpi.target)}. Scale 0 to 100%." style="--value:${kpi.value}%;">
            <span class="kpi-bar-value" aria-hidden="true"></span><span class="kpi-bar-remainder" aria-hidden="true"></span>
            ${/^\d+(?:\.\d+)?%$/.test(kpi.target)?`<span class="kpi-target-marker" style="--target:${parseFloat(kpi.target)}%;" aria-hidden="true"></span>`:""}
          </div><span class="kpi-signal">${escapeHtml(kpi.signal)}</span>
        </article></div>`).join("")}</div>
    </section>`).join("");
}
function renderRoadmap() {
  const paths = [{id:"supply",title:"Supply Chain / InControl",chain:"1 → 3 → 5"},{id:"factory",title:"Factory / Predictive Quality",chain:"2 → 4 → 6"}];
  document.getElementById("roadmap-content").innerHTML = `<div class="row g-3 roadmap-phases">${qbrData.phases.map(phase=>`<div class="col-4"><div class="roadmap-phase"><strong>${escapeHtml(phase.name)}</strong><span>${escapeHtml(phase.description)} · ${escapeHtml(phase.timing)}</span></div></div>`).join("")}</div>` + paths.map(path=>`
    <section class="roadmap-path" aria-label="${path.title} dependency chain ${path.chain}">
      <div class="d-flex flex-wrap gap-3 align-items-baseline mb-2"><h3 class="mb-0">${path.title}</h3><strong class="roadmap-chain">${path.chain}</strong></div>
      <div class="row g-3 roadmap-cards">${qbrData.phases.map(phase=>{
        const initiative=qbrData.initiatives.find(item=>item.path===path.id && item.phase===phase.id);
        return `<div class="col-4 initiative-cell"><article class="card initiative-card h-100">
          <div class="d-flex flex-wrap gap-2 justify-content-between mb-2"><span class="initiative-number">INITIATIVE ${String(initiative.id).padStart(2,"0")}</span>${statusPill(initiative.status)}</div>
          <h4><span class="initiative-mobile-phase">${escapeHtml(phase.name)} · </span>${escapeHtml(initiative.name)}</h4><strong class="initiative-timing">${escapeHtml(initiative.timing)}</strong>
          <button class="btn btn-sm btn-outline-primary mt-auto align-self-start" type="button" data-initiative="${initiative.id}" data-bs-toggle="modal" data-bs-target="#initiative-modal" aria-label="View details for initiative ${initiative.id}: ${escapeHtml(initiative.name)}">View details →</button>
        </article></div>`;
      }).join("")}</div>
    </section>`).join("");
}
document.getElementById("initiative-modal").addEventListener("show.bs.modal",event=>{
  const initiative=qbrData.initiatives.find(item=>item.id===Number(event.relatedTarget?.dataset.initiative));
  if(initiative) renderDetail(initiative);
});
document.getElementById("report-modal").addEventListener("show.bs.modal",renderReport);
document.getElementById("print-report").addEventListener("click",()=>{
  document.body.classList.add("print-report");
  window.print();
});
window.addEventListener("afterprint",()=>document.body.classList.remove("print-report"));
document.getElementById("report-modal").addEventListener("hidden.bs.modal",()=>document.body.classList.remove("print-report"));
document.getElementById("quarter-label").textContent=qbrData.metadata.quarter;
document.getElementById("page-title").textContent=qbrData.metadata.title;
document.getElementById("program-subtitle").textContent=qbrData.metadata.program;
document.getElementById("decision-count").textContent=qbrData.decisions.length;
renderHealth(); renderKpis(); renderRoadmap();
})();
