---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS"
domain: "Analysis Model"
element_id: 1706208
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CancelActiveContractFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS

## 📝 Notes

{ADD CLM-2790 /}
Response type structure returned in case of an error in the request processing

## 🔗 Connections (2)

- → Dependency: [[CancelContractFaultType]]
- ← Dependency: [[ContractOperationsWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractOperationWS - Cancel active contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CancelContractFaultType |  |
