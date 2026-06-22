---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/{DEL}Contract Pay-Off request"
domain: "Analysis Model"
element_id: 1749984
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}PayoffItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/{DEL}Contract Pay-Off request

## 📝 Notes

{DEL CLM-5293/}

A structure of the pay-off request for one contract.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}ContractPayoffRequest]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Consumed JMS messages - Contract Pay-Off request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| payoffDate | date |  |
| payoffReason | string |  |
