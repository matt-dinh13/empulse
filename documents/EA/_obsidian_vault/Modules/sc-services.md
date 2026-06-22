---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog"
domain: "Modules"
element_id: 1845759
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 sc-services

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog

## 📝 Notes

https://prc.{environment}/openapi/v1/sc-services

## 🔗 Connections (8)

- → Dependency: [[GET service by search]]
- → Dependency: [[SCServiceSearchParametersDto]]
- → Realisation: [[PUT service]]
- → Realisation: [[POST new service]]
- → Realisation: [[GET service by code]]
- → Realisation: [[POST copy service]]
- → Dependency: [[SCServiceResponse]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Service Catalog
- Logical: Service Catalog API
