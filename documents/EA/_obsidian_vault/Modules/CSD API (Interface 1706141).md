---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/CSD API/Business Rules"
domain: "Modules"
element_id: 1706141
diagrams: 2
connections: 1
tags:
  - interface
  - modules
---

# 🔶 CSD API

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/CSD API/Business Rules

## 📝 Notes

{ADD PCG-3726/}
Common static data (CSD)

Documentation: https://git.homecredit.net/csd/csd-rest-client/-/blob/master/swagger.json#/

Endpoint: https://csd.{environment}/csd/api/csd/v1/codelist/{group}/search/{codelist}

Example: https://csd.vn00a1.cz.infra/csd/api/csd/v1/codelist/CUST/search/REGULAR_PAYMENT

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Get Codelists from CSD]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Logical: CSD API
