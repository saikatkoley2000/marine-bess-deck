# VFCPL-MEP-001 (Project SAMUDRA) AMBESS
## Master Dual-Class Compliance Tracker & Verification Register
### Cross-Class Mapping: ABS Dec 2025 (`ESS-LiBATTERY`) & IRS Mar 2026 (CN Rev.1 / GL Rev.2)

---

**Register Reference:** VFCPL-MEP001-REG-001  
**Revision:** Rev 0  
**Date:** 18 September 2026  
**Evidence States Defined (Section 11):**
* `ACCEPTED`: Formally approved in writing by class surveyor or plan approval office.
* `SUBMITTED`: Formally delivered to classification society; currently under review.
* `GAP`: Rule requirement identified, but technical evidence or test report does not yet exist.
* `N/A`: Formally excluded from scope with approved engineering justification.

---

## 1. Batteries & Cell-Level Compliance (Work Package 1 & 2)

| Item ID | IRS Clause | ABS Locator | Technical Requirement & Specification | Owner | Status | Evidence Document & Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BAT-01** | CN Rev.1 §1.3.1.1; §1.5.2 | Sec 2/1.2; Sec 3/2 | **Type Approval per Chemistry:** Each lithium-ion battery type (LFP) must hold valid type approval covering drawing approval, works assessment, and type testing. | Clean Electric | `ACCEPTED` | Clean Electric LFP Type Test Dossier; Folder 6. |
| **BAT-02** | CN Rev.1 §1.3.1.2 | Sec 3/2 Table 1; Sec 5 | **Vessel Unit Certification:** Specific battery units fitted to vessel undergo surveyor-witnessed FAT and unit testing prior to installation. | VFCPL / Integrator | `ACCEPTED` | Ship-Specific FAT Protocol; Folder 8. |
| **BAT-03** | CN Rev.1 §3.2–3.4; §5.3.1 | Sec 2/1.3 | **Chemistry Declaration:** State active cathode/anode chemistry unambiguously ($LiFePO_4$ / LFP) with cell/module part numbers. | Clean Electric | `ACCEPTED` | VFCPL-MEP001 BOM & Chemistry Data Sheet; Folder 2. |
| **BAT-04** | CN Rev.1 §5.3.1–5.3.4 | Sec 2/1.2; Sec 2/1.3 | **Cell Marking (IEC 62620):** Cells marked with secondary Li-ion designation, polarity, date of mfg, manufacturer ID, rated Ah, nominal VDC, caution note. | Clean Electric | `ACCEPTED` | Cell Surface Laser Marking Inspection Record; Folder 7. |
| **BAT-05** | CN Rev.1 §1.8–1.11 | Sec 1/7 | **Change Control & Validity:** Type approval validity 5 years. Any change in cell active material, casing, or chemistry invalidates approval. | Clean Electric / VFCPL | `ACCEPTED` | Engineering Change Order (ECO) SOP; Folder 7. |
| **BAT-06** | GL Rev.2 §2.1.1 | Sec 4/1 | **Capacity Adequacy:** Installed capacity sufficient for vessel duty. Provide cell/module ratings, usable kWh, and derating assumptions. | VFCPL | `ACCEPTED` | AMBESS Sizing & Duty Cycle Calculation; Folder 1. |
| **BAT-07** | GL Rev.2 §2.1.2 | Sec 4/3 | **Propulsion Redundancy Exemption:** AMBESS is dedicated to auxiliary/hotel anchor loads. Main propulsion redundancy rules do not apply. | VFCPL | `ACCEPTED` | Auxiliary Role Declaration & Interlock Memo; Folder 1. |
| **BAT-08** | CN Rev.1 §1.4.c; App.1 | Sec 2/1.2; Sec 3/2 | **Cell Safety Testing (IEC 62619):** Cell drop, external short circuit, impact, overcharge, thermal abuse testing. | Clean Electric | `ACCEPTED` | IEC 62619 Accredited Laboratory Test Report; Folder 6. |

---

