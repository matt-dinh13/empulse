---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Access Rights"
domain: "Analysis Model"
element_id: 1854299
diagrams: 15
connections: 27
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.184 Reflect change of balance

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Access Rights

## 📝 Notes

This UC describes execution of all the steps that have to be processed when the loan account balance is changed:
* a payment is paired with the contract
* an installment, an installment part or a payment is canceled

//Note: Reason why only FER services (with active request and with EnableProcessingOnBalanceChange = TRUE) OR (without active request and with AUTOMATIC_FER_PROCESSING = 1) are registered for UC 08.041 is that it is complementary to a night job UC 08.040 that only processes FER services with active request and with EnableProcessingOnBalanceChange = FALSE.

## 🔗 Connections (14)

- ← Dependency: [[{ADD}Simulate change of balance on contract]]
- → UseCase «include»: [[08.606 Process automatic CEL Reward]]
- → Realisation: [[05.184 Reflect change of balance]]
- → UseCase «include»: [[03.100 Check and process Early repayment request (UseCase 1879631)]]
- → Dependency «invokes»: [[08.240 Process Grace period automatically (UseCase 1869019)]]
- → UseCase «include»: [[05.186 Process FER without request]]
- → Dependency «call»: [[{ADD}08.002 Check contract for service evaluation on external request]]
- → UseCase «include»: [[08.001 Check contract for service evaluation (UseCase 1872538)]]
- → UseCase «include»: [[{MOD}08.280 Check and process CET request]]
- → UseCase «include»: [[03.140 Recalculate accrued income (UseCase 1838774)]]
- → Realisation: [[REQ 1_ Accrued income calculation]]
- ← UseCase «include»: [[05.030 Couple incoming payment manually]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- ← UseCase «include»: [[03.090 Remove installment manually (UseCase 1879458)]]

## 📊 Appears In (15 diagrams)

- Custom: Access Rights
- Custom: CBL-7209 (CLM-2456) FER processing queue
- Custom: PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation
- Use Case: Contract Early Termination processing
- Use Case: Contract service manipulations
- Use Case: Creating incoming payment
- Use Case: Evaluation of services on system events (Java)
- Use Case: Grace period processing
- Use Case: Installment schedule management
- Use Case: Installment Schedule management
- Use Case: Manual pairing of incoming payment with contract
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Process batch of incoming payment processing requests
- Use Case: Reflection of change of balance
- Use Case: Reflection of change of balance
