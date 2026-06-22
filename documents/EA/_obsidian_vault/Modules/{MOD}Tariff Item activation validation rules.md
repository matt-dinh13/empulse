---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules"
domain: "Modules"
element_id: 1870819
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Tariff Item activation validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules

## 📝 Notes

Validations of Tariff Items processed before activation of tariff version. 
Abbreviations:
TI = currently checked TariffItem
TARIFF = superior Tariff
TIT = TI.TariffItemType
TITFlag = Flag assigned to TIT, e.g. TITFlag(CEL) means flag of type CEL assigned to TIT

Sets of 

	
- CELBaseAmountTypes
	
- RELBaseAmountTypes
	
- CELBaseNumberTypes
	
- RELBaseNumberTypes
	
- SAIBaseAmountTypes

are defined by the rule Tariff Item Bases allowed for Product Type.

If TARIFF.Purpose in (CEL_PRODUCT, CEL_SERVICE, CEL_INSURANCE_SERVICE)

	
- If TITFlag(CEL) is not assigned then error is displayed (MSG_TARInvalidTITProductType $(TIT.Code)).
	
- If TI.LimitNumberBasedOn is not in (CELBaseNumberTypes, empty) then error is displayed (MSG_TARInvalidNumberBase $(TIT.Code), $(Product Type)).
	
- If TI.LimitAmountBasedOn is not in (CELBaseAmountTypes, empty) then error is displayed (MSG_TARInvalidAmountBase $(TIT.Code), $(Product Type)).
	
- If TI.PercentageBasedOn is not in (CELBaseAmountTypes, empty) then error is displayed (MSG_TARInvalidPercentageBase $(TIT.Code), $(Product Type)).
	
