# Safer Cells, Cooler Ships: Dielectric Immersion Cooling for Marine BESS
## Technical Pitch & Compliance Deck for Shipyards, OEMs, and Classification Societies
*Based on the Comprehensive Research Dossier (`compass_artifact_wf-acfc8112-00ab-5636-9717-4afd76c759db_text_markdown.md`)*

---

## Executive Summary & Core Thesis
* **The Marine Cooling Dilemma:** Current Tier-1 marine ESS suppliers rely almost exclusively on **forced-air** (derates under high ambient temperatures and fast charging) or **cold-plate water/glycol** cooling loops.
* **The Core Vulnerability ("The Leak-Arc-Fuel Chain"):** Cold-plate water/glycol leaks introduce conductive fluids into $\sim 1{,}000\text{ V DC}$ pack environments, causing electrical arcing, short circuits, and providing flammable organic fuels (e.g. ethylene glycol).
* **The Breakthrough:** Single-phase **dielectric synthetic-ester immersion cooling** replaces water-glycol with a non-conductive, ultra-high-fire-point ($>300^\circ\text{C}$, IEC 61100 K3-class) fluid. A leak ceases to be an electrical ignition source and becomes purely a mechanical containment issue.
* **Dual-Track Regulatory Route:** Rapid product type-approval through the **Indian Register of Shipping (IRS)** for immediate domestic inland/harbour electrification, aligned in parallel with **DNV / ABS** standards for worldwide shipyard export.

---

## Slide 1: Title, Positioning & Mission
* **Title:** Safer Cells, Cooler Ships — Direct Immersion Cooling for Marine Energy Storage Systems
* **Target Audience:** Marine Classification Surveyors (IRS, DNV, ABS), Naval Architects, Commercial Shipyards (Cochin Shipyard, HCSL, GRSE), and Hybrid/EV Integrators.
* **Value Proposition:** 
  * Eliminates cell-to-cell thermal propagation.
  * Direct full-surface heat extraction (lowering maximum $\Delta T$ across cells by $>60\%$).
  * Inherently non-conductive fluid preventing high-voltage DC arcing.

---

## Slide 2: The Macro Shift — Marine Fleet Electrification
* **Global Operational Fleet (DNV AFI / Faraday Institution):**
  * **944 battery-powered ships in active commercial service**, with an additional **451 vessels on order**.
  * Fleet breakdown: 65% Hybrid, 18% Pure Electric, 17% Plug-in Hybrid.
  * Geographic lead: Europe accounts for 68% (Norway 33%), driven by coastal fjords and passenger ferry mandates.
* **Global Regulatory Drivers:**
  * IMO 2023 GHG Strategy: Net-zero target by/around 2050 with 2030/2040 intermediate checkposts.
  * EU Emissions Trading System (ETS) & FuelEU Maritime (mandatory maritime carbon intensity reductions).
* **Commercial Valuation:** Marine BESS market expanding from $\sim \$0.67\text{B} - \$0.86\text{B}$ in 2025 to over $\sim \$3.2\text{B} - \$3.9\text{B}$ by 2035 at $\sim 16.5\%$ CAGR.

---

## Slide 3: India’s Maritime Electrification Beachhead
* **Harit Nauka Policy (MoPSW):**
  * Mandate: 50% green-fuel inland passenger fleets within 10 years; 100% green transition by 2045 (*Maritime Amrit Kaal Vision 2047*).
* **Flagship Indian Operational Projects:**
  * **Kochi Water Metro:** 78 electric-hybrid catamarans (122 kWh LTO packs, Cochin Shipyard build, dual DNV/IRS class). Over 7.7M passengers carried.
  * **IWAI Catamarans (Hooghly Cochin Shipyard):** 8 electric/hybrid 24m passenger vessels awarded IRS `BATTERY PROP` notation.
  * **Inland Solar-Electric Pioneers:** Navalt (*Aditya* 50 kWh, *Indra* 80 kWh DNV pack under IRS class).
* **Tropical Operating Realities:**
  * High ambient temperatures ($35^\circ\text{C} - 45^\circ\text{C}$) in coastal and inland Indian waters heavily penalize air-cooled packs, demanding robust active liquid thermal management.

---

