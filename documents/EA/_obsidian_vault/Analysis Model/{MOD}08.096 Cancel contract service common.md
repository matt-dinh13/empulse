---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Access Rights"
domain: "Analysis Model"
element_id: 1879682
diagrams: 11
connections: 1
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.096 Cancel contract service common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Access Rights

## 📝 Notes

This use case presents a common functionality for cancellation of contract service.
The cancellation of a service related to a contract means annulment of the service as if it had never been used on the contract.
In case of a fee is charged in relation to the service and contract installment schedule is still active, then Financial Parameters of the contract are recalculated (i.e. the service fee is removed) and Contract installment schedule is regenerated.

Functionality was excluded from UC 08.095 Cancel contract service manually

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: CBL-12505 (CSI-1179) Service bundling support for cancellation and termination
- Use Case: CLM-6072 Cancel/Terminate Service update for SAI
- Use Case: ContractServiceCanceledNotification message variant
- Use Case: CSI-2287 Replace LoanServiceRequest sending for Operation Status change
- Use Case: CSI-2669 Cancel LoanService on Account Closure notification
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: Processing Account Closure notifications
- Use Case: Service - Contract Service management via API
- Use Case: Service - Contract Service management via UI
