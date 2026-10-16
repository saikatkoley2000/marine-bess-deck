# Marine Battery ESS Technologies: Research Brief for an External Tech Deck (Shipyards, OEMs, Classification Bodies)

The core message for your deck: almost every marine battery shipping today relies on either forced-air or cold-plate (water/glycol) cooling. Immersion cooling with a dielectric fluid is only now reaching marine type approval, through XING Mobility (DNV process ongoing) and Kreisel (claimed DNV certification).\[1\] That leaves a credible, evidence-backed opening for a high-fire-point synthetic-ester solution, provided the IRS submission is built around the propagation test (IEC 62619 cl. 7.3.3, as amended by class) and around a fluid-specific risk assessment. **Important limitation:** I could not access the uploaded file "Marine_Battery_Tech_Matrix.xlsx". I had no access to /mnt/user-data/uploads, and a Google Drive search found no file with that name. As a fallback, this report covers the leading global and Indian marine ESS suppliers and technologies named in your brief. Please cross-check it against the matrix and send any missing rows for a follow-up pass.

## TL;DR
- **Cooling is where suppliers differ most, and immersion is the open space.** Corvus (Orca and Blue Whale use forced air; Dolphin NxtGen uses liquid), Leclanché (Navius MRS-3 uses liquid), EST-Floattech (Octopus LFP uses air) and Siemens Energy (BlueVault uses water-channel liquid) all use air or cold-plate cooling.\[2\] In marine, immersion has reached only early-stage players: XING Mobility's IMMERSIO is in DNV certification, and Kreisel claims DNV certification.\[3\] The worst marine battery fire on record, *Ytterøyningen* (2019), started with a water-glycol coolant leak; Corvus's preliminary findings (December 2019, backed by the Norwegian Maritime Authority) said the leak "created arcing between electrical components, at pack voltages of 1,000 v DC". That makes a non-conductive, high-fire-point coolant a direct, data-backed answer.
- **Approval is a defined, repeatable process with a known critical path.** IRS's Classification Note "Approval of Lithium-ion Battery Systems" (July 2020) requires type approval per chemistry.\[4\] The steps are drawing/spec review, works assessment, an agreed type-test programme, and witnessed tests, including propagation per IEC 62619 cl. 7.3.3 and a cooling-system pressure test. The certificate is valid for 5 years, with an intermediate audit at least every 30 months, plus unit certification for each vessel. DNV Pt.6 Ch.2 Sec.1, the ABS Li-ion Requirements (Dec 2025) and EMSA's 2023 BESS Guidance cover the same ground. None of them yet gives prescriptive rules for immersion fluids, so the fluid itself has to be justified through risk assessment and test evidence.
- **The market is real but fragmented, and India is an early-adopter niche.** The Faraday Institution (January 2025), citing DNV AFI, counted 944 battery-powered ships in operation and a further 451 under construction, with Europe at 68% and Norway at 33%. Indian demand is led by inland and harbour craft: Kochi Water Metro (78 planned hybrid LTO ferries, built by Cochin Shipyard, with IRS/DNV class), IWAI's hybrid catamarans from Hooghly Cochin Shipyard, and the Harit Nauka target of 50% green-fuel inland passenger fleets within a decade and 100% by 2045. Market-size forecasts are inconsistent (roughly USD 0.67–0.86 billion in 2025), so use them only as context.

## Key Findings

