---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881177
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ContractCommodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Commodities credited by the contract 
The commodity data is obtained as response of calling Getting Commodity data rule with array of Contract Commodity.Commodity Id related to the Contract

NOTIFICATION: The commodity data is not filled in when the ContractFullInfoRequest is sent in the ContractFullInfoBulk message.
Exception is commodityExchangeId, which is always filled.

## 🔗 Connections (1)

- ← Dependency: [[ContractFullInfo (Class 1881167)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityTypeCode | string |  |
| producer | string |  |
| price | MoneyDto |  |
| serialNumber | string |  |
| modelNumber | string |  |
| engineNumber | string |  |
| licencePlateNumber | string |  |
| colorCode | string |  |
| commodityExchangeId | string |  |
