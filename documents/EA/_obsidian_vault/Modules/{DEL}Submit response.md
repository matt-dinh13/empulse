---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface"
domain: "Modules"
element_id: 1732685
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ {DEL}Submit response

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface

## 📝 Notes

{DEL PCG-3799/}
Submits response to Marketing Offers to external system.
Visible only if user has access right UC02_906_SendResponse.
If global parameter IS_OFFER_STORE is set as:

	
- False - Disabled button until mandatory responses are entered for all displayed marketing offers


	
- True -  At least one mandatory response has to be entered for any of displayed marketing offers to submit the request to Offer Store.


Will be active only after confirming previously selected answers.

Localization: MO_MarketingOffersSubmit

## 📊 Appears In (1 diagrams)

- Custom: Marketing offers management (SAS)
