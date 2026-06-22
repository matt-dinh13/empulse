---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768264
diagrams: 4
connections: 23
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Application

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Data related to the application and the client.

## 🔗 Connections (21)

- → Dependency: [[Document (Class 1768268)]]
- → Dependency: [[Service (Class 1768269)]]
- → Dependency: [[Contact (Class 1768262)]]
- → Dependency: [[Commodity (Class 1768261)]]
- → Dependency: [[PaymentChannels (Class 1768256)]]
- → Dependency: [[Employment (Class 1768246)]]
- → Dependency: [[ExtendedProperties]]
- → Dependency: [[Relationships]]
- → Dependency: [[RefinancedContractBase]]
- → Dependency: [[PersonCustomAttribute (Class 1768230)]]
- → Dependency: [[ExternalIdentificationAttributes]]
- → Dependency: [[Language (Class 1768217)]]
- → Dependency: [[userStatistics]]
- → Dependency: [[ClientAddress (Class 1768209)]]
- → Dependency: [[Enumerable (Class 1768208)]]
- → Dependency: [[SecurityQuestion (Class 1768206)]]
- → Dependency: [[ExtendedInformation]]
- → Dependency: [[Person (Class 1768197)]]
- ← Dependency: [[UpdateApplicationRequest]]
- ← Dependency: [[CreateAndEvaluateApplicationRequest]]
- ← Dependency: [[CreateApplicationRequest]]

## 📊 Appears In (4 diagrams)

- Logical: Application
- Logical: ApplicationManagementWS_v23 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v23 - CreateApplication
- Logical: ApplicationManagementWS_v23 - UpdateApplication

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
| paymentChannels | PaymentChannels |  |
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
| code | string |  |
| securityQuestion | SecurityQuestion |  |
| extendedInformation | ExtendedInformation |  |
| services | Service |  |
| salesAgentCode | string |  |
| externalIdentificationAttributes | ExternalIdentificationAttribute |  |
| numberOfCreditCards | number |  |
| initialCuid | int |  |
| personCustomAttribute | PersonCustomAttribute |  |
| statementChannel | string |  |
| relationships | Relationships |  |
| refinancedContracts | RefinancedContractBase |  |
| xsellOfferRequested | boolean |  |
| extendedProperties | ExtendedProperties |  |
| estimatedNetWorth | string |  |
