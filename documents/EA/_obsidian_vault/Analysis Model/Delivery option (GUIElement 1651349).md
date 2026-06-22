---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651349
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Delivery option

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

Client's delivery option (pick up on POS or send to main/contact/{ADD_CLM-323}employment{/ADD} address).


Localization code:

	
- label: REL_PerCardDeliveryOption
	
- values: 
- POS - REL_PerCardPOSDelivery (e.g. POS delivery address)
- CUSTOMER_PERMANENT -> REL_PerCardClientMainAddress (e.g.Client's main address)
-  CUSTOMER_CONTACT -> REL_PerCardClientContactAddress (e.g. Client's contact address)
- {ADD_CLM-323}CUSTOMER_EMPLOYER -> REL_PerCardClientEmployerAddress (e.g. Client's employer address){/ADD}

## 🔗 Connections (1)

- → Dependency: [[Delivery option]]

## 📊 Appears In (1 diagrams)

- Custom: Change delivery address
