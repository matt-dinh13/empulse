---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import"
domain: "Modules"
element_id: 1871721
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ProductExportResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import

## 🔗 Connections (3)

- → Dependency: [[ProductExportDto]]
- → Dependency: [[ValidationErrorDto (Class 1873250)]]
- ← Dependency: [[product-export]]

## 📊 Appears In (1 diagrams)

- Logical: Product catalog export/import

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| 200 | ProductExportDto |  |
| 404 |  |  |
| 400 | ValidationErrorDto |  |
