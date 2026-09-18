# VFCPL MARINE ENERGY PLATFORM (VFCPL-MEP-001)
## Project SAMUDRA — AMBESS (Anchor Mode Battery Energy Storage System)
### Technical Memorandum: Certification Basis & First Technical Review Meeting Agenda
**Joint Alignment: Indian Register of Shipping (IRS) & American Bureau of Shipping (ABS)**

---

**Document ID:** VFCPL-MEP001-MEMO-001  
**Revision:** Rev 0  
**Date:** 18 September 2026  
**Author / Applicant:** VFCPL (Vayusakti Future Construct Pvt. Ltd.)  
**OEM Battery & BMS Partner:** Clean Electric (Pvt. Ltd.)  
**Classification Authorities:** Indian Register of Shipping (IRS) & American Bureau of Shipping (ABS)  

---

## 1. Executive Summary & Purpose

The purpose of this memorandum is to establish the formal **Certification Basis** for the **VFCPL-MEP-001** immersion-cooled Battery Energy Storage System (BESS) and outline the **10 Strategic Decisions** to be resolved at the initial technical alignment meeting with classification society surveyors and plan review engineers.

VFCPL is pursuing domestic **IRS Type Approval** under *Classification Note on Approval of Lithium-ion Battery Systems* (CN Rev.1, Mar 2026) and *Guidelines on Battery Powered Vessels* (GL Rev.2, Mar 2026), while simultaneously configuring the technical file to satisfy the **ABS** *Requirements for Use of Lithium-ion Batteries in the Marine and Offshore Industries* (Dec 2025 edition) for vessels targeting the **`ESS-LiBATTERY`** notation.

---

## 2. Platform Technical Baseline & Operating Profile

| Parameter | Platform Specification | Class Relevance / Context |
| :--- | :--- | :--- |
| **System Reference** | VFCPL-MEP-001 (AMBESS) | Project SAMUDRA commercial offering. |
| **Intended Service** | Anchor Mode / Hotel & Non-Propulsion Auxiliary Load | Classified as **Auxiliary Power / Propulsion Support**. Not main propulsion. |
| **Cell Chemistry** | Lithium Iron Phosphate ($LiFePO_4$ / LFP) Prismatic | High inherent thermal stability ($T_{onset} > 210^\circ\text{C}$). |
| **Cell Electrical Rating** | 307.12 Ah nominal capacity; 3.2 VDC nominal | Rated per IEC 62620:2014+AMD1:2023. |
| **Cooling Architecture** | Direct-Contact Dielectric Immersion Cooling | Closed-loop self-circulating pump P1; sealed aluminum tank. |
| **Immersion Coolant** | Engineered Synthetic Ester / Aliphatic Hydrocarbon | Breakdown $>50\text{ kV}$; Flash Point $>160^\circ\text{C}$; Readily Biodegradable. |
| **Enclosure Ingress** | IP67 Monolithic Sealed Aluminum Tank | Exceeds minimum IP44 requirement for machinery spaces. |
| **BMS Hardware** | Clean Electric Master BMS & Distributed CSCs | 100% cell-tab voltage monitoring; multi-point thermal sensing. |
| **Safety Firmware** | Hardcoded Non-Volatile Trip Logic | Zero manual override on critical safety trips (over-V, over-T, $I_{sc}$). |

---

## 3. The 10 Strategic Decisions for the First Class Technical Meeting

These 10 agenda items must be formally agreed upon and recorded in the meeting minutes to control engineering freeze and laboratory procurement:

### Item 1: BESS Service Classification & Auxiliary Rule Basis
* **Proposal:** Classify VFCPL-MEP-001 as **Auxiliary Power Supply / Propulsion Support** under IRS GL Rev.2 §1.1.3 and ABS Section 4.
* **Class Decision Needed:** Written confirmation that because AMBESS is dedicated to hotel/auxiliary load during anchor watch and does not power the vessel's propulsion shaft line, the vessel is **exempt from mandatory dual redundant battery rooms and split propulsion switchboards**.

### Item 2: Approval Scope Boundary (Package vs. Subassemblies)
* **Proposal:** VFCPL seeks Type Approval for the complete integrated BESS pack (sealed immersion tank, internal cells, busbars, dielectric fluid, pump P1, and Clean Electric BMS).
* **Class Decision Needed:** Confirmation whether Clean Electric BMS and CSC modules receive separate component type approval certificates or are assessed as integral parts of the composite VFCPL-MEP-001 Type Approval.

### Item 3: Representative Model & Family Rating Envelope
* **Proposal:** Qualify the 307 Ah LFP immersion pack as the representative model, with allowable capacity scaling defined by modular series/parallel string arrangements.
* **Class Decision Needed:** Formal agreement on the upper and lower electrical/thermal bounds of the approved product family without triggering full repeat destructive testing.

