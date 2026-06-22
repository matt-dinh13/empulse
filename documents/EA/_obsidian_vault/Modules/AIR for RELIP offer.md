---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311150
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 AIR for RELIP offer

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

Inputs:
- RELIPServiceVariantTerm
- InstallmentNumber

Output:
- AIR

InitialTerm = RELIPServiceVariantTerm.InitialTerm
If InitialTerm is defined and InstallmentNumber <= InitialTerm then return RELIPServiceVariantTerm.InitialAIR
Else return RELIPServiceVariantTerm.AIR

## 🔗 Connections (2)

- ← Dependency: [[Generate Installment Plan for RELIP offer (IS_ALG_AN_PRINC)]]
- ← Dependency: [[Annuity factor ACT_365 for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
