---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model"
domain: "Modules"
element_id: 1798572
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Manage Marketing Offers

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model

## 📝 Notes

Button is visible only if global parameter IsSAS = True and user has access right UC02_906.

On click system re-directs user to BSL application screen Manage marketing offers.

Following parameters are passed in the URL

	
- CUID
	
- BusinessChannel
	
- CampaignID

## 🔗 Connections (1)

- → Association «navigate»: [[BSL (Actor 1879376)]]

## 📊 Appears In (1 diagrams)

- Custom: Client detail
