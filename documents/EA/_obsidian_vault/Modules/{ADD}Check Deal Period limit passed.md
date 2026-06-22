---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827559
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Check Deal Period limit passed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-2967 /}

This rule describes getting of number of insurance period passed from the insurance period start

Input:

	
- InsuranceContract


Output:

	
- overLimit (boolean)



	
- Set overLimit = FALSE
	
- If InsuranceContract.Billing Period Limit > 0 (NULL is taken as 0) then continue with next step, else END
	
- InsurancePeriodPassed = get count of InsuranceContract.InsurancePeriod having Status = ACTIVE
	
- If Billing Period Limit <= InsurancePeriodPassed, then set overLimit = TRUE
	
- END

## 🔗 Connections (2)

- ← Dependency: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]
- ← Dependency: [[{ADD}11.074 Finalize Elapsed and Create new Period for Prolongation (VAS)]]

## 📊 Appears In (2 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
