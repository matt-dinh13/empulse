---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/Common"
domain: "Analysis Model"
element_id: 1752535
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Limit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/Common

## 📝 Notes

Transaction limit of the direct debit mandate.

LDM:
Contract->DDM.Limit

Other:

	
- Editability:
   - Create DDM - editable
   - Update DDM - non-editable for contracts in status Active (Contract.Status = 'A'), otherwise editable 
   - Receive DDM - editable
	
- Obligation:
   - Create DDM - mandatory
   - Update DDM - mandatory
   - Receive DDM - mandatory
	
- Pre-filling:
   - Create DDM - see the 01.420 Create DDM on the contract use cases for more details
   - Update DDM - stored value (see the LDM section)
   - Receive DDM - stored value (see the LDM section)
	
- Applicable validations are performed only in case the field is editable.


Localization code:
GEN_Limit

## 🔗 Connections (1)

- ← Generalization: [[Limit (GUIElement 1869639)]]

## 📊 Appears In (1 diagrams)

- Custom: Common - DDM Header
