---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout"
domain: "Requirements Model"
element_id: 1762068
diagrams: 4
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Determine first installment for loan restructuring

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout

## 📝 Notes

This rule describes obtaining the first standard installment from which the loan restructuring starts. In case when contract has overdue installments (i.e. unpaid or partially paid with due date in the past), the oldest installment is taken for processing. In case of no overdue, the first future installment is taken even if this installment is already repaid. 

Input:

	
- Loan Restructuring Service (LRS) related to Contract Service of the processed Contract


Output:

	
- InstallmentToRestructuring


Steps:

	
- Get the first not fully paid Installment where Installment.Type = STANDARD and Installment.Active Flag = 1 and sum (Installment Part.Paid Amount) < sum(Installment Part.Amount)
	
- If Installment.Due Date < current date (overdue installment exists) then set InstallmentToRestructuring = Installment and scenario ends
	
- If Installment.Due Date >= current date then get nearest future Installment where Installment.Type = STANDARD and Installment.Active Flag = 1 and Installment.Due Date >= current date + LRS.Min Days Before Installment
- If an installment is found, set InstallmentToRestructuring = Installment found and scenario ends
- If no installment exists, set InstallmentToRestructuring =NULL and scenario ends

## 🔗 Connections (3)

- ← Dependency: [[{MOD}08.403 Create request for loan restructuring common]]
- ← Dependency: [[08.404 Confirm offer for loan restructuring (UseCase 1862186)]]
- ← Dependency: [[{MOD}08.405 Confirm offer for loan restructuring common]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-11449 (CSI-314) Loan restructuring printout
- Custom: IS-21 (CBL-6) Restructuring - Phase 1
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
