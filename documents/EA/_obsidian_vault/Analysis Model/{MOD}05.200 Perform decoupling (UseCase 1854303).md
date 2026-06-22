---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Access Rights"
domain: "Analysis Model"
element_id: 1854303
diagrams: 23
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.200 Perform decoupling

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Access Rights

## 📝 Notes

This use case is called from other use cases to perform decoupling between payments and installment parts. Status paired and paired contract on incoming payments remain.
After that all the system generates a system event IncomingPaymentPairingChangedCELSE.

## 🔗 Connections (21)

- ← UseCase «include»: [[{ADD}Move installment schedule to a specific version]]
- ← UseCase «include»: [[{MOD}08.060 Change Due Date]]
- ← UseCase «include»: [[{MOD}03.120 Pay off installment schedule]]
- → UseCase «include»: [[03.095 Remove installment (UseCase 1879447)]]
- → Realisation: [[Requirement1 - Date of payment (un)pairing]]
- → Realisation: [[05.200 Perform decoupling]]
- → Dependency: [[Special incoming payments]]
- → Dependency: [[Incoming payment pairing is not locked]]
- → Realisation: [[REQ#2 Message INSTALPAY124 (closed-end loan)]]
- ← UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- ← UseCase «include»: [[05.045 Cancel incoming payment (UseCase 1855717)]]
- ← UseCase «include»: [[{MOD}08.362 Process payment holiday request]]
- ← UseCase «include»: [[{MOD}08.406 Process request for loan restructuring]]
- ← UseCase «include»: [[08.063 Process request for change due date (UseCase 1862206)]]
- ← UseCase «include»: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← UseCase «include»: [[{MOD} 03.110 Perform early repayment installment schedule]]
- ← UseCase «include»: [[{MOD}08.121 Terminate contract insurance common]]
- ← UseCase «include»: [[03.090 Remove installment manually (UseCase 1879458)]]
- ← UseCase «include»: [[{MOD}03.091 Remove installment by external system]]
- ← UseCase «include»: [[{MOD}03.080 Add installment]]
- ← Dependency: [[01.486 Calculate debt full info]]

## 📊 Appears In (23 diagrams)

- Custom: Access Rights
- Custom: Debt full info calculations
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Use Case: {DEL}Creating Refunds automatically
- Use Case: Cancellation incoming payment manually
- Use Case: Change Due Date processing
- Use Case: CHDDR processing
- Use Case: Common for Early repayment Request and Processing 
- Use Case: Contract insurance termination
- Use Case: Installment schedule management
- Use Case: Installment Schedule management
- Use Case: Installment schedule manipulations
- Use Case: Loan restructuring processing
- Use Case: Manual unpairing incoming payment from contract
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
- Use Case: Payment holiday processing
- Use Case: PER request processing
- Use Case: Process batch of incoming payment processing requests
- Use Case: Termination of Insurance contract options
