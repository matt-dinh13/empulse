---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818372
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract is signed

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Checkbox for verification, that contract is signed (by both - customer as well as sales agent).

Enabled:

	
- If materials are prepared.


	
- If Commodity.Validated = TRUE (only if validation for commodity is required (combination of Commodity.Producer and Contract.Product exists in entity Commodity_Validation)).


Hidden if one or more of the following conditions are met:

	
- For paperless salesroom
	
- If the contract is to be co-financed by some joint lending partner (i.e. some Contract->Relationship.Role_Type='JOINT_LENDER' exists) and manual signing of joint lending contracts is disabled (i.e. global parameter jointLending.manualContractSigningDisabled = TRUE).


Localization code:
CON_IsSigned

## 🔗 Connections (1)

- → Dependency: [[Paperless salesroom]]

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
