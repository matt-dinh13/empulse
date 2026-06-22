---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS"
domain: "Analysis Model"
element_id: 1861852
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Fee

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS

## 📝 Notes

Entity holds information about fee charged to contract.

## 🔗 Connections (1)

- → Aggregation: [[GetFeesResponse]]

## 📊 Appears In (1 diagrams)

- Logical: TransWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| feeID | string |  |
| dateFee | date |  |
| amount | MoneyType |  |
| feeTypeName | string |  |
| feeTypeCode | string |  |
| numInstallment | int |  |
| valuePaid | MoneyType |  |
| datePaid | date |  |
