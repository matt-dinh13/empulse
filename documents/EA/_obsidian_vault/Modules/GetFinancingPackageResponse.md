---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackage"
domain: "Modules"
element_id: 1207741
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 GetFinancingPackageResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackage

## 🔗 Connections (5)

- → Dependency: [[ResultGetFinancingPackage]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[ValidationCodeGetFinancingPackage]]
- → Dependency: [[ResultCodeGetFinancingPackage]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingPackage | ResultGetFinancingPackage |  |
| validationResult | ValidationResult |  |
| result | ResultCodeGetFinancingPackage |  |
