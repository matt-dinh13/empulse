---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1314781
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {ADD}Generation of CEL Installment Plan

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

{ADD PCG-707/}
// Generation of CEL Installment Plan for ProductOffer

Inputs:
- ProductOffer 
- LoanPreferences

Outputs:
- ProductOffer with Installment Plan
- Result - returns True if Installment Plan was successfully generated 

Based on parameters from ProductOffer (Financial Parameters) execute algorithm Generation of Preliminary Installment Schedule, which returns 
- InstallmentPlan
- ISInterestRate
If the installment plan is not successfully created then return Result = False and algorithm ends.

Calculate
- FirstInstallmentAmount according to the rule First Installment Amount
- TotalPaymentPerCredit according to the rule Total payment per credit

Save into ProductOffer 
- calculated parameters 
- InstallmentPlan (into structures Offer Installment, Offer Installment Part).

return Result = True

## 🔗 Connections (5)

- → Dependency: [[Total Monthly Payment definition]]
- → Dependency: [[First Installment Amount]]
- → Dependency: [[Total Payment Per Credit]]
- → Dependency: [[{MOD}Generation of Preliminary Installment Schedule]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of IP for Product Offer with Financing Scheme
