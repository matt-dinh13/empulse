---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538489
diagrams: 2
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Joint-lending partner

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

{ADD PAYM-1488 CBL-3570 /}
Visible only if global parameter {DEL TIN-10214} QueryJFS {/DEL}{ADD TIN-10214}AutomaticAssignJFSEscrowAccounts{/ADD} = TRUE.

Code of joint-lending partner from contract.
Due to performance reasons, the value is stored/copied directly on Outgoing payment.

List contains the following values:

	
- default null value    ...i.e. this condition is not taken into account
	
- "No partner"  
...i.e. only outgoing payments without joint-lending partner
...loc. code = PAY_OPsearchNoJointLendingPartnerCriteria
	
- {DEL TIN-10214}all values from enum Credit Owner {/DEL}
	
- {ADD TIN-10214}all JFS Partner Code from JFC Partner Code To Bank Account enum{/ADD}



Localization code: 
PAY_OPsearchJointLendingPartnerCriteria

## 📊 Appears In (2 diagrams)

- Custom: Search criteria - STANDARD
- Custom: Search criteria - UNPAID
