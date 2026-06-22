---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/UpdateFinancingScheme"
domain: "Modules"
element_id: 1261028
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ResultUpdateFinancingScheme

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/UpdateFinancingScheme

## 🔗 Connections (4)

- → Dependency: [[ValidationResult]]
- → Dependency: [[ValidationCodeUpdateFinancingScheme]]
- ← Dependency: [[UpdateFinancingSchemeResponse]]
- → Dependency: [[ResultCodeUpdateFinancingScheme]]

## 📊 Appears In (1 diagrams)

- Logical: UpdateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| validationResult | ValidationResult |  |
| result | ResultCodeUpdateFinancingScheme |  |
