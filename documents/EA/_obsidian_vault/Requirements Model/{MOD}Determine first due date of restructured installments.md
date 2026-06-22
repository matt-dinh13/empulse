---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout"
domain: "Requirements Model"
element_id: 1762067
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Determine first due date of restructured installments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout

## 📝 Notes

This rule describes obtaining the first standard installment due date from which restructured installment schedule starts. Generally it is the first future due date of standard installment.

Input:

	
- Loan Restructuring Service (LRS) related to Contract Service of the processed Contract


Output:

	
- FirstDueDate
	
- {ADD CSI-314}FirstRestructuredInstallment{/ADD}


Get nearest future Installment where Installment.Type = STANDARD and Installment.Active Flag = 1 and Installment.Due Date >= current date + LRS.Min Days Before Installment {ADD CSI-314}and set it as FirstRestructuredInstallment{/ADD}
- If an installment is found, set FirstDueDate = Installment.Due Date found and scenario ends
- If no installment exists, set FirstDueDate =NULL and scenario ends

## 🔗 Connections (2)

- ← Dependency: [[Calculate financial parameters for loan restructuring]]
- ← Dependency: [[{MOD}08.403 Create request for loan restructuring common]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-11449 (CSI-314) Loan restructuring printout
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
