---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights"
domain: "Analysis Model"
element_id: 1862196
diagrams: 5
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.406 Process request for loan restructuring

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights

## 📝 Notes

The use case describes performing restructuring of a loan when a request is created and all conditions for that are fulfilled. The requests for loan restructuring is processed as collection tool after fulfilling defined conditions (i.e. registration needed documents). If some financial parameters of the loan are changed in time after the request creation, the request is not processed and an exception is logged.

## 🔗 Connections (9)

- ← UseCase «include»: [[08.920 Evaluate collection tool service request]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → Dependency: [[Pause bonus service evaluation]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Dependency: [[Calculate financial parameters for loan restructuring]]
- → Dependency: [[Calculate Presented Interest Rate for Loan Service Request]]
- → Dependency: [[Terminate bonus services on contract]]
- → Dependency: [[08.406 Process request for loan restructuring]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Use Case: Collection tool requests evaluation
- Use Case: Loan restructuring processing
- Use Case: OVERVIEW - Installment Schedule
