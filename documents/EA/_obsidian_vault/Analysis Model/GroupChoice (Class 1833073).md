---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8"
domain: "Analysis Model"
element_id: 1833073
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GroupChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8

## 📝 Notes

A choice of the contract parameter types

## 🔗 Connections (3)

- → Dependency: [[RevolvingParameter (Class 1833080)]]
- ← Association: [[ContractDetail (Class 1833074)]]
- → Dependency: [[ClosedEndParameter (Class 1833070)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS_v8

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractParameterCEL | ClosedEndParameter |  |
| contractParameterREL | RevolvingParameter |  |
| contractParameterSAI | SAIParameter |  |
