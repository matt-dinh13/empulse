---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/{DEL}Contract Pay-Off request"
domain: "Analysis Model"
element_id: 1749985
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ContractPayoffRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/{DEL}Contract Pay-Off request

## 📝 Notes

{DEL CLM-5293/}

A message for contract pay-off requesting. It is generated the LCS system generally.

## 🔗 Connections (1)

- → Dependency: [[{DEL}PayoffItem]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Consumed JMS messages - Contract Pay-Off request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payoffContracts | {DEL}PayoffItem |  |
| requestId | string |  |
