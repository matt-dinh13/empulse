---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetFinancingScheme"
domain: "Modules"
element_id: 1198469
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 GetFinancingSchemeResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetFinancingScheme

## 🔗 Connections (5)

- → Dependency: [[ValidationCodeGetFinancingScheme]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[ResultCodeGetFinancingScheme]]
- → Dependency: [[ResultGetFinancingScheme]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingScheme | ResultGetFinancingScheme |  |
| validationResult | ValidationResult |  |
| result | ResultCodeGetFinancingScheme |  |
