---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845094
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ProductVariantDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

ProductvariantDto POST

	
- productVariants
Product.ProductProfile.ProductType = CEL and Product.UseFinancingScheme = False
Product.ProductProfile.ProductType = REL and Product.UseFinancingScheme = False and globalParameter.UseFinancingSchemeRELVariants (PCG_USE_RELFS_PRODUCT_VARIANTS) = True



	
- code
ignored on input, generated as Generating of product variant code


	
- preference
mandatory
between 1 and 6
[INVALID_NUMBER]
	
- minCreditAmount
only for products where Product.ProductProfile.IsDebit = False
mandatory
higher than 0
[INVALID_NUMBER]
	
- minInstallmentBase
only for products where Product.ProductProfile.IsDebit = False
mandatory
must exist in {MOD}Base Type
	
- maxCreditAmount
only for products where Product.ProductProfile.IsDebit = False
mandatory
higher than 0
[INVALID_NUMBER]
higher than minCreditAmount 
[INVALID_MAX_CREDIT_AMOUNT]


	
- cashPaymentCalculationMethod
only for product where (Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI) and Product.UseFinancingScheme = False
Possible values: FIXED, PERCENTAGE
	
- minCashPaymentAmount
only for product where (Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI) and Product.UseFinancingScheme = False and CashPaymentCalculationMethod = F
mandatory
higher than 0
[INVALID_NUMBER]
lower than maxCashPaymentAmount
	
- maxCashPaymentAmount
only for product where (Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI)  and Product.UseFinancingScheme = False and CashPaymentCalculationMethod = F
higher than 0
[INVALID_NUMBER]
higher than minCashPaymentAmount
[INVALID_MAX_CASH_PAYMENT_AMOUNT]
	
- minCashPaymentRate
only for product where (Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI) S and Product.UseFinancingScheme = False and CashPaymentCalculationMethod = P [NOT_EMPTY_CASH_PAYMENT_RATE]
higher then 0, less than 1 and only 6 decimal places are allowed 
[INVALID_PERCENTAGE]
lower than maxCashPaymentRate
	
- maxCashPaymentRate
only for product where (Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI)  and Product.UseFinancingScheme = False and CashPaymentCalculationMethod = P
higher then 0,  less than 1 and only 6 decimal places are allowed 
[INVALID_PERCENTAGE]
higher than minCashPaymentRate
[INVALID_MAX_CASH_PAYMENT_RATE]
	
- pricingCategoryFrom, pricingCategoryTo
must fulfill Pricing Category validation
	
- currency
must exist in Currency
[INVALID_CURRENCY]
	
- annualInterestRate
only for products where Product.ProductProfile.ProductType = CEL or SAI
optional when Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = true
mandatory when Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = false
higher then 0,  less than 10 and only 6 decimal places are allowed 
[INVALID_PERCENTAGE]


	
- terms
only for product where Product.ProductProfile.ProductType = CEL or SAI
{DEL PCG-4515}for CEL {/DEL}optional when Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = true
mandatory when Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = false
for SAI mandatory
must fulfill Terms


	
- minInstallmentRate
only for product where Product.ProductProfile.ProductType = REL
for product.productProfile.isDebit = True is set to '0'
	
- minInstallmentFixedAmount
only for product where Product.ProductProfile.ProductType = REL
for product.productProfile.isDebit = True is set to '0'
	
- minInstallmentRounding
only for product where Product.ProductProfile.ProductType = REL
for product.productProfile.isDebit = True is set to 'UP'
	
- minInstallmentRoundingScale
only for product where Product.ProductProfile.ProductType = REL
for product.productProfile.isDebit = True is set to '0'
	
- installmentPrescriptionMinLimit
only for product where Product.ProductProfile.ProductType = REL
for product.productProfile.isDebit = True is set to '0'
	
- statementPrintoutTemplate
only for product where Product.ProductProfile.ProductType = REL
must exists in Printout Template



	
- cash payment cross validation
must fulfill Cash payment cross validations

## 🔗 Connections (4)

- → Dependency: [[{MOD}Generating of product variant code]]
- → Dependency: [[Terms (Requirement 1489254)]]
- → Dependency: [[Cash payment cross validations]]
- ← Dependency: [[Product - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
