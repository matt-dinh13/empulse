---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API"
domain: "Modules"
element_id: 1873201
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}Salesrooms search

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API

## 📝 Notes

{ADD PCG-5594}
For country: PH

Endpoint: GET https://homesis.{environment}/homesis/restful/salesrooms/search

Salesrooms can be found by given input data/criteria, i.e. salesroom code, partners (code or name) etc.
HSIS API returns information about salesrooms matching input criteria.
Input parameter "filter" is used to pass search criteria when calling HSIS. Examples and logic for using query parameter "filter" is described in Business rules.

## 🔗 Connections (2)

- ← Dependency «path»: [[HomeSIS API (Class 1873200)]]
- → Dependency: [[{ADD}Search salesroom in HomeSIS]]

## 📊 Appears In (1 diagrams)

- Logical: HomeSIS API
