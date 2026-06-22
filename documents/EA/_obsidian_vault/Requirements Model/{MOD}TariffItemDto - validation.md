---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles"
domain: "Requirements Model"
element_id: 1867125
diagrams: 3
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}TariffItemDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles

## 📝 Notes

TariffItemDto  

	
- code
automatically set
[INVALID_VALUE]


	
- currency
must exists in Currency
[INVALID_CURRENCY]
	
- typeCode
must exist in Tariff Item Type 
[INVALID_TARIFF_ITEM_TYPE]
If Tariff.ServiceRestriction is filled then TariffItemType.ServiceLock must be the same as Tariff.ServiceRestriction [TARIFF_SERVICE_RESTRICTION]
If Tariff.Purpose is CEL_PRODUCT, CEL_SERVICE or CEL_INSURANCE_SERVICE then TariffItemType must have flag FOR_CEL
If Tariff.Purpose is REL_PRODUCT, REL_SERVICE or REL_INSURANCE_SERVICE then TariffItemType must have flag FOR_REL
If Tariff.Purpose is STANDALONE_INSURANCE_SERVICE then TariffItemType must have flag FOR_SAI
	
- category
ignored in requests, set according to typeCode value when created


	
- group
only possible combination from Tariff Item Group 2 Tariff Item Type Configuration 
[INVALID_VALUE]


	
- limitNumberBasedOn
base type must exists in Tariff Item Bases allowed for Product Type  (BaseNumberTypes)
For project: FLIP - Code must be available in list of Enum active values.baseType
limitNumberFrom or limitNumberTo must be filled if limitNumberBasedOn is filled
[REQUIRED]


	
- limitNumberFrom
cannot be filled without limitNumberBasedOn
[INVALID_VALUE]
must be between 0 and 999
[INVALID_NUMBER]


	
- limitNumberTo
cannot be filled without limitNumberBasedOn
[INVALID_VALUE]
must be > limitNumberFrom
[INVALID_LIMIT_NUMBER_TO]
must be between 0 and 999
[INVALID_NUMBER]


	
- limitAmountBasedOn
base type must exists in Tariff Item Bases allowed for Product Type (BaseAmountTypes)
For project: FLIP - Code must be available in list of Enum active values.baseType
limitAmountFrom or limitAmountTo must be filled if limitAmountBasedOn is filled
[REQUIRED]
	
- limitAmountFrom
cannot be filled without limitAmountBasedOn
[INVALID_VALUE]
must be  >= 0
[INVALID_NUMBER]
	
- limitAmountTo
cannot be filled without limitAmountBasedOn
[INVALID_VALUE]
must be > AmountFrom
[INVALID_LIMIT_AMOUNT_TO]
must be >= 0
[INVALID_NUMBER]
	
- limitValueBasedOn
base type must exists in Tariff Item Bases allowed for Product Type (BaseValueTypes)
For project: FLIP - Code must be available in list of Enum active values.baseType [INVALID_BASE_VALUE]
must be filled if limitValue is filled [REQUIRED]
	
- limitValue
must exists in list of values for specific limitaValueBasedOn Source for limit value 
must be filled if limitValueBasedOn is filled [REQUIRED]


	
- roundingType
must exists in RoundingTypeDto
	
- roundingScale
value must be between 0 and 1,000,000,000 or equal to 0
[INVALID_ROUNDING_SCALE]


	
- annualRateProjection
value must exists in Tariff Annual Rate Projection
mandatory for calculationMethod: ANNUAL_PERCENTAGE
[REQUIRED]
	
- taxPercentage
less than 1 and only 6 decimal places are allowed
[INVALID_PERCENTAGE]


	
- percentageBasedOn
base type must exists in Tariff Item Bases allowed for Product Type  
For project: FLIP - Code must be available in list of Enum active values.baseType
	
- percentage
must be > 0
less than 99.99 and only 6 decimal places are allowed
[INVALID_PERCENTAGE]
	
- amount
must be > 0
[INVALID_NUMBER]
	
- minAmount
must be >= 0
[INVALID_NUMBER]
must be filled if minAmountToZero is set as true
[REQUIRED]


	
- maxAmount
must be >= 0
[INVALID_NUMBER]
must be > minAmount
[NVALID_MAX_AMOUNT]
	
- calculationMethod
must exists in Tariff Item Calculation Method
For project: FLIP - Code must be available in list of Enum active values.calculationMethod
	
- textToDisplay.key
must exists in System Language.code
mandatory when textToDisplay.value is filled
	
- textToDisplay.value
max length 255
mandatory when textToDisplay.key is filled
	
- {ADD PCG-5511}
divideByTerms
For country: PH
can be true (1) only when Divide By Terms rule is fulfilled 
{/ADD}


For calculationMethod = MANUAL_AMOUNT

	
- cannot be filled these attributes: percentageBasedOn, percentage, roundingType, roundingScale, amount, minAmount, maxAmount, minAmountToZero
[INVALID_VALUE]
	
- has to be filled: taxPercentage
[REQUIRED]
	
- only Period In Days is allowed for annualRateProjection when calculationMethod = MANUAL_AMOUNT 
[INVALID_VALUE]


For calculationMethod = FIXED

	
- cannot be filled these attributes: annualRateProjection, percentageBasedOn, percentage, roundingType, roundingScale, minAmount, maxAmount, minAmountToZero
[INVALID_VALUE]
	
- has to be filled: taxPercentage, amount
[REQUIRED]


For calculationMethod = ANNUAL_PERCENTAGE

	
- cannot be filled these attributes: amount
[INVALID_VALUE]
	
- has to be filled: taxPercentage, annualRateProjection, percentageBasedOn, percentage, roundingType, roundingScale
[REQUIRED]


For calculationMethod = PERCENTAGE

	
- cannot be filled these attributes: annualRateProjection, amount
[INVALID_VALUE]
	
- has to be filled: taxPercentage,  percentageBasedOn, percentage, roundingType, roundingScale
[REQUIRED]


For country: PH
For calculationMethod = COMBINED

	
- cannot be filled these attributes: annualRateProjection
[INVALID_VALUE]
	
- has to be filled: taxPercentage,  percentageBasedOn, percentage, roundingType, roundingScale, amount
[REQUIRED]
	
- fixedAmount =< maxAmount


Must fulfill validation according rule Base type validation based on tariff item type 

Must fulfill validation according  rule Tariff Item activation validation rules

## 🔗 Connections (7)

- → Dependency: [[{ADD}Divide By Terms rule]]
- → Dependency: [[{ADD}Enum active values]]
- → Dependency: [[Base type validation based on tariff item type]]
- → Dependency: [[Source for limit value]]
- → Dependency: [[{MOD}Tariff Item Bases allowed for Product Type]]
- ← Dependency: [[Tariff - validation]]
- → Dependency: [[{MOD}Tariff Item activation validation rules]]

## 📊 Appears In (3 diagrams)

- Custom: BREIT-62 – AM/AP/PCG Product configuration for Flip
- Custom: PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: Validation Rules
