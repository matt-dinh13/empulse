---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311154
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculate Due Date for RELIP Variant

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// calculates Due Date for Installment plan for initial REL transaction

Input: 
- RELIPService
- BillingDate 
- InstallmentDueDayShift 

Output: 
- DueDate

DueDateMethod = RELIPService.DueDateMethod
If DueDateMethod = ACCOUNT_DUE_DAY: 
DueDate = BillingDate - 1 + InstallmentDueDayShift 

non-working days = set of all active values from enumeration Non-working Day 

While (GlobalParameter.ProductCatalogueGlobalParameter.FloatingDueDate = TRUE and DueDate = non-working day}:
DueDate = DueDate + 1
end

If DueDateMethod has another value then raise exception (not supported)

## 🔗 Connections (2)

- ← Dependency: [[Evaluate dates for RELIP calculation]]
- ← Dependency: [[Generate Installment Plan for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
