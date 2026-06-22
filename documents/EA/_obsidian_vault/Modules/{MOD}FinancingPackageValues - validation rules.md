---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1842677
diagrams: 2
connections: 11
tags:
  - requirement
  - modules
---

# 📋 {MOD}FinancingPackageValues - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules

## 📝 Notes

// Validation of Financing Package Values

FinancingPackageValues

	
- name
Mandatory
[MISSING_NAME]


	
- validFrom
Mandatory
[MISSING_VALIDFROM]
If exists version of the Financing Package in status A (Active) where version.validFrom <= TODAY then validFrom is disabled - validFrom must be the same as is in this version (i.e. cannot be updated)
	
- [INVALID_VALIDFROM]


	
- validTo
Optional
If validTo is defined:
- If exists version of the Financing Package in status A (Active) where version.validTo < TODAY then validTo is disabled - validTo must be the same as is in this version (i.e. cannot be updated) 
- validFrom <= validTo
[INVALID_VALIDTO]


	
- criterion
Optional
Each assigned FinancingPackageCriterion is checked by the rule below
	
- item
Optional
Each assigned FinancingPackageItem is checked by the rule below
	
- flag
Optional
Each assigned FinancingPackageFlag is checked by the rule below


	
- subvention
Optional
Each assigned FinancingPackageSubvention is checked by the rule below
	
- initialPayment
Optional
Each assigned FinancingPackageInitialPaymentLimit is checked by the rule below


FinancingPackageCriterion
description = "Criterion: " + type + " " + value

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in Financing Package Criterion Type 
[INVALID_CRITERIONTYPE]
	
- value
Mandatory
[MISSING_CRITERIONVALUE]
For type in (MINIMAL_TRANSACTION_DATE, MAXIMAL_TRANSACTION_DATE) the value can be converted into date time data type 
[INVALID_CRITERIONVALUE].

Cross validation:

	
- Criterion of type in (MINIMAL_TRANSACTION_DATE, MAXIMAL_TRANSACTION_DATE) must be unique (i.e. can not be defined more than once in the set of criterions) 
[NOTUNIQUE_CRITERIONTYPE].


	
- At least one criterion of type (PURPOSE) must be defined
[MISSING_CRITPURPOSE].
	
- Check allowed combinations of criterion values according to rule FinancingPackageCriterionValuesCombination - validation rules.
	
- {ADD PCG-3142}combination of (type,value) must be unique for financing package
[NONUNIQUE_CRITERIONVALUE]{/ADD}


Validation of value of particular criterion type:

	
- value(MINIMAL_TRANSACTION_DATE) <= value(MAXIMAL_TRANSACTION_DATE)
[INVALID_CRITTRANSDATES].
	
- If criterion of type (COMMODITY_TYPE) is defined then:
- Code stored in value(COMMODITY_TYPE) must exist in Commodity Type. 
[INVALID_CRITCOMMODITYTYPE].
- If a new Financing Package is created or the value(COMMODITY_TYPE) is changed then referenced record in Commodity Type must be set with Active = True 
[INACTIVE_CRITCOMMODITYTYPE].


	
- If criterion of type (MERCHANT) is defined then:
- Code stored in value(MERCHANT) must exist in list of Merchants returned by the rule Get List of Merchants. 
[INVALID_CRITMERCHANT]
- If list of Merchants is not available then return code [NONAVAILABLE_MERCHANT].


	
- If criterion of type (COMMODITY_MANUFACTURER) is defined then:
- Code stored in value(COMMODITY_MANUFACTURER) must exist in Manufacturer 
[INVALID_CRITMANUFACTURER].
- If a new Financing Package is created or the value(COMMODITY_MANUFACTURER) is changed then referenced record in Manufacturer must be set with Active = True 
[INACTIVE_CRITMANUFACTURER].
	
- If criterion of type (TRANSACTION_TYPE) is defined then code stored in value(TRANSACTION_TYPE) must exist in Transaction Type 
[INVALID_CRITTRANSTYPE].
	
- If criterion of type (PURPOSE) is defined then code stored in value(PURPOSE) must exist in Financing Package Purpose 
[INVALID_CRITPURPOSE].

