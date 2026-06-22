---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CreateFinancingPackage"
domain: "Modules"
element_id: 1198418
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 CreateFinancingPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CreateFinancingPackage

## 🔗 Connections (3)

- → Dependency: [[Version]]
- → Dependency: [[FinancingPackageValues]]
- ← Dependency: [[CreateFinancingPackageRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CreateFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| values | FinancingPackageValues |  |
| code | string |  |
| sourceVersion | Version |  |
