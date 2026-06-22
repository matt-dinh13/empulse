---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Termination (Pay off) installment schedule/Access Rights"
domain: "Analysis Model"
element_id: 1838776
diagrams: 13
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.120 Pay off installment schedule

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Termination (Pay off) installment schedule/Access Rights

## 📝 Notes

This activity is used to termination (pay off) contract due to violation of the contract terms. 
Termination means summarizing all future unpaid debt (installments) to a final (Termination) installment. Due date of the Termination installment can be set either to the nearest future installment, or date provided by user (or other process). The provided date has to be after, or equal to due date of the first original standard installment (i.e. termination  to a date in the past up to the due date of the first standard installment is possible).
Within Termination, there can be a fee, or penalty charged into the termination installment (if it is defined in product tariff).
Overdue installments (it means all installments before termination date) stay unchanged, but accrued income amount is calculated for each Installment Part overdue (i.e. unpaid installment part having due date <= Termination due date).

For an example of a contract installment schedule termination see Pay off (termination) example document.

After re-generating the installment schedule the system generates a system event 'REGEN_INS_SCH'.

## 🔗 Connections (14)

- → Dependency: [[Validate termination (pay-off) due date]]
- → Dependency: [[ALG_Get involved Installment part]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Dependency: [[{MOD}ALG_Pay off value calculation]]
- → Dependency: [[Calculate pay-off installment date]]
- → Realisation: [[03.120 Pay off installment schedule]]
- → Dependency «invokes»: [[03.042 Process IS printouts generating in bulk]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → UseCase «include»: [[03.140 Recalculate accrued income (UseCase 1838774)]]
- ← UseCase «include»: [[01.502 Pay-off CEL contract (UseCase 1878665)]]
- ← UseCase «include»: [[01.500 Pay-off contracts from file (UseCase 1878664)]]
- ← UseCase «include»: [[01.550 Write-off CEL contract]]

## 📊 Appears In (13 diagrams)

- Custom: Access Rights
- Custom: CBL-10294 - Write-off and pay-off
- Custom: CBL-16848 (CLM-4832) - Process RabbitMQ WriteOffRequest
- Custom: CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL
- Custom: CLM-5043 (CBL-18002) - Pay-off refactoring
- Use Case: Generating IS printouts
- Use Case: Generating IS printouts
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay-off CEL contract
- Use Case: Pay-off contracts from external system
- Use Case: Write-off CEL contract
