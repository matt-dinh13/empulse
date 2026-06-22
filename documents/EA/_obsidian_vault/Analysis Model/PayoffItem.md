---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/{DEL CLM-4390 /}ContractStatusWS"
domain: "Analysis Model"
element_id: 1635627
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PayoffItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/{DEL CLM-4390 /}ContractStatusWS

## 📝 Notes

Defines structure of pay-off request for one particular contract

## 🔗 Connections (1)

- → Aggregation: [[CloseInstallmentRequest]]

## 📊 Appears In (1 diagrams)

- Logical: ContractStatusWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| usePayoffDateToClose | boolean | FALSE |
| Contract Number | string |  |
| Payoff Date | date |  |
| Payoff Reason | string |  |
