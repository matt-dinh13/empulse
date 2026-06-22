---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)"
domain: "Requirements Model"
element_id: 1845096
diagrams: 4
connections: 17
tags:
  - requirement
  - requirements-model
---

# 📋 Product - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)

## 📝 Notes

- codeVersionNumber
must exists in Product where Product.Code = code and Product.VersionNumber = versionNumber


ProductInputDto
 

	
- code - for creating new product
must be unique in {MOD}Product
must fulfill Product code
	
- name
must fulfill Product name
	
- validFrom
must be >= actual date
	
- validTo
must be >= validFrom
	
- plannedActivationDate
mandatory when versionStatus = FOR_ACTIVATION, otherwise ignored
	
- productProfileCode
must exists in Product Profile
	
- tariffCode
mandatory when product.productProfile.ProductType <> SAI
optional when product.ProductProfile.ProductType = SAI
must exists in Tariff where tariff.currency = currency and Tariff.VersionStatus = Active
	
- termsAndConditions
must exists in Terms And Conditions where TermsAndConditions.Active = true
	
- currency
must exists in Currency
[INVALID_CURRENCY]
	
- description
max length 255
	
- descriptionSales
max length 255
	
- maxGoodsQuantity
must fulfill Max goods


	
- installmentScheduleGenerationTrigger
available only when Product.ProductProfile.ProductType = CEL  or (ProductProfile.ProductType = SAI with Product.ProductFlag.STANDALONE_INSURANCE_WITH_INSTALLMENT = true)
mandatory for CEL
optional for SAI
must exist in IS generation trigger


	
- installmentDueDayShift
available only when Product.ProductProfile.ProductType = REL
must fulfill Installment Due Day Shift - validation
	
- incentiveProgram
available only when Product.ProductProfile.ProductType = REL
must exists in IncentiveProgram retrieved by IncentivePrograms.incentive-programs with parameter: status= RUNNING
	
- approvalDocument
mandatory
max length 60
[INVALID_LENGTH]
	
- lender
must exists in Joint Lender
[INVALID_LENDER]
	
- useFinancingscheme
true only when GlobalParameter.UseFinancingScheme = true and ((Product.ProductProfile.ProductType = REL Product.ProductProfile.IsDebit = false) or (GlobalParameter.UseFinancingSchemeCEL = true and Product.PorductProfile.ProductType = CEL))
[INVALID_VALUE]
	
- financingPackages
each item from list must exists in Financing Package  where FinancingPackage.VesrionStatus = A
[INVALID_FINANCING_PACKAGE]
	
- manufacturers
each item from list must exists in Manufacturer  where manufacturer.activeFlag = true
[INVALID_MANUFACTURER]
	
- marketingActions
each item from list must exists in Marketing Action  where marketingAction.activeFlag = true
[INVALID_MARKETING_ACTION]
	
- productSets
each item from list must exists in Product Set  where productSet.activeFlag = true
[INVALID_PRODUCT_SET]
	
- salesAreas
each item from list muse exists in Sales Area  where salesArea.activeFlag = true
[INVALID_SALES_AREA]
	
- flags
each item from list must exists in productFlag.productFlagType.code where productFlagType.ativeFlag = true
	
- productVariants
Product.ProductProfile.ProductType = CEL and Product.UseFinancingScheme = False
Product.ProductProfile.ProductType = REL and Product.UseFinancingScheme = False and globalParameter.UseFinancingSchemeRELVariants (PCG_USE_RELFS_PRODUCT_VARIANTS) = True
must fulfill ProductVariantDto - validation
	
- commodityTypes
product.useFinancingScheme = Flase
product.productProfile.productType = SAI or product.productProfile.InitialTransaction = POS
must fulfill ProductCommodityTypeDto - validation
	
- containerRules
must fulfill ContainerRuleDto - validation
	
- documentPrintouts
must fulfill DocumentPrintoutDto - validation
	
- services, serviceTypes
must fulfill ProductServiceDto - validation
	
- subventions
must fulfill SubventionDto - validation
	
- regularPaymentType
must exists in list of codes returned  by Get Codelists from CSD with parameters: group = CUST, codelist = REGULAR_PAYMENT and activeYn = true


PUT ActivationInputDto 

	
- must fulfill rule Product catalog entity activation


validation for product activation
must fulfill Product activation validation rules

## 🔗 Connections (17)

- → Dependency: [[Product code (Requirement 1878766)]]
- → Dependency: [[Product name (Requirement 1878767)]]
- → Dependency: [[{MOD}Product activation validation rules]]
- → Dependency: [[DocumentPrintoutDto - validation]]
- → Dependency: [[{ADD}Get Codelists from CSD]]
- → Dependency: [[Installment Due Day Shift - validation]]
- → Dependency: [[Product catalog entity activation]]
- → Dependency: [[Max goods]]
- → Dependency: [[ContainerRuleDto - validation]]
- → Dependency: [[ProductVariantDto - validation]]
- → Dependency: [[ProductServiceDto - validation]]
- → Dependency: [[ProductCommodityTypeDto - validation]]
- → Dependency: [[{MOD}SubventionDto - validation]]
- ← Dependency: [[{MOD}POST products]]
- ← Dependency: [[{MOD}PUT products]]
- ← Dependency: [[{MOD}PUT product activations]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]

## 📊 Appears In (4 diagrams)

- Custom: PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)
- Custom: Validation Rules
- Use Case: Export/Import product setting
- Use Case: Use Case
