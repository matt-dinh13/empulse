---
type: GUIElement
stereotype: "date"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model"
domain: "Analysis Model"
element_id: 1752591
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Valid to

> **Type**: GUIElement · **Stereotype**: «date»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model

## 📝 Notes

DD is valid to(DDM.VALID_TO)

Localization code: GEN_ValidTo

Mandatory:
Create/Update: No
Receive: Yes

Editable

	
- Create: Yes. Exceptions:
- Not editable for CONTRACT.STATUS = 'APPROVED'
	
- Update: Yes. Exceptions:
- Not editable for CONTRACT.STATUS = 'APPROVED'
	
- Receive: Yes


Validations are performed only if the field is editable.

## 🔗 Connections (2)

- → Dependency: [[DDM time validity common]]
- → Dependency: [[DDM time validity to]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update/Receive DDM
