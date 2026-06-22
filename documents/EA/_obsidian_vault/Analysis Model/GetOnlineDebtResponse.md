---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/OnlineDebtWS"
domain: "Analysis Model"
element_id: 1593219
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetOnlineDebtResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/OnlineDebtWS

## 📝 Notes

Structure for definition of response with information about debt catalogue of selected contract.

## 🔗 Connections (2)

- → Dependency: [[DebtCatalogDto]]
- ← Dependency «use»: [[OnlineDebtWS (Interface 1593216)]]

## 📊 Appears In (2 diagrams)

- Logical: GetOnlineDebtResponse - Mapping to DebtCatalog
- Logical: OnlineDebtWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| debtCatalog | DebtCatalogDto |  |
