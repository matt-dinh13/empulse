---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input"
domain: "Requirements Model"
element_id: 1865435
diagrams: 6
connections: 22
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Financing package - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input

## 📝 Notes

Error messages are by default errors. 
Warning messages are marked by checkingLevel = WARNING.

POST, PUT FinancingPackageInputDto 

	
- name
Mandatory
[MANDATORY]


	
- versionStatus
must exists in Version Status [INVALID_VERSION_STATUS]


	
- plannedActivationDate
mandatory when versionStatus = FOR_ACTIVATION, otherwise ignored
must be in future [INVALID_PLANNED_ACTIVATION_DATE]


	
- validFrom
If exists version of the Financing Package in status A (Active) where version.validFrom <= TODAY then validFrom is disabled - validFrom must be the same as is in this version (i.e. cannot be updated)
[INVALID_VALIDFROM]


	
- validTo
Optional
If validTo is defined:
- If exists version of the Financing Package in status A (Active) where version.validTo < TODAY then validTo is disabled - validTo must be the same as is in this version (i.e. cannot be updated) 
- validFrom <= validTo
[INVALID_VALIDTO]


	
- criterion
Optional
Each assigned FinancingPackageCriterionDto is checked by the rule below
item
Optional
Each assigned FinancingPackageItemDto  is checked by the rule below
	
- flag
Optional
Each assigned FinancingPackageFlagDto is checked by the rule below


	
- subvention
Optional
Each assigned FinancingPackageSubventionDto is checked by the rule below
	
- initialPayment
Optional
Each assigned InitialPaymentLimitDto is checked by the rule below


POST FinancingPackageInputDto 

	
- code
Mandatory [MANDATORY]
	
- name
Mandatory [MANDATORY]


	
- validFrom
Mandatory [MANDATORY]


FinancingPackageCriterionDto 

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in Financing Package Criterion Type 
{ADD PCG-5016}For project: FLIP - Code must be available in list of Enum active values.financingPackageCriterionType {/ADD}
[INVALID_CRITERIONTYPE]
	
- value
Mandatory
[MISSING_CRITERIONVALUE]
For type in (MINIMAL_TRANSACTION_DATE, MAXIMAL_TRANSACTION_DATE) the value can be converted into date time data type 
[INVALID_CRITERIONVALUE].
Max length is 50 [MAX_LENGTH]
{ADD PCG-5417}For country: IN - Max length is 100 [MAX_LENGTH]{/ADD}
	
- {ADD PCG-5332}operator
For country: VN - mandatory [MANDATORY]
must exist it Financing Package Criterion Operator Type [INVALID_OPERATOR]
{/ADD}

Cross validation:

	
- Criterion of type in (MINIMAL_TRANSACTION_DATE, MAXIMAL_TRANSACTION_DATE) must be unique (i.e. can not be defined more than once in the set of criterions) 
[NOTUNIQUE_CRITERIONTYPE].
	
- {ADD PCG-5499}For country VN: Criterion of type in (MAX_NUMBER_OF_ITEMS) must be unique (i.e. can not be defined more than once in the set of criterions) 
[NOTUNIQUE_CRITERIONTYPE]. {/ADD}


	
- At least one criterion of type (PURPOSE) must be defined
[MISSING_CRITPURPOSE].
	
- Check allowed combinations of criterion values according to rule FinancingPackageCriterionValuesCombination - validation rules.
	
- combination of (type,value) must be unique for financing package
[NONUNIQUE_CRITERIONVALUE]
	
- {ADD PCG-5332}For country: VN - operator must be IN for criterion type in (MINIMAL_TRANSACTION_DATE, MAXIMAL_TRANSACTION_DATE, PURPOSE, TRANSACTION_TYPE {ADD PCG-5499}, MAX_NUMBER_OF_ITEMS{/ADD})
	
- For country: VN - All criteria of one type need to have the same operator. (No combination of operators for one criterion type.)[CRITERION_OPERATOR_MISMATCH]{/ADD}


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
[INVALID_CRITPURPOSE]
	
- If criterion of type (COMMODITY_MODEL_CODE) is defined then:
- Code stored in value(COMMODITY_MODEL_CODE) must exist in Model.Code where Model.Active = True. 
[INVALID_CRITCOMMODITYMODELCODE].
	
