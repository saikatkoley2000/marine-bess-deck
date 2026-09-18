# VFCPL MARINE ENERGY PLATFORM (VFCPL-MEP-001)
## Interface Control Document (ICD) & Responsibility Allocation Schedule
### Division of Responsibilities: BESS Supplier (VFCPL & Clean Electric) vs. Shipyard & System Integrator

---

**Document ID:** VFCPL-MEP001-ICD-001  
**Revision:** Rev 0  
**Effective Date:** 18 September 2026  
**Governing Context:** Incorporating Section 9 of *Marine BESS: ABS ESS-LiBATTERY and the IRS approval route* (Marine BESS.docx)  
**Applicability:** ABS `ESS-LiBATTERY` / IRS `BATTERY (PROPULSION SUPPORT)` Onboard Ship Integration  

---

## 1. Purpose & Guiding Principle

ABS's decarbonization and marine battery advisories emphasize that **battery location directly dictates compartment segregation, ventilation, hazardous-area classification, structural fireproofing, and emergency access**. 

A product-level type approval certificate (PDA) for a battery rack or container **cannot settle every shipboard installation condition**. This Interface Control Document (ICD) establishes the exact boundary of supply and regulatory close-out between the BESS manufacturer (**VFCPL & Clean Electric**) and the **Shipyard / Vessel Integrator**.

---

## 2. Comprehensive System Interface Allocation Matrix

| Interface Domain | BESS Supplier Boundary (VFCPL & Clean Electric) | Shipyard / Vessel Integrator Closes |
| :--- | :--- | :--- |
| **1. DC Electrical Power** | * Terminals (+ / -) with polarity markings.<br>* Operating DC voltage window (Min / Nom / Max VDC).<br>* Continuous & peak current ratings.<br>* Prospective short-circuit contribution ($I_{sc}$) per IEC 61660-1.<br>* Sub-millisecond semiconductor pyro-fuses and contactors. | * Marine-grade cabling rated for short-circuit thermal withstand.<br>* Main DC busbar and distribution switchboard.<br>* Upstream circuit breaker selective coordination.<br>* Cable penetration A-60 fire transits (MCT glands).<br>* Vessel main switchboard reverse-power / blackout interlocks. |
| **2. Immersion Cooling System** | * Monolithic sealed aluminum tank with internal immersion fluid.<br>* Self-circulating pump P1 and BMS activation driver.<br>* Fluid specification (dielectric, flash pt $>160^\circ\text{C}$, non-toxic).<br>* Internal $\Delta T$ sensors (T1–T6) and pump current feedback.<br>* Fabrication hydrotest certificate ($1.5\times$ design pressure, 30 min). | * Space ventilation to reject casing convection heat ($\le 35^\circ\text{C}$).<br>* External cooling circuit (if water-cooled chillers are specified).<br>* Post-installation tightness testing at $1.0\times$ design pressure.<br>* Integration of cooling failure alarm into wheelhouse AMS. |
| **3. Off-Gas Management & Pressure Relief** | * Calibrated Pressure Relief Valve (PRV) or rupture disc.<br>* PRV discharge port geometry, thread/flange dimensions.<br>* Maximum off-gas volume generation rate ($m^3/\text{min}$) and chemical composition data ($H_2, CO, CH_4$) from runaway testing.<br>* Maximum allowable backpressure on PRV exhaust flange. | * Dedicated steel exhaust ducting from PRV flange directly to open weather deck.<br>* Exhaust outlet positioned $\ge 3\text{ m}$ away from air intakes, doors, and ignition sources.<br>* Flame arrestor at exhaust terminal outlet.<br>* Zero common-duct connection with accommodation HVAC. |
| **4. Emergency Shutdown (ESD)** | * Hardwired discrete ESD input terminals (fail-safe 24VDC de-energize-to-trip).<br>* Dual positive/negative isolation contactors.<br>* Contactor status auxiliary dry contacts for feedback.<br>* Fast trip response time ($< 50\text{ ms}$). | * External emergency stop push-buttons located:<br>  (a) At the wheelhouse navigation bridge.<br>  (b) At the Central Control Room (CCR).<br>  (c) Outside the battery compartment access door.<br>* End-to-end trip verification during vessel sea trials. |
| **5. Fire Detection & Extinguishing** | * Internal pack thermal sensors feeding BMS alarm register.<br>* Fluid compatibility data with water mist.<br>* Operation & Maintenance Manual instructions on post-fire hazard management (residual stored energy, toxic gases). | * Structural **A-60 fire insulation** on all compartment bulkheads/decks.<br>* IMO FSS Code addressable optical smoke detectors.<br>* Fixed **water-based fire-extinguishing system** (water mist / deluge) approved for Category A machinery spaces.<br>* Interlock closing ventilation dampers upon extinguishing release. |
| **6. Hazardous Area & Gas Detection** | * Gas emission data and LEL thresholds ($H_2$ / hydrocarbon).<br>* Enclosure rated to IP67.<br>* BMS trip signal generated upon gas alarm input. | * Battery room classified as **Zone 2** per IEC 60079-10-1.<br>* All lighting, sensors, and fans certified at least **Ex IIC T1**.<br>* Gas detectors calibrated to:<br>  * 30% LFL: Audio-visual alarm + 6 ACH vent + BMS trip.<br>  * 60% LFL: Total de-energization of non-Ex circuits. |
| **7. Ventilation Arrangement** | * Thermal heat dissipation calculation to ambient air ($W/\text{m}^2$).<br>* Operating temperature envelope ($-10^\circ\text{C}$ to $+45^\circ\text{C}$). | * Independent mechanical ventilation ducting.<br>* Normal ventilation: minimum **2 Air Changes/Hour (ACH)**.<br>* Emergency ventilation: minimum **6 Air Changes/Hour (ACH)** starting automatically on gas detection.<br>* Spark-proof, anti-static, non-metallic fan impellers. |
| **8. Mechanical & Structural** | * Overall dimensions, total wet mass (including dielectric fluid).<br>* Center of gravity (CoG) 3D coordinates.<br>* Mounting hole layout and recommended bolt torque.<br>* Dynamic load factors (heave, pitch, roll accelerations per class). | * Marine deck foundation and structural coaming.<br>* Deck load calculation verifying structural deck withstand.<br>* Maintenance corridors: minimum 600 mm clear service access in front of and around battery units.<br>* Overhead lifting rail or crane access for maintenance. |
| **9. Digital Communications & Automation** | * Isolated CAN-bus 2.0B / Modbus TCP interface port.<br>* Complete data register map (Cell V, I, T, SOC, SOH, alarms).<br>* Dynamic charge and discharge current limits (CCL / DCL).<br>* Heartbeat watchdog protocol (timeout $<250\text{ ms}$). | * Marine Energy Management System (EMS) / Power Management System (PMS) programming.<br>* Diesel generator governor ramp-rate coordination during Anchor Mode recharge blocks.<br>* Solar array DC/DC converter control integration.<br>* Independent Alarm & Monitoring System (AMS) in wheelhouse. |

