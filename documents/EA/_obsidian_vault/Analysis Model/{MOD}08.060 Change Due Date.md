---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Access Rights"
domain: "Analysis Model"
element_id: 1611135
diagrams: 5
connections: 23
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.060 Change Due Date

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Access Rights

## 📝 Notes

Use case realizes service Change of Due Date and is intended for 
- entering of new required due date of the next installment
- change of installment schedule accordingly to the new due date 

After re-generating the installment schedule the system generates a system event RegeneratedInstallmentScheduleSE.

## 🔗 Connections (21)

- → Dependency: [[Check if Installment Schedule is Closed]]
- → Dependency: [[{MOD}Generate installment schedule algorithm]]
- → Realisation: [[Requirement1 (Boundary 1611139)]]
- → Dependency: [[Allow Change of Due Day]]
- → Dependency: [[Annuity calculation]]
- → Realisation: [[REQ#3 Contract business events - refactoring of existing use cases (from ContractModification)]]
- → Dependency: [[Contract - Financial parameters]]
- → Dependency: [[Create business event]]
- → Realisation: [[REQ#1 Generating an system event after (re-) generating an installment schedule]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Dependency: [[{MOD}Calculation of Loan Service parameters]]
- → Dependency: [[Decisive dates for New Due Date]]
- → Dependency: [[Maximal Version of Installment Schedule]]
- → Realisation: [[REQ3_ Change contract term]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → Dependency: [[Calculation of ExpectedEndDate]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]
- → Realisation: [[08.060 Change Due Date]]
- → Dependency: [[Change Due Date]]
- ← Dependency: [[Services]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: Change Due Date
- Custom: Tab-Services
- Use Case: Change Due Date processing
- Use Case: OVERVIEW - Installment Schedule
