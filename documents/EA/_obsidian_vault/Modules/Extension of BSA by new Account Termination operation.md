---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-22978 (CSI-3314) Account termination"
domain: "Modules"
element_id: 1814501
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Extension of BSA by new Account Termination operation 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-22978 (CSI-3314) Account termination

## 📝 Notes

Changes in the Logical model:
- new operation type ACCOUNT_TERMINATION

Changes in the UI:
- new form for creation of Account termination

Changes in the UC and Access rights:
- new 08.751 Create Account Termination bulk operation
- new 08.752 Validate Account Termination bulk operation
- new 08.753 Execute Account Termination bulk operation
- update of common UC 08.711 Execute bulk operation to support Account Termination

New configuration for predefined values FromTime and ToTime per action type.
If these values are defined then system preselect these values and disable editing for Execute and Resume dialog.
For ACCOUNT_TERMINATION should be set:
- FromTime = 22:00 local time
- ToTime = 24:00 local time

## 📊 Appears In (1 diagrams)

- Custom: CBL-22978 (CSI-3314) Account termination
