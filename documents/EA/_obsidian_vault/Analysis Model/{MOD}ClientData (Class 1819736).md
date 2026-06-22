---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819736
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ClientData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 🔗 Connections (10)

- → Dependency: [[Contact (Class 1819789)]]
- → Dependency: [[FinancialData]]
- → Dependency: [[Language (Class 1819781)]]
- → Dependency: [[PersonCustomAttribute (Class 1819776)]]
- → Dependency: [[NameType]]
- → Dependency: [[Employment (Class 1819762)]]
- → Dependency: [[ClientAddress (Class 1819802)]]
- → Dependency: [[PersonInformation]]
- → Dependency: [[Document (Class 1819793)]]
- ← Dependency: [[ApplicationDetail]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientAddresses | AddressType |  |
| contacts | ContactType |  |
| honorAfter | string |  |
| mothersName | string |  |
| nickname | string |  |
| clientEmployement | EmploymentType |  |
| additionalPersons | PersonInformation |  |
| name | NameType |  |
| birthDate | Date |  |
| clientBirthPlace | KeyOrValue Type |  |
| education | KeyOrValue Type |  |
| gender | KeyOrValue Type |  |
| houseType | KeyOrValue Type |  |
| jointFamily | Boolean |  |
| maritalStatus | KeyOrValue Type |  |
| numberOfDependentPersons | Number |  |
| number of children | Number |  |
| nationalIdentificationNumber | KeyOrValue Type |  |
| religion | KeyOrValue Type |  |
| citizenship | KeyOrValue Type |  |
| documentAdditionalInformation | KeyOrValue Type |  |
| documents | Document |  |
| financialData | FinancialData |  |
| preferredLanguage | Language |  |
| personCustomAttribute | PersonCustomAttribute |  |