---

## 3. Containerized Deck-Mounted BESS Scope Boundary (ABS Appendix 3)

If VFCPL-MEP-001 is supplied as a modular deck container, the boundary shifts as follows:

```
[CONTAINERIZED BESS SUPPLY BOUNDARY]
+--------------------------------------------------------------------------------+
| SUPPLIED BY VFCPL AS INTEGRATED PACKAGE:                                       |
| - CSC / DNV 2.7-1 certified marine container structure                         |
| - A-60 internal insulation on walls, floor, and ceiling                        |
| - Internal IP67 immersion battery racks and Clean Electric BMS                |
| - Internal dual-speed Ex-rated HVAC fans (2 ACH / 6 ACH)                       |
| - Internal Fire & Gas (F&G) detection sensors and deluge manifold              |
| - Local Emergency Shutdown (ESD) station outside container door                |
+--------------------------------------------------------------------------------+
                                       |
                   SHIPYARD INTERFACE CONNECTION POINTS:
                                       |
   +-----------------------------------+-----------------------------------+
   |                                   |                                   |
[Ship's Main DC Link]       [Vessel Fire Deluge Supply]     [Wheelhouse Comms]
Heavy-duty marine cables    Pressurized water line          Dual redundant fiber/CAN
connecting to vessel        connected to container          feeding alarms to bridge
power management switchboard deluge flanged inlet            and remote ESD controls
```

---

## 4. Formal Sign-off on Division of Responsibilities

This document forms an integral appendix to commercial shipbuilding subcontracts and class submission dossiers:

| Party | Company | Authorized Representative | Signature | Date |
| :--- | :--- | :--- | :--- | :--- |
| **BESS Manufacturer** | VFCPL | | | |
| **OEM Partner** | Clean Electric | | | |
| **Shipyard Integrator** | | | | |
| **Classification Society** | IRS / ABS Surveyor | | | |
