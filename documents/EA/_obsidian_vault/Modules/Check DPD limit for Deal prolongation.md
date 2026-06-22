---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827558
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check DPD limit for Deal prolongation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

The rule describes steps for insurance prolongation validation based on past due
Input:

	
- ContractCode
	
- NextInsurancePeriodStart


	
- NextInsurancePeriodEnd
	
- firstOverdueInstallmentDueDate (optional)


Output:

	
- DPDProlongationResult (structure)
.stopped (Boolean)
.renewed (Boolen)



	
- Set DPDProlongationResult (structure)
- stopped (Boolean) = FALSE
- renewed (Boolen) = FALSE
	
- If firstOverdueInstallmentDueDate is NULL, then set it with the current date -- no overdue debt is expected
	
- If (current date - firstOverdueInstallmentDueDate) < InsuranceProlongationMaxDPD (system property), -- system evaluates DPD limit for insurance (limit OK)
A if a record in the Insurance Contract -> Insurance Prolongation Result with Archived = 0 exists then system:
  - update Archived = 1 in the Insurance Prolongation Result record and sets DPDProlongationResult.renewed = TRUE -- record is deactivated
B. System returns to calling UC
	
- System sets Insurance Contract -> Insurance Prolongation Result -- insurance prolongation failed due to DPD limit exceeded
- Result Code = LOAN_DPD_OVER_LIMIT (e.g. "Contract DPD is over limit")
- Next Check Date = NextInsurancePeriodEnd
- Archived = 0
	
- {ADD CSI-3088}System generate InsuranceProlongationFailed notification{/ADD}
	
- Set DPDProlongationResult.stopped = TRUE and returns to calling UC

## 🔗 Connections (1)

- ← Dependency: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]

## 📊 Appears In (2 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
