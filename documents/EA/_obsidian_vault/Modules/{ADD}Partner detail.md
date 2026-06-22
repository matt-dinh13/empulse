---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API"
domain: "Modules"
element_id: 1873199
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}Partner detail

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API

## 📝 Notes

{ADD PCG-5594}
For country: PH

HSIS endpoint:
GET: https://homesis.{environment}/homesis/restful/partners/search

Use following input parameters when calling the API:
- filter|code|in|partnerCode1,partnerCodeN
- projections=salesroom

## 🔗 Connections (1)

- ← Dependency «path»: [[HomeSIS API (Class 1873200)]]

## 📊 Appears In (1 diagrams)

- Logical: HomeSIS API
