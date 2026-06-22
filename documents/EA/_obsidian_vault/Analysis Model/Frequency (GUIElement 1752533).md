---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/Common"
domain: "Analysis Model"
element_id: 1752533
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Frequency

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/Common

## 📝 Notes

Frequency of the direct debit mandate's regular payments.

LDM:
Contract->DDM.Frequency_Type

Other:

	
- Enumeration values are taken from the DDM Frequency Type (ordered by .Name ASC).
	
- If there is only one possible frequency available, then its value is automatically pre-selected and the field is disabled (regardless the editability rules described below).
	
- Editability:
   - Create DDM - non-editable
   - Update DDM - editable
   - Receive DDM - non-editable
	
- Obligation:
   - Create DDM - optional
   - Update DDM - optional
   - Receive DDM - mandatory


Localization code:
GEN_Frequency

## 🔗 Connections (4)

- ← Generalization: [[Frequency (GUIElement 1688537)]]
- ← Generalization: [[Frequency (GUIElement 1688543)]]
- → Dependency: [[DDM Frequency Type]]
- ← Generalization: [[Frequency (GUIElement 1869645)]]

## 📊 Appears In (1 diagrams)

- Custom: Common - DDM Header
