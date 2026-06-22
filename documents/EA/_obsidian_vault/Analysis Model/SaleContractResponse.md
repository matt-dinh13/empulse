---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/Contract sale"
domain: "Analysis Model"
element_id: 824721
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SaleContractResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/Contract sale

## 📝 Notes

It serves as a notification about processing of request of contract sale.

## 🔗 Connections (1)

- → Dependency: [[SaleContractResultType]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - Contract sale

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| resultCode | SaleContractResultType |  |
