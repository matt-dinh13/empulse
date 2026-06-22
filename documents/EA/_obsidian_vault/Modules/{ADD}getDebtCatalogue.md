---
type: Class
stereotype: "resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-12580 - Remove dependency on Debt Catalogue tables/CLM-4189 - Remove dependency on Debt Catalogue tables - COMA"
domain: "Modules"
element_id: 1800138
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}getDebtCatalogue

> **Type**: Class · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-12580 - Remove dependency on Debt Catalogue tables/CLM-4189 - Remove dependency on Debt Catalogue tables - COMA

## 📝 Notes

{ADD CLM-4189}
https://dc.ph00a1.cz.infra/swagger-ui/index.html#/Debt%20catalogue/getDebtCatalogueUsingGET

## 🔗 Connections (4)

- ← InformationFlow: [[{MOD}List of contracts]]
- ← InformationFlow: [[{MOD}List of contracts]]
- → InformationFlow: [[Total unpaid debt]]
- → InformationFlow: [[Total overdue debt (GUIElement 1800136)]]

## 📊 Appears In (2 diagrams)

- Custom: CLM-4189 - Remove dependency on Debt Catalogue tables - COMA
- Logical: getDebtCatalogue
