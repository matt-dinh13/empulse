---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Access Rights"
domain: "Analysis Model"
element_id: 1869010
diagrams: 5
connections: 22
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.210 Check and process Gift payment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Access Rights

## 📝 Notes

Use case is intended for evaluation of conditions for granting and subsequent processing of Gift payment.  
Use case is invoked from job for gift payment batch processing.

Gift payment can be processed until the contract is finished, i.e. if some payment with payment date before the regular gift payment date is paired with contract after the gift payment date and all conditions for granting are then fulfilled, gift payment is granted to the past  gift payment date. 
After re-generating the installment schedule the system generates a system event 'REGEN_INS_SCH'.

## 🔗 Connections (20)

- ← UseCase «include»: [[01.730 Finish contract manually (UseCase 1852803)]]
- → Realisation: [[08.210 Check and process Gift payment]]
- → UseCase «include»: [[05.182 Pair payment with contract (UseCase 1854310)]]
- → Dependency: [[Deactivate contract early termination requests]]
- → Dependency: [[Maximal Version of Installment Schedule]]
- → UseCase «include»: [[03.030 Regenerate installment schedule (UseCase 1879435)]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[03.095 Remove installment (UseCase 1879447)]]
- → Dependency: [[Notification about granting of Gift payment]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → Realisation: [[Enable to pass a due date of gift payment to GP processing and enforcing of GP granting]]
- → Dependency: [[XIRR algorithm]]
- → Dependency: [[Create incoming payment rule (Requirement 1854275)]]
- → Dependency: [[Terminate Contract Service after its processing]]
- → Dependency: [[Create business event]]
- → Dependency: [[Gift payment conditions]]
- → Dependency: [[Annuity calculation]]
- ← UseCase «include»: [[08.230 Process Gift payment automatically (UseCase 1869006)]]
- ← UseCase «include»: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Use Case: Contract finishing manually
- Use Case: Full early repayment processing
- Use Case: Gift payment processing
- Use Case: OVERVIEW - Installment Schedule
