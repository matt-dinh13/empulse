---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1656796
diagrams: 2
connections: 9
tags:
  - requirement
  - modules
---

# 📋 FinancingSchemeValues - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules

## 📝 Notes

// Validation of Financing Scheme Values

FinancingSchemeValues

	
- name
Mandatory [MISSING_NAME]


	
- validFrom
Mandatory [MISSING_VALIDFROM]
If exists version of the Financing Scheme in status A (Active) where version.validFrom <= TODAY then{ADD PCG-1814} validFrom is disabled{/ADD} validFrom must be the same as is in this version (i.e. cannot be updated)
[INVALID_VALIDFROM]


	
- validTo
Optional
If validTo is defined:
- If exists version of the Financing Scheme in status A (Active) where version.validTo < TODAY then{ADD PCG-1814} validFrom is disabled{/ADD} validTo must be the same as is in this version (i.e. cannot be updated)
- validFrom <= validTo
[INVALID_VALIDTO]


	
- currency
Mandatory [MISSING_CURRENCY]
Record with corresponding code must exist in Currency [INVALID_CURRENCY]
	
- minimalTransactionAmount
Optional
If defined then minimalTransactionAmount >= 0 [INVALID_MINTRANSAMOUNT]
	
- maximalTransactionAmount
Optional
If defined then maximalTransactionAmount >= 0 [INVALID_MAXTRANSAMOUNT]
	
- installmentPlanScheme
Mandatory [MISSING_IPSCHEME]
Record with corresponding code must exist in Installment Plan Scheme [INVALID_IPSCHEME]
If a new Financing Scheme is created or the value of installmentPlanScheme is changed then the referenced record in Installment Plan Scheme must be active [INACTIVE_IPSCHEME].


	
- coolingOffPeriodScheme
Optional
Record with corresponding code must exist in Cooling-off Period Scheme [INVALID_COOLOFFSCHEME]
If a new Financing Scheme is created or the value of coolingOffPeriodScheme is changed then the referenced record in Cooling-off Period Scheme must be active [INACTIVE_COOLOFFSCHEME].


	
- tariff
Optional
If defined then record with corresponding code must exist in Tariff [INVALID_TARIFF]
If a new Financing Scheme is created or the value of tariff is changed then the referenced record in Tariff must be active [INACTIVE_TARIFF].


	
- variant
Mandatory [MISSING_VARIANT]
Each assigned FinancingSchemeVariant is checked by the rule below


Cross validation:

	
- If both minimal/maximalTransactionAmount are defined then minimalTransactionAmount <= maximalTransactionAmount [INVALID_INTERVALTRANSAMOUNT]

FinancingSchemeVariant
description = "Variant: " + number

	
- number
Mandatory [MISSING_VARNUMBER]
If more than one FinancingSchemeVariant are assigned to FinancingSchemeValues then their numbers must be different
[NOTUNIQUE_VARNUMBER]


	
- type
Mandatory [MISSING_VARTYPE]
Record with corresponding type code must exist in Financing Scheme Variant Type [INVALID_VARTYPE].
	
- term
Mandatory [MISSING_VARTERM]
term > 0 [INVALID_VARTERM]
	
- totalMonthlyPayment
Mandatory if type = ANNUITY [MISSING_VARTOTALPAYM]
If defined then totalMonthlyPayment > 0 [INVALID_VARTOTALPAYM]
	
- AIR
Mandatory if type = AIR [MISSING_VARAIR]
If defined then 0 <= AIR <= 10.00 (1.00 = 100%) [INVALID_VARAIR]
	
- initTerm
Optional
If defined then 0 < initTerm < term 
Cannot be filled if FinancingSchemeValues.InstallmentPlanScheme.IsInitAIR = False
[INVALID_VARINITTERM]
	
- initAIR
Mandatory if initTerm is defined [MISSING_VARINITAIR]
Cannot be filled if FinancingSchemeValues.InstallmentPlanScheme.IsInitAIR = False
Cannot be filled if InitTerm is not defined
If defined then 0 <= initAIR <= 10.00 (1.00 = 100%) [INVALID_VARINITAIR]


	
- pastDueAIR
Optional, percentage >= 0
[INVALID_VARPASTDUEAIR]
	
- pastDueInitAIR
Optional, percentage >= 0
Cannot be filled if FinancingSchemeValues.InstallmentPlanScheme.IsInitAIR = False
Cannot be filled if InitTerm is not defined 
[INVALID_VARPASTDUEINITAIR]


	
- criterion
Optional
Each assigned FinancingSchemeVariantCriterion is checked by the rule below


Cross validation:

	
- Both or non of initTerm and initAIR must be defined
[INVALID_VARINITTERMINITAIR]


FinancingSchemeVariantCriterion
description = "Variant/Criterion: " + number + " /" type + " " + value

	
- type
Mandatory [MISSING_CRITERIONTYPE]
Code must exist in Financing Scheme Variant Criterion Type 
[INVALID_CRITERIONTYPE]
	
- value
Mandatory [MISSING_CRITERIONVALUE]
For type in (PRICING_CATEGORY) the value can be converted into date time data type 
[INVALID_CRITERIONVALUE].

Validation of value of particular criterion type:

	
- Criterion of type in (MINIMAL_PRICING_CATEGORY, MAXIMAL_PRICING_CATEGORY) must be unique (i.e. can not be defined more than once in the set of criterions)[NOTUNIQUE_CRITERIONTYPE]
	
- If defined then value(MINIMAL_PRICING_CATEGORY) >= 0
	
- If defined then value(MAXIMAL_PRICING_CATEGORY) >= 0
	
- If both defined then value(MINIMAL_PRICING_CATEGORY) <= value(MAXIMAL_PRICING_CATEGORY)
[INVALID_CRITPRICINGCAT].

## 🔗 Connections (9)

- ← Dependency: [[CreateFinancingScheme - validation rules]]
- → Dependency: [[Financing Scheme Variant Criterion Type]]
- → Dependency: [[Installment Plan Scheme]]
- → Dependency: [[Financing Scheme Variant Type]]
- → Dependency: [[Currency (Class 1819822)]]
- → Dependency: [[{DEL}Financing Scheme Initial Payment Type]]
- → Dependency: [[{MOD}Tariff]]
- → Dependency: [[CoolingOff Period Scheme]]
- ← Dependency: [[UpdateFinancingScheme - validation rules]]

## 📊 Appears In (2 diagrams)

- Custom: Financing Scheme Values - validation Rules
- Use Case: Financing Scheme Management UC
