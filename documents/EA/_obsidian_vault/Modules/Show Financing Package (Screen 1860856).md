---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860856
diagrams: 2
connections: 2
tags:
  - screen
  - modules
---

# 📱 Show Financing Package

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Form for displaying of Financial Package properties. All items are read only.
Data for displaying of code list values are retrieved by method FinancingSchemeWS.GetFinancingPackageCodeLists.

Code and Version Number are retrieved from ResultGetFinancingPackage.version.(code, versionNumber).
Version Status, Planned Activation Date, Activation Date, Termination Date are retrieved from ResultGetFinancingScheme.VersionData.
Other values in form correspond to structure FinancingPackageValues (in attribute description are referenced as FPValues).

Localization code: FS_ShowFinancingPackage

## 🔗 Connections (2)

- ← Dependency: [[Product Catalog URL]]
- → Realisation: [[{DEL}04.435 Show Financing Package version detail UI]]

## 📊 Appears In (2 diagrams)

- Custom: Financing Package URL
- Custom: Show Financing Package
