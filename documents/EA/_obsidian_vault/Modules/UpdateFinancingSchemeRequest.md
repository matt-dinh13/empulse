---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/UpdateFinancingScheme"
domain: "Modules"
element_id: 1261025
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 UpdateFinancingSchemeRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/UpdateFinancingScheme

## 📝 Notes

When fullCheck is set to True then 
- all validations are processed (warnings inclusive),
- after the first validation fails then system continues with next financingScheme.

## 🔗 Connections (2)

- → Dependency: [[UpdateFinancingScheme (Class 1261027)]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: UpdateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingScheme | UpdateFinancingScheme |  |
| fullCheck | boolean | False |