## 2. Thermal Runaway & Fire Propagation (Work Package 7)

| Item ID | IRS Clause | ABS Locator | Technical Requirement & Specification | Owner | Status | Evidence Document & Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TR-01** | CN Rev.1 App.1(b)#5 | Sec 2/2.1; Sec 3/2 | **Thermal Runaway Non-Propagation:** Test demonstrating runaway in a single cell does not propagate to adjacent cells, or is contained in module. | Clean Electric / VFCPL | `SUBMITTED` | Immersion Runaway Bench Test Report (818 Cycles); Folder 5. |
| **TR-02** | GL Rev.2 §2.6.6 | Sec 2/2.1 | **UL 9540A Test Equivalence:** Characterization of off-gas composition ($H_2, CO$), LFL, heat release rate (HRR), and re-ignition hazards. | VFCPL | `SUBMITTED` | UL 9540A Cell & Module Flammability Dossier; Folder 6. |
| **TR-03** | CN Rev.1 §1.4.d | Sec 2/2.1 | **Enclosure Surface Temperature:** Enclosure exterior must remain below critical ignition limit ($<100^\circ\text{C}$) during internal runaway. | VFCPL | `SUBMITTED` | Aluminum Casing Thermal Finite Element Analysis (FEA); Folder 5. |
| **TR-04** | GL Rev.2 §2.6.3 | Sec 2/2.1; Sec 3/3 | **Off-Gas Pressure Relief:** Casing fitted with pressure relief valve discharging gas safely to exterior without casing rupture. | VFCPL | `ACCEPTED` | PRV Sizing & Discharge Flow Calculation; Folder 2. |

---

## 3. Immersion Cooling System (Work Package 6)

| Item ID | IRS Clause | ABS Locator | Technical Requirement & Specification | Owner | Status | Evidence Document & Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **COOL-01** | CN Rev.1 §1.4.d | Sec 2/2.4 | **Immersion Cooling Arrangement:** Details of closed-loop dielectric immersion cooling, pump P1 circulation, and casing heat dissipation. | VFCPL | `ACCEPTED` | Immersion Cooling Technical Submission Rev A; Folder 5. |
| **COOL-02** | CN Rev.1 5.2.d.viii; App.1(b)#8 | Sec 2/2.4; Sec 3/2 Table 1 | **Shop Fabrication Hydrotest:** Cooling tank tested to **1.5 x Design Pressure for 30 minutes** with zero leakage. | VFCPL | `GAP` | Formalize 30-min hold in QA SOP-004; Folder 7. |
| **COOL-03** | GL Rev.2 §3.3.3 | Sec 2/2.4 | **Shipboard Tightness Test:** Cooling system tested to 1.0 x Design Pressure following onboard shipyard installation. | Shipyard / VFCPL | `ACCEPTED` | Shipboard Installation & Pre-fill Leak Check SOP; Folder 8. |
| **COOL-04** | GL Rev.2 2.3.4 | Sec 2/2.4 | **Protection of Live Parts:** No mechanical pipe joints located directly over live electrical terminals. Monolithic sealed casing. | VFCPL | `ACCEPTED` | Mechanical Tank GA & Flange Detail Drawings; Folder 2. |
| **COOL-05** | CN Rev.1 4.4.k; GL 2.3.9.m | Sec 2/2.4; Sec 2/5 | **Cooling Failure Alarm:** Failure of pump P1, loss of circulation, or excessive $\Delta T$ must trigger an alarm at manned control station. | Clean Electric / VFCPL | `ACCEPTED` | BMS Pump Current & $\Delta T$ Alarm Logic Specification; Folder 4. |
| **COOL-06** | CN Rev.1 §1.4.d | Sec 2/2.4 | **Dielectric Coolant Specification:** Fluid breakdown $>50\text{ kV}$, flash point $>160^\circ\text{C}$, non-toxic, readily biodegradable. | VFCPL | `ACCEPTED` | Coolant Technical Data Sheet & OECD 301B Test; Folder 5. |

---

