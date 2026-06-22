---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme"
domain: "Modules"
element_id: 1198456
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 ResultCreateFinancingScheme

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme

## 🔗 Connections (5)

- → Dependency: [[ValidationCodeCreateFinancingScheme]]
- ← Dependency: [[CreateFinancingSchemeResponse]]
- → Dependency: [[ResultCodeCreateFinancingScheme]]
- → Dependency: [[Version]]
- → Dependency: [[ValidationResult]]

## 📊 Appears In (1 diagrams)

- Logical: CreateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| version | Version |  |
| validationResult | ValidationResult |  |
| result | ResultCodeCreateFinancingScheme |  |
