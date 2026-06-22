---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-12580 - Remove dependency on Debt Catalogue tables/CLM-4189 - Remove dependency on Debt Catalogue tables - COMA"
domain: "Modules"
element_id: 1798575
diagrams: 2
connections: 4
tags:
  - object
  - modules
---

# 🔸 {MOD}List of contracts

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-12580 - Remove dependency on Debt Catalogue tables/CLM-4189 - Remove dependency on Debt Catalogue tables - COMA

## 📝 Notes

{MOD CLM-3703}
A list of contracts based on use case Show tab List of contracts. Contract data are taken from API response object  GetContractsRespons.

Default order by: Created when desc

## 🔗 Connections (4)

- → InformationFlow: [[{ADD}getDebtCatalogue]]
- → InformationFlow: [[{ADD}getDebtCatalogue]]
- → Association «navigate»: [[BSL (Actor 1879376)]]
- ← Association «navigate»: [[BSL (Actor 1879376)]]

## 📊 Appears In (2 diagrams)

- Custom: CLM-4189 - Remove dependency on Debt Catalogue tables - COMA
- Custom: List of contracts - Default

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created when | date |  |
| Contract number | code |  |
| Status | enumeration |  |
| Product | enumeration |  |
| Amount | Financial Amount |  |
| Credit limit | Financial Amount |  |
| Total debt | Financial Amount |  |
| Total overdue debt | Financial Amount |  |
| Repayment channel | enumeration |  |
| Contract detail | icon |  |
| Installment schedule | icon |  |
