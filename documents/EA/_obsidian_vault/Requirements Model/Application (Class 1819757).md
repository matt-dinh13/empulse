---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1819757
diagrams: 6
connections: 24
tags:
  - class
  - requirements-model
---

# 🔷 Application

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Data related to the application and the client.

## 🔗 Connections (23)

- → Dependency: [[Document (Class 1819793)]]
- → Dependency: [[ExtendedProperties (Class 1819810)]]
- → Dependency: [[Contact (Class 1819789)]]
- → Dependency: [[RefinancedContractBase (Class 1819788)]]
- → Dependency: [[Relationships (Class 1819782)]]
- → Dependency: [[Person (Class 1819806)]]
- → Dependency: [[PersonCustomAttribute (Class 1819776)]]
- → Dependency: [[Employment (Class 1819762)]]
- → Dependency: [[ExternalIdentificationAttributes (Class 1819767)]]
- → Dependency: [[ClientAddress (Class 1819802)]]
- → Dependency: [[{MOD}PaymentChannel]]
- → Dependency: [[ExtendedInformation (Class 1819801)]]
- → Dependency: [[Language (Class 1819781)]]
- → Dependency: [[{MOD}PaymentChannel]]
- → Dependency: [[Service (Class 1819812)]]
- → Dependency: [[SecurityQuestion (Class 1819748)]]
- → Dependency: [[Commodity (Class 1819747)]]
- → Dependency: [[userStatistics (Class 1819738)]]
- → Dependency: [[Enumerable (Class 1819735)]]
- ← Dependency: [[CreateAndEvaluateApplicationRequest (Class 1819728)]]
- ← Dependency: [[UpdateAndEvaluateApplicationRequest]]
- ← Dependency: [[UpdateApplicationRequest (Class 1819687)]]
- ← Dependency: [[CreateApplicationRequest (Class 1819686)]]

## 📊 Appears In (6 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Logical: Application
- Logical: ApplicationManagementWS_v22 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v22 - CreateApplication
- Logical: ApplicationManagementWS_v22 - UpdateAndEvaluateApplication
- Logical: ApplicationManagementWS_v22 - UpdateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| xSellOfferCode | string |  |
| clientName1 | string |  |
| clientName2 | string |  |
| clientName3 | string |  |
| clientName4 | string |  |
| clientName5 | string |  |
| clientName6 | string |  |
| nickname | string |  |
| mothersName | string |  |
| clientBirthDate | date |  |
| clientBirthPlace | Enumerable |  |
| contacts | Contact |  |
| accompanimentType | string |  |
| preferredLanguages | Language |  |
| employments | Employment |  |
| clientMaritalStatusCode | string |  |
| clientEducationCode | string |  |
| clientChildrenCount | int |  |
| clientDependentPersonsCount | integer |  |
| salesAgentPhoneNumber | string |  |
| documents | Document |  |
| internalCodeType | string |  |
| internalCode2Type | string |  |
| additionalInformationCode | string |  |
| comment | string |  |
| occupationIncomeAmount | decimal |  |
| byWorkIncomeAmount | decimal |  |
| householdIncomeAmount | decimal |  |
| householdExpensesAmount | decimal |  |
| otherDebtsAmount | decimal |  |
| mainSourceOfIncome | string |  |
| preferredPaymentDay | int |  |
| addresses | ClientAddress |  |
| bankAccountOwnership | boolean |  |
| financeBankName | string |  |
| relatedPersons | Person |  |
| disbursementPaymentChannel | {MOD}PaymentChannel |  |
| repaymentPaymentChannel | {MOD}PaymentChannel |  |
| useDDMAccountForDisbursement | boolean |  |
| loanPurpose | string |  |
| clientCitizenship | string |  |
| clientGender | string |  |
| clientHouseType | string |  |
| clientChildrenSchool | string |  |
| clientJointFamily | boolean |  |
| clientIdentificationNumber | string |  |
| clientHonorAfter | string |  |
| clientReligion | string |  |
| userStatistics | userStatistics |  |
| financialSituation | string |  |
| commodities | Commodity |  |
| plannedContactMode | string |  |
| plannedContactDateAndTime | datetime |  |
| securityQuestion | SecurityQuestion |  |
| code | string |  |
| services | Service |  |
| extendedInformation | ExtendedInformation |  |
| salesAgentCode | string |  |
| externalIdentificationAttributes | ExternalIdentificationAttribute |  |
| numberOfCreditCards | number |  |
| initialCuid | int |  |
| personCustomAttribute | PersonCustomAttribute |  |
| statementChannel | string |  |
| relationships | Relationships |  |
| xsellOfferRequested | boolean |  |
| refinancedContracts | RefinancedContractBase |  |
| extendedProperties | ExtendedProperties |  |
| estimatedNetWorth | string |  |
