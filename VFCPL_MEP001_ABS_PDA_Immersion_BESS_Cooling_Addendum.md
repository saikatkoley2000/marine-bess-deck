# VFCPL MARINE ENERGY PLATFORM (VFCPL-MEP-001)
## Project SAMUDRA — AMBESS (Anchor Mode Battery Energy Storage System)
### Technical Submission Addendum: ABS Product Design Assessment (PDA)
**In Support of ABS Type Approval & Vessel Notation `ESS-LiBATTERY`**

---

**Document ID:** VFCPL-MEP001-ABS-PDA-ADD-001  
**Revision:** Rev 0 — Issued for ABS Plan Review  
**Date:** 18 September 2026  
**Applicant / System Integrator:** VFCPL (Vayusakti Future Construct Pvt. Ltd.)  
**Battery & BMS OEM Partner:** Clean Electric (Pvt. Ltd.)  
**Classification Authority:** American Bureau of Shipping (ABS)  
**Governing Standard:** ABS *Requirements for Use of Lithium-ion Batteries in the Marine and Offshore Industries* (December 2025 Edition)  
**Complementary Domestic Submission:** *VFCPL-MEP001 Immersion BESS Cooling System Design, Control Logic & Performance Validation* (IRS Rev A, 12 Sept 2026)  

---

## 1. Scope, Purpose & Certification Boundary

### 1.1 Purpose
This technical submission addendum bridges the engineering data from the domestic IRS submission with the specific mandates of the **ABS December 2025 Battery Guide** to secure an **ABS Product Design Assessment (PDA)** for the **VFCPL-MEP-001** immersion-cooled lithium-ion battery energy storage system.

### 1.2 Capacity Threshold & Mandatory Applicability
* **System Installed Capacity:** Modular configurations exceeding the **$\ge 20\text{ kWh}$ mandatory threshold** established in April 2024 and confirmed in the December 2025 ABS Guide.
* **Service Classification:** **Auxiliary Power / Non-Propulsion Support** under ABS Section 4. The system carries vessel hotel and auxiliary loads at anchor (AMBESS concept) and does not directly drive the propulsion shaft line.
* **Target Vessel Notation:** **`ESS-LiBATTERY`** (ABS *Notations and Symbols Table*, Jan 2026, p. 59).

---

## 2. Cell & Module Safety Baseline (ABS Section 2/1)

### 2.1 Prescribed Standards Compliance
1. **IEC 62619:2022:** All prismatic cells hold accredited laboratory test certificates covering mechanical drop, impact, external short circuit, overcharge, and thermal abuse.
2. **IEC 62620:2014+AMD1:2023:** Declared cell nominal capacity of **307.12 Ah** and discharge performance validated. Cell laser markings comply with IEC 62620 §5.3.
3. **UN 38.3:** Transport safety testing (T1–T8) completed for module and pack shipping configurations.
4. **Active Chemistry Declaration:** $LiFePO_4$ (Lithium Iron Phosphate / LFP). High inherent decomposition temperature ($T_{onset} > 210^\circ\text{C}$).

---

## 3. Thermal Runaway & Fire Propagation Mitigation (ABS Section 2/2.1 & UL 9540A)

### 3.1 Non-Propagation Architecture
ABS Section 2/2.1 dictates that thermal runaway initiated in a single cell must not propagate to adjacent cells, or at minimum must be completely contained within the module with zero external flaming.

```
+-----------------------------------------------------------------------------------+
| VFCPL DIRECT-CONTACT DIELECTRIC IMMERSION SUPPRESSION PHYSICS                    |
+-----------------------------------------------------------------------------------+
| 1. Direct Contact Convection: Dielectric fluid contacts 100% of cell casing.      |
| 2. Immediate Heat Extraction: Thermal conductivity of fluid rapidly pulls heat    |
|    away from initiating cell, preventing local temperature spike above T_c.       |
| 3. Vaporization Latent Heat: Under severe localized thermal spike, fluid         |
|    absorbs heat of vaporization, self-quenching hot spots without ignition.      |
| 4. Bench Validation Result: In 818-cycle continuous testing, zero cell-to-cell    |
|    propagation occurred; external casing temperature remained below 85°C.         |
+-----------------------------------------------------------------------------------+
```

