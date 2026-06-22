---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1878015
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Prepare InfoForCommodityType

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

// Filling in of InfoForCommodityType structure

Input: 
- CommodityType (from the Request)
- set of found Products

InfoForCommodityType

	
- commodityType = CommodityType from input
	
- For each found Product from input create InfoForCommodityType.ProductForCommodity


ProductForCommodity 

	
- ProductType = Product.ProductProfile.ProductType


	
- code = Product.Code
	
- productType = ProductType.Code
	
- currency = Product.Currency.Code
	
- For each Product.Manufacturer add ProductForCommodity.manufacturer = Product.Manufacturer.Code


	
- For each Product.ProductVariant add ProductForCommodity.ProductVariantForCommodity


	
- For each Product.Tariff.TariffItem.TariffItemType where TariffItem.CalculationMethod = F (Fixed) add ProductForCommodity.ProductForCommodityTariffItem


ProductVariantForCommodity

	
- ProductVariant = Product.ProductVariant
	
- code = ProductVariant.Code
	
- preference = ProductVariant.Preference.Code
	
- creditAmountMin = ProductVariant.creditAmountMin
	
- creditAmountMax = ProductVariant.creditAmountMax
	
- cashPaymentCalcMethod = ProductVariant.CashPaymentCalculationMethod.Code
	
- cashPaymentMinAmount = ProductVariant.MinCashPaymentAmount
	
- cashPaymentMaxAmount = ProductVariant.MaxCashPaymentAmount
	
- cashPaymentMinRate = ProductVariant.cashPaymentMinRate
	
- cashPaymentMaxRate = ProductVariant.cashPaymentMaxRate
	
- If ProductType = CEL then annualInterestRate = ProductVariant.ClosedEndLoanProductVariant.AnnualInterestRate
	
- If ProductType = CEL then for each ProductVariant.ClosedEndLoanProductVariant.terms add terms = ProductVariant.ClosedEndLoanProductVariant.terms


ProductForCommodityTariffItem

	
- tariffItemType = Product.Tariff.TariffItem.TariffItemType
	
- fixedAmount = Product.Tariff.TariffItem.Amount

## 🔗 Connections (1)

- ← Dependency: [[{DEL}02.845 Provide Products for Finacing of Commodity for External system (UseCase 1820896)]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Provide Data
