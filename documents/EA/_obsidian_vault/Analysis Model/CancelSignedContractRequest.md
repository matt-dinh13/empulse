---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS"
domain: "Analysis Model"
element_id: 1706199
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelSignedContractRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS

## 📝 Notes

A request structure for cancellation signed contract

## 🔗 Connections (2)

- → Dependency: [[CancellationReasonType]]
- ← Dependency: [[ContractOperationsWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractOperationWS - Cancel signed contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| cancellationReason | CancellationReasonType |  |
