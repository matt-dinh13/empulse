---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1668700
diagrams: 4
connections: 10
tags:
  - class
  - modules
---

# 🔷 Installment Plan Scheme

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules

## 📝 Notes

Defines parameters for generation of Installment Plan.
Combination of financial parameters (Term, AIR, etc.) are defined on upper level (Financing Scheme).

## 🔗 Connections (10)

- ← Dependency: [[InstallmentPlanScheme]]
- ← Dependency: [[FinancingSchemeValues - validation rules]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- ← Dependency: [[Financing Scheme (Class 1668708)]]
- → Dependency: [[Day Count Method Type]]
- → Dependency: [[Installment Plan Generation Method Type]]
- → Dependency: [[Rounding Scale Type]]
- → Dependency: [[{ADD}Include Deferred Interest type]]
- → Dependency: [[Rounding Scale Type]]

## 📊 Appears In (4 diagrams)

- Custom: Financing Scheme Values - validation Rules
- Logical: Financing Scheme
- Logical: GetFinancingSchemeCodeLists
- Logical: Installment Plan Scheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean | True |
| Is Default | boolean | False |
| Description | string |  |
| Day Count Method | string |  |
| Is Init AIR | boolean |  |
| Annuity Rounding Method | string |  |
| Annuity Rounding Scale | decimal |  |
| Interest Rounding Method | string |  |
| Interest Rounding Scale | decimal |  |
| Generation Method | string |  |
| {ADD}Include Deferred Interest | Include Deferred Interest Type |  |
| {ADD}Keep Equal Last Installment Amount | boolean |  |
| {ADD}Recalculate Interest Rate | boolean |  |
