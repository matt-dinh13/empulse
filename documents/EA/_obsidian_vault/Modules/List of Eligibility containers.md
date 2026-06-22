---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/User Interface"
domain: "Modules"
element_id: 999481
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 List of Eligibility containers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/User Interface

## 📝 Notes

List of Service Eligibility Containers
Default order: Active(True on top), code asc.
Paging: No.

## 🔗 Connections (4)

- → Realisation: [[{DEL}08.372 Update service eligibility container]]
- → Realisation: [[{DEL}08.374 Show service eligibility container detail (UseCase 1861771)]]
- → Realisation: [[{DEL}08.368 Create service eligibility container by copy (UseCase 1861765)]]
- → Realisation: [[{DEL}08.370 Deactivate service eligibility container]]

## 📊 Appears In (1 diagrams)

- Custom: List of Eligibility Containers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | text |  |
| Update | icon |  |
| Copy | icon |  |
| Detail | icon |  |
| Deactivate | icon |  |
