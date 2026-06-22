---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles"
domain: "Modules"
element_id: 1843570
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}BundleDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles

## 📝 Notes

{ADD PCG-4926/}
Bundle

## 🔗 Connections (2)

- ← Dependency: [[{ADD}BundleResponse]]
- → Dependency: [[{ADD}BundleServiceDto]]

## 📊 Appears In (2 diagrams)

- Logical: BundleDto
- Logical: Bundles

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| description | string |  |
| services | {ADD}BundleServiceDto |  |
| validFrom | date |  |
| validTo | date |  |
| final | boolean |  |
