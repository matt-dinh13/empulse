---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833035
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetSalesroomContractsRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Structure of input message

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[PageableRequest]]
- ← Dependency «use»: [[(MOD)ContractWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetSalesroomContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | number |  |
| userName | string |  |
| contractStatus | ContractStatusType |  |
| createdFrom | date |  |
| createdTo | date |  |
