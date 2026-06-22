---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833318
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SalesroomContract

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Defines structure of data returned for contract created on specified salesroom

## 🔗 Connections (1)

- ← Dependency: [[GetSalesroomContractsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetSalesroomContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| userName | string |  |
| contractStatus | ContractStatusType |  |
