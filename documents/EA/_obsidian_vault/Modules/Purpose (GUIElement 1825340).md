---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825340
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Purpose

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

Listed: SubventionPurpose.Name

Displayed only if globalParameter.UseSubventionPurpose (PCG_USE_SUBVENTION_PURPOSE) = true

If Subvention.Purpose is not STANDARD then set Subvention.Discount to false and disable Subvention.Discount.

For Service Subvention set Subvention.Purpose = STANDARD and disable.

LDM: Subvention.Purpose
Localization code: PRD_SubventionPurpose

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
