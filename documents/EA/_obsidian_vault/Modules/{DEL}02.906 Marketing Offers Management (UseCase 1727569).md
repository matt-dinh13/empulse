---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/Access Rights"
domain: "Modules"
element_id: 1727569
diagrams: 11
connections: 20
tags:
  - usecase
  - modules
---

# 🎯 {DEL}02.906 Marketing Offers Management

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/Access Rights

## 📝 Notes

{DEL PCG-3799/}
This UC is intended for 

	
- displaying of marketing offers addressed for client and set of information necessary for efficient communication with client,
	
- entering and sending of response to such offers back to the external system.

The marketing offers are saved in external system (e.g. SAS), BSL provides UI for management.

## 🔗 Connections (19)

- ← Realisation: [[{MOD}MarketingOfferWS]]
- ← Association: [[User (Actor 1611783)]]
- ← Dependency: [[{DEL}Manage Marketing Offer URL]]
- → Realisation: [[{DEL}02.906 Marketing Offers Management]]
- → Realisation: [[{DEL}02.906 Marketing Offers Management - Display client info details]]
- → UseCase «extend»: [[01.010 Choose product offer (UseCase 1827711)]]
- → Association: [[CIF (Actor 1611780)]]
- → UseCase «include»: [[{MOD}02.912 Get Customer Marketing Offers]]
- → Realisation: [[{DEL}02.906 Marketing Offers Management - Send response]]
- → Realisation: [[{DEL}02.906 Marketing Offers Management - Edit Person Data]]
- → Association: [[CIF (Actor 1611780)]]
- → Realisation: [[{DEL}02.906 Marketing Offers Management - Update Marketing Offer]]
- → Association: [[Campaign system (SAS)]]
- → Association: [[OSB (Actor 1611781)]]
- ← Realisation: [[{DEL}Marketing Offers]]
- ← Dependency «invokes»: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency «invokes»: [[01.010 Choose product offer (UseCase 1827711)]]
- ← Dependency: [[Manage Marketing Offers (GUIElement 1871787)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: Choose product offer
- Custom: Client detail
- Custom: Manage Marketing Offer URL
- Custom: Marketing offers management (SAS)
- Custom: Operational buttons - application operations
- Custom: Overview
- Logical: MarketingOfferWS
- Use Case: Choose product offer
- Use Case: Fill in application
- Use Case: Management of Marketing Offers