### Item 4: Reciprocity & Acceptance of Existing Test Reports
* **Proposal:** Submit existing accredited laboratory test reports for cell safety (IEC 62619:2022), performance (IEC 62620:2023), transport (UN 38.3), and dielectric fluid properties (IEC 60156, ASTM D7042, ISO 2719).
* **Class Decision Needed:** Written acceptance of these reports from NABL / ILAC accredited laboratories, confirming which specific tests (if any) require repeat witnessing by class surveyors.

### Item 5: Thermal Runaway Propagation Test Configuration & Criteria
* **Proposal:** Conduct thermal runaway propagation testing using slow electric heater cartridge initiation at 100% SoC, with pump P1 active and in alternative disabled mode, to demonstrate zero cell-to-cell or zero module-to-module propagation.
* **Class Decision Needed:** Approval of the test protocol, trigger method, thermocouple placement, and acceptance criteria (zero external flaming, casing temp $<100^\circ\text{C}$) prior to booking the test bay.

### Item 6: Marine Environmental Qualification Plan (IACS UR E10)
* **Proposal:** Execute the complete IACS UR E10 (Rev.10, Aug 2024) environmental test matrix (dry heat, damp heat, cold, vibration, inclination $22.5^\circ$, salt mist, EMC) at an accredited environmental test house.
* **Class Decision Needed:** Agreement that a single test campaign witnessed jointly by IRS and ABS surveyors will be credited simultaneously to both approval files.

### Item 7: BMS Software Safety Lifecycle & Fault Simulation Scope
* **Proposal:** Provide Clean Electric Software Quality Plan (SQP), FMEA, and software architecture diagrams demonstrating hardcoded override locks.
* **Class Decision Needed:** Agree on the hardware-in-the-loop (HIL) or bench simulation fault injection test schedule (loss of comms, sensor open-circuit, overcurrent trip response time).

### Item 8: Unit Certification Scope & Factory Hold Points
* **Proposal:** Establish a standardized Factory Acceptance Test (FAT) protocol for delivered commercial units, including 1.5x design pressure hydrotest, dielectric insulation test, and functional shutdown verification.
* **Class Decision Needed:** Define the specific inspection hold points requiring physical attendance by an attending surveyor versus review of manufacturer calibration certificates.

### Item 9: Installation Dependencies & Certificate Limitations
* **Proposal:** Certificate to identify external shipyard obligations: fixed water-based fire extinguishing, mechanical ventilation (2 ACH normal / 6 ACH emergency), Ex IIC T1 room lighting, and PRV exhaust ducting to weather deck.
* **Class Decision Needed:** Agree on the exact wording of installation limitations to appear on the final Type Approval certificate schedule.

### Item 10: Engineering Change Notification (ECN) Thresholds
* **Proposal:** Define clear thresholds for what constitutes a "substantial change" requiring class notification (e.g. change in cell cathode formulation, casing structural redesign) vs. minor non-safety updates (e.g. harness routing bracket, UI cosmetic update).
* **Class Decision Needed:** Agree on formal change management protocols to maintain certificate validity over the 5-year lifecycle.

---

## 4. Controlled Submission Structure (8 Folders)

All documentation for IRS and ABS plan review is managed within 8 controlled project folders:

```
[VFCPL-MEP-001 Submission Dossier]
  ├── Folder 1: Certification Basis (Rule editions, operational envelope, memo)
  ├── Folder 2: Design Drawings (Electrical SLD, mechanical GA, BOM, fluid flow)
  ├── Folder 3: Safety & Risk (Hazard register, FMEA, emergency trip matrix)
  ├── Folder 4: Control & BMS (Clean Electric BMS specs, override lockout, CAN map)
  ├── Folder 5: Thermal & Cooling (Immersion cooling submission, fluid test data)
  ├── Folder 6: Test Reports (IEC 62619, IEC 62620, UR E10, UL 9540A reports)
  ├── Folder 7: Manufacturing QA (ISO 9001, QA sheets, 1.5x hydrotest procedure)
  └── Folder 8: Delivery & Shipyard Manuals (O&M manual, installation guide)
```

---

## 5. Sign-off & Meeting Action Log

| Role | Organization | Representative Name | Signature | Date |
| :--- | :--- | :--- | :--- | :--- |
| **System Integrator** | VFCPL | | | |
| **BMS / Battery OEM** | Clean Electric | | | |
| **Plan Approval Engineer**| Indian Register of Shipping | | | |
| **Surveyor / Engineer** | American Bureau of Shipping | | | |