### 3.2 The 7 Review Questions Alignment (per Section 8 of Technical Dossier)
1. **Tested Cell Identicality:** Production cells match tested batch in chemistry, casing, and separator specs.
2. **Conditioning:** Evaluated at 100% SoC under worst-case ambient operating temperature ($45^\circ\text{C}$).
3. **Worst-Case Setup:** Evaluated at minimum cell-to-cell gap (monolithic pack configuration).
4. **Active Systems State:** Validated in both active pump circulation and passive coolant stagnant mode.
5. **Enclosure Integrity:** Zero flaming; casing structural integrity preserved; gas vented via calibrated PRV.
6. **Gas & Heat Data:** Flammability limits (LFL/UFL) and gas generation rates documented for shipyard exhaust sizing.
7. **BOM Freeze:** Configuration controlled under VFCPL & Clean Electric ECO procedure.

---

## 4. Immersion Cooling System Engineering (ABS Section 2/2.4)

### 4.1 Hydraulic Circuit Architecture
* **Closed-Loop System:** Fluid recirculates internally within the monolithic aluminum tank via pump P1. There is no external raw seawater piping inside the battery compartment.
* **Heat Rejection Path:** Conduction from cells $\rightarrow$ liquid convection $\rightarrow$ aluminum casing wall $\rightarrow$ ambient compartment air.

### 4.2 Hydrostatic Pressure Withstand Verification
* **Fabrication Test Pressure ($P_{test}$):**
  $$P_{test} = 1.5 \times P_{design} = 1.50\text{ bar gauge} \approx 150\text{ kPa}$$
* **Mandatory Hold Duration:** Exactly **30 minutes** under continuous surveyor observation per VFCPL QA SOP-004.
* **Acceptance:** Zero pressure drop ($\Delta P = 0$) and zero visual leakage or sweating across all welds and flanges.
* **Shipboard Tightness Test:** Executed at $1.0\times P_{design}$ post-installation prior to fluid fill.

### 4.3 Protection of Live Electrical Parts
* In accordance with ABS Section 2/2.4, **no mechanical pipe joints are located directly above live electrical terminals**.
* The immersion casing is a monolithic welded aluminum structure. All external fluid fill/drain ports are flanged and sealed. The internal coolant is a non-conductive dielectric fluid ($>50\text{ kV}$ breakdown).

### 4.4 Failure Monitoring & Interlocks
* **Monitored Telemetry:** Continuous sensing of pump P1 motor current, fluid temperature at inlet/outlet, and pack $\Delta T$ across 6 distributed thermistors (T1–T6).
* **Failure Actions:** Loss of flow, pump motor overload, or $\Delta T > 3.5^\circ\text{C}$ generates an immediate Level 1 alarm at the wheelhouse AMS and derates charging current. Persistent overtemp initiates a controlled trip.

---

## 5. Dielectric Coolant Fluid Specification (ABS Section 2/2.5)

| Technical Property | Test Standard | Specification Value | Safety Margin / Significance |
| :--- | :--- | :--- | :--- |
| **Dielectric Breakdown Strength** | IEC 60156 / ASTM D877 | $> 50\text{ kV}$ | Prevents arcing across live busbars up to 1000 VDC. |
| **Volume Resistivity** | IEC 60247 | $> 10^{12}\text{ }\Omega\cdot\text{m}$ at $25^\circ\text{C}$ | High galvanic isolation to earthed hull. |
| **Flash Point (Closed Cup)** | ISO 2719 | $> 160^\circ\text{C}$ | Wide thermal margin above maximum cell trip ($60^\circ\text{C}$). |
| **Fire Point (Open Cup)** | ISO 2592 | $> 190^\circ\text{C}$ | Resists auto-ignition under electrical arcing. |
| **Kinematic Viscosity** | ASTM D7042 | $< 35\text{ mm}^2/\text{s}$ at $40^\circ\text{C}$<br>$< 3000\text{ mm}^2/\text{s}$ at $-20^\circ\text{C}$ | Low hydraulic drag; cold-start pumping validated. |
| **Aquatic Ecotoxicity** | OECD 201, 202, 203 | Non-toxic to marine organisms | Non-hazardous for marine environment. |
| **Biodegradability** | OECD 301B | Readily biodegradable ($>60\%$ / 28d) | Safe disposal and handling. |
| **Material Compatibility** | ASTM D471 | Zero swelling/degradation on NBR, FKM, copper, aluminum | Verified 10-year service life stability. |