## Slide 4: Marine Chemistry Comparison: LFP vs. LTO vs. NMC
| Metric | NMC / G-NMCA | LFP (Lithium Iron Phosphate) | LTO (Lithium Titanate Oxide) |
| :--- | :--- | :--- | :--- |
| **Typical Suppliers** | Leclanché (Navius MRS-3), Spear, XALT | Corvus (Blue Whale), EST-Floattech, CATL, EVE | Echandia, Toshiba SCiB, Forsee Power |
| **Volumetric Energy Density** | High ($\approx 150 - 200\text{ Wh/L}$) | Moderate ($\approx 110 - 140\text{ Wh/L}$) | Lower ($\approx 70 - 100\text{ Wh/L}$) |
| **Cycle Life (80% DoD)** | $3{,}000 - 5{,}000$ cycles | $4{,}000 - 8{,}000$ cycles | $>20{,}000$ cycles |
| **C-Rate Capability** | Up to 2C - 3C | 0.7C - 1C (continuous) | Ultra-fast (6C continuous, 10C peak) |
| **Thermal Runaway Onset** | Lower ($150 - 180^\circ\text{C}$), high oxygen release | Moderate ($230 - 270^\circ\text{C}$), no oxygen release | Extremely stable ($>300^\circ\text{C}$) |
| **Strategic Role** | High-energy long routes | **Industry workhorse for energy & safety balance** | Fast-turnaround urban ferries (e.g. Kochi Metro) |

*Key Takeaway:* LFP and LTO generate lower decomposition heat than NMC, but still generate toxic/flammable vent gases under abusive conditions—making fluid immersion the ultimate failsafe.

---

## Slide 5: Global Supplier Landscape & The "Immersion White Space"
| Supplier & Line | Chemistry | Cooling System | Class Approvals | Vessel References |
| :--- | :--- | :--- | :--- | :--- |
| **Corvus Energy (Orca / Blue Whale)** | NMC / LFP | Forced Air | DNV, LR, BV, ABS | Norled *Ampere*, Bibby Marine eCSOV (24.4 MWh), 700+ vessels |
| **Corvus Energy (Dolphin NxtGen)** | Li-ion | Cold-Plate Liquid | In development | BC Ferries Summit Class (4 × 10 MWh) |
| **Leclanché (Navius MRS-3)** | G/NMC & NMCA | Cold-Plate Liquid | LR, BV Type Approvals | *Ellen* E-ferry (4.3 MWh), CGN Lake Geneva |
| **EST-Floattech (Octopus)** | LFP | Integrated Air | DNV, LR, BV, ABS | Commercial inland vessels & workboats |
| **Siemens Energy (BlueVault)** | Li-ion | Liquid (Water Channels) | DNV | Norled *Ampere*, Kochi Water Metro propulsion |
| **Shift Clean Energy (PwrSwäp)** | Li-ion | Cold-Plate Liquid Channels | **IRS**, ClassNK, RINA, LR | 17+ Asian tugs, swappable container ePods |
| **XING Mobility (IMMERSIO)** | Li-ion | **Single-Phase Immersion** | DNV TA process ongoing | Porrima P111, Smart IQ e-boat |
| **Kreisel Electric** | Li-ion (21700) | **Immersion (Shell MIVOLT)** | DNV claimed | High-performance marine craft |

*The Market Gap:* **Zero Tier-1 incumbent suppliers offer a commercialized marine-certified immersion product.** The incumbent solutions are tied to air or cold plates.

---

## Slide 6: The Failure Mechanism — Deconstructing the *Ytterøyningen* Incident
* **The Incident (10–11 October 2019):**
  * Norwegian passenger ferry *Ytterøyningen* suffered a major battery compartment fire and subsequent gas explosion ~12 hours later.
* **Root-Cause Findings (Corvus & Norwegian Maritime Authority):**
  1. A twisted gasket in the cold-plate liquid cooling loop allowed a slow **water-glycol leakage**.
  2. The conductive coolant bridged energized busbars, igniting electrical arcing across **$1{,}000\text{ V DC}$ pack potentials**.
  3. The leaked ethylene glycol acted as an active hydrocarbon fuel source.
  4. Subsequent seawater sprinkler deployment exacerbated short-circuits.
* **Regulatory Ramification (DNV July 2023 Rule Update):**
  * Class societies introduced stringent mandates governing *coolant leaks causing electrical fault currents*.
