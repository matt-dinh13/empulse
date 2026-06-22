---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820890
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ External code

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

External code of the direct debit mandate.

Not editable - read only.

Other:

	
- In case the value (from the respective LDM source) is null, message GEN_NotAvailable is displayed instead.


LDM source:

	
- Contract->DDM.External_Code

or

	
- GetDDMResponse.ddmData.externalCode


Localization code:
DDM_ExternalCode

## 🔗 Connections (1)

- ← Generalization: [[UMRN code]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
