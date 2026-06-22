---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API"
domain: "Modules"
element_id: 1873248
diagrams: 6
connections: 6
tags:
  - class
  - modules
---

# 🔷 ActivationInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API

## 📝 Notes

Data for product catalog entity activation

## 🔗 Connections (6)

- ← Dependency: [[{ADD}financing-scheme-activations]]
- ← Dependency: [[{ADD}product-activations]]
- ← Dependency: [[{ADD}financing-package-activations]]
- ← Dependency: [[{ADD}tariff-activations]]
- → Dependency: [[Version Status - Activation]]
- ← Dependency: [[service-activations]]

## 📊 Appears In (6 diagrams)

- Logical: COMMON for Product catalog REST API
- Logical: Financing Packages
- Logical: Financing Schemes
- Logical: Product
- Logical: Service
- Logical: Tariff

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| plannedActivationDate | string |  |
| versionStatus | Version Status - Activation |  |
