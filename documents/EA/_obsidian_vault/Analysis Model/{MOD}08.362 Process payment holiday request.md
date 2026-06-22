---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Access Rights"
domain: "Analysis Model"
element_id: 1862155
diagrams: 7
connections: 13
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.362 Process payment holiday request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Access Rights

## 📝 Notes

The use case describes processing of a request for Payment holiday service and application of the service on Contract.
The requests for payment holiday is processed either immediately after creation or as collection tool after fulfilling defined conditions. If some financial parameters of the loan are changed in time after the request creation, the request is not processed and an exception is logged.

## 🔗 Connections (11)

- ← UseCase «include»: [[08.920 Evaluate collection tool service request]]
- → Dependency: [[Pause bonus service evaluation]]
- → Dependency: [[Calculate Payment holiday financial parameters]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]
- → Dependency: [[Terminate bonus services on contract]]
- → Realisation: [[08.362 Process payment holiday request]]
- → Dependency: [[Calculate Presented Interest Rate for Loan Service Request]]
- → Dependency: [[{MOD}Determine first installment for deferral]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future
- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Custom: CBL-9520 (CLM-2918) New requirements by Payment Holidays
- Use Case: Collection tool requests evaluation
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Payment holiday processing
