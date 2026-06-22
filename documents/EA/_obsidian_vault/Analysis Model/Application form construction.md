---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN"
domain: "Analysis Model"
element_id: 1822814
diagrams: 5
connections: 15
tags:
  - requirement
  - analysis-model
---

# 📋 Application form construction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN

## 📝 Notes

This algorithm defines how application form is constructed. 

Input:

	
- temporary application(TA)/contract
	
- contract origination type (1SP or 2SP)
	
- block of data (1BoD or 2BoD) - optional
	
- scope of data - optional


Procedure:

	
- Design of each panel, section and field is described in use interface model (Product AF), that is specific for each country.
	
- The other properties of each field or section are get from specific configuration. If offer has been already selected for the TA/contract, system finds specific Product Profile linked to the contract.
	
- Configuration of the application form defined for found Product profile is searched according to input and the rule Find application form configuration (if no product is found, the rule is called only with default=1 value).
	
- Visibility of each field or section is set according to rule Set visibility of the object. Note: this information is temporarily stored in country specific excel file
	
- If database structures of the contract already exist, all applicable fields are prefilled with available data from such structures, otherwise temporary application data are used instead. Data of entities stored in the external modules are retrieved via the respective API provided by such modules as follows:

5.1.  If there is any commodity associated with the application (i.e. Temporary_Application->Application_2_Commodity.Commodity_ID / Contract->Contract Commodity.Commodity_ID exists), system retrieves the data of each such commodity according to the rule Get application commodity data with respective CommodityID on the input.
5.2.  System retrieves the data of each payment channel associated with the application according to the rule Get application payment channel with following parameters on the input:
   - PaymentChannelID = (Contract->)Temporary_Application->Application_to_Payment_Channel.Payment_Channel_ID
In case of failure (i.e. when ErrorCode is returned on the rule's output), system displays the respective error message (defined by the returned ErrorCode) and use case ends.
5.3.  If the application's disbursement payment channel is of a Card account type with non-empty reference to the external card (i.e. GetPaymentChannelResponse.paymentChannels[.purpose='DI' and .type = 'CA' and .externalCardId is not null] was returned within the previous sub-step), then system retrieves the data of such external payment card according to the rule Get external payment card data with following parameters on the input:
   - ExternalPaymentCardID = GetPaymentChannelResponse.paymentChannels[.purpose='DI' and .type = 'CA'].externalCardId
In case of failure (i.e. when ErrorCode is returned on the rule's output), system displays the respective error message (defined by the returned ErrorCode) and use case ends.
5.4.  If the parameter (parameter.properties) useDDMRest = TRUE, then system retrieves the data of the direct debit mandate associated with the application according to the rule Get application DDM with following parameters on the input:
   - DirectDebitMandateCode = (Contract->)Temporary_Application->Application_to_DDM.DDM_ID
In case of failure (i.e. when ErrorCode is returned on the rule's output), system displays the respective error message (defined by the returned ErrorCode) and use case ends.

.
	
- If the visible field has defined property clearedFields then the stored value is not displayed for particular application form  defined in the rule Cleared fields on application form
	
- System checks the setting of SupplementaryPrefillAvailabilityDays and existence of saved application code in Temporary Application->ExternalIdentifier.Value with key = PREVIOUS_APPLICATION_CODE. When:
a) application meets parameter SupplementaryPrefillAvailabilityDays and previous application code is saved then
the defined fields for application are prefilled, stored For related person remitter: phone contact will be processed base on rule Processing remmiter's contact type
b) otherwise
- prefill functionality is enabled (property usePrefill = TRUE) AND 
- the client of the TA/contract is identified (Temporary_Application.Initial_CUID/Client.CUID is known) AND 
- prefill has not been done yet (Temporary_Application/Contract.Prefilled=FALSE) AND
- contract is not mystery shopping (Contract.Mystery_Shopping=FALSE) if system tracks mystery shopping contracts (global parameter MysteryShoppingTracking=TRUE)
then rhe rest of the fields defined in configuration are prefilled according to rule Prefill application form, otherwise nothing is prefilled.
	
- The fields are masked according the rule Mask fields rule for AUI
	
- Editability of each field or section is set according to rule Set editability of the object. Note: this information is temporarily stored in country specific excel file
	
- Rule Set obligation of filling in the object defines if field is mandatory or not. If it is, the field is graphical highlighted. Note: this information is temporarily stored in country specific excel file

## 🔗 Connections (15)

- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- → Dependency: [[Get application commodity data]]
- → Dependency: [[Find application form configuration]]
- → Dependency: [[Get external payment card data]]
- → Dependency: [[Get application DDM]]
- → Dependency: [[{MOD}Processing remmiter's contact type]]
- → Dependency: [[Mystery shopper]]
- → Dependency: [[Mask fields rule for AUI]]
- → Dependency: [[Get application payment channel]]
- → Dependency: [[Set visibility of the object]]
- → Dependency: [[Set obligation of filling in the object]]
- → Dependency: [[Set editability of the object]]
- → Dependency: [[Cleared fields on application form]]
- → Dependency: [[Prefill application form]]

## 📊 Appears In (5 diagrams)

- Custom: AF definition - IN
- Custom: AF definition - VN
- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: Product business rules
- Use Case: Fill in application - 2SP
