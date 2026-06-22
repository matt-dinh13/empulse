---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1848541
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {DEL}Manage Marketing Offers

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

{DEL PCG-3799/}
Button is visible only if all pre-condition for UC 02.906 Marketing Offers Management are fulfilled.
Activates UC 02.906 Marketing Offers Management with parameters

	
- CUID
	
- BusinessChannel
	
- CampaignID

As BusinessChannel and CampaignID use values defined on input of UC 06.030 Show Client Data (if this UC was activated in session with the same CUID).

Localization code: MO_MarketingOffersManage

## 📊 Appears In (1 diagrams)

- Custom: Client detail
