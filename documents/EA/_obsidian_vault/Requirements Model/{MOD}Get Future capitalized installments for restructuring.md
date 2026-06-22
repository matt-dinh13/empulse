---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout"
domain: "Requirements Model"
element_id: 1762064
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Get Future capitalized installments for restructuring

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout

## 📝 Notes

This rule gets all the active currently due and future installments to be included in principal for loan restructuring

Input:

	
- contract

Output:

	
- restructured extra amount total (restructured amount without overdue and total principal)

{ADD CSI-314} 

	
- restructured extra amount principal


	
- restructured extra amount interest
	
- restructured extra amount other

{/ADD}

 

	
- System gets due and future instalments part amount respectively to LSR.First Due Date Restructured (having instalment.dueDate >= LSR.First Due Date Restructured) by following rules to the InstallmentPartsToBeRestructured
	
- System gets all Installment Part Types and its Tariff Item Types to be involved in calculation (IIPT) using ALG_Get involved Installment part algorithm with recalculationReason ('LR') and adds the list of these installment parts in the list InstallmentPartsToBeRestructured
	
- If no instalment is found, no exception is returned and system continues by following step
	
- System sums InstallmentPart.Amount from the InstallmentPartsToBeRestructured {ADD CSI-314}per each installment part (Principal, Interest, all other){/ADD} and return also total sum as restructured extra amount

## 🔗 Connections (2)

- ← Dependency: [[Calculate financial parameters for loan restructuring]]
- ← Dependency: [[{MOD}Total amount to restructuring calculation]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-11449 (CSI-314) Loan restructuring printout
