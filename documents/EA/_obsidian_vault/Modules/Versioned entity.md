---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Logical Data Model"
domain: "Modules"
element_id: 1217933
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 Versioned entity

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Logical Data Model

## 📝 Notes

Extraction of common attributes for versioned entities (as Product, Service, Tariff).

## 🔗 Connections (7)

- → Dependency: [[Version Status]]
- ← Generalization: [[Financing Scheme (Class 1668708)]]
- ← Generalization: [[Financing Package (Class 1713390)]]
- ← Generalization: [[Financing Package (Class 1865395)]]
- ← Generalization: [[{MOD}Tariff]]
- ← Generalization: [[{MOD}Product]]
- ← Generalization: [[Service (Class 1880804)]]

## 📊 Appears In (1 diagrams)

- Custom: Versioned entity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Version Number | Number |  |
| Version Status | Version Status |  |
| Version Creation Date | DateTime |  |
| Created by | User |  |
| Version Activation Date | DateTime |  |
| Planned Activation Date | DateTime |  |
| Activated by | User |  |
| Version Termination Date | DateTime |  |
| Terminated by | User |  |
