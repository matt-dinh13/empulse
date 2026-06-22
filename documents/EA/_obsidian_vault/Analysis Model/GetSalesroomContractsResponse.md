---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833030
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetSalesroomContractsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Structure of return message

## 🔗 Connections (3)

- → Dependency: [[SalesroomContract]]
- → Generalization «XSDextension»: [[PageableResponse]]
- ← Dependency «use»: [[(MOD)ContractWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetSalesroomContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contract | SalesroomContract |  |