- If TIT.Usage is in (A(Standard), S(Service), SI(Sum Insured)) and (
(TI.LimitNumberBasedOn is not in (TN, empty) or 
(TI.LimitAmountBasedOn is not in (WP, SP, GP, GPS, A, empty) or
(TI.PercentageBasedOn is not in (WP, SP, GP, GPS, A, SI, WPI, PSP, BP, FINS, IPINS, {ADD PCG-4710}Mobi only: INTA,{/ADD}{ADD PCG-5511}PH only: INTA{/ADD}, empty)
) then error is displayed (MSG_TARInvalidBaseForOfferCalc $(TIT.Code))


If TARIFF.Purpose in (REL_PRODUCT, REL_SERVICE, REL_INSURANCE_SERVICE)

	
- If TIFlag(REL) is not assigned then error is displayed (MSG_TARInvalidTITProductType $(TIT]).


	
- If TI.LimitNumberBasedOn is not in (RELBaseNumberTypes, empty) then error is displayed (MSG_TARInvalidNumberBase $(TIT.Code), $(Product Type)).
	
- If TI.LimitAmountBasedOn is not in (RELBaseAmountTypes, empty) then error is displayed (MSG_TARInvalidAmountBase $(TIT.Code), $(Product Type)).


	
- If TI.PercentageBasedOn is not in (RELBaseAmountTypes, empty) then error is displayed (MSG_TARInvalidPercentageBase $(TIT.Code), $(Product Type)).
	
- If TIT.Usage is in (A(Standard), S(Service), SI(Sum Insured)) and (
(TI.LimitNumberBasedOn is not in empty or 
(TI.LimitAmountBasedOn is not in (PCL, NCL, GP, GPS, empty) or
(TI.PercentageBasedOn is not in (PCL, NCL, GP, GPS, SI, BP,{ADD PCG-4710}Mobi only: INTA,{/ADD} empty)
) then error is displayed (MSG_TARInvalidBaseForOfferCalc $(TIT.Code))


If TARIFF.Purpose in (STANDALONE_INSURANCE_SERVICE)

	
- If TIFlag(SAI) is not assigned then error is displayed (MSG_TARInvalidTITProductType $(TIT]).


	
- If TI.LimitNumberBasedOn is not empty then error is displayed (MSG_TARInvalidNumberBase $(TIT.Code), $(Product Type)).


	
- If TI.LimitAmountBasedOn is not in (SAIBaseAmountTypes, empty) then error is displayed (MSG_TARInvalidAmountBase $(TIT.Code), $(Product Type)).
	
- If TI.PercentageBasedOn is not in (SAIBaseAmountTypes, empty) then error is displayed (MSG_TARInvalidPercentageBase $(TIT.Code), $(Product Type)).
	
- If TIT.Usage is in (A(Standard), S(Service), SI(Sum Insured)) and (
(TI.LimitNumberBasedOn is not empty or 
(TI.LimitAmountBasedOn is not in (GP, empty) or
(TI.PercentageBasedOn is not in (GP, BP, empty)
) then error is displayed (MSG_TARInvalidBaseForOfferCalc $(TIT.Code))


Other validations:

	
- If TI.PercentageBasedOn = WPI and TIT.Usage <> SI then error is displayed (MSG_TARBaseWPINotUsageSI $(TIT.Code)).


	
- If TI.PercentageBasedOn = SI and TIT.Usage = SI then error is displayed (MSG_TARBaseSIUsageSI $(TIT.Code)).
	
- If TIT.Category = I(Interest) and TI.CalculationMethod <> P(Percentage) or A(Annual Percentage) then error is displayed (MSG_TARCategoryINotMethodP $(TIT.Code)).
	
- If TARIFF.Purpose in (CEL_PRODUCT, REL_PRODUCT) and TIT.Usage = S (Service) then warning is displayed (MSG_TARUsageSOnProductTariff $(TIT.Code)).
	
- If TARIFF.Purpose in (CEL_SERVICE, REL_SERVICE, CEL_INSURANCE_SERVICE, REL_INSURANCE_SERVICE) and TIT.Usage = A(Standard) then warning is displayed (MSG_TARUsageAOnServiceTariff $(TIT.Code)).
	
- If exists another TI in TARIFF where current TIT = another TIT then warning is displayed (MSG_TARTariifItemTypeDuplicity $(TIT.Code)).
	
- If exists more than one TI in TARIFF with the same tariff item type then all TI need to have the same TI.LimitAmountBasedOn and intervals of <TI.LimitAmountFrom, TI.LimitAmountTo> must not intersect  else warning is displayed (PCG_TARInvalidLimitAmount $(TIT.Code))
	
- If exists more than one TI in TARIFF with the same tariff item type then all TI need to have the same TI.LimitNumberBasedOn and intervals of <limit number from, limit number to> must not intersect else warning is displayed (MSG_TARInvalidLimitNumber $(TIT.Code))
	
- If TARIFF.ServiceRestriction exists and TI.TIT.ServiceLock <> TARIFF.ServiceRestriction then error is displayed (MSG_TARServiceRestriction).
	
- If exists more than one TI in TARIFF with the same tariff item type then all TI need to have the same TI.LimitValueBasedOn and TI.LimitValue must not be the same else warning is displayed (MSG_TARInvalidLimitValue $(TIT.Code))
	
- If TI.LimitValueBasedOn = LOAN_PURPOSE then TI.LimitValue must exists in list of purposes obtained by rule Get Codelists from CSD with parameters: group = CUST, codelist = PURPOSE and activeYn = true, else error is displayed().
	
- {ADD PCG-5010 PH} PH only: If exists more than one TI in TARIFF with the same tariff item type then all TI must have different TI.LimitValue if TI.LimitValueBasedOn = RG else warning is displayed (MSG_TARRiskGradeDuplicity $(TIT.Code)){/ADD}

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Tariff activation validation rules]]
- ← Dependency: [[{MOD}TariffItemDto - validation]]
- → Dependency: [[{ADD}Get Codelists from CSD]]
- → Dependency: [[{MOD}Tariff Item Bases allowed for Product Type]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Custom: PCG-5010 New Limit Value Base Type and Limit Value for POS Tariff
- Custom: PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: Validation Rules
