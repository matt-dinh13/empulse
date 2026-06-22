---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Access Rights"
domain: "Analysis Model"
element_id: 1869023
diagrams: 5
connections: 19
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.220 Check and process Grace period

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Access Rights

## 📝 Notes

Use case is intended for evaluation of conditions for granting and subsequent processing of Grace period.  
Use case is invoked from job for grace period batch processing.

Grace period can be granted to every due date of standard installment before end of grace period, if the sum of payments assigned to contract before this due date allows full repayment under grace period conditions.
Grace period can be processed until the contract is finished, i.e. if some payment with deposit date <= end of grace period is paired with contract after the end of grace period and all conditions for granting are then fulfilled, grace period is granted to the date of the regular installment following the deposit date (in the past).

## 🔗 Connections (18)

- ← Dependency: [[ER processing]]
- ← UseCase «include»: [[01.730 Finish contract manually (UseCase 1852803)]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]
- → Dependency: [[Grace period conditions]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → Dependency: [[Annuity calculation]]
- → Dependency: [[Create business event]]
- → UseCase «include»: [[03.030 Regenerate installment schedule (UseCase 1879435)]]
- → Realisation: [[REQ7 - Check and process Grace period]]
- → UseCase «include»: [[{MOD} 03.110 Perform early repayment installment schedule]]
- → Dependency: [[Terminate Contract Service after its processing]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]
- → Dependency: [[Notification about early repayment under Grace period]]
- → Realisation: [[08.220 Check and process Grace period]]
- → Realisation: [[REQ#3 Contract business events - refactoring of existing use cases (from ContractModification)]]
- ← UseCase «include»: [[08.240 Process Grace period automatically (UseCase 1869019)]]
- → UseCase «include»: [[{MOD}08.222 Calculate Grace period amount]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Use Case: Contract finishing manually
- Use Case: Grace period processing
- Use Case: OVERVIEW - Installment Schedule
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
