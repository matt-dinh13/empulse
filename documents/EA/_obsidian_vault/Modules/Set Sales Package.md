---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792959
diagrams: 1
connections: 4
tags:
  - screen
  - modules
---

# 📱 Set Sales Package

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

Form for setting (create/update/delete) of Sales Package properties.

Data for listboxes are retrieved by method SalesPackageWS.GetSalesPackageCodeLists (in attribute description are referenced as SPCodeLists).

For Creation (UC 09.311) and Cloning (UC 09.314):
Code is initially empty and then saved to SetSalesPackage.code

For Update (UC 09.312):
Code is retrieved from ResultGetSalesPackage.code and is disabled for update.

For Cloning (UC 09.314):
For each currently valid Sales Package Item in past set Valid from to current date.

Other values in form correspond to structure SalesPackageValues (in attribute description are referenced as SPValues).
Entered dates ValidFrom/To are adjusted according to the rule Sales Package Management and Assignment - rules for transformation of ValidFrom/ValidTo from UI.

Localization code: 
SP_CreateSalesPackage
SP_CloneSalesPackage
SP_UpdateSalesPackage

## 🔗 Connections (4)

- → Dependency: [[Sales Package Management and Assignment - rules for transformation of ValidFrom_ValidTo from UI]]
- → Realisation: [[{DEL}09.311 Create new Sales Package UI]]
- → Realisation: [[{DEL}09.312 Update Sales Package UI]]
- → Realisation: [[{DEL}09.314 Clone Sales Package UI]]

## 📊 Appears In (1 diagrams)

- Custom: Set Sales Package