## 4. BMS Hardware, Controls & Safety Logic (Work Package 5)

| Item ID | IRS Clause | ABS Locator | Technical Requirement & Specification | Owner | Status | Evidence Document & Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BMS-01** | CN Rev.1 4.4.c; GL 2.4.3 | Sec 2/5.1 | **Single-Cell Voltage & Temp:** Voltage of every cell tab and representative temperatures monitored continuously. | Clean Electric | `ACCEPTED` | Clean Electric BMS Circuit Schematics; Folder 4. |
| **BMS-02** | CN Rev.1 4.4.h | Sec 2/5.1 | **Critical Override Prohibition:** No manual override or software bypass permitted for over-V, under-V, over-T, or short-circuit trips. | Clean Electric | `ACCEPTED` | Safety Firmware Architecture & Lockout Declaration; Folder 4. |
| **BMS-03** | GL Rev.2 2.3.1; 2.3.2 | Sec 2/3.1; Sec 2/5 | **Dual Independent Disconnect:** Two independent isolation devices (positive & negative DC contactors + pyro-fuses). | Clean Electric / VFCPL | `ACCEPTED` | DC Single Line Diagram (SLD) VFCPL-MEP001-SLD-001; Folder 2. |
| **BMS-04** | CN Rev.1 4.4.k | Sec 2/5.2 | **Loss of Communication Safe State:** Communication timeout (>250 ms) between Master BMS and CSCs reverts system to safe trip. | Clean Electric | `ACCEPTED` | CAN Watchdog & Fail-Safe Test Report; Folder 4. |
| **BMS-05** | CN Rev.1 4.4.k | Sec 2/5.3 | **Insulation Resistance (IMD):** Continuous monitoring of ungrounded DC bus. Warning at $100\text{ }\Omega/\text{V}$; trip at $50\text{ }\Omega/\text{V}$. | Clean Electric | `ACCEPTED` | Bender IMD Integration & Calibration Record; Folder 4. |
| **BMS-06** | CN Rev.1 4.4.a; App.1 | Sec 2/5.1 | **SOC & SOH Estimation:** Deterministic algorithm for SOC/SOH tracking with cycle-drift compensation. | Clean Electric | `ACCEPTED` | SOH Estimation Algorithm Whitepaper (818 Cycle Data); Folder 4. |

---

## 5. Marine Environmental & Hardware Testing (Work Package 3 & 5)

| Item ID | IRS Clause | ABS Locator | Technical Requirement & Specification | Owner | Status | Evidence Document & Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ENV-01** | CN Rev.1 §5.1; 13a-CN | Pt 4, Ch 9; Sec 3/2 | **IACS UR E10 Environmental Tests:** Dry heat, damp heat, cold, power variation tests on BMS hardware. | Clean Electric | `GAP` | Schedule UR E10 test suite at NABL/ILAC lab; Folder 6. |
| **ENV-02** | CN Rev.1 §5.1; 13a-CN | Pt 4, Ch 9; Sec 3/2 | **Sinusoidal Vibration:** 2–13.2 Hz ($\pm 1.0\text{ mm}$); 13.2–100 Hz ($0.7\text{g}$) on 3 orthogonal axes for module and casing. | VFCPL / Clean Electric | `GAP` | Multi-Axis Vibration Test at Accredited Test Facility; Folder 6. |
| **ENV-03** | CN Rev.1 §5.1; 13a-CN | Pt 4, Ch 9; Sec 3/2 | **Inclination Testing:** Static $22.5^\circ$ and dynamic $22.5^\circ$ roll/pitch to verify pump P1 immersion & circulation. | VFCPL | `GAP` | Static & Dynamic Inclination Simulation / Test; Folder 6. |
| **ENV-04** | CN Rev.1 §5.1; 13a-CN | Pt 4, Ch 9; Sec 3/2 | **EMC Immunity & Emissions:** Radiated/conducted emissions, burst, surge, and ESD per UR E10. | Clean Electric | `GAP` | EMC Test Report from Accredited Lab; Folder 6. |
| **ENV-05** | GL Rev.2 2.2.8 | Sec 2/2.2 | **Enclosure Ingress Protection (IP67):** Certified dust-tight and immersion-proof casing test per IEC 60529. | VFCPL | `ACCEPTED` | IP67 Third-Party Laboratory Certificate; Folder 6. |

