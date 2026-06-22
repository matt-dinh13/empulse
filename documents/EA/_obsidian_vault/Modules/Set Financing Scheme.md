---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/User Interface"
domain: "Modules"
element_id: 1831621
diagrams: 1
connections: 4
tags:
  - screen
  - modules
---

# 📱 Set Financing Scheme

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/User Interface

## 📝 Notes

Form for setting (create/update) of Financial Scheme properties.

Data for listboxes are retrieved by method FinancingSchemeWS.GetFinancingSchemeCodeLists (in attribute description are referenced as FSCodeLists).

Version Status is set to N (Inactive) and disabled for update.

For Creation (UC 04.421) and Cloning (UC 04.424):
Code is initially empty and then saved to CreateFinancingScheme.code
Version Number is set to 1 and disabled for update.

For Update (UC 04.422):
Code and Version Number are retrieved from ResultGetFinancingScheme.version.(code, versionNumber) and disabled for update.

For Create new version (UC 04.427):
Code is retrieved from ResultGetFinancingScheme.version.(code) and disabled for update.
Version Number is hidden, text New version (GEN_NewVersion) is displayed instead.

Other values in form correspond to structure FinancingSchemeValues (in attribute description are referenced as FSValues).

Currency is displayed only in corresponding field, not next to fields for financial amounts.

Localization code: 
FS_CreateFinancingScheme
FS_CloneFinancingScheme
FS_UpdateFinancingScheme
FS_NewVersionFinancingScheme

## 🔗 Connections (4)

- → Realisation: [[{DEL}04.424 Clone Financing Scheme UI]]
- → Realisation: [[{DEL}04.422 Update Financing Scheme version UI]]
- → Realisation: [[{DEL}04.427 Create new version of Financing Scheme UI]]
- → Realisation: [[{DEL}04.421 Create new Financing Scheme UI]]

## 📊 Appears In (1 diagrams)

- Custom: Set Financing Scheme
