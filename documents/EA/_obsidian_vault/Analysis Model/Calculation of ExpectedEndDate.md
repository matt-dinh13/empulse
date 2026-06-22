---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case"
domain: "Analysis Model"
element_id: 1878883
diagrams: 7
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Calculation of ExpectedEndDate

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case

## 📝 Notes

Expected date will be calculated as the date of the last active standard installment containing Installment Part = Principal. 

Output:

	
- ExpectedEndDate = MAX (Installment.DueDate) where
 - Installment Type = STANDARD and Active Flag = 1 and exists Installment Part = S
 - or Active Flag = 1 and exists active TariffItemType2Flag MOVE_CONTRACT_END_DATE for respective installment tariff item type
	
- system triggers the system event ExpectedEndDateUpdatedSE

## 🔗 Connections (5)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[Prepare virtual IS to change due date]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[{MOD}Update data in contract related structures]]
- ← Dependency: [[{MOD}01.191 Process installment schedule generation after disbursement]]

## 📊 Appears In (7 diagrams)

- Use Case: Change Due Date processing
- Use Case: CHDDR processing
- Use Case: CHDDR request creation - via GUI
- Use Case: Contract signing
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
- Use Case: PER request processing
