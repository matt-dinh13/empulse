---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/ActivateFinancingScheme"
domain: "Modules"
element_id: 1291983
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ActivateFinancingSchemeRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/ActivateFinancingScheme

## 📝 Notes

When fullCheck is set to True then 
- all validations are processed (warnings inclusive),
- after the first validation fails then system continues with next financingScheme.

## 🔗 Connections (2)

- → Dependency: [[ActivateFinancingScheme (Class 1291980)]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: ActivateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingScheme | ActivateFinancingScheme |  |
| fullCheck | boolean | False |
