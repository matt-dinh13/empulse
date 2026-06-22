---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Business Rules"
domain: "Modules"
element_id: 1705400
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}Service activation validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Business Rules

## 📝 Notes

Validations processed before activation of service version. 
 

	
- If Service.ServiceType.Category = INSURANCE then get data about insurance program via GET request: /rest/v1.0/insurance-programs/(externalId) with following parameters:
- externalId = Service.InsuranceService.InsuranceProgramCode
If no other version of the same service in status Active exists and Version.ValidFrom < TODAY then error is displayed (MSG_NO_OTHER_SERVICE_VERSION).
	
- If Service.ValidTo < TODAY+1 then warning is displayed (MSG_VALID_TO_LTHAN_TMRW).
	
- If  no tariff for service is assigned then warning is displayed (MSG_NO_TARIFF).
	
- If  tariff for service is assigned and does not exist Active version for this tariff then error is displayed (MSG_TARIFF_NOT_ACTIVE).
	
- {ADD PCG-3731}If Service.Tariff <> Tariff.ServiceRestriction or Tariff.ServiceRestriction is not null then error is displayed (MSG_TARIFF_RESTRICTION).{/ADD}
	
- If Service.ServiceType.ServiceCategory = "Insurance" then
-- If does not exist Active version for Service.InsuranceProgram then error is displayed (MSG_INSPROGRAM_NOT_ACTIVE)
-- If interval <Service.ValidFrom, Service.ValidTo> is not inside the interval <InsuranceProgram.ValidFrom, InsuranceProgram.ValidTo> then warning is displayed (MSG_VALID_TIME_IP_NOT_IN_INTERVAL).
	
- If Service.Tariff.Purpose not in (CEL_SERVICE, REL_SERVICE, CEL_INSURANCE_SERVICE, REL_INSURANCE_SERVICE, STANDALONE_INSURANCE_SERVICE, empty) then warning is displayed (MSG_TARIncorrectTariffPurpose).
	
- If Service.ServiceType.Code = RELIP then checking by RELIP Service activation validation rules is executed.
	
- If Service.MandatoryOnContract = true then warning is displayed (MSG_MANDATORY_ON_CONTRACT_TRUE. 
If there are any other services with (Service.MandatoryOnContract = true and Service.Active = true) then warning is displayed (MSG_MANDATORY_SERVICE).
	
- If no approval document is assigned to service then error is displayed (MSG_NO_APPROVAL_DOCUMENT).
	
- Service.MandatoryOnContract = true and Service.ServiceType.Category = INSURANCE and these conditions are fullfilled
(
- Service.ServiceType.DedicatedForProductType = REL or empty
- Service.InsuranceService.FirstPeriodDuration in (ESTIMATED_LAST_REPAYMENT_DATE_AND_OFFSET, LAST_REPAYMENT_DATE_ADN_OFFSET, TERM_COUNT_WITH_LIMIT, TERM_COUNT)
)
or
(
- Service.ServiceType.DedicatedForProductType = CEL or empty
- Service.InsuranceService.FirstPeriodTrigger in (FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET, FIRST_EOM_BILLING_DATE)
)
then error is displayed (MSG_MANDATORY_ON_CONTRACT_INSURANCE_PERIOD).
	
- If Service.MandatoryOnContract = true and Service.ServiceType.Category = INSURANCE and Service.InsuranceService.InsuranceProgram has filled any of following attributes (InsuranceCustomDataDef, InsuranceEligibilityCriteria) then error is displayed (MSG_MANDATORY_ON_CONTRACT_ELIGIBILITY).

## 🔗 Connections (4)

- ← Dependency: [[Automatic Version activation processing]]
- ← Dependency: [[{DEL}08.180 Activate Service version manually]]
- ← Dependency: [[{MOD}PUT services]]
- ← Dependency: [[{MOD}POST services]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Manage Services
- Use Case: Use Case
