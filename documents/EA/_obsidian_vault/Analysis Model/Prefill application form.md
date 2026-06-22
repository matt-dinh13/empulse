---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID"
domain: "Analysis Model"
element_id: 1822787
diagrams: 6
connections: 12
tags:
  - requirement
  - analysis-model
---

# 📋 Prefill application form

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID

## 📝 Notes

Fields are prefilled as follows. After prefilling, Temporary_Application/Contract.Prefilled is set to TRUE.

For each field of the configuration:
If there is no AF Element Configuration->AF Element Prefill Configuration with non-empty Prefill Source attribute for the particular field, then such field is not prefilled. Otherwise system tries to prefill it with data from appropriate source based on the combination of Prefill source and Prefill source priority (lower number means higher priority) attributes. If the source with higher priority cannot be used, system tries to use the one with lower priority instead:

	
- If Prefill_Source='CIF' then CIF is called via Customer Data.GetCustomerDataRequest with officialOnly=true. Data from response are prefilled according to rules Mapping CIF data to application form and Document prefill rule only if client is not Mystery shopper.
	
- If Prefill Source='PAYM', then system retrieves the data of the bank account used on the client's previous direct debit mandate based on the value of parameter (parameter.properties) useDDMRest as follows:
   a) If TRUE, then system retrieves the corresponding data according to the rule Get client's previous DDM for application form prefilling with client's CUID on the input.
   b) Otherwise system retrieves the corresponding data by calling the GetDDMByCUIDRequest (method of DirectDebitService) with following input parameters:
      - CUID = client's CUID
      - DDMFilter = 'LAST_ACTIVE_DDM' if the parameter (parameter.properties) prefillOnlyActiveDDM = TRUE, otherwise 'ALL_DDM'

Individual data from the respective response are then prefilled according to the rule Mapping PAYM data to application form.
Note: In case the parameter (parameter.properties) useLivePrefill = TRUE, then the respective bank account data are selected and prefilled dynamically upon entering the bank account number by the user.
.
	
- If Prefill Source='CLIENT_SEARCH' and global parameter XsellOfferCodePrefillEnabled = TRUE, than data from initial client search are prefilled according to rule Mapping CLIENT_SEARCH data to application form
	
- If Prefill_Source='PREVIOUS_APPLICATION' and parameter (parameters.properties) previousApplicationPrefillEnabled='TRUE' and previous application is on input, then system uses this data for prefilling.
	
- If Prefill_Source='CABINET' and previous application is on input, then system calls DocumentResource.GetDocumentListRequest with a list of IDs of documents to get their content.


Note:
Following fields will not be prefilled in 2BoD: Name3, Name6, Nickname, Honor after.

Common rules:

	
- If a field already has a value (stored in database), it won't be prefilled again


	
- For address, before prefilling system will compare ‘Permanent Address’ with ‘Contact Address’ and these rules will be applied:

        i.	If all attributes are same, system displays prefilled ‘Contact Address’ and checkbox "Permanent address is different from contact address" is unchecked
        ii.	If any of attribute is different, system display prefilled ‘Contact Address’ and ‘Permanent Address’, checkbox is checked

	
- Addresses are considered as a attribute, i.e. if address of any type exists in the database (regardless the value of all its attributes), the prefill is not performed on any address attribute.

## 🔗 Connections (12)

- ← Generalization: [[Application form prefill - ID]]
- ← Dependency: [[Name3 (GUIElement 1738797)]]
- ← Dependency: [[Nickname (GUIElement 1738795)]]
- ← Dependency: [[Name6 (GUIElement 1738790)]]
- ← Dependency: [[Honor after]]
- → Dependency: [[Mapping CLIENT_SEARCH data to application form]]
- → Dependency: [[Get client's previous DDM for application form prefilling]]
- → Dependency: [[Mapping PAYM data to application form]]
- → Dependency: [[Mapping CIF data to application form]]
- ← Generalization: [[Prefill application form-excel configuration]]
- → Dependency: [[Document prefill rule]]
- ← Dependency: [[Application form construction]]

## 📊 Appears In (6 diagrams)

- Custom: AF definition - ID
- Custom: AF definition - IN
- Custom: AF definition - VN
- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: Overview
- Custom: Product business rules
