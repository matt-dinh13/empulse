---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818393
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract number

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Default value: //Checkbox

	
- TRUE


LDM source: //Label
Contract.Contract_Code

Unchecked (i.e. set to FALSE) and hidden if the contract is to be co-financed by some joint lending partner (i.e. some Contract->Relationship.Role_Type='JOINT_LENDER' exists) and manual signing of joint lending contracts is disabled (i.e. global parameter jointLending.manualContractSigningDisabled = TRUE).

Localization code:
CON_Number

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
