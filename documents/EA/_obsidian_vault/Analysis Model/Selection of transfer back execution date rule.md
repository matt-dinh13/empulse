---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/User Interface/Transfer installment plan back"
domain: "Analysis Model"
element_id: 1019144
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Selection of transfer back execution date rule

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/User Interface/Transfer installment plan back

## 📝 Notes

The rule determines range of possible dates for transfer installment plan back operation
Input:

	
- selected Installment plan


Take the Last Installment Due Date from Due Date of the last standard active installment from input
Output:

	
- MinimalDate = the current date
	
- MaximalDate = Last Installment Due Date - 1day

## 🔗 Connections (2)

- ← Dependency: [[Execution date]]
- ← Dependency: [[Validation rules for Transfer installment plan back]]

## 📊 Appears In (2 diagrams)

- Custom: Transfer installment plan back
- Custom: Validation rules
