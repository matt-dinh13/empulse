---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Installment Plan"
domain: "Modules"
element_id: 1877786
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Generation of Preliminary Installment Schedule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Installment Plan

## 📝 Notes

System generates preliminary Installment schedule according to algorithm ISG: Generate installment schedule algorithm with parameters
- INSTALLMENT.VERSION = 1
- Contract - virtual contract is simulated with contract sign date =  TODAY
{ADD PCG-5620}PH only: - Contract - virtual contract is simulated with contract sign date =  Sign date if it is provided, else TODAY{/ADD} 
- Financial Parameters = Offer.FinancialParameters (whole structure including fees)
- Recalculation reason = not defined
which returns
- Installment Schedule

old call: Generate installment schedule

## 🔗 Connections (3)

- ← Dependency: [[{ADD}Generation of CEL Installment Plan]]
- ← Dependency: [[Preliminary installment schedule (Requirement 1820665)]]
- ← Dependency: [[Total Payment Per Credit]]

## 📊 Appears In (3 diagrams)

- Custom: Evaluation of IP for Product Offer with Financing Scheme
- Custom: PCG-5620 BRPH-2423 - Debt Purchase Support in HOSEL - POC
- Use Case: Offer detail
