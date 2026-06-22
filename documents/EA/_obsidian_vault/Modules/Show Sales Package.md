---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792918
diagrams: 1
connections: 1
tags:
  - screen
  - modules
---

# 📱 Show Sales Package

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

Form for displaying of Sales Package properties. All items are read only.
Data for displaying of code list values are retrieved by method SalesPackageWS.GetSalesPackageCodeLists.

Code is retrieved from ResultGetSalesPackage.code.

Other values in form correspond to structure SalesPackageValues (in attribute description are referenced as SPValues).

Localization code: SP_ShowSalesPackage

## 🔗 Connections (1)

- → Realisation: [[{DEL}09.315 Show Sales Package detail UI]]

## 📊 Appears In (1 diagrams)

- Custom: Show Sales Package
