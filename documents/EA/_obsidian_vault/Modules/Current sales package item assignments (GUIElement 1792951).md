---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792951
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Current sales package item assignments

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

Filter for list of sales package items assigned to sales package.
If checked then sales package item assignments are hidden where current date+time+10 second is out of interval <ValidFrom, ValidTo> else all assignments are displayed.
Note: 10 second is technical delay for validation and processing

Default value = True.

Localization code: SP_CurrentSalesPackageItemAssignment

## 📊 Appears In (1 diagrams)

- Custom: Show Sales Package
