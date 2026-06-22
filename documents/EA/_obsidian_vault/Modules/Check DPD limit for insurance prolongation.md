---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract"
domain: "Modules"
element_id: 1876183
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Check DPD limit for insurance prolongation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract

## 📝 Notes

The rule describes steps for insurance prolongation validation based on past due
Input:

	
- ContractCode
	
- NextInsurancePeriodStart


	
- NextInsurancePeriodEnd
	
- {ADD CSI-1090}firstOverdueInstallmentDueDate (optional){/ADD}


Output:

	
- ProlongationResult (structure)
- stopped (Boolean)
- renewed (Boolen)



	
- {ADD CSI-1090}If firstOverdueInstallmentDueDate is NULL, then{/ADD}
System finds out the current debt on contract by calling  ...debt-catalogue/getDebtCatalogue/<ContractCode>
If returned firstOverdueInstallmentDueDate is null set it with the current date -- no overdue debt is expected
	
- If (current date - firstOverdueInstallmentDueDate) < InsuranceProlongationMaxDPD (system property), -- system evaluates DPD limit for insurance (limit OK)
A if a record in the Insurance Contract -> Insurance Prolongation Result with Archived = 0 exists then system:
  - update Archived = 1 in the Insurance Prolongation Result record -- record is deactivated
B. System sets ProlongationResult.renewed = TRUE and returns to calling UC
	
- System sets Insurance Contract -> Insurance Prolongation Result -- insurance prolongation failed due to DPD limit exceeded
- Result Code = MSG_INS_DPDOverLimit (e.g. "Contract DPD is over limit")
- Next Check Date = NextInsurancePeriodEnd
- Archived = 0
	
- System creates a Business Event according to the rule Create business event with the following parameters:
- Contract = processed Contract
- BusinessEventType = INSURANCE_PROLONGATION_FAILED_ON_DPD
- ModificationBy = currently logged user
- TimeOfModification = current date and time
	
- System generate InsuranceProlongationFailed notification
	
- Set ProlongationResult.stopped = TRUE and returns to calling UC

## 🔗 Connections (3)

- ← Dependency: [[01.739 Process Account Balance Change EOM notification]]
- → Dependency: [[Create business event]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (3 diagrams)

- Custom: Requirements: CBL-11727 (CSI-376) CSI Modularization - Insurance Contract
- Use Case: Insurance based on AccountBalanceChange EOM event
- Use Case: Insurance prolongation
