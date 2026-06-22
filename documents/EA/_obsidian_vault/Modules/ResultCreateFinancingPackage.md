---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CreateFinancingPackage"
domain: "Modules"
element_id: 1198423
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 ResultCreateFinancingPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CreateFinancingPackage

## 🔗 Connections (5)

- → Dependency: [[Version]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[ResultCodeCreateFinancingPackage]]
- ← Dependency: [[CreateFinancingPackageResponse]]
- → Dependency: [[ValidationCodeCreateFinancingPackage]]

## 📊 Appears In (1 diagrams)

- Logical: CreateFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| version | Version |  |
| validationResult | ValidationResult |  |
| result | ResultCodeCreateFinancingPackage |  |
