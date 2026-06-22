---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Notification"
domain: "Modules"
element_id: 1858728
diagrams: 2
connections: 22
tags:
  - interface
  - modules
---

# 🔶 Application events

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Notification

## 📝 Notes

Events are sent to exchange prc.events.v1

Documentation https://git.homecredit.net/pcg/product-catalog/-/blob/develop/README.md

## 🔗 Connections (22)

- ← Dependency: [[POST manufacturers]]
- ← Dependency: [[PUT manufacturers (UseCase 1841484)]]
- ← Dependency: [[POST new service]]
- ← Dependency: [[PUT service]]
- ← Dependency: [[POST product-profiles]]
- ← Dependency: [[PUT product-profiles]]
- ← Dependency: [[04.190 Activate Tariff version automatically]]
- ← Dependency: [[08.190 Activate Service version automatically]]
- → Dependency: [[NotificationRequest (Class 1858724)]]
- ← Dependency: [[POST financing package]]
- ← Dependency: [[PUT financing package]]
- ← Dependency: [[{MOD}POST products]]
- ← Dependency: [[{MOD}PUT products]]
- ← Dependency: [[04.416 Activate Financing Package version automatically (UseCase 1859182)]]
- ← Dependency: [[04.406 Activate Financing Scheme version automatically (UseCase 1859186)]]
- ← Dependency: [[POST financing schemes]]
- ← Dependency: [[PUT financing schemes]]
- ← Dependency: [[{MOD}PUT tariffs]]
- ← Dependency: [[{MOD}POST tariffs]]
- ← Dependency: [[{MOD}PUT services]]
- ← Dependency: [[{MOD}POST services]]
- ← Dependency: [[02.262 Activate product version automatically (UseCase 1872117)]]

## 📊 Appears In (2 diagrams)

- Logical: Notification
- Use Case: Notification in Use Cases