1. **No current tier-1 marine ESS supplier sells a dielectric-immersion product.** Corvus markets passive single-cell thermal-runaway isolation "NOT dependant on active cooling".\[2\] Its Orca and Blue Whale lines are forced-air, and its new Dolphin NxtGen (chosen for BC Ferries' 40 MWh Summit Class, August 2026) uses liquid-cooled cells.\[5\] Leclanché's Navius MRS-3 uses liquid cooling.\[6\] EST-Floattech presents air cooling on its Octopus LFP as a way of "eliminat[ing] liquid cooling risks".\[7\] Immersion is coming from outside the incumbents: XING Mobility (Taiwan; 3C continuous, 60–400 kWh, DNV process under way, demonstrated on the Porrima P111 and a Smart IQ boat in April 2026)\[1\]\[3\] and Kreisel (immersion-cooled 63 kWh pack using Shell MIVOLT fluid, DNV certification claimed but not verified).\[8\]\[9\]
2. **The industry's own incident data points to coolant conductivity and flammability as a failure mode.** On *Ytterøyningen* (Norled, 10–11 October 2019), Corvus's preliminary findings (December 2019, backed by the Norwegian Maritime Authority) traced the fire to a twisted gasket in the liquid cooling circuit, whose water-glycol leak "created arcing between electrical components, at pack voltages of 1,000 v DC", and the ethylene glycol fuelled the fire. The BMS had been disconnected for service.\[10\] The Norwegian Maritime Authority (12 December 2019) said the escalation was "connected to the use of the seawater sprinkler system for a short period of time, which among other things, caused several short circuits", and an explosion followed about 12 hours later. A dielectric, high-fire-point fluid removes the leak-arc-fuel chain by design. This is the single strongest slide for a class audience.
3. **The class rules already "see" liquid cooling and will examine immersion through that lens.** IRS requires documentation of forced-cooling arrangements, a review of cooling and rack arrangements, and a pressure test of liquid cooling systems.\[11\] DNV's July 2023 rule update added explicit requirements on "leakages from cooling systems… that may cause fault currents". EMSA says the battery space should contain no liquid tanks other than drain tanks for battery-cooling leakage, and should have a bilge alarm. For an immersion system, expect questions on fluid containment, leak detection, drain arrangements, the fluid's fire behaviour, off-gas behaviour through the fluid, and how fixed fire-extinguishing agents interact with fluid-filled modules.
4. **Propagation testing is the decisive test.** DNV's Option 1 ("no propagation between cells") with a 24-hour observation period, IRS's propagation/internal thermal event test (IEC 62619 7.3.3), and the UL 9540A references in ABS's Requirements make propagation performance the key differentiator.\[12\] The published immersion evidence is promising but mostly vendor-generated. In an EticaAG press release, the NRTL certifier's team lead said "the immersion liquid had to be removed at the module level to meet UL 9540A's requirement to create cell-to-cell propagation, so the tested configuration was not representative of the final product." A peer-reviewed comparison (ScienceDirect, "Ester-based immersion coolant demonstrates superior safety for energy storage systems"), measured to ISO 2592:2017, gave the ester coolant a flash point of 261.3 ± 2.8 °C and an ignition point of 301.3 ± 2.3 °C, against 199.2 ± 0.4 °C and 218.4 ± 0.2 °C for mineral oil. There are no independent marine-class propagation results for ester-immersed marine packs in the public domain yet. That gap is your opportunity, and it is also your burden of proof.
5. **Chemistry is shifting toward LFP for energy and LTO for high-cycle, fast-charge duty.** Corvus Blue Whale (a 24.4 MWh Blue Whale NextGen LFP system for Bibby Marine's eCSOV *Staffordshire*, according to Riviera and Maritime Reporter), EST-Floattech Octopus LFP, CATL, EVE and BYD are all LFP. Echandia (Toshiba SCiB cells) and Kochi Water Metro use LTO.\[13\]\[14\] Leclanché remains the main G/NMC supplier.\[15\] LFP and LTO packs heat less than NMC but still go into thermal runaway and vent flammable gas, so the safety case for cooling still applies.
6. **India is a credible beachhead.** IRS has a published Li-ion approval note and a "Battery Prop" notation. It has already classed the Kochi Water Metro ferries and IWAI's hybrid LTO catamarans.\[16\]\[17\] Shift Clean Energy holds IRS type approval. An IRS type approval for an immersion-cooled BESS cooling system would be among the first of its kind for an Indian class society. This could not be verified, so present it as an opportunity, not a claim.

## Details

### 1. Comparison table: suppliers and technologies

*Data quality key: (V) = verified in a primary or near-primary source in this research; (C) = company or press claim, not checked against a class approval finder; (U) = unverified or secondary.*

| Supplier / product | Chemistry | Cooling | Energy density / key specs | Class approvals (as stated) | Key references |
|---|---|---|---|---|---|
| **Corvus Energy – Orca ESS** | Li-ion (NMC-type) | Forced air | 5.6 kWh module; up to 3C/3C; 350–1,200 VDC; IP44 (V) | DNV, LR, BV, ABS, RINA compliance (V-datasheet) | "Installed on 700 vessels" (C); Norled *Ampere*; Matson Aloha-class 1,492 kWh each via Kongsberg (2025) (C)\[2\]\[18\]\[19\] |
| **Corvus – Blue Whale** | LFP | Forced air | 0.7C continuous, 1C peak for 20 min; ≤1,120 VDC; ~30% lighter and ~50% smaller than Orca (V) | LR, BV, ABS pending; DNV and LR TA targeted Q4 2025 (V-datasheet, Feb 2025) | Bibby Marine eCSOV *Staffordshire*: 24.4 MWh Blue Whale NextGen LFP, launched at Armon Vigo on 10 Oct 2026, commissioning mid-2027 (Riviera; Maritime Reporter) (V) |
| **Corvus – Blue Whale NxtGen (BYD cells)** | LFP | Air or liquid versions | 1C (C) | DNV TA reported ~Oct 2026 (U)\[20\]\[21\]\[22\] | — |
| **Corvus – Dolphin NxtGen** | Li-ion (liquid-cooled power cells) | Liquid | Not published | Not stated | BC Ferries Summit Class: 4 × 10 MWh (expandable to 70 MWh/vessel), CMSI Weihai, first delivery 2029 (V)\[23\]\[24\] |
| **Leclanché – Navius MRS-3** | G/NMC 65 Ah or G/NMCA 72 Ah (own cells, Germany) | Liquid | ≤1,200 VDC string; 7,000 cycles at 80% DoD (V) | LR and BV TA (June 2025) (V); earlier MRS first DNV-GL certified 2017 (V)\[15\]\[25\]\[26\] | *Ellen* e-ferry 4.3 MWh (MRS-2) (V); CGN Lake Geneva hybrids (V)\[27\]\[28\] |
| **Echandia** | LTO (Toshiba SCiB) | Not stated in sources reviewed (U) | High power, fast charge; Echandia Core (June 2026) cuts upfront cost and footprint by ~30% (C) | DNV-approved pack on Kochi Water Metro (V)\[13\] | Kochi Water Metro 122 kWh/boat; SF Bay Ferry REEF (deliveries from 2026); Canadian Coast Guard icebreaker 3.7 MWh via ABB (H2 2026); Incat 78 m hybrid cat (2027); Singapore tug 3.2 MWh LTO replacing 4.3 MWh NMC (V/C)\[29\]\[30\]\[31\]\[32\] |
| **Toshiba SCiB (cell)** | LTO | Cell supplier; new module with "double the heat dissipation" (C) | 20 Ah cell, 2.3 V, ~176 Wh/L, ~20,000 cycles (U – reseller data) | Via integrators | Echandia, Damen/Arriva Copenhagen ferries\[33\]\[34\] |
| **EST-Floattech – Octopus LFP** | LFP | Integrated air | 52 V / 233 Ah module, multi-MWh scalable (V) | TAs from four major class bodies (existing series); LFP certifications planned early 2025 (C)\[7\] | Workboats and ferries (U) |
| **Siemens Energy – BlueVault** | Li-ion | Liquid (water channels) (V) | Not published | Not stated | Norled *Ampere* (2015); Kochi Water Metro propulsion and storage; 25+ ferry references (C)\[35\]\[36\]\[37\] |
| **Shift Clean Energy – PwrSwäp / ESS** | Li-ion (Kokam cells) | Patented integrated cooling: each cell in its own cooling channel (C) | Swappable containerised ePods | **IRS and ClassNK TA** (V-press); RINA, LR, KR, NK (Dec 2023) (C) | 17 hybrid/electric tugs (Singapore/Malaysia, Red Offshore); ~700 systems in 17 countries (distributor claim, U)\[38\]\[39\]\[40\]\[41\] |
| **XING Mobility – IMMERSIO XM25 / CTP** | Li-ion | **Single-phase dielectric immersion** | 3C continuous; 60–400 kWh; "2× energy density" via cell-to-pack (C) | **DNV certification in progress** (C) | Porrima P111 (Taiwan); Smart IQ (Austria, April 2026); Nordic Booster partner (C)\[1\]\[42\]\[43\] |
| **Kreisel Electric** | Li-ion 21700 | **Immersion** (Shell MIVOLT fluid) | 63 kWh pack, 306–407 V (C) | DNV certified (C, unverified)\[8\]\[9\] | — |
| **Saft (TotalEnergies) – Seanergy 2.0** | Super-Iron Phosphate (SLFP) | Not found | 130 Wh/L (C) | Original Seanergy: BV, DNV GL, LR, NMA (2016); 2.0 "designed to meet" (C) | RRS *Sir David Attenborough* 1,450 kWh (C)\[44\]\[45\] |
| **Forsee Power – Pulse 2.5 Marine** | LTO (Toshiba) | Liquid | 2.5 kWh module; 6C continuous / 10C peak (C) | DNV (Jan 2022) (C)\[46\]\[47\] | None found |
| **Spear Power Systems – Trident** | NMC (likely) / nano-LTO | Air or liquid | SMAR-11N: 98 Wh/L, 111 Wh/kg system (C, dated page) | DNV GL, BV (C); others targeted 2020 (U)\[48\] | None found |
| **Freudenberg e-Power / XALT** | NMC pouch | Direct liquid | Not found | USCG Marine Safety Center approval cited for project (C) | Savannah Belles hybrid ferries (2024–26) (C)\[49\]\[50\] |
| **CATL marine** | LFP (assumed) | Not found | Not found | CCS (2020), BV (July 2024), RINA (Dec 2025) (C); DNV/ABS unconfirmed (U) | *Yangtze River Three Gorges 1*; ~900 vessels supplied (C)\[51\]\[52\] |
| **EVE Energy marine** | LFP, 3C continuous | Not found | System price "<USD 300/kWh" (C) | Claims CCS, DNV, ABS, BV (C) | 429 vessels / >200 MWh by Aug 2023 (C)\[53\]\[54\]\[55\] |
| **ABB / Kongsberg / Wärtsilä** | Integrators (cell-agnostic or third-party packs) | Project-specific | — | Via pack supplier | ABB: Canadian Coast Guard icebreaker (Echandia pack); Kongsberg: SEACOR PSVs, Matson (Corvus Orca). Wärtsilä: **not researched**\[18\]\[56\] |
| **India – Navalt, Cochin Shipyard / Kochi Water Metro, HCSL** | LTO (Water Metro, IWAI); LFP (H₂ ferry 2 × 25 kWh); DNV-approved Li-ion (Navalt *Indra*, 80 kWh) | Not stated | — | IRS classed; "Battery Prop" notation (V) | Kochi Water Metro; IWAI hybrid cats; *Aditya*, *Indra* (V)\[17\]\[57\]\[58\] |
| **India – Exide, Okaya, Trontek, Log9** | — | — | — | **No IRS marine TA found** (U) | Okaya supplied 150 kW CCS2 charger for Water Metro (U) |

**Key takeaways from the table:** (a) cold-plate and air cooling dominate; (b) the published energy density figures cluster around 100–130 Wh/L at system level, so any claim of "2×" through immersion plus cell-to-pack needs independent verification; (c) only Shift has a verified IRS type approval among the suppliers checked, which shows IRS has a working route for Li-ion ESS.

### 2. Company and market notes (business dimension)

- **Corvus Energy** (Norway/Canada; BW Group is shown as its owner, according to BW Group's newsroom publishing its releases). Factories in Norway, Canada and the US. Recent wins: BC Ferries 40 MWh (Aug 2026), Bibby eCSOV *Staffordshire* with a 24.4 MWh Blue Whale NextGen LFP system (ordered Feb 2025; launched at Armon Vigo 10 Oct 2026, per Riviera), and a Brazil service partnership with Belga Marine (Aug 2026). It describes itself as the market leader; the Orca datasheet claims 700 vessels.\[2\]
- **Leclanché** (Switzerland; cells made in Germany; founded 1909). The only European maker of both LTO and G/NMC cells. LR and BV type approval for MRS-3 came in June 2025.\[26\]\[59\]
- **Echandia** (Sweden). LTO only, on Toshiba SCiB. Raised USD 34 million from S2G Investments (June 2025, part of the March 2025 round). Revenue quadrupled in 2024, with tripling projected for 2025 (company claim). Strong in fast ferries, tugs, icebreakers and naval craft (a EUR 5 million naval order).\[29\]\[31\]\[60\]
- **EST-Floattech** (Netherlands, founded 2009). Small: about USD 4.3 million Series A (Feb 2024, per CB Insights).\[61\]\[62\] Positions itself on air-cooled LFP.\[7\]
- **Shift Clean Energy** (Vancouver). Battery-as-a-service (PwrSwäp). The CEO has said a hybrid vessel costs about 1.1–1.15× a conventional one, which is one of the few public cost indications.\[63\]
- **Pricing:** public USD/kWh data for marine ESS is scarce. The only concrete figure found is EVE's claim of "below USD 300/kWh" at system level, which is unverified.\[55\]\[64\] Treat marine pricing as project-specific; marine systems typically carry a premium over stationary BESS because of class certification, propagation design and venting.

### 3. Thermal management (high priority)

**3.1 The three architectures**

| Attribute | Forced air | Cold plate (water/glycol) | Single-phase dielectric immersion |
|---|---|---|---|
| Marine examples | Corvus Orca/Blue Whale, EST Octopus LFP | Corvus Dolphin NxtGen, Leclanché MRS-3, Siemens BlueVault, XALT | XING IMMERSIO, Kreisel |
| Heat transfer and uniformity | Lowest; derates at high C-rate | Good at the contact face, but gradients across cells | Direct contact on all cell surfaces; best uniformity |
| Leak consequence | N/A (humid or salty air ingress is a concern under DNV 2023) | Conductive coolant → arcing/fault current; glycol is combustible (*Ytterøyningen*)\[65\] | Fluid is non-conductive; a leak becomes a containment/environmental issue, not an arc source |
| Propagation barrier | Relies on passive cell isolation | Relies on passive barriers plus cooling | Fluid acts as heat sink, oxygen barrier and inter-cell barrier |
| Key class questions | Ventilation, salt fog | Cooling pressure test, leak detection, drains | Fluid fire behaviour, containment and drains, off-gas pathway through the fluid, extinguishant interaction, fluid ageing and compatibility |

**3.2 Evidence on immersion cooling (what you can say, and how confidently)**
- *Thermal performance (peer-reviewed lab work):* in a synthetic-ester immersion BTMS, maximum module temperature rise and temperature difference fell by 74.5% and 60.8% respectively against air cooling at 3C. Forced-flow synthetic-ester immersion held a 4S2P pack at 31.3 °C at 5 L/min.\[66\]\[67\] These are pack-scale lab studies, not marine type tests.
- *Fire properties:* a comparative study (ScienceDirect, "Ester-based immersion coolant demonstrates superior safety for energy storage systems"), measured to ISO 2592:2017, gave the ester immersion coolant a flash point of 261.3 ± 2.8 °C and an ignition point of 301.3 ± 2.3 °C, against 199.2 ± 0.4 °C and 218.4 ± 0.2 °C for mineral oil. The mineral oil burned vigorously once ignited. K3-class fluids under IEC 61100 have a fire point of at least 300 °C.
- *Propagation:* EticaAG (stationary BESS, with Shell S5 MIVOLT synthetic ester) reports that propagation could not be produced in UL 9540A-related testing with the fluid present; in its press release the NRTL certifier's team lead said "the immersion liquid had to be removed at the module level to meet UL 9540A's requirement to create cell-to-cell propagation, so the tested configuration was not representative of the final product." This is strong but vendor-published. A patent study (US 12407041) likewise reports no propagation while cells stayed submerged, but propagation when two adjacent cells were triggered simultaneously in one configuration.\[68\] Fluid level and design matter.
- *Marine-specific gap:* no published marine-class propagation test report (DNV Option 1 or IRS/IEC 62619 7.3.3) for an ester-immersed pack was found. XING's DNV process is the nearest benchmark. **Recommendation:** commission an independent propagation test in the exact production configuration, with IRS witnessing, and publish a summary. It will be the strongest proof point in the deck.

**3.3 Dielectric fluid properties that matter at sea (checklist for the QuantiCool/Transol Synth 100 slide)**
Fire point and K-class (IEC 61100); flash point (ISO 2592 open cup); auto-ignition temperature; breakdown voltage and its stability with moisture (seawater-humid atmospheres); water saturation tolerance (a known ester advantage over hydrocarbons); readily biodegradable (OECD 301B) and aquatic toxicity (relevant for MARPOL and port-state concerns about spills and drains); material compatibility with cell casings, busbar insulation, seals, BMS PCBs and conformal coatings; viscosity and pour point across the operating window; oxidation stability and ageing over a 10–15-year vessel life, with an in-service sampling regime; behaviour under thermal runaway (decomposition products and their contribution to off-gas composition and to explosion analysis); interaction with fixed fire-extinguishing agents; and behaviour under ship motions (sloshing, free surface, and keeping cells submerged at design roll and pitch). *Savita product data was not researched here; insert verified datasheet values.*

**3.4 Off-gas, ventilation and fire suppression**
DNV requires an exhaust fan that runs continuously or starts automatically on off-gas detection, with gas quantity analysis based on the number of cells venting. Where an extinguishing agent is used for propagation prevention, the fixed system may double for it. EMSA asks that the extinguishing agent penetrate at least to module level, and that systems over 50 kWh sit in a dedicated battery room treated as a category A machinery space.\[69\]\[70\] The NMA's post-*Ytterøyningen* circular requires owners to re-assess explosive-gas accumulation risk and keep the battery connected to the energy management system at all times.\[71\]\[72\] **For immersion:** show where vent gas goes (through the fluid into a headspace, then a vent valve or duct to a safe location), and prove that gas accumulation analysis accounts for fluid decomposition products.

### 4. Class approvals and safety standards (high priority)

**4.1 Rule and standard landscape**

| Instrument | Status / key content relevant to an immersion-cooled BESS |
|---|---|
| **IRS Classification Notes – Approval of Li-ion Battery Systems (July 2020)** + **IRS Guidelines on Battery Powered Vessels** | TA per chemistry; documentation must include "details and arrangement of forced cooling systems"; design assessment covers cooling and rack arrangements; tests to IEC 62619 (cells cl. 7.2.1–7.2.6; system propagation 7.3.3; BMS 8.2.2–8.2.4), IEC 62620 performance, IRS environmental tests, and a **pressure test of the cooling system**; TA valid 5 years; intermediate audit ≤30 months; vessel unit certification; "Battery Prop" notation\[73\] |
| **DNV-RU-SHIP Pt.6 Ch.2 Sec.1** (+ **DNV-CG-0339**, **DNV-CP-0418**) | Battery(Power)/Battery(Safety) notations; product certificate for each delivery ≥50 kWh; propagation Option 1 (no cell-to-cell) with 24 h observation; off-gas fan; July 2023 edition (in force 2024) added cooling-leak fault-current, gas-spreading and water-ingress requirements, plus a class guideline for alternative designs; July 2026 edition adds a **"Battery ready"** notation from 1 Jan 2027\[69\]\[74\]\[75\]\[76\] |
| **ABS Requirements for Use of Li-ion Batteries (Dec 2025)** | Renamed from "Guide" in 2022; Dec 2025 edition adds 2–<20 kWh systems and **updates cooling-system prescriptive requirements**; references UL 1973, UL 9540A\[11\]\[77\]\[78\]\[79\] |
| **BV NR 467 / NR 547; LR battery rules; RINA, ClassNK, KR, CCS** | Not reviewed in detail in this research; treat as equivalent risk-based TA routes (BV, LR and RINA approvals are evidenced for Leclanché, CATL and Shift) |
| **IEC 62619 / IEC 62620 / IEC 62933 / IEC 60092 series; UL 1973 / UL 9540A** | IEC 62619 is the backbone safety test standard referenced by IRS and DNV; IEC 62620 covers performance; UL 9540A propagation data is accepted as supporting evidence by ABS |
| **EMSA Guidance on the Safety of BESS On-board Ships (v1.0, 2023)** | Non-mandatory, goal-based (MSC.1/Circ.1394/Rev.2 method); >800 battery ships, 60% in Europe; dedicated battery room >50 kWh; no liquid tanks other than cooling-leak drain tanks; bilge alarm; extinguishant penetration to module level\[70\]\[80\]\[81\] |
| **IMO** | No binding international instrument yet. MSC 110 (2025) tasked SSE/SDC to develop Li-ion requirements, including firefighting, swappable battery containers and a SOLAS II-1/41 amendment allowing batteries as the main source of power. MSC 111 (May 2026) moved development of **interim guidelines for ships using BESS** to the SDC Sub-Committee.\[82\]\[83\] Expect interim guidelines after 2026 (timing uncertain) |
| **NMA (Norway)** | "Guidelines for chemical energy storage – maritime battery systems" (origin of Propagation Test 1); post-*Ytterøyningen* circular on explosive gas risk assessment\[12\]\[71\] |

**4.2 What IRS type approval involves for an immersion-cooled system (practical roadmap)**
1. *Pre-submission meeting with IRS:* agree scope (cooling system as a component vs a full battery system), applicable rules (IRS CN July 2020, Battery Powered Vessel Guidelines, CN on electrical equipment type approval), and alternative-design treatment for immersion.
2. *Documentation package:* functional description and limits; BMS functional description and circuit diagram; block diagram; **cooling system P&ID, fluid circulation, heat exchanger, pumps, sensors, leak and level detection, drains and expansion volume**; alarm and monitoring list (cell temperature, space temperature, gas detection, ventilation failure, etc.); quality plan and BMS software quality plan; SOC/SOH documentation; O&M manuals; type-test protocol with acceptance criteria.
3. *Fluid dossier:* fire, flash and auto-ignition points; K-class; dielectric properties versus moisture; biodegradability and toxicity; compatibility test reports; ageing data; and the decomposition-gas profile under thermal runaway.
4. *Risk assessment / FMEA:* leak, fluid loss, pump failure, contamination, fluid fire, gas accumulation, interaction with the fixed extinguishing system, and ship-motion effects on fluid level.
5. *Works assessment:* IRS audit of manufacturing, inspection and test facilities.
6. *Witnessed type testing* (or at an IRS-recognised accredited lab): IEC 62619 cell and system tests, **propagation (7.3.3)**, BMS protection tests, dielectric strength, insulation resistance, **cooling pressure test**, environmental tests (vibration, dry and damp heat, EMC; salt mist and cold if on deck), and IEC 62620 performance.
7. *Certificate issue* (5-year validity), intermediate audit (≤30 months), then **unit certification for each vessel**, with vessel-specific plans and FAT.
8. *Leverage:* pursue a parallel DNV TA (DNV-CP-0418) to give shipyards building for export a multi-class product. DNV's approval finder entries for LFP systems already reference Option 1 propagation and vent-piping verification on board.

**4.3 Likely class questions specific to immersion (prepare answers)**
Fluid flammability contribution in the battery-room fire load; whether the fluid counts as a "liquid tank" under EMSA's battery-room guidance; leak containment and drain tank sizing; fluid level monitoring and a low-level alarm or trip; conductivity monitoring; fluid sampling intervals; off-gas path and vent design; compatibility of extinguishing agent (water mist, aerosol, inert gas) with fluid-filled modules; behaviour at heel and trim; and end-of-life fluid disposal.

### 5. India focus

- **Kochi Water Metro:** 78 battery-electric hybrid ferries, 38 terminals, 15 routes, 76 km. Built by Cochin Shipyard, with Siemens propulsion and storage and Echandia LTO packs\[37\]\[84\] of about 122 kWh per 100-pax boat, DNV-approved, charged in about 15 minutes. Dual-classed (DNV +1A… Battery Power; IRS). Over 7.7 million passengers by October 2026.\[13\]\[14\]\[37\] KMRL is running feasibility studies for water metros in 18 cities.\[85\]
- **IWAI / Hooghly Cochin Shipyard:** eight 24 m hybrid catamarans with E-LTO batteries, awarded the IRS "Battery Prop" notation.\[86\]
- **Cochin Shipyard hydrogen ferry (Varanasi):** 50 kW PEM fuel cell plus 2 × 25 kWh LFP batteries, built under Harit Nauka.\[86\]\[87\]\[88\]
- **Navalt (Kochi):** solar-electric ferries *Aditya* (50 kWh, IRS +IW Zone 3)\[57\] and *Indra* (80 kWh DNV-approved battery, IRS +IW Zone 1).\[57\]\[58\]
- **Policy:** the Harit Nauka Guidelines (MoPSW, January 2024) target 50% green-fuel inland passenger fleets within a decade and 100% by 2045. This feeds the Maritime Amrit Kaal Vision 2047.\[87\]\[89\]
- **Opportunity read:** inland and harbour craft (ferries, water taxis, tugs and pusher craft) in tropical ambient temperatures are where thermal management and propagation safety matter most and where IRS is the default class. Goa Shipyard, Mazagon Dock and GRSE opportunities were not specifically researched.

### 6. Market context

- **Fleet:** the Faraday Institution (January 2025), citing DNV AFI, reports 944 battery-powered ships in operation and a further 451 under construction for service within the next four years. Europe holds 68% and Norway 33%. Fully electric is 18%, hybrid 65% and plug-in hybrid 17%. Car/passenger ferries are the largest segment.
- **Market value:** USD 863.25 million (2025) rising to USD 3,874 million by 2035 at a 16.2% CAGR (Expert Market Research),\[90\] versus USD 0.673 billion (2025) rising to USD 3.189 billion by 2035 at 16.83% (MRFR).\[62\] Both are commercial research estimates with different scopes. Quote a range, not a single number.
- **Drivers:** the IMO 2023 GHG Strategy (net zero by or around 2050, with indicative checkpoints for 2030 and 2040); the EU ETS for shipping (phased in from 2024); FuelEU Maritime (in force from 1 January 2025); the IMO carbon intensity measures; and India's Harit Nauka and Maritime Amrit Kaal Vision 2047. Regulatory details for EU and IMO beyond what is stated here were not re-verified in this research.

### 7. Incident and lessons-learned register

| Event | Root cause / finding | Lesson for the deck |
|---|---|---|
| *Ytterøyningen* (Norled, Norway), 10–11 Oct 2019; ~2 MWh Corvus liquid-cooled ESS | Per Corvus's preliminary findings (Dec 2019, backed by the NMA), a twisted cold-plate gasket leaked water-glycol, creating arcing "at pack voltages of 1,000 v DC"; glycol fuelled the fire; BMS disconnected; Novec 1230 and saltwater sprinkler deployed, and the NMA (12 Dec 2019) linked the escalation to brief sprinkler use, which "caused several short circuits"; gas explosion ~12 h later | Conductive, combustible coolant is a hazard in itself; gas management and BMS connectivity are critical; extinguishant choice must match the battery design |

*Other marine battery incidents were not researched within budget. Add them before publication if the matrix lists them.*

## Recommendations

1. **Make the deck's thesis "remove the leak-arc-fuel chain".** Anchor it on *Ytterøyningen* and on the DNV 2023 cooling-leak rule. Position a K3-class synthetic ester as the coolant that turns a leak from an ignition source into a containment issue.
2. **Pair every performance claim with a test pathway.** Separate the "lab evidence" (ester flash and ignition points, 60–75% reductions in temperature rise) from the "certification evidence" (IRS-witnessed IEC 62619 7.3.3 propagation, cooling pressure test). Don't reuse EticaAG or XING claims as your own data.
3. **Run IRS and DNV in parallel.** IRS gives the home market and the inland fleet; DNV makes the product exportable and credible to OEMs such as Echandia, Corvus and Leclanché, which would be partners rather than competitors. A fluid-supplier relationship with a pack OEM is the fastest route to the vessel.
4. **Target OEM partnerships, not only shipyards.** No incumbent offers immersion, and cold-plate OEMs (Leclanché, Corvus Dolphin, Siemens) are the natural candidates for a "dielectric retrofit" or next-generation pack. In India, approach Cochin Shipyard and KMRL for the next Water Metro tranche and IWAI programmes, plus Navalt.
5. **Close the evidence gaps before going external:** verify certificates in class approval finders; get your own fluid datasheet values; and document fluid behaviour at heel and trim and under thermal-runaway decomposition.

### Suggested deck storyline and slide headings
1. **Title:** "Safer Cells, Cooler Ships: Dielectric Immersion Cooling for Marine BESS"
2. **The shift:** 944 battery ships in operation, 451 on order; regulation (IMO, EU ETS, FuelEU, Harit Nauka) is pulling demand
3. **Where India stands:** Kochi Water Metro, IWAI hybrids, IRS "Battery Prop", the Harit Nauka 2045 target
4. **Chemistries at sea:** NMC vs LFP vs LTO (energy vs cycle life vs safety)
5. **Supplier landscape:** comparison table (chemistry, cooling, density, approvals, references)
6. **The thermal problem:** heat, gradients, C-rate derating, tropical ambient temperatures
7. **Three cooling architectures compared:** air vs cold plate vs immersion
8. **Lessons from *Ytterøyningen*:** how a coolant leak became a fire and an explosion
9. **Why a dielectric ester:** fire point ≥300 °C (K3), non-conductive, biodegradable, moisture tolerant
10. **Evidence so far:** lab thermal data, UL 9540A immersion results, XING marine deployment (with confidence levels marked)
11. **Rules map:** IRS CN 2020, DNV Pt.6 Ch.2 Sec.1, ABS 2025, EMSA, IMO roadmap
12. **Our IRS type-approval roadmap:** documents, works assessment, witnessed tests, unit certification
13. **Answering class questions:** containment, off-gas path, extinguishant interaction, ship motion
14. **Integration for shipyards:** footprint, drains, ventilation, DC bus integration, maintenance and fluid sampling
15. **Partnership model for OEMs:** fluid supply, qualification support, lifecycle service
16. **Call to action:** pilot vessel, joint propagation test, IRS/DNV dual approval

## Caveats
- **The uploaded matrix could not be read.** Coverage may omit companies, chemistries (for example sodium-ion or solid-state) or products that the matrix lists.
- My own web research budget ran out before I could cover Wärtsilä, BV NR 467/NR 547 and LR rule texts in detail, Goa Shipyard, Mazagon Dock and GRSE, pricing, and other incidents. A supporting sub-investigation covered several suppliers but did not check class approval finder certificates. Every approval marked (C) is a company or press claim.
- Immersion-cooling safety evidence is largely vendor-published (EticaAG, XING, Kreisel). Lab studies are pack-scale and non-marine. No independent marine-class propagation report for ester immersion was found.
- Market-size figures come from commercial research firms and disagree; several aggregator "top companies" lists (e.g., ReportPrime) were judged unreliable and not used.
- Some reports dated 2026 (BC Ferries, Echandia Core, XING SMM 2026, DNV July 2026 rules, MSC 111) come from trade press and are recent; confirm with primary releases before external publication.
- Internal Drive documents ("DNV Immersion Cooled Battery Compliance", "Battery Cooling Solutions for Vessels", "Immersion Cooling BESS Advantages Report") were found but not used as sources.\[91\] Verify any figures in them independently before reuse.

## Sources

1. [New marine battery offers double energy density for electric vessels](https://interestingengineering.com/transportation/marine-battery-offers-double-energy-density)
2. [Energy Storage Systems 10 Corvus Energy • Ferries • Cruise ships](https://old.corvusenergy.com/wp-content/uploads/2019/04/datasheets_Corvus-Energy_Orca-ESS_2025.02.23.pdf)
3. [Immersion-Cooled Battery Targets Electric Vessels](https://www.electronicsforu.com/news/immersion-cooled-battery-targets-electric-vessels)
4. [INDIAN REGISTER OF SHIPPING CLASSIFICATION NOTES Approval of Lithium-ion](https://www.irclass.org/media/4984/23-cn-approval-of-lithium-ion-battery-systems_july_2020.pdf)
5. [Charged EVs](https://chargedevs.com/newswire/corvus-energy-to-supply-40-mwh-of-dolphin-nxtgen-batteries-for-bc-ferries-summit-class-ships/)
6. [e-Marine - Leclanché](https://www.leclanche.com/solutions/e-transport-solutions/e-marine/)
7. [EST-Floattech Launches LFP Battery Modules for Maritime Energy Storage](https://www.emobility-engineering.com/est-floattech-lfp-octopus-series-maritime-battery-modules/)
8. [Battery Systems - KREISEL Electric](https://www.kreiselelectric.com/products/battery-systems/)
9. [Liquid Immersion Cooling for Battery Packs - Battery Design](https://www.batterydesign.net/liquid-immersion-cooling-for-battery-packs/)
10. [Riviera - News Content Hub - Shared lessons on vessel battery fires strengthen safety](https://www.rivieramm.com/news-content-hub/shared-lessons-on-vessel-battery-firesnbspstrengthennbspsafety-59297)
11. [Requirements for Use of Lithium-ion Batteries in the Marine and](https://maritimecyprus.com/wp-content/uploads/2024/04/ABS-RequirementsforUseofLithium-ionBatteries.pdf)
12. [Battery Power Online](https://www.batterypoweronline.com/news/corvus-energy-orca-ess-passes-nma-thermal-runaway-propagation-testing-2/)
13. [Kochi's Water Metro](https://www.team-bhp.com/forum/commercial-vehicles/272084-kochis-water-metro-ride-report.html)
14. [Kochi Water Metro: Leading the Wave of Sustainable Urban Water Transport in India and South Asia - Cities Development Initiative For AsiaCities Development Initiative For Asia](https://cdia.asia/2022/10/30/kochi-water-metro-leading-the-wave-of-sustainable-water-transport-in-india-and-south-asia/)
15. [E-MARINE SOLUTIONS Navius MRS-3 Marine Battery System High performance,](https://www.leclanche.com/wp-content/uploads/2023/10/NAVIUS-MRS3.pdf)
16. [Indian Register of Shipping to provide classification services to six hybrid electric catamarans for inland waterways](https://en.portnews.ru/news/352073/)
17. [Riviera - News Content Hub - IRClass certifies India’s first battery-powered catamaran ferry](https://www.rivieramm.com/news-content-hub/news-content-hub/irclass-certifies-indias-first-100-pax-battery-powered-catamaran-ferry-69493)
18. [Kongsberg Maritime selects Corvus Energy battery systems for Matson’s LNG-powered containerships — Maritime Battery Forum](https://www.maritimebatteryforum.com/news/kongsberg-maritime-selects-corvus-energy-battery-systems-for-matsons-lng-powered-containerships)
19. [Corvus Orca - Corvus Energy Lithium Polymer Energy Storage - PDF Catalogs](https://pdf.nauticexpo.com/pdf/corvus-energy-lithium-polymer-energy-storage/corvus-orca/194835-133959.html)
20. [Riviera - News Content Hub - Chemistries advance battery storage as vessel construction rises](https://www.rivieramm.com/news-content-hub/news-content-hub/chemistries-advance-battery-storage-as-vessel-construction-rises-88039)
21. [Riviera - News Content Hub - Corvus-BYD Energy developed LFP battery gets green light](https://www.rivieramm.com/news-content-hub/corvus-byd-energy-developed-lfp-battery-gets-green-light-90210)
22. [Corvus-BYD Developed LFP Battery Gets Green Light From DNV](https://oceaneconomist.com/articles/corvus-byd-blue-whale-battery-approval)
23. [Corvus Energy Secures 40MWh Landmark Battery Contract for BC Ferries’ New Major Vessels Program - BW Group](https://bw-group.com/newsroom/articles/2026/08/corvus-energy-secures-40mwh-landmark-battery-contract-for-bc-ferries-new-major-vessels-program/)
24. [Corvus Energy secures major battery contract for BC Ferries' new Summit Class vessels](https://www.shippax.com/en/news/corvus-energy-secures-major-battery-contract-for-bc-ferries-new-summit-class-vessels.aspx)
25. [Marine Battery Systems High performance, European-made lithium-ion](https://www.leclanche.com/wp-content/uploads/2021/02/Leclanche-Marine-Battery-Systems.pdf)
26. [Leclanché receives type approvals for its marine energy storage system - Offshore Energy](https://www.offshore-energy.biz/leclanche-receives-type-approvals-for-its-marine-energy-storage-system/)
27. [Riviera - News Content Hub - Denmark’s E-ferry to deploy first DNV GL type-approved battery system](https://www.rivieramm.com/news-content-hub/news-content-hub/denmarks-e-ferry-to-deploy-first-dnv-gl-type-approved-battery-system-28641)
28. [PRESS RELEASE 1 Leclanché SA](https://www.leclanche.com/wp-content/uploads/2020/10/20201006-Leclanch%C3%A9-selected-to-supply-battery-storage-system-for-CGN_ENG.pdf)
29. [Swedish battery system supplier Echandia expanding in US market](https://www.workboat.com/technology/swedish-battery-system-supplier-echandia-expanding-in-us-market)
30. [Echandia Wins First Marine Battery System Order from Incat - Ship & Bunker](https://shipandbunker.com/news/world/474778-echandia-wins-first-marine-battery-system-order-from-incat)
31. [Echandia secures SEK 220 million in new financing round](https://news.cision.com/echandia-group/ListItems)
32. [Echandia to Supply Battery System for Canadian Coast Guard’s Hybrid Icebreaker](https://contabo.marinelink.com/news/echandia-supply-battery-system-canadian-532322)
33. [SCiB™](https://www.global.toshiba/ww/products-solutions/battery/scib.html)
34. [TOSHIBA SCIB 2.3V 20Ah LTO Rechargeable Battery cycle life 20000 For L](https://selianenergy.com/products/scib-2-3v-20ah-lto-rechargeable-battery-cycle-life-20000-for-low-temperature-discharge-home-reserve-power)
35. [Siemens Introduces Li-ion Battery for Offshore Operations](https://www.tdworld.com/distributed-energy-resources/energy-storage/article/20971259/siemens-introduces-li-ion-battery-for-offshore-operations)
36. [Hybrid drives: Siemens sends in the machines](https://www.marinelink.com/news/hybrid-drives-siemens-sends-machines-475953)
37. [Kochi Water Metro](https://en.wikipedia.org/wiki/Kochi_Water_Metro)
38. [Shift Clean Energy Announces New Marine Battery Partnership - Ship & Bunker](https://shipandbunker.com/news/apac/359284-shift-clean-energy-announces-new-marine-battery-partnership)
39. [SHIFT｜Energy Storage Solution｜Billion Electric](https://www.billion.com/Energy-Storage-Solution/Shift-Clean-Energy)
40. [Brent Perry News - MarineLink](https://www.marinelink.com/news/maritime/brent-perry)
41. [Marine Electrification Takes a New Step Forward in South Korea with Shift Clean Energy and S&SYS Partnership - Shift](https://shift-cleanenergy.com/2023/06/06/marine-electrification-takes-a-new-step-forward-in-south-korea-with-shift-clean-energy-and-ssys-partnership/)
42. [Immersion-Cooled Battery Systems for Marine Propulsion](https://aero-defence.tech/news/113894-immersion-cooled-battery-systems-for-marine-propulsion)
43. [New marine battery uses immersion cooling to prevent fire spread](https://interestingengineering.com/energy/immersion-cooled-marine-battery-twice-energy-density)
44. [Saft’s new Seanergy 2.0 Li-ion battery will drive decarbonization for the marine industry](https://saft.com/en/media-resources/press-releases/saft%E2%80%99s-new-seanergy-20-li-ion-battery-will-drive-decarbonization)
45. [Clean Silent Running](https://saft.com/en/media-resources/our-stories/clean-silent-running)
46. [Forsee Power introduces battery for maritime use - electrive.com](https://www.electrive.com/2022/01/06/forsee-power-introduces-battery-for-maritime-use/)
47. [Forsee Power obtains DNV certification for its Pulse 2.5 marine battery system - Forseepower](https://www.forseepower.com/press-release/forsee-power-obtains-dnv-certification-for-its-pulse-2-5-marine-battery-system-04-01-2022/)
48. [Spear Power Systems](https://marine.spearpowersystems.com/technologies/)
49. [Derecktor Shipyards teams up with Freudenberg e-Power Systems to power hybrid-electric ferries for Chatham Area Transit in Savannah.](https://derecktor.com/derecktor-shipyards-teams-up-with-freudenberg-e-power-systems-to-power-hybrid-electric-ferries-in-savannah/)
50. [XALT Energy - Battery-Tech Network](https://battery-tech.net/company/xalt-energy/)
51. [CATL's Marine Battery System Receives Type Approval from RINA](https://chinaevhome.com/2025/12/09/catls-marine-battery-system-receives-type-approval-from-rina/)
52. [CATL's marine battery system has received type certification from the Italian classification society](https://longbridge.com/en/news/269029525)
53. [EVE Energy draws bright blueprint for green shipping - Energy-Storage.News](https://www.energy-storage.news/industry-updates/eve-energy-draws-bright-blueprint-for-green-shipping/)
54. [Another Chinese Battery Manufacturer Moves into Electric Vessels](https://xindemarinenews.com/news/2066816796125822977)
55. [EVE Energy and Green Whale Technology partner to accelerate marine battery deployment](https://www.advancedmaritimetechnologyinternational.com/news/battery-technology/eve-energy-and-green-whale-technology-partner-to-accelerate-marine-battery-deployment.html)
56. [SEACOR installs Kongsberg battery systems on PSVs](https://vesselperformance.info/2024/01/31/seacor-installs-kongsberg-battery-systems-on-psvs/)
57. [Aditya (boat)](<https://en.wikipedia.org/wiki/Aditya_(boat)>)
58. [Indra (boat)](<https://en.wikipedia.org/wiki/Indra_(boat)>)
59. [Charged EVs](https://chargedevs.com/features/seaworthy-evs-leclanche-designs-and-manufactures-li-ion-cells-and-systems/)
60. [Echandia Marine LTO Batteries to power the world’s first fleet of all-electric commuter ferries](https://www.shippax.com/en/press-releases/echandia-marine-lto-batteries-to-power-the-worlds-first-fleet-of-all-electric-commuter-ferries.aspx)
61. [Compare EST-Floattech vs Nereida Energy](https://www.cbinsights.com/compare/est-floattech-vs-yinson-greentech)
62. [Founded Year](https://www.cbinsights.com/investor/est-floattech)
63. [INTERVIEW: Shift Clean Energy Sees Near Doubling of Maritime Battery Systems by 2025 - Ship & Bunker](https://shipandbunker.com/news/world/572177-interview-shift-clean-energy-sees-near-doubling-of-maritime-battery-systems-by-2025)
64. [Charged EVs](https://chargedevs.com/newswire/eve-energy-partners-with-green-whale-to-accelerate-marine-battery-adoption/)
65. [Car ferry battery fire probably caused by coolant leakage](https://www.seatrade-maritime.com/casualty/car-ferry-battery-fire-probably-caused-coolant-leakage)
66. [Synthetic ester-based forced flow immersion cooling technique for fast discharging lithium-ion battery packs - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S2352152X24024381)
67. [Thermo-electrical performance and heat transfer mechanisms of an immersion battery thermal management system based on synthetic ester fluid - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0360544226010558)
68. [Immersion cooling battery system integrated with enclosure](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12407041)
69. [DNVGL-RU-SHIP Pt.6 Ch.2 Propulsion, power generation ...](https://static1.squarespace.com/static/5f0d42f16639a745affd633e/t/5ff5d082add77853459846ec/1609945229408/DNVGL-RU-SHIP-Pt6Ch2.pdf)
70. [Guidance on the Safety of BESS on board ships - EMSA](https://www.emsa.europa.eu/publications/inventories/download/7643/5061/23.html)
71. [Battery fire with subsequent gas explosion - Norwegian Maritime Authority](https://www.sdir.no/en/legislation/circulars/battery-fire-with-subsequent-gas-explosion)
72. [NMA issues safety recommendations following battery room fire on Norled ferry](https://www.bairdmaritime.com/work-boat-world/passenger-vessel-world/ro-pax/nma-issues-safety-recommendations-following-battery-room-fire-on-norled-ferry)
73. <https://www.irclass.org/media/7317/23-cn-approval-of-lithium-ion-battery-systems_july_2020.pdf>
74. [Form code: TA 251 Revision: 2024-11 www.dnv.com Page 1 of 3](https://www.roypow.com/uploads/DNV-CERTIFICATE.pdf)
75. [DNV has published the July 2023 edition of the rules for classification of ships](https://www.dnv.com/news/2023/dnv-has-published-the-july-2023-edition-of-the-rules-for-classification-of-ships-245133/)
76. [Now available: The July 2026 edition of the DNV class rules and standards for ship and offshore](https://www.dnv.com/news/2026/standards-now-available-the-july-2026-edition-of-the-dnv-class-rules-and-standards-for-ship-and-offshore/)
77. [Lithium-ion Battery Requirements for Marine](https://www.scribd.com/document/846207389/Lithium-ion-Batteries-reqts-ABS-Apr24)
78. [Requirements for Use of Lithium-ion Batteries in the Marine and](https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/other/275-requirements-for-use-of-lithium-ion-batteries-in-the-marine-and-offshore-industries-2025/275-lithium-ion-batteries-reqts-dec25.pdf)
79. [Requirements for Use of Lithium-ion Batteries in the Marine and Offshore Industries - American Bureau of Shipping (ABS) \[2025, PDF\] › Marine Tracker](https://seatracker.ru/viewtopic.php?t=67157)
80. [Guidance on the Safety of Battery Energy Storage Systems (BESS) on board ships - European Maritime Safety Agency (EMSA) \[2023, PDF\] › Marine Tracker](https://seatracker.ru/viewtopic.php?t=59788)
81. [5065 new guidance on the safety of battery energy storage systems](https://www.emsa.europa.eu/newsroom/latest-news/item/5065-new-guidance-on-the-safety-of-battery-energy-storage-systems.html)
82. [IMO MARITIME SAFETY COMMITTEE (MSC) 110th Session, 18](https://www.irclass.org/media/7943/msc-110-report.pdf)
83. [Maritime Safety Committee - 111th session (MSC 111), 13-22 May 2026](https://www.imo.org/en/mediacentre/meetingsummaries/pages/temporary-msc-111.aspx)
84. [Achievements and Initiatives of FY 2023-24](https://shipmin.gov.in/sites/default/files/MoPSW%20achievemnts%20and%20initiatives%20of%20FY%202023-24_0.pdf)
85. [Water transport in India](https://en.wikipedia.org/wiki/Water_transport_in_India)
86. [Riviera - News Content Hub - India’s Prime Minister Narendra Modi welcomed the country’s first domestically built hydrogen fuel cell passenger ferry](https://www.rivieramm.com/news-content-hub/indias-first-hydrogen-fuel-cell-powered-ferry-hits-the-water-79837)
87. [PM Modi launches hydrogen-powered ferry](https://vajiramandravi.com/current-affairs/hydrogen-powered-ferry/)
88. [India’s first indigenously developed hydrogen fuel cell ferry |ForumIAS](https://forumias.com/blog/indias-first-indigenously-developed-hydrogen-fuel-cell-ferry/)
89. [Significance of Hydrogen Powered Ferry](https://www.shankariasparliament.com/current-affairs/significance-of-hydrogen-powered-ferry)
90. [Marine Battery Market Size & Share](https://www.expertmarketresearch.com/reports/marine-battery-market)
91. mcp\_\_Google\_Drive\_\_search\_files
