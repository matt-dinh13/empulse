---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages"
domain: "Modules"
element_id: 1634385
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 SalesPackageResponse

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages

## 🔗 Connections (4)

- ← Dependency: [[sales-packages]]
- → Dependency: [[ValidationError (Class 1850274)]]
- ← Dependency: [[sales-packages_items]]
- → Dependency: [[SalesPackageDto]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Packages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesPackage | SalesPackageDto |  |
| validationError | ValidationError |  |