* **The Solution:** A non-conductive dielectric fluid completely disarms this chain reaction.

---

## Slide 7: Architectural Face-Off — Air vs. Cold-Plate vs. Dielectric Immersion
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                COOLING TOPOLOGIES                               │
├─────────────────────┬───────────────────────────┬───────────────────────────────┤
│     FORCED AIR      │  COLD PLATE (WATER/GLYCOL)│      DIELECTRIC IMMERSION     │
├─────────────────────┼───────────────────────────┼───────────────────────────────┤
│ • Inefficient heat  │ • Localized contact face  │ • 100% wetted cell boundary   │
│   transfer (air)    │ • Large thermal gradients │ • Uniform cell temperature    │
│ • Salt fog / marine │ • Leak = 1,000V DC arcing │ • Fluid is non-conductive     │
│   air corrosion     │ • Glycol fuels fires      │ • Fire point >300°C (K3-class)│
│ • Severe derating in│ • Complex channel sealing │ • Quenches thermal runaway    │
│   tropical ambient  │                           │   at the cell surface         │
└─────────────────────┴───────────────────────────┴───────────────────────────────┘
```

---

## Slide 8: The Fluid Shield — K3 Synthetic Ester Science
* **Fire Safety (IEC 61100 K3 Classification):**
  * **Flash Point:** $>260^\circ\text{C}$ (ISO 2592 Open Cup).
  * **Fire / Ignition Point:** $>300^\circ\text{C}$ (vs. mineral oils at $\sim 218^\circ\text{C}$ and flammable water-glycol).
* **Electrical Insulation:**
  * Dielectric breakdown strength $>50\text{ kV}$, maintained even under elevated humidity.
* **Marine Environmental Hardening:**
  * **Biodegradability:** Readily biodegradable under OECD 301B (protects port state bilge/drain discharge compliance).
  * **Low Eco-Toxicity:** Non-hazardous to aquatic ecosystems.
  * **Hydrolytic Stability:** Superior water-saturation tolerance compared to silicone or mineral hydrocarbons.

---

## Slide 9: Thermal Runaway Propagation & Containment Evidence
* **The Target Standard:** IEC 62619 cl. 7.3.3 / DNV Option 1 ("Zero cell-to-cell propagation with a 24-hour observation hold").
* **Laboratory Heat Dissipation Data:**
  * Synthetic-ester immersion reduces maximum cell temperature rise by **74.5%** and pack $\Delta T$ by **60.8%** under high 3C discharge rates compared to forced air.
* **Thermal Runaway Quenching Mechanism:**
  * When an abusive cell enters exothermic self-heating, the surrounding fluid acts as an infinite-capacity convective heat sink.
  * Rapid sensible and latent heat absorption prevents adjacent cells from crossing the critical decomposition threshold ($T_c \approx 200 - 240^\circ\text{C}$).
  * Fluid layer displaces free oxygen directly at the cell vent boundary.

---

## Slide 10: Regulatory Framework & Classification Mapping
* **IRS Classification Notes (Approval of Li-ion Battery Systems & Guidelines on Battery Powered Vessels):**
  * Mandates detailed cooling P&ID review, rack drawings, BMS logic assessment, and witnessed shop pressure testing of the cooling loop.
* **DNV-RU-SHIP Pt.6 Ch.2 Sec.1 & DNV-CP-0418:**
  * Sets the global benchmark for vessel battery power (`Battery(Power)` notation) and propagation Option 1.
* **ABS Li-ion Requirements (Dec 2025):**
  * Mandatory for installations $\ge 20\text{ kWh}$, prescribing $1.5\times$ design pressure hydrostatic testing and duct off-gas venting criteria.
* **EMSA 2023 Guidance on Marine BESS:**
  * Dedicated battery compartments for $>50\text{ kWh}$, drain tanks dedicated to cooling fluid leaks, and early gas detection.

---

## Slide 11: Step-by-Step IRS Type Approval Roadmap
1. **Pre-Submission Engagement:** Present alternative design concept to IRS Technical Directorate (immersion fluid classified under novel cooling arrangements).
2. **Design & Engineering Package Submission:**
   * Battery system block diagrams, BMS electrical architecture, single-line diagrams.
   * Cooling P&ID, fluid circulation pumps, plate heat exchanger sizing, expansion volume calculations.
   * Fluid technical dossier: K3 classification, breakdown voltage, material compatibility matrices.
3. **Risk Assessment (FMEA / HAZID):**
   * Failure mode analysis: loss of coolant flow, pump trip, tank seal leakage, overpressure, and ship tilt (heel/trim).
4. **Manufacturer Works Assessment:** Audit of cleanroom assembly, quality control protocols, and leak detection testing.
5. **IRS Witnessed Type Testing:**
   * IEC 62619 cell & BMS performance tests.
   * **Cl. 7.3.3 Thermal Runaway Propagation Test** conducted inside the immersion fluid tank.
   * **1.5× Hydrostatic Pressure Hold Test (30 minutes)** on the containment envelope.
   * Environmental suite: IACS UR E10 (vibration, salt mist, 45° inclination, dry/damp heat).
6. **Certification & Unit Delivery:** 5-Year IRS Type Approval + intermediate 30-month audits + shipboard unit certification.

---

## Slide 12: Anticipated Class Questions & Defensible Engineering Answers
* **Q1: Does dielectric fluid add to the fire load of the battery compartment?**
  * *Answer:* The fluid is a K3-class synthetic ester with a fire point $>300^\circ\text{C}$. Unlike water-glycol, it cannot be ignited by electrical arcing, and operates well below its flash point ($>260^\circ\text{C}$).
* **Q2: How is off-gas collected and vented if bubbling through dielectric fluid?**
  * *Answer:* Vent gases rise rapidly through the fluid into an engineered nitrogen-padded or dry-air headspace, ducted directly overboard via high-capacity non-return pressure relief valves.
* **Q3: What happens during ship motions (roll, pitch, 45° dynamic inclination)?**
  * *Answer:* Tank internal baffle plates eliminate fluid sloshing; positive expansion tanks ensure cells remain 100% submerged regardless of sea state.
* **Q4: How does fixed fire extinguishing interact with fluid-filled enclosures?**
  * *Answer:* The primary thermal runaway defense is internal liquid quenching. Space protection (Novec 1230 / aerosol / water mist) protects external boundaries without degrading fluid containment.

---

## Slide 13: Shipyard Integration & Naval Architecture Benefits
* **Compact Footprint (Cell-to-Pack Integration):**
  * Eliminates bulky air ducting, fans, and inter-cell aerogel isolation barriers, enabling **up to 20–30% higher volumetric packing efficiency**.
* **Hydraulic Skid Modularity:**
  * Closed internal primary loop (dielectric fluid $\leftrightarrow$ Plate Heat Exchanger).
  * Shipyard interface is limited to standard chilled water or raw seawater secondary cooling piping at the skid boundary.
* **Maintenance & Service:**
  * Non-hazardous fluid handling; annual dielectric breakdown sampling and filtration testing during scheduled dockings.

---

## Slide 14: Strategic Collaboration & Commercial Roadmap
* **Target Partners in Phase 1:**
  * **Shipyards:** Cochin Shipyard Limited (CSL), Hooghly Cochin Shipyard (HCSL), Garden Reach Shipbuilders & Engineers (GRSE).
  * **Fleet Operators:** Kochi Water Metro (KMRL tranche expansions), IWAI National Waterways cargo/passenger pushers.
  * **Global Marine Pack OEMs:** Supply immersion cooling integration to established module builders (Leclanché, Corvus, Shift Clean Energy).
* **Execution Milestones:**
  1. **Q1:** Formalized IRS Technical Pre-Meeting & witness test agreement.
  2. **Q2:** Witnessed IEC 62619 cl. 7.3.3 non-propagation test with K3 synthetic ester.
  3. **Q3:** IRS Type Approval Certificate issuance.
  4. **Q4:** First vessel sea-trials on an Indian harbour craft / inland ferry.

---

## Slide 15: Call to Action & Conclusion
* **The Proposition:** Partner with us to deploy the first indigenously certified, immersion-cooled marine energy storage platform.
* **The Safety Mandate:** End the leak-arc-fuel risk cycle on zero-emission commercial vessels.
* **The Opportunity:** Secure first-mover advantage under India's Harit Nauka initiative while engineering a product qualified for ABS and DNV global fleets.