---

## 6. BMS Control, Safety Interlocks & Override Locks (ABS Section 2/5)

### 6.1 Critical Safety Override Prohibition (ABS Section 2/5.1)
ABS strictly prohibits manual overrides or software bypasses for critical safety functions:
* **Overvoltage & Undervoltage:** Hardcoded non-volatile threshold; contactors open automatically.
* **Overtemperature:** Pack high-temp trip ($>60^\circ\text{C}$) permanently locks out charge/discharge.
* **Short-Circuit / Overcurrent:** Pyro-fuse and magnetic breaker open instantaneously without software dependency.
* **Firmware Declaration:** Clean Electric firmware revision locks all safety trip registers against operator bypass.

### 6.2 Redundant Disconnect & Physical Feedback
* Positive and negative poles fitted with fast-acting DC contactors backed by series high-breaking semiconductor fuses.
* Contactor auxiliary dry contacts provide physical position feedback to the BMS to verify that physical isolation occurred (resolving the CAN "safe" status fallacy).

### 6.3 Loss of Communication & Insulation Monitoring
* Communication timeout between BMS Master and Slave CSCs ($>250\text{ ms}$) prompts safe, graceful isolation.
* Active Bender Insulation Monitoring Device (IMD) continuously evaluates DC bus isolation (pre-alarm at $100\text{ }\Omega/\text{V}$; automatic trip at $50\text{ }\Omega/\text{V}$).

---

## 7. Environmental & Marine Qualification (ABS Part 4, Chapter 9 / IACS UR E10)

The electronic control suite (Clean Electric BMS Master, Slave CSCs, Pump Drivers, Inverter Interface) is undergoing the complete **IACS UR E10 (Rev.10, Aug 2024)** test matrix:
* **Thermal:** Dry heat ($+70^\circ\text{C}$, 16h), damp heat ($+55^\circ\text{C}$, 95% RH), cold ($-25^\circ\text{C}$, 2h).
* **Mechanical:** Sinusoidal vibration (2–13.2 Hz, $\pm 1.0\text{ mm}$; 13.2–100 Hz, $0.7\text{g}$).
* **Inclination:** Static $22.5^\circ$, dynamic $22.5^\circ$ roll/pitch (10s period) to verify immersion fluid coverage.
* **Atmospheric:** 4 cycles of salt mist (28 days total).
* **Electrical / EMC:** Power supply variations ($\pm 20\%$), fast transients (burst), surge, radiated/conducted emissions, and ESD (8 kV).

---

## 8. Packaged & Containerized Integration (ABS Appendix 3)

When VFCPL-MEP-001 is supplied as a modular deck-mounted container:
1. **Container Structural Integrity:** Certified to CSC standards; offshore lifting lugs certified to DNV 2.7-1 / ISO 10855; deck tie-down FEA verifying survival under extreme dynamic ship accelerations.
2. **A-60 Envelope:** Container structural shell insulated to **A-60 standard** throughout.
3. **Integrated Safety Systems:** Self-contained optical smoke detection, flammable gas monitoring (trip at 30% LFL; isolation at 60% LFL), external ESD button, and automatic HVAC fire dampers.

---

## 9. Conclusion & PDA Request

The **VFCPL-MEP-001** immersion-cooled marine BESS demonstrates full technical alignment with the **ABS December 2025 Guide for Lithium-ion Batteries**. VFCPL formally requests the issuance of an **ABS Product Design Assessment (PDA)** covering the 307 Ah LFP modular immersion pack family.

### Submittal Verification & Approval Signatures

| Role | Name | Title | Signature | Date |
| :--- | :--- | :--- | :--- | :--- |
| **System Integrator Lead** | | Head of Marine Engineering, VFCPL | | 18 Sept 2026 |
| **OEM Technology Lead** | | Chief Technology Officer, Clean Electric | | 18 Sept 2026 |
| **Regulatory Affairs** | | Lead Compliance Architect, VFCPL | | 18 Sept 2026 |
