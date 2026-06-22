---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CancelFinancingPackage"
domain: "Modules"
element_id: 1199488
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ResultCancelFinancingPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CancelFinancingPackage

## 🔗 Connections (4)

- → Dependency: [[ValidationCodeCancelFinancingPackage]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[ResultCodeCancelFinancingPackage]]
- ← Dependency: [[CancelFinancingPackageResponse]]

## 📊 Appears In (1 diagrams)

- Logical: CancelFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| validationResult | ValidationResult |  |
| result | ResultCodeCancelFinancingPackage |  |
