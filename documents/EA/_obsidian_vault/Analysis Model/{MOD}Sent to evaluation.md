---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755498
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Sent to evaluation

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Displayed only for Primary offer.
This button is visible only if at least one of following conditions is met:

	
- application is in substatus 'ACL' (Approved with Cross-sell limits)
	
- application is in substatus CF (client draft)


and all default document containers' rules are satisfied (green semaphore icon)(this part of the condition is skipped if the global parameter (IncludeDocInProductCalculator=0) or (IncludeDocInProductCalculator = 1 and OfferProductsWithMissingDocuments=1 and RequireAtLeastPrimaryDocuments =0)).

Runs evaluation of application described in part Pre-finalization of use case 01.080 Fill in application and displays contract detail.

Localization code:
APP_Send

## 🔗 Connections (2)

- → Dependency: [[Default document container]]
- → Realisation: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Panel of buttons
