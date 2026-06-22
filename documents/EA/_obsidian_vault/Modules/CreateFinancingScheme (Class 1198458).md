---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme"
domain: "Modules"
element_id: 1198458
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 CreateFinancingScheme

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme

## 🔗 Connections (4)

- → Dependency: [[Version]]
- → Dependency: [[FinancingSchemeValues]]
- ← Dependency: [[CreateFinancingSchemeRequest]]
- ← Dependency: [[GetFinancingSchemeRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CreateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| code | string |  |
| values | FinancingSchemeValues |  |
| sourceVersion | Version |  |
