---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833283
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}SAIParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

{ADD CLM-1932 /}
Parameters specific for SAI contract types

## 🔗 Connections (1)

- ← Dependency: [[GroupChoice (Class 1833313)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetContractDetail method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstInstallmentDueDate | date |  |
| lastInstallmentDueDate | date |  |
| numberOfInstallments | int |  |
