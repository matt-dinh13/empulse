---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/Validation Rules"
domain: "Modules"
element_id: 1683269
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}PUT products - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/Validation Rules

## 📝 Notes

{DEL PCG-3311/}

codeVersionNumber

	
- format code:versionNumber


code

	
- mandatory
	
- product code exist


versionNumber

	
- version of product exists


versionStatus

	
- available values N, A, F (N - inactive, A - Active, F - For activation)


plannedActivationDate

	
- mandatory if versionStatus = F
	
- higher then actual date


validatTo

	
- higher then product.validFrom


approvalDocument

	
- mandatory


// product variant validation
productVariants

	
- product.productType <> SAI
	
- product.productType = CEL and product.useFinancingScheme = False
	
- product.productType = REL and product.useFinancingScheme = False and globalParameter.useFinancingSchemeRELVariants (PCG_USE_RELFS_PRODUCT_VARIANTS) = 1


creditAmountMin

	
- product.productProfile.isDebit = False
	
- lower than creditAmountMax


creditAmountMax

	
- product.productProfile.isDebit = False


	
- higher than creditAmountMin


pricingCategoryFrom

	
- higher than 0
	
- lower than pricingCategoryTo


pricingCategoryTo

	
- higher than 0
	
- higher than pricingCategoryFrom


cashPaymentCalculationMethod

	
- product.productProfile.initialTransactionType = POS and product.useFinancingScheme = False


minCashPaymentFixedAmount

	
- product.productProfile.initialTransactionType = POS and product.useFinancingScheme = False and cashPaymentCalculationMethod = F
	
- lower than maxCashPaymentRate


minCashPaymentRate

	
- product.productProfile.initialTransactionType = POS and product.useFinancingScheme = False and cashPaymentCalculationMethod = P


	
- higher then 0
	
- lower than maxCashPaymentFixedAmount


maxCashPaymentFixedAmount

	
- product.productProfile.initialTransactionType = POS and product.useFinancingScheme = False and cashPaymentCalculationMethod = F


	
- higher then minCashPaymentFixAmount
	
- lower than creditAmountMax


maxCashPaymentRate

	
- product.productProfile.initialTransactionType = POS and product.useFinancingScheme = False and cashPaymentCalculationMethod = P
	
- higher than minCashPaymentRate


minInstallmentBase

	
- product.productProfile.productType = REL
	
- baseType where usage = 'REMI'
	
- for product.productProfile.isDebit = True must by value 'OP'


minInstallmentRate

	
- product.productProfile.productType = REL


	
- for product.productProfile.isDebit = True must by value '0'


minInstallmentFixedAmount

	
- product.productProfile.productType = REL


	
- for product.productProfile.isDebit = True must by value '0'


minInstallmentRounding

	
- product.productProfile.productType = REL


	
- for product.productProfile.isDebit = True must by value 'UP'


minInstallmentRoundingScale

	
- product.productProfile.productType = REL


	
- for product.productProfile.isDebit = True must by value '0'


installmentPrescriptionMinLimit

	
- product.productProfile.productType = REL
	
- for product.productProfile.isDebit = True must by value '0'


statementPrintoutTemplate

	
- product.productProfile.productType = REL


annualInterestRate

	
- product.productProfile.productType = CEL
	
- {ADD PCG-2350}mandatory when Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = false{/ADD}


terms

	
- product.productProfile.productType = CEL
	
- higher than 0
	
- lower or equal to 72
	
- {ADD PCG-2350}mandatory when Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = false{/ADD}


//commodity validation
commodityType

	
- product.useFinancingScheme = Flase
	
- product.productProfile.productType = SAI or product.productProfile.InitialTransaction = POS


code

	
- commodity type code exist in commodityType


commodityPriceMin

	
- global parameter CommodityPriceLimit (PCG_COMMODITY_PRICE_LIMIT) = True
	
- equal or higher than 0
	
- equal or lower than commodityPriceMax


commodityPriceMax

	
- global parameter CommodityPriceLimit (PCG_COMMODITY_PRICE_LIMIT) = True


	
- equal or higher than commodityPriceMin

## 🔗 Connections (1)

- ← Dependency: [[{DEL}PUT products]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use case
