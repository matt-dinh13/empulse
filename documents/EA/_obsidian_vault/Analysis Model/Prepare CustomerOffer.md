---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOffer - COMMON"
domain: "Analysis Model"
element_id: 1878020
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Prepare CustomerOffer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOffer - COMMON

## 📝 Notes

// Filling in of CustomerOffer structure

OFP = Offer Financial Parameter
ProductType = OFP.ProductVariant.Product.ProductProfile.ProductType.Code

CustomerOffer (CustomerOffer)

	
- code = OFP.OfferCode
	
- product  - create CustomerOffer.Product
	
- termsAnsConditions - create CustomerOffer.TermsAndConditions
	
- installments -  from version 21 returned only in get method if dataset=INSTALLMENTS is on input
If ProductType = CEL then for each OFP.OfferInstallment create CustomerOffer.Installment
	
- fees
For each OFP.OfferFinancialParameterItem where FinancialParamemeterItemType in (TARIFF, SERVICE_TARIFF) create CustomerOffer.Fee
	
- services - from version 21 returned in get method only if dataset=SERVICES is on input
For each OFP.OfferService create CustomerOffer.Service
	
- totalPrice = OFP.Price
	
- cashPayment = OFP.CashPayment
	
- downPayment = OFP.NetCashPayment
	
- terms = OFP.Terms
	
- totalInstallment = OFP.TotalMonthlyPayment
	
- loanAmount = OFP.ProvidedCreditAmount
	
- netCreditLimit = OFP.NetCreditLimit


	
- providedCreditLimit = OFP.ProvidedCreditLimit


	
- minimalInstallmentAmount = OFP.MinimalInstallmentAmount


	
- totalPaymentPerCredit = OFP.TotalPaymentPerCredit
	
- annualInterestRate = OFP.InterestRate


	
- RELInterestRate - if ProductType = REL then create CustomerOffer.RELInterestRate


	
- type = OFPService.ServiceType.Code


	
- presentedInterestRate1 = OFP.PresentedInterestRate1
	
- presentedInterestRate2 = OFP.PresentedInterestRate2
	
- presentedInterestRate3 = OFP.PresentedInterestRate3


	
- totalInsurancePremium = sum of OFP.OfferServiceTariffItem.Amount where OfferServiceTariffItem.OfferService.Service.ServiceType.Category = INSURANCE


	
- sufficientClientDocuments = True is all default document container rules are satisfied for selected product else sufficientClientDocuments = False
This item is filled only if GlobalParameter.IncludeDocInProductCalculator = True. - is not provided from version 21


	
- annuity = OFP.Annuity
	
- preferredDueDay = OFP.PreferredDueDay
	
- limitId=OFP.limitId
	
- financingScheme=OFP.(FS_code/FS_version/FS_variantCode)
	
- financingPackage=OFP.(FP_code/FP_version)
	
- netCreditAmount=OFP.NetCreditAmount
	
- creditAmount=OFP.CreditAmount
	
- billingDay=OFP.BillingDay
	
- installmentScheduleMethod=OFP.InstallmentScheduleMethod
	
- validTo -  returned only in get method if dataset=VALIDITY is on input


CustomerOffer.Product
Product = OFP.ProductVariant.Product

	
- code = Product.Code
	
- name = Product.Name - is not provided from version 21
	
- productType = ProductType - is not provided from version 21
	
- initialTransactionType = Product.ProductProfile.InitialTransactionType.Code - is not provided from version 21
	
- productProfileCode = Product.ProductProfile.Code - is not provided from version 21
	
- productVariantCode = OFP.ProductVariant.Code
	
- preference = OFP.Preference
	
- description = Product.Description -is not provided from version 21
	
- descriptionSale = Product.DescriptionSale - is not provided from version 21


	
- productVersion = Product.VersionNumber
	
- tariff= OFP.tariff(code/version)



	
- CustomerOffer.TermsAndConditions  -is not provided from version 21


	
- code = OFP.ProductVariant.Product.TermsAndConditions.Code
	
- name = OFP.ProductVariant.Product.TermsAndConditions.Name


CustomerOffer.Installment

	
- number = OFP.OfferInstallment.InstallmentNumber
	
- dueDate = OFP.OfferInstallment.DueDate
	
- principalAmount = sum(OFP.OfferInstallment.OfferInstallmentPart.Amount where PartType = 'S')
	
- interestAmount = sum(OFP.OfferInstallment.OfferInstallmentPart.Amount where PartType = 'I')
	
- feeAmount = sum(OFP.OfferInstallment.OfferInstallmentPart.Amount where PartType = 'F')


CustomerOffer.Fee

	
- code = OFP.OfferFinancialParameterItem.TariffItem.TariffItemType.Code
	
- name = OFP.OfferFinancialParameterItem.TariffItem.TariffItemType.Name - is not provided from version 21
	
- amount = OFP.OfferFinancialParameterItem.ItemAmount
	
