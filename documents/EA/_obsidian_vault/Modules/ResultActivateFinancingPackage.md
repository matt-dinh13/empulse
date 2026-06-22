---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/ActivateFinancingPackage"
domain: "Modules"
element_id: 1261034
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ResultActivateFinancingPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/ActivateFinancingPackage

## 🔗 Connections (4)

- → Dependency: [[ValidationCodeActivateFinancingPackage]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[ResultCodeActivateFinancingPackage]]
- ← Dependency: [[ActivateFinancingPackageResponse]]

## 📊 Appears In (1 diagrams)

- Logical: ActivateFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| validationResult | ValidationResult |  |
| result | ResultCodeActivateFinancingPackage |  |
