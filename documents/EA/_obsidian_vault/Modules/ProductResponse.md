---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850261
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ProductResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 🔗 Connections (4)

- → Dependency: [[ValidationError (Class 1850274)]]
- ← Dependency: [[products (Class 1850263)]]
- ← Dependency: [[{ADD}product-activations]]
- → Dependency: [[{MOD}ProductDto]]

## 📊 Appears In (1 diagrams)

- Logical: Product

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| 200 | ProductDto |  |
| 400 | ValidationError |  |
| 404 |  |  |
