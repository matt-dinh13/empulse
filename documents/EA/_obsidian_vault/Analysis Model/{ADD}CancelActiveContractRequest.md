---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS"
domain: "Analysis Model"
element_id: 1706209
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CancelActiveContractRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS

## 📝 Notes

{ADD CLM-2790 /}
A request structure for cancellation active contract

## 🔗 Connections (2)

- → Dependency: [[CancellationReasonType]]
- ← Dependency: [[ContractOperationsWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractOperationWS - Cancel active contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| cancellationReason | CancellationReasonType |  |
