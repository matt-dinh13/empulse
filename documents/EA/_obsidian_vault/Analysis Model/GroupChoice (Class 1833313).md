---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833313
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GroupChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

A choice of the contract parameter types

## 🔗 Connections (4)

- → Dependency: [[RevolvingParameter (Class 1833309)]]
- ← Association: [[ContractDetail]]
- → Dependency: [[ClosedEndParameter (Class 1833288)]]
- → Dependency: [[{ADD}SAIParameter]]

## 📊 Appears In (2 diagrams)

- Logical: ContractWS - GetContractDetail method
- Logical: ContractWS - GetContractForDisbursement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractParameterCEL | ClosedEndParameter |  |
| contractParameterREL | RevolvingParameter |  |
| contractParameterSAI | SAIParameter |  |
