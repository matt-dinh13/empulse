---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/ActivateFinancingPackage"
domain: "Modules"
element_id: 1261032
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ActivateFinancingPackageRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/ActivateFinancingPackage

## 📝 Notes

When fullCheck is set to True then 
- all validations are processed (warnings inclusive),
- after the first validation fails then system continues with next financingPackage.

## 🔗 Connections (2)

- → Dependency: [[ActivateFinancingPackage (Class 1261036)]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: ActivateFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingPackage | ActivateFinancingPackage |  |
| fullCheck | boolean | False |
