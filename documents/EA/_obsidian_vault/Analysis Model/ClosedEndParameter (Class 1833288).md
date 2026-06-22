---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833288
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ClosedEndParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Parameters specific for CEL contract types

## 🔗 Connections (1)

- ← Dependency: [[GroupChoice (Class 1833313)]]

## 📊 Appears In (2 diagrams)

- Logical: ContractWS - GetContractDetail method
- Logical: ContractWS - GetContractForDisbursement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstInstallmentDueDate | date |  |
| numberOfInstallments | int |  |
| lastInstallmentDueDate | date |  |