- If criterion of type (SERVICE_TYPE) is defined then:
- Code stored in value(SERVICE_TYPE) must exist in Service type    
[INVALID_CRITSERVICETYPE].
	
- If criterion of type (INSURANCE_TYPE) is defined then:
- Code stored in value(INSURANCE_TYPE) must exist in Insurance type     
[INVALID_CRITINSURANCETYPE].
- Available only when criterion of SERVICE_TYPE is set to INSURANCE
	
- If criterion of type (IPPACK_SERVICE_LEVEL) is defined then:
- Code stored in value(IPPACK_SERVICE_LEVEL) must exist in Service Level available for Service type IPPACK
	
- If criterion of type SEGMENT is defined then:
- Code stored in value(SEGMENT) must exist in Segment
	
- {ADD PCG-5499}For country: VN - If criterion of type MAX_NUMBER_OF_ITEMS is defined then:
- numbers only
- value > 0 
[INVALID_CRITMAXITEMS]{/ADD}


FinancingPackageItemDto 

	
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
financingScheme must be unique in scope of financing package [NOTUNIQUE_FINSCHEME]


FinancingPackageFlagDto 

	
- type
Mandatory
[MISSING_FLAGTYPE]
Record with corresponding code must exist in Financing Package Flag Type 
[INVALID_FLAGTYPE]
type must be unique in scope of financing package 
[NOTUNIQUE_FLAGTYPE]


FinancingPackageSubventionDto 

	
- subventionScheme
Mandatory
[MISSING_SUBVSCHEME]
Participant with corresponding code must exist in Subvention Scheme 
[INVALID_SUBVSCHEME]
If a new Financing package Subvention is created or the value of subventionScheme is changed then the referenced record in Subvention Scheme must be active 
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
Combination of (subventionScheme.participant, commodityType, purpose) must be unique in scope of Financing package inclusive combination (subventionScheme.participant, commodityType = not defined, purpose)
[NOTUNIQUE_SUBVKEY]
For combination of (subventionScheme.participant, commodityType, purpose=ALTERNATIVE), the combination of (subventionScheme.participant, commodityType, purpose=STANDARD) must already exists
[INVALID_SUBVCOMBINATION]
At least one of (fixedAmount, percentage) must be entered.
[MISSING_SUBVCALCPARAMS]
If subventionScheme.byCommodityType = False then commodityType cannot be defined.
[DISABLED_SUBVCOMMODITYTYPE]

FinancingPackageInitialPaymentDto 
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
	
- type must be unique in scope of Financing package [NOTUNIQUE_INITPTYPE]


PUT ActivationInputDto 

	
- must fulfill rule Product catalog entity activation

## 🔗 Connections (22)

- ← Dependency: [[POST financing package]]
- ← Dependency: [[PUT financing package]]
- ← Dependency: [[PUT financing package activations]]
- → Dependency: [[Financing Scheme (Class 1668708)]]
- → Dependency: [[Financing Package Flag Type]]
- → Dependency: [[FinancingPackageCriterionValuesCombination - validation rules]]
- → Dependency: [[Subvention Purpose]]
- → Dependency: [[{ADD}Financing Package Criterion Operator Type]]
- → Dependency: [[Subvention Scheme (Class 1865382)]]
- → Dependency: [[Product catalog entity activation]]
- → Dependency: [[Get List of Merchants]]
- → Dependency: [[Financing Package Initial Payment Limit Type]]
- → Dependency: [[Financing Package Purpose]]
- → Dependency: [[{MOD}Transaction Type]]
- → Dependency: [[Segment]]
- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[Manufacturer (Class 1879136)]]
- → Dependency: [[{MOD}Insurance type]]
- → Dependency: [[{ADD}Enum active values]]
- → Dependency: [[Service Level]]
- → Dependency: [[{MOD}Service type]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]

## 📊 Appears In (6 diagrams)

- Custom: PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input
- Custom: PCG-5417 CBL-28991 BRIN-630 - Increase length of few parameter values for CLX Utility and Hosel
- Custom: PCG-5499 CBL-29460 BNPL - Get correct pricing with multiple Commodities
- Custom: Validation Rules
- Use Case: Export/Import product setting
- Use Case: Use Case
