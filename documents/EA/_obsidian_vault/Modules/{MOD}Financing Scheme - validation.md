---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes/Validation Rules"
domain: "Modules"
element_id: 1695257
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Financing Scheme - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes/Validation Rules

## 📝 Notes

POST, PUT FinancingSchemeInputDto 
Validations:

	
- code
Number of characters must be in interval <4, 20>
Allowed characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed) 
[INVALID_CODE]


	
- versionStatus
must exists in Version Status [INVALID_VERSION_STATUS]
	
- plannedActivationDate
mandatory when versionStatus = FOR_ACTIVATION, otherwise ignored
must be in future [INVALID_PLANNED_ACTIVATION_DATE]
	
- validFrom
If exists version of the Financing Scheme in status A (Active) where version.validFrom <= TODAY then (validFrom is disabled) validFrom must be the same as is in this version (i.e. cannot be updated)
[INVALID_VALIDFROM]


	
- validTo
If validTo is defined:
- If exists version of the Financing Scheme in status A (Active) where version.validTo < TODAY then (validTo is disabled) validTo must be the same as is in this version (i.e. cannot be updated)
- validFrom <= validTo
[INVALID_VALIDTO]


	
- currency
Record with corresponding code must exist in Currency [INVALID_CURRENCY]
	
- minimalTransactionAmount
Optional
equal or higher than 0 [INVALID_MINTRANSAMOUNT]
	
- maximalTransactionAmount
Optional
equal or higher than 0 [INVALID_MAXTRANSAMOUNT]
	
- installmentPlanScheme
Record with corresponding code must exist in Installment Plan Scheme and active
It can not be updated on existing financing scheme [INVALID_VALUE]


	
- coolingOffPeriodScheme
Optional
Record with corresponding code must exist in Cooling-off Period Scheme and active
If a Financing Scheme is updated or the value of coolingOffPeriodScheme is changed then the referenced record in Cooling-off Period Scheme must be active [COOLING_OFF_PERIOD_SCHEME_NOT_FOUND].


	
- tariff
Optional
If defined then record with corresponding code must exist in Tariff and active
If a Financing Scheme is updated or the value of tariff is changed then the referenced record in Tariff must be active [INVALID_TARIFF]


	
- variant
Each assigned FinancigSchemeVariantDto is checked by the rule below


Cross validation:

	
- If both minimal/maximalTransactionAmount are defined then minimalTransactionAmount <= maximalTransactionAmount [INVALID_INTERVALTRANSAMOUNT]



POST FinancingSchemeInputDto 
Validations:

	
- code
Mandatory [MANDATORY]
	
- name
Mandatory [MANDATORY]


	
- validFrom
Mandatory [MANDATORY]


	
- currency
Mandatory  [MANDATORY]


	
- variant
Mandatory [MANDATORY]



POST, PUT FinancigSchemeVariantDto 
description = "Variant: " + number

	
- number
Mandatory [MANDATORY]
If more than one FinancingSchemeVariant are assigned to FinancingSchemeValues then their numbers must be different
[NOTUNIQUE_VARNUMBER]


	
- type
Mandatory [MANDATORY]
Record with corresponding type code must exist in Financing Scheme Variant Type [INVALID_FINANCING_SCHEME_VARIANT_TYPE].
	
- term
Mandatory [MANDATORY]
term > 0 [INVALID_VALUE]
	
- totalMonthlyPayment
Mandatory if type = ANNUITY [MANDATORY]
If defined then totalMonthlyPayment > 0 [INVALID_VALUE]
	
- AIR
If defined then 0 <= AIR <= 1.00 (1.00 = 100%) [INVALID_PERCENTAGE]
Only one of AIR or giftPAIR can be filled
	
- initTerm
Optional
If defined then 0 < initTerm < term 
Cannot be filled if FinancingSchemeValues.InstallmentPlanScheme.IsInitAIR = False
[INVALID_INIT_TERM]
	
- initAIR
Mandatory if initTerm is defined [MANDATORY]
Cannot be filled if FinancingSchemeValues.InstallmentPlanScheme.IsInitAIR = False
Cannot be filled if InitTerm is not defined
If defined then 0 <= initAIR <= 10.00 (1.00 = 100%) [INVALID_INIT_AIR]
Only one of initAIR or giftPAIR can be filled.


	
- pastDueAIR
Optional, percentage >= 0
[INVALID_VALUE]
	
- pastDueInitAIR
Optional, percentage >= 0
Cannot be filled if FinancingSchemeValues.InstallmentPlanScheme.IsInitAIR = False
Cannot be filled if InitTerm is not defined 
[INVALID_VALUE]


	
- minimalPricingCategory
higher or equal 0
	
- maximalPricingCategory
higher or equal 0
if minimalPricingCategory is filled then maximalPricingCategory need to be higher or equal minimalPricingCategory [VAL_INVALID_MAX_PRICING_CATEGORY]
	
- numberOfGiftPayments
If defined then 0 < numberOfGiftPayments < term


	
- giftPAIR
If defined then 0 <= AIR <= 1.00 (1.00 = 100%) [INVALID_PERCENTAGE]
Can not be filled if numberOfGiftPayments is not defined
Only one of AIR or giftPAIR can be filled
Only one of initAIR or giftPAIR can be filled


Cross validation:

	
- Both or none of initTerm and initAIR must be defined
[INVALID_INIT_AIR_AND_TERM]
	
- Only one of AIR or giftPAIR can be filled
Only one of initAIR or giftPAIR can be filled
One of AIR or giftPAIR must be filled


{ADD PCG-3620}
PUT ActivationInputDto 

	
- must fulfill rule Product catalog entity activation

{/ADD}

## 🔗 Connections (5)

- → Dependency: [[Product catalog entity activation]]
- ← Dependency: [[POST financing schemes]]
- ← Dependency: [[PUT financing schemes]]
- ← Dependency: [[PUT financing scheme activations]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]

## 📊 Appears In (3 diagrams)

- Custom: Validation Rules
- Use Case: Export/Import product setting
- Use Case: Use Case
