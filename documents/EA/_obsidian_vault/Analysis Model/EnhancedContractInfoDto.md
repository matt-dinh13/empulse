---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833306
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 EnhancedContractInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Extension of the ContractInfoDto

## 🔗 Connections (3)

- ← Dependency: [[GetContractsByCUIDResponse]]
- → Dependency: [[MoneyDto (Class 1833302)]]
- ← Generalization «XSDextension»: [[ContractInfoDto]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetContracts by CUID 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractType | string |  |
| lastInstallmentDueDate | date |  |
| totalMonthlyPayment | MoneyDto |  |