---

## 6. Installation, Compartment & Ship Interfaces (Work Package 7, 8, 9 & 10)

| Item ID | IRS Clause | ABS Locator | Technical Requirement & Specification | Owner | Status | Evidence Document & Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **INST-01** | GL Rev.2 2.2.1–2.2.5 | Sec 3/3; Sec 3/5 | **A-60 Boundary & Category A Space:** Battery compartment treated as Category A machinery space with A-60 structural insulation. | Shipyard / Integrator | `SUBMITTED` | Shipboard General Arrangement & Bulkhead Plan; Folder 8. |
| **INST-02** | GL Rev.2 2.6.1 | Sec 3/3.3 | **Compartment Ventilation:** Minimum 2 ACH continuous normal; minimum 6 ACH emergency exhaust on gas detection. | Shipyard / Integrator | `SUBMITTED` | HVAC Ducting & Airflow Sizing Calculation; Folder 8. |
| **INST-03** | GL Rev.2 2.6.2 | Sec 3/3.4 | **Hazardous Area Classification:** Battery space classified Zone 2; all electrical fittings certified at least Ex IIC T1. | Shipyard / Integrator | `SUBMITTED` | Hazardous Area Classification Drawing & Ex List; Folder 8. |
| **INST-04** | GL Rev.2 2.6.3 | Sec 3/3.2 | **Gas Detection & Interlocks:** Flammable gas alarm & 6 ACH vent at 30% LFL; total non-Ex de-energization at 60% LFL. | Shipyard / Integrator | `SUBMITTED` | Fire & Gas Panel Logic & Trip Matrix; Folder 8. |
| **INST-05** | GL Rev.2 2.6.5 | Sec 3/3.5 | **Fixed Water-Based Extinguishing:** Space protected by fixed water mist/sprinkler approved for Category A spaces. | Shipyard / Integrator | `SUBMITTED` | Fixed Fire Fighting Plan (IMO MSC.1/Circ.1165); Folder 8. |
| **INST-06** | GL Rev.2 2.3.2 | Sec 2/3; Sec 3/5 | **Remote Emergency Shutdown (ESD):** ESD operable from wheelhouse, CCR, and outside the battery room. | Shipyard / Integrator | `SUBMITTED` | ESD Single Line Diagram & Tripping Schedule; Folder 8. |
| **INST-07** | GL Rev.2 4.1.4 | Sec 3/5; Sec 5 | **O&M Manual Firefighting Risks:** Manual covers post-fire risks: stored energy in cells, re-ignition, CO toxic off-gas, PPE. | VFCPL | `ACCEPTED` | VFCPL-MEP001 Operation & Maintenance Manual; Folder 8. |

---

## 7. Action Plan to Close Remaining "GAP" Items

| Action ID | Target Requirement | Targeted Closing Date | Lead Organization | Assigned Engineer |
| :--- | :--- | :--- | :--- | :--- |
| **ACT-01** | Standardize 30-minute hold duration in Factory Hydrostatic QA SOP-004. | 25 September 2026 | VFCPL QA Team | Lead QA Engineer |
| **ACT-02** | Book IACS UR E10 Rev.10 environmental test suite with joint IRS/ABS witnessing. | 15 October 2026 | Clean Electric / VFCPL | Systems Engineering Lead |
| **ACT-03** | Compile UL 9540A module propagation test dossier for ABS Marine Safety Center. | 30 October 2026 | VFCPL Thermal Team | Lead Thermal Architect |
| **ACT-04** | Submit formal Product Design Assessment (PDA) application to ABS. | 15 November 2026 | VFCPL Regulatory Lead | Head of Regulatory Affairs |
