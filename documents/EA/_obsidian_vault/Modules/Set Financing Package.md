---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860839
diagrams: 1
connections: 4
tags:
  - screen
  - modules
---

# 📱 Set Financing Package

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Form for setting (create/update) of Financial Package properties.

Data for listboxes are retrieved by method FinancingSchemeWS.GetFinancingPackageCodeLists (in attribute description are referenced as FPCodeLists).
{ADD PCG-2537}System gets all active commodity types from commodity module via GET commodity-types/active.
System gets all active commodity category from commodity module via GET commodity-categories/active.{/ADD}

Version Status is set to N (Inactive) and disabled for update.

For Creation (UC 04.431) and Cloning (UC 04.434):
Code is initially empty and then saved to CreateFinancingPackage.code
Version Number is set to 1 and disabled for update.

For Update (UC 04.432):
Code and Version Number are retrieved from ResultGetFinancingPackage.version.(code, versionNumber) and disabled for update.

For Create new version (UC 04.437):
Code is retrieved from ResultGetFinancingPackage.version.(code) and disabled for update.
Version Number is hidden, text New version (GEN_NewVersion) is displayed instead.

Other values in form correspond to structure FinancingPackageValues (in attribute description are referenced as FPValues).

Localization code: 
FP_CreateFinancingPackage
FP_CloneFinancingPackage
FP_UpdateFinancingPackage
FP_NewVersionFinancingPackage

## 🔗 Connections (4)

- → Realisation: [[{DEL}04.437 Create new version of Financing Package UI]]
- → Realisation: [[{DEL}04.434 Clone Financing Package UI]]
- → Realisation: [[{DEL}04.431 Create new Financing Package UI]]
- → Realisation: [[{DEL}04.432 Update Financing Package version UI]]

## 📊 Appears In (1 diagrams)

- Custom: Set Financing Package
