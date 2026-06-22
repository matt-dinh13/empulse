---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/UpdateFinancingPackage"
domain: "Modules"
element_id: 1261016
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 UpdateFinancingPackageRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/UpdateFinancingPackage

## 📝 Notes

When fullCheck is set to True then 
- all validations are processed (warnings inclusive),
- after the first validation fails then system continues with next financingPackage.

## 🔗 Connections (2)

- → Dependency: [[UpdateFinancingPackage (Class 1261019)]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: UpdateFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingPackage | UpdateFinancingPackage |  |
| fullCheck | boolean | False |