- service = OFP.OfferServiceTariffItem.OfferService.Service.Code


	
- tariffItemCode= OFP.OfferFinancialParameterItem.OFFER_FIN_PAR_ITEM2TARIF_I.TariffItemCode



CustomerOffer.RELInterestRate - is not provided from version 21
TI = Tariff Items found by the rule Interest Rates from Tariff.

	
- name = TI.TariffItem.TarifItemType.Name
	
- limitNumberBasedOn = TI.TariffItem.limitNumberBasedOn
	
- limitNumberFrom = TI.TariffItem.limitNumberFrom
	
- limitNumberTo = TI.TariffItem.limitNumberTo
	
- limitAmountBasedOn = TI.TariffItem.limitAmountBasedOn
	
- limitAmountFrom = TI.TariffItem.limitAmountFrom
	
- limitAmountTo = TI.TariffItem.limitAmountTo
	
- interestRate = TI.TariffItem.Percentage
	
- interestRateBasedOn = TI.TariffItem.PercentageBasedOn


CustomerOffer.Service
OFPService = OFP.OfferService.Service

	
- service = OFPService.Code


	
- name = OFPService.Name - is not provided from version 21
	
- description = OFPService.Description - is not provided from version 21
	
- if OFPService.ServiceType.Category = INSURANCE then 
- insuranceProgram = OFPService.OfferInsuranceService.InsuranceProgramCode
- create CustomerOffer.Service.InsuranceProgram for the program - is not provided from version 21


	
- RELOffer - if OFPService.ServiceType.Code = RELIP then for each OFPService.OfferRELIPService.OfferRELIPServiceVariant.RELIPServiceVariantTerm create CustomerOffer.RELIPOffer


	
- type = OFPService.ServiceType.Code -is not provided from version 21
- create CustomerOffer.ServiceType for the type
	
- adjustmentRule = Product.ProductToServiceType.AdjustmentRule - is not provided from version 21


	
- serviceVersion = Service.VersionNumber


	
- sortOrder = Product.ProductToService.SortOrder -is not provided from version 21
	
- If there is NO CustomerOffer.Fee.Service for this Service then create CustomerOffer.TariffItem for each tariff item type with SEND_IN_CALCULATE_CUST_OFFER flag from Service.Tariff - is not provided from version 21


	
- commodityCode=OFPService.Commodity_external_id - if COMMODITY_IDENTIFIER is on input and offer2commodity exists


	
- tariff= OFP.offerService.tariff(code/version)
	
- parameters = OFP.OfferService.OfferServiceParam.(type/value)


CustomerOffer.Service.Tariff Item -is not provided from version 21

	
- code =  OFPService.Tariff.TariffItem.Code
	
- calculationMethodType = OFPService.Tariff.TariffItem.CalculationMethodType
	
- ammount = OFPService.Tariff.TariffItem.Amount
	
- percentage = OFPService.Tariff.TariffItem.Percentage
	
- percentageBasedOn = OFPService.Tariff.TariffItem.PercentageBasedOnType
	
- roundingType = OFPService.Tariff.TariffItem.RoundingType
	
- roundingScale = OFPService.Tariff.TariffItem.RoundingScale
	
- taxPercentage = OFPService.Tariff.TariffItem.TaxPercentage
	
- annualRateProjection = OFPService.Tariff.TariffItem.AnnualRateProjection


CustomerOffer.ServiceType -is not provided from version 21

	
- code = OFPService.ServiceType.Code
	
- name = OFPService.ServiceType.Name


	
- category = OFPService.ServiceType.Category.Code


CustomerOffer.Service.InsuranceProgram-is not provided from version 21

	
- code = OFPService.Service.InsuranceProgram.Code
	
- name = OFPService.Service.InsuranceProgram.Name
	
- description = OFPService.InsuranceProgram.Description


CustomerOffer.Commodity - from version 21 only code is provided
Commodity = ProductOfferCalculationRequest.ProductOfferRequestCommodity where ProductOfferCalculationRequest.ProductOfferResponse.OFP.OfferCode = CustomerOffer.code
If COMMODITY_IDENTIFIER is not on input and offer2commodity doesn't exist then the following attributes are on output

	
- type = Commodity.Type
	
- price = Commodity.Price
	
- manufacturer = Commodity.Manufacturer
	
- model = Commodity.Model
	
- SKU = Commodity.SKU


If COMMODITY_IDENTIFIER is on input and offer2commodity  exists then following attributes are on output:

	
- code= offer2commodity

## 🔗 Connections (4)

- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- ← Dependency: [[02.835 Provide Product Offers for External system (UseCase 1820900)]]
- → Dependency: [[Default document container]]

## 📊 Appears In (3 diagrams)

- Logical: CustomerOffer
- Use Case: Product Calculator for External system - Calculate/Recalculate
- Use Case: Product Calculator for External system - Provide Data
