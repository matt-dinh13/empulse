---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/COMMON for Financing Package"
domain: "Modules"
element_id: 1627147
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 FinancingPackageInitialPaymentLimit

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/COMMON for Financing Package

## 📝 Notes

Parameters for calculation of limits for amount which client has to pay as cash in advance at the moment of the loan provision.

## 🔗 Connections (2)

- → Dependency: [[Financing Package Initial Payment Limit Type]]
- ← Dependency: [[FinancingPackageValues]]

## 📊 Appears In (1 diagrams)

- Logical: FinancingPackageValues

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| fixedAmount | decimal |  |
| rate  | decimal |  |
