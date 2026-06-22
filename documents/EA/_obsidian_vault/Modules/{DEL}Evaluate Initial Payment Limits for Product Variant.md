---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1778242
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}Evaluate Initial Payment Limits for Product Variant

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

## 📝 Notes

{DEL PCG-707/}
// Limits of Initial Payment defined on Product Variant 

Input:

	
- ProductVariant
	
- TotalPrice


Output:

	
- MinDownPayment
	
- MaxDownPayment
	
- MinCashPayment
	
- MaxCashPayment


	
- MinCreditAmountLimit 
	
- MaxCreditAmountLimit 


MinCreditAmountLimit = ProductVariant.CreditAmountMin
MaxCreditAmountLimit = ProductVariant.CreditAmountMax
Calculate MinCashPaymentLimit according to the rule Cash Payment on Product with parameters of ProductVariant (CashPaymentCalculationMethod, MinCashPaymentAmount, MinCashPaymentRate, TotalPrice)
Calculate MaxCashPaymentLimit according to the rule Cash Payment on Product with parameters of ProductVariant (CashPaymentCalculationMethod, MaxCashPaymentAmount, MaxCashPaymentRate, TotalPrice)

If ProductCatalogueGlobalParameter.UseDownPaymentCheck = True then set:
// CashPaymentLimits on Product Variant are transformed to DownPaymentLimits
-- MinDownPaymentLimit = MinCashPaymentLimit  
-- MaxDownPaymentLimit = MaxCashPaymentLimit  
-- MinCashPaymentLimit = not defined
-- MaxCashPaymentLimit = not defined

## 🔗 Connections (1)

- → Dependency: [[Cash Payment on Product]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
