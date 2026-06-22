---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/User Interface"
domain: "Modules"
element_id: 1831606
diagrams: 2
connections: 2
tags:
  - screen
  - modules
---

# 📱 Show Financing Scheme

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/User Interface

## 📝 Notes

Form for displaying of Financial Scheme properties. All items are read only.
Data for displaying of code list values are retrieved by method FinancingSchemeWS.GetFinancingSchemeCodeLists.

Code and Version Number are retrieved from ResultGetFinancingScheme.version.(code, versionNumber).
Version Status, Planned Activation Date, Activation Date, Termination Date are retrieved from ResultGetFinancingScheme.VersionData.
Other values in form correspond to structure FinancingSchemeValues (in attribute description are referenced as FSValues).

Currency is displayed only in corresponding field, not next to fields for financial amounts.

Localization code: FS_ShowFinancingScheme

## 🔗 Connections (2)

- ← Dependency: [[Product Catalog URL]]
- → Realisation: [[{DEL}04.425 Show Financing Scheme version detail UI]]

## 📊 Appears In (2 diagrams)

- Custom: Financing Scheme URL
- Custom: Show Financing Scheme
