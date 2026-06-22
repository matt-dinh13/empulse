---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825339
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Allocation to client

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

LDM: Subvention.AllocationToClient
If Subvention.Discount = True then set Subvention.AllocationToClient = 100% and disable.
For Service Subvention set Subvention.AllocationToClient = 0% and disable.

Localization code: PRD_SubventionsAllocationToClient

## 🔗 Connections (2)

- → Dependency: [[Percentage (0-100)]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
