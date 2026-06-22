---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS"
domain: "Analysis Model"
element_id: 1706203
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelSignedContractFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS

## 📝 Notes

Response type structure returned in case of an error in the request processing

## 🔗 Connections (2)

- → Dependency: [[CancelContractFaultType]]
- ← Dependency: [[ContractOperationsWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractOperationWS - Cancel signed contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CancelContractFaultType |  |
