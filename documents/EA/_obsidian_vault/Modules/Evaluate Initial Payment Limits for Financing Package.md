---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1778239
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Evaluate Initial Payment Limits for Financing Package

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

## 📝 Notes

Note: the rule is currently not used in offer calculation, but if it is implemented then must be updated for future usage

// Limits of Initial Payment defined on Financing Package 

Input:

	
- FinancingPackage
	
- TotalPrice


Output:

	
- MinDownPaymentLimit
	
- MaxDownPaymentLimit
	
- MinCashPaymentLimit
	
- MaxCashPaymentLimit


Set MinDownPaymentLimit, MaxDownPaymentLimit, MinCashPaymentLimit, MaxCashPaymentLimit = NULL, NULL, NULL, NULL

For each FinancingPackageInitialPaymentLimit (FPInitP) from FinancingPackage.FinancingPackageInitialPaymentLimit execute following steps:
If Type = MINIMAL_DOWN_PAYMENT then set MinDownPaymentLimit = TotalPrice * FPInitP.Rate + FPInitP.FixedAmount
If Type = MAXIMAL_DOWN_PAYMENT then set MaxDownPaymentLimit = TotalPrice * FPInitP.Rate + FPInitP.FixedAmount
If Type = MINIMAL_CASH_PAYMENT then set MinCashPaymentLimit = TotalPrice * FPInitP.Rate + FPInitP.FixedAmount
If Type = MAXIMAL_DOWN_PAYMENT then set MaxCashPaymentLimit = TotalPrice * FPInitP.Rate + FPInitP.FixedAmount
Continue with the next FinancingPackageInitialPaymentLimit

## 🔗 Connections (2)

- ← Dependency: [[{DEL}Evaluation of Product Offers]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
