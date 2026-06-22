---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS"
domain: "Analysis Model"
element_id: 1706210
diagrams: 3
connections: 12
tags:
  - interface
  - analysis-model
---

# 🔶 ContractOperationsWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS

## 📝 Notes

API for operations on contracts

## 🔗 Connections (12)

- → Abstraction «trace»: [[01.271 Register contract remotely]]
- → Dependency: [[CancelSignedContractRequest]]
- → Dependency: [[RegisterContractResponse]]
- → Dependency: [[CancelSignedContractFault]]
- → Dependency: [[CancelSignedContractResponse]]
- → Dependency: [[RegisterContractRequest]]
- → Dependency: [[01.333 Cancel active contract service]]
- → Dependency: [[01.332 Cancel signed contract service (UseCase 1850503)]]
- → Dependency: [[RegisterContractFault]]
- → Dependency: [[{ADD}CancelActiveContractRequest]]
- → Dependency: [[{ADD}CancelActiveContractFault]]
- → Dependency: [[{ADD}CancelActiveContractResponse]]

## 📊 Appears In (3 diagrams)

- Logical: ContractOperationWS - Cancel active contract
- Logical: ContractOperationWS - Cancel signed contract
- Logical: ContractOperationWS - RegisterContract
