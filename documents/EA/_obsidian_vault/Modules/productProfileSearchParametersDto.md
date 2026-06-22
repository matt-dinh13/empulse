---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile"
domain: "Modules"
element_id: 1715109
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 productProfileSearchParametersDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile

## 🔗 Connections (3)

- → Dependency: [[InitialTransactionTypeDto]]
- → Dependency: [[ProductTypeDto (Enumeration 1873247)]]
- ← Dependency: [[product-profiles]]

## 📊 Appears In (1 diagrams)

- Logical: Product Profile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| showInactive | boolean |  |
| productType | string |  |
| initialTransactionType | string |  |
| pageNumber | integer |  |
| pageSize | integer |  |
| orderBy | string |  |
| orderDirection | string |  |
