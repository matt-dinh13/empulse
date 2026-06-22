---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773433
diagrams: 2
connections: 30
tags:
  - requirement
  - analysis-model
---

# 📋 Application validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- clientName1
	
- clientName2- Length <= 30
	
- clientName3
	
- clientName4
	
- clientName5
	
- clientName6
	
- nickname


	
- mothersName


	
- clientBirthDate
	
- clientBirthPlaceCode
	
- accompanimentType- must be value of Companiment Type.Code
	
- preferredLanguage – each record is validated according to Language validation rule
	
- clientMaritalStatusCode - must be value of Marital Status.Code
	
- clientEducationCode- must be value of Education.Code
	
- clientChildrenCount
	
- clientDependentPersonsCount
	
- contact– each record is validated according to Contact validation rule; contactTypeRole must be CL (MSG_Ext_ContactTypeRole)
	
- address– each record is validated according to ClientAddress validation rule and Unique address type if delivery type = 'CUSTOMER CONTACT or CUSTOMER PERMANENT' then record of attribute address for which is address primary must be present
	
- salesAgentPhoneNumber
	
- document
– Documents must pass Min number of documents validation. (note: if only uuid is supplied, system will call DMS to get document data)
– Then each record is validated according to Document validation rule 
– Document entity and its attributes are validated according to Validation rules: Add/Edit documents. //Not applicable for ApplicationManagementWS_v22 and later
– Only one identification document (Document_type.Flag=ID_DOC) and one client photo (Document_type.Flag='PHOTO') could be present (MSG_5005). //Not applicable for ApplicationManagementWS_v22 and later
	
- internalCodeType- must be value of Internal Code Type.Code
	
- internalCodeType2- must be value of Internal Code Type.Code
	
- additionalInformationCode- must be value of Additional Information Type.Code
	
- comment
	
- salesman
	
- employment– each record is validated according to Employment validation rule
	
- occupationIncomeAmount-Must be greater or equal 0.
	
- byWorkIncomeAmount
	
- householdIncomeAmount
	
- householdExpensesAmount
	
- otherDebtsAmount
	
- mainSourceOfIncome - must be value of Source Of Income.Code
	
- preferredPaymentDay
	
- bankAccountOwnership
	
- financeBankName
	
- relatedPerson –count is validated according to Number of related person of each type, each record is validated according to Person validation rule and Unique related person
	
- disbursementPaymentChannel– validated according to PaymentChannelType validation rule, If useDDMAccountForDisbursement<>TRUE, then mandatory (not for SAI product type)  //until version v22
	
- repaymentPaymentChannel– validated according to PaymentChannelType validation rule, Mandatory //until version v22
	
- paymentChannels - each payment channel identifier can be max 18 char long, must be number  //from version v23
	
- useDDMAccountForDisbursement - If value is TRUE, DDM account must exist and system checks that GBA disbursement method is supported for used product on offer[MSG_DDM_DATA_CANNOT_BE_USED_FOR_DISBURSEMENT] //until version v22
	
- loanPurpose - must be value of Loan Purpose.Code
	
- clientCitizenship- must be value of Country.Code
	
- clientGender
	
- clientHouseType - must be value of House Type.Code
	
- clientChildrenSchool - must be value of Children School.Code
	
- clientJointFamily
	
- clientIdentificationNumber
	
- clientHonorAfter
	
- clientReligion - must be value of Religion.Code
	
- financialSituation
	
- commodity – each record is validated according to Commodity validation rule


	
- plannedContactMode - must be value of Preferred contact mode Type.Code
	
- plannedContactDateAndTime - Must be in the future
	
- code-value must be unique (MSG_VALUE_HAS_TO_BE_UNIQUE) only if Application is not in status DRAFT (Temporary_Application.Saved = true and Temporary_Application.Contract_ID = NULL)
	
- services – each record is validated according to InsuranceService validation rule and Card Service validation rule
	
- xSellOfferCode
	
- xSellOfferRequested
	
- extendedInformation - each record is validated according to Extended information validation rule
	
- salesAgentCode- must be Employee number from User or Employee code for active users from UMC
	
- securityQuestion - each record is validated according to Security question validation rule
	
- numberOfCreditCards
	
- externalIdentificationAttributes - each record is validated according to External Identifier validation rule and Unique external identifier


	
- statement channel - must be value of statement_channel.code. Value of statement channel is store in TA.statement_channel only if product type = REL.
	
- personCustomAttribute - each record is validated according to Person Custom Attribute validation rule
	
- relationships - each subordinate .relationship record is validated according to the Relationship validation rule
	
- refinancedContracts - each record is validated according to the Refinanced Contract validation rule and Unique refinanced contract


	
- extendedProperties - each subordinate .extendedProperty record is validated according to the Extended property validation rule
	
- estimatedNetWorth - must be value of Net Worth Type.Code


Some of the attributes has its own country specific validations:

	
- IN – Application validation rule - IN
	
- ID – Application validation rule-ID
	
- PH – Application validation rule-PH
	
- KZ – Application validation rule-KZ
	
- VN – Application validation rule-VN


Then also cross validations are performed, each country has its own:

	
- IN – Application cross-validation rules - IN
	
- ID – N/A
	
- PH – Application cross-validation rules - PH
	
- KZ – Application cross-validation rules - KZ
	
- VN – Application cross-validation rules - VN

## 🔗 Connections (30)

- ← Generalization: [[{MOD}Application validation rule-ID]]
- ← Generalization: [[{MOD}Application validation rule-PH]]
- ← Generalization: [[Application validation rule-VN]]
- → Dependency: [[Min number of documents]]
- → Dependency: [[Application cross-validation rules - IN]]
- → Dependency: [[Application cross-validation rules - VN]]
- → Dependency: [[Application cross-validation rules - PH]]
- → Dependency: [[Number of related person of each type]]
- → Dependency: [[{MOD}Document validation rule]]
- → Dependency: [[Security question validation rule]]
- → Dependency: [[Card Service validation rule]]
- → Dependency: [[Commodity validation rule]]
- → Dependency: [[Person validation rule]]
- → Dependency: [[Refinanced Contract validation rule]]
- → Dependency: [[Language validation rule]]
- → Dependency: [[ClientAddress validation rule]]
- → Dependency: [[Unique refinanced contract]]
- → Dependency: [[Employment validation rule]]
- → Dependency: [[External Identifier validation rule]]
- → Dependency: [[Extended property validation rule]]
- → Dependency: [[Person Custom Attribute validation rule]]
- ← Dependency: [[Application validation rule]]
- → Realisation: [[Unique external identifier]]
- → Dependency: [[Unique address type]]
- → Dependency: [[Relationship validation rule]]
- → Dependency: [[PaymentChannel validation rule]]
- → Dependency: [[InsuranceService validation rule]]
- → Dependency: [[Contact validation rule]]
- → Dependency: [[Extended information validation rule]]
- ← Generalization: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules - ID
