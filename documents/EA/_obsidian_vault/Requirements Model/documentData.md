---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM"
domain: "Requirements Model"
element_id: 1821006
diagrams: 2
connections: 10
tags:
  - class
  - requirements-model
---

# 🔷 documentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

## 📝 Notes

Object representing a structure of the root element of the data source.

When processed in DSM:
Values of individual sub-elements are retrieved as follows:

	
- Application data are retrieved by calling the respective REST API provided by the Loan Origination module (i.e. GET Applications) with following input parameters:
   - code = dataSources.applicationCode from the received POST Generate request
   - projections = ['DIRECT_DEBIT_MANDATE', 'RELATIONSHIP']
Direct debit mandate data are retrieved according to the following sub-steps:
   2.1. System gets the data of all direct debit mandates associated with the respective application according to the rule Get application DDM with following parameters on the input:
            - DirectDebitMandateCode = ApplicationDetailRestTO.directDebitMandates{/ADD} (returned within the previous step)
   2.2. System takes the direct debit mandates returned within the previous sub-step and filters out those, which are in one of the following states:
            - status Canceled (i.e. GetDDMResponse.ddmData.status = 'CNC'),
            - status Finished (i.e. GetDDMResponse.ddmData.status = 'FIN'),
            - confirmation status Rejected (i.e. GetDDMResponse.ddmData.confirmationStatus = 'R').
   2.3. System takes all remaining direct debit mandates and tries to find a one, which is actually valid on the current date (i.e. GetDDMResponse.ddmData.validFrom <= sysdate <= .validTo). When found, data of such direct debit mandate are then used for filling the actual data source elements. Otherwise system selects the direct debit mandate with the closest validity in the future (i.e. compares GetDDMResponse.ddmData.validFrom with sysdate) and uses its data for filling the actual data source elements instead.

## 🔗 Connections (10)

- → Dependency: [[{MOD}Get applicant data from PIF]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Generalization: [[directDebitMandateForm]]
- → Dependency: [[{ADD}Get codelist item from CSD]]
- → Dependency «use»: [[AddressesType]]
- → Dependency: [[Get application DDM]]
- → Dependency: [[{MOD}Get applicant data from PIF]]
- → Dependency «use»: [[ContactsType]]
- → Dependency: [[{ADD}Get codelist item from CSD]]
- → Dependency «use»: [[ExtendedProperties (Class 1878262)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Logical: HO_DIRECT_DEBIT_MANDATE_FORM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| channelId | string |  |
| mandateId | string |  |
| contractId | string |  |
| addresses | AddressesType |  |
| personContacts | ContactsType |  |
| bankName | string |  |
| bankBranchPrimaryCode | string |  |
| accountBranchMICRCode | string |  |
| accountType | string |  |
| acoountNo | string |  |
| accountHolderName | string |  |
| ddmLimit | MoneyType |  |
| ecsStartDate | dateTime |  |
| currentDate | dateTime |  |
| ddmExtendedProperties | ExtendedProperties |  |
| ddmFrequency | string |  |
