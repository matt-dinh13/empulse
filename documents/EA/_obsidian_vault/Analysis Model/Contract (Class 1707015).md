---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/COMA/v12/getContract "
domain: "Analysis Model"
element_id: 1707015
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/COMA/v12/getContract 

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (7)

- → Usage: [[ContractProduct]]
- → Usage: [[ContractDocument (Class 1707013)]]
- → Usage: [[ContractCommodity]]
- → Usage: [[ContractService]]
- ← Dependency: [[{ADD}getContract]]
- → Usage: [[ContractCustomer]]
- ← Dependency: [[GetContractResponse]]

## 📊 Appears In (1 diagrams)

- Logical: getContract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| status | string |  |
| customer | ContractCustomer |  |
| product | contractProduct |  |
| document | ContractDocument |  |
| type | string |  |
| paymentMode | string |  |
| services | ContractService |  |
| commodities | ContractCommodity |  |
