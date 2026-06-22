---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/COMMON for Financing Scheme"
domain: "Modules"
element_id: 1491203
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}FinancingSchemeVariant

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/COMMON for Financing Scheme

## 📝 Notes

Defines available combinations of 
- Term
- AIR or Annuity
for particular Financing Scheme.

## 🔗 Connections (2)

- → Dependency: [[FinancingSchemeVariantCriterion]]
- ← Dependency: [[FinancingSchemeValues]]

## 📊 Appears In (1 diagrams)

- Logical: FinancingSchemeValues

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}numberOfGIFTPTerms | integer |  |
| number | integer |  |
| type | string |  |
| totalMonthlyPayment | decimal |  |
| term | integer |  |
| AIR | percentage |  |
| initTerm | integer |  |
| initAIR | percentage |  |
| pastDueInitAIR | percentage |  |
| pastDueAIR | percentage |  |
| criterion | FinancingSchemeVariantCriterion |  |