FinancingPackageItem
description = "Preference/Financing Scheme: " + " " + preference + "/" + financingScheme

	
- preference
Mandatory
[MISSING_PREFERENCE]
preference >= 0 [INVALID_PREFERENCE]


	
- financingScheme
Mandatory
[MISSING_FINANCINGSCHEME]
Record with corresponding code where VersionStatus = Active (A) must exist in Financing Scheme (FS) 
[INVALID_FINSCHEME]
FS.ValidTo >= FinancingPackageValues.validTo or FS.ValidTo >= TODAY or FS.ValidTo is empty
[NONVALID_FINSCHEME, checkingLevel = WARNING]
financingScheme must be unique in scope of FinancingPackageValues 
[NOTUNIQUE_FINSCHEME]


FinancingPackageFlag
description = "Flag Type: " + " " + type

	
- type
Mandatory
[MISSING_FLAGTYPE]
Record with corresponding code must exist in Financing Package Flag Type 
[INVALID_FLAGTYPE]
type must be unique in scope of FinancingPackageValues 
[NOTUNIQUE_FLAGTYPE]


FinancingPackageSubvention
description = "SubventionScheme/CommodityType: " + " " + subventionScheme + "/" + commodityType

	
- subventionScheme
Mandatory
[MISSING_SUBVSCHEME]
Participant with corresponding code must exist in Subvention Scheme 
[INVALID_SUBVSCHEME]
If a new Financing Scheme Subvention is created or the value of subventionScheme is changed then the referenced record in Subvention Scheme must be active 
[INACTIVE_SUBVSCHEME].
	
- commodityType
Optional
Commodity Type with corresponding code must exist in Commodity Type 
[INVALID_SUBVCOMMODITYTYPE]
	
- fixedAmount
Optional
fixedAmount >= 0 
[INVALID_SUBVFIXEDAMOUNT]
	
- percentage
Optional
percentage >= 0 
[INVALID_SUBVPERCENTAGE]
	
- purpose
Must exist in Subvention Purpose 
[INVALID_SUBVPURPOSE]
If globalParameter.useSubventionPurpose (PCG_USE_SUBVENTION_PURPOSE) = false then purpose = STANDARD


Cross validation:
Combination of (subventionScheme.participant, commodityType, purpose) must be unique in scope of FinancingPackageValues inclusive combination (subventionScheme.participant, commodityType = not defined, purpose)
[NOTUNIQUE_SUBVKEY]
For combination of (subventionScheme.participant, commodityType, purpose=ALTERNATIVE), the combination of (subventionScheme.participant, commodityType, purpose=STANDARD) must already exists
[INVALID_SUBVCOMBINATION]
At least one of (fixedAmount, percentage) must be entered.
[MISSING_SUBVCALCPARAMS]
If subventionScheme.byCommodityType = False then commodityType cannot be defined.
[DISABLED_SUBVCOMMODITYTYPE]

FinancingPackageInitialPaymentLimit
description = "Initial Payment Type: " + type

	
- type
Mandatory[MISSING_INITPTYPE]
Corresponding type code must exist in entity Financing Package Initial Payment Limit Type [INVALID_INITPTYPE].


	
- fixedAmount
If defined then fixedAmount > 0 [INVALID_INITPAMOUNT]


	
- rate
If defined then rate > 0 [INVALID_INITPRATE]

Cross validation:

	
- Either fixedAmount or rate must be defined [MISSING_INITPVALUES]
	
- type must be unique in scope of FinancingPackageValues [NOTUNIQUE_INITPTYPE]

## 🔗 Connections (11)

- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[{MOD}Transaction Type]]
- ← Dependency: [[UpdateFinancingPackage - validation rules]]
- → Dependency: [[Financing Scheme (Class 1668708)]]
- → Dependency: [[Manufacturer (Class 1879136)]]
- ← Dependency: [[CreateFinancingPackage - validation rules]]
- → Dependency: [[Get List of Merchants]]
- → Dependency: [[{MOD}Financing Package Criterion Type]]
- → Dependency: [[FinancingPackageCriterionValuesCombination - validation rules]]
- → Dependency: [[Period Unit (Enumeration 1819824)]]
- → Dependency: [[Financing Package Purpose]]

## 📊 Appears In (2 diagrams)

- Custom: Financing Package Values - validation rules
- Use Case: Financing Package UC
