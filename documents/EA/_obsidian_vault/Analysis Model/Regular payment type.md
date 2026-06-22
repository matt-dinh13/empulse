---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model"
domain: "Analysis Model"
element_id: 1752590
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Regular payment type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model

## 📝 Notes

Type of regular payments for the direct debit mandate.

Other:

	
- Enumeration values are taken from the Regular Payment Type.
	
- Visible only if the contract is based on a REL product type (i.e. Contract.Contract_Type = 'REL').


LDM:

	
- DDM.Regular_Payment_Type->Regular_Payment_Type.Name


Localization code:
DDM_RegularPaymentType

## 🔗 Connections (1)

- → Dependency: [[DDM regular payment type]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update/Receive DDM
