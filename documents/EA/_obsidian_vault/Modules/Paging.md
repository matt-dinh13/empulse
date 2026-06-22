---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles"
domain: "Modules"
element_id: 1873249
diagrams: 7
connections: 6
tags:
  - class
  - modules
---

# 🔷 Paging

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles

## 🔗 Connections (6)

- ← Dependency: [[service-eligibility-containers]]
- ← Dependency: [[{ADD}models]]
- ← Dependency: [[search (Class 1721381)]]
- → Aggregation: [[SalesroomSearchParameters]]
- ← Dependency: [[{ADD}promo-actions]]
- ← Dependency: [[{ADD}search]]

## 📊 Appears In (7 diagrams)

- Logical: Bundles
- Logical: COMMON for Product catalog REST API
- Logical: Marketing Action
- Logical: Model
- Logical: Promo Actions
- Logical: Salesroom
- Logical: Service Eligibility Containers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pageNumber | int |  |
| pageSize | int |  |
| orderBy | string |  |
| orderDirection | string |  |
