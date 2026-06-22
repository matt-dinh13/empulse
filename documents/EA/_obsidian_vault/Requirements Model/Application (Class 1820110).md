---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1820110
diagrams: 8
connections: 24
tags:
  - class
  - requirements-model
---

# 🔷 Application

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

Data related to the application and the client.

## 🔗 Connections (23)

- → Dependency: [[Service (Class 1820115)]]
- → Dependency: [[ClientAddress (Class 1820116)]]
- → Dependency: [[ExternalIdentificationAttributes (Class 1820128)]]
- → Dependency: [[ExtendedProperties (Class 1820111)]]
- → Dependency: [[RefinancedContractBase (Class 1820109)]]
- → Dependency: [[Relationships (Class 1820108)]]
- → Dependency: [[SecurityQuestion (Class 1820105)]]
- → Dependency: [[Document (Class 1820104)]]
- → Dependency: [[Commodity (Class 1820094)]]
- → Dependency: [[Contact (Class 1820081)]]
- → Dependency: [[Enumerable (Class 1820078)]]
- → Dependency: [[userStatistics (Class 1820076)]]
- → Dependency: [[ExtendedInformation (Class 1820068)]]
- → Dependency: [[Language (Class 1820065)]]
- → Dependency: [[PersonCustomAttribute (Class 1820064)]]
- → Dependency: [[Employment (Class 1820049)]]
- → Dependency: [[PaymentChannel (Class 1820047)]]
- → Dependency: [[PaymentChannel (Class 1820047)]]
- → Dependency: [[Person (Class 1820043)]]
- ← Dependency: [[UpdateApplicationRequest (Class 1820032)]]
- ← Dependency: [[CreateApplicationRequest (Class 1820030)]]
- ← Dependency: [[CreateAndEvaluateApplicationRequest (Class 1820020)]]
- ← Dependency: [[UpdateAndEvaluateApplicationRequest (Class 1820014)]]

## 📊 Appears In (8 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Logical: Application
- Logical: ApplicationManagementWS_v21 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - CreateApplication
- Logical: ApplicationManagementWS_v21 - InitiateEvaluation
- Logical: ApplicationManagementWS_v21 - UpdateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - UpdateApplication

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
| contacts | Contact |  |
| clientBirthPlace | Enumerable |  |
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
| disbursementPaymentChannel | PaymentChannel |  |
| repaymentPaymentChannel | PaymentChannel |  |
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
| commodities | Commodity |  |
| financialSituation | string |  |
| plannedContactMode | string |  |
| plannedContactDateAndTime | datetime |  |
| securityQuestion | SecurityQuestion |  |
| code | string |  |
| services | Service |  |
| extendedInformation | ExtendedInformation |  |
| salesAgentCode | string |  |
| numberOfCreditCards | number |  |
| externalIdentificationAttributes | ExternalIdentificationAttribute |  |
| initialCuid | int |  |
| personCustomAttribute | PersonCustomAttribute |  |
| statementChannel | string |  |
| relationships | Relationships |  |
| xsellOfferRequested | boolean |  |
| refinancedContracts | RefinancedContractBase |  |
| extendedProperties | ExtendedProperties |  |
