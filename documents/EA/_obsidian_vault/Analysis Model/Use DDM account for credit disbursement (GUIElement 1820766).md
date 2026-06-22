---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF"
domain: "Analysis Model"
element_id: 1820766
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Use DDM account for credit disbursement

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF

## 📝 Notes

Indication, whether the identical bank account as specified on the direct debit mandate shall be automatically used also for the money disbursement or not.

Visible only if all the following conditions are met:

	
- Selected Repayment method is Direct debit ('DD').
	
- General bank account ('GBA') is among the allowed disbursement methods for the respective application (determined by the rule Get allowed disbursement methods for application).


Other:

	
- When this checkbox is checked, the Way of disbursement section is collapsed and the Disbursement method is automatically set to General bank account ('GBA') and the attributes of the disbursement payment channel's bank account are copied from the DDM bank account upon submitting the application form.


LDM:
Temporary_Application.Use_DDM_Account_For_Disbursement

Localization code:
APP_UseDDAccountForDisbursement

## 🔗 Connections (4)

- ← Generalization: [[Use DDM account for credit disbursement]]
- ← Generalization: [[Use DDM account for credit disbursement (GUIElement 1820752)]]
- → Dependency: [[Get allowed disbursement methods for application]]
- → Dependency: [[Use the same bank account for Disbursement channel]]

## 📊 Appears In (1 diagrams)

- Custom: Way of repayment - product AF
