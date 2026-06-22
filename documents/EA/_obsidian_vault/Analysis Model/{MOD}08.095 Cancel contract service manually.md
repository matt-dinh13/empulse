---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Access Rights"
domain: "Analysis Model"
element_id: 1879696
diagrams: 12
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.095 Cancel contract service manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Access Rights

## 📝 Notes

This use case presents a functionality for manual cancellation of contract service.
The cancellation of a service related to a contract means annulment of the service as if it had never been used on the contract.
In case of a fee is charged in relation to the service and contract installment schedule is still active, then Financial Parameters of the contract are recalculated (i.e. the service fee is removed) and Contract installment schedule is regenerated.

{MOD CSI-1179 /}
Common part of the functionality was moved to new UC 08.096 Cancel contract service common.

## 🔗 Connections (3)

- ← Dependency: [[Services]]
- ← Dependency: [[Service cancellation]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (12 diagrams)

- Custom: Access Rights
- Custom: CBL-12505 (CSI-1179) Service bundling support for cancellation and termination
- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: Contract - Service tab - Cancel service action
- Custom: Service cancellation
- Custom: Tab-Services
- Use Case: CLM-6072 Cancel/Terminate Service update for SAI
- Use Case: ContractServiceCanceledNotification message variant
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: Service - Contract Service management via UI
