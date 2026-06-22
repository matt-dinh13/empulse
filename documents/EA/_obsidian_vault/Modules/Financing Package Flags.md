---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860770
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Financing Package Flags

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Listed: FPCodeLists.FinancingPackageFlagType
Default order: flag type name, asc.
LDM: FinancingPackage.FinancingPackageFlag.Type
Localization: FP_Flags

Flags assigned to Financing Package are marked as selected. 
If an inactive flag type is assigned to Financing Package, it is also displayed and selected.
Panel is hidden if no Financing Package Flag Type is active and no flag is assigned to Financing Package.
Only active flag types are enabled for selection, inactive flag types can be deselected.

## 📊 Appears In (1 diagrams)

- Custom: Set Financing Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| selection | boolean |  |
| name | char |  |
