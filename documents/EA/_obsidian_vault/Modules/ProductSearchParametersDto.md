---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850257
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ProductSearchParametersDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 🔗 Connections (4)

- → Dependency: [[Product Type (Enumeration 1879104)]]
- ← Dependency: [[products (Class 1850263)]]
- → Dependency: [[Product Transaction Type]]
- → Dependency: [[Version Status (Enumeration 1873251)]]

## 📊 Appears In (1 diagrams)

- Logical: Product

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| productType | Version Status |  |
| initialTransactionType | Product Transaction Type |  |
| profileCode | string |  |
| versionStatus | Version Status |  |
| validOn | string |  |
| versionActivatedFrom | string |  |
| versionActivatedTo | string |  |
| onlyLastVersion | boolean |  |
| orderBy | Version Status |  |
| orderDirection | Version Status |  |
| pageNumber | int |  |
| pageSize | int |  |
