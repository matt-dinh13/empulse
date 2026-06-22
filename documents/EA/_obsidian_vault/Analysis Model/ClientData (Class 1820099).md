---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820099
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 ClientData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 🔗 Connections (10)

- → Dependency: [[PersonInformation (Class 1820119)]]
- → Dependency: [[ClientAddress (Class 1820116)]]
- → Dependency: [[Contact (Class 1820081)]]
- → Dependency: [[FinancialData (Class 1820066)]]
- → Dependency: [[Language (Class 1820065)]]
- → Dependency: [[PersonCustomAttribute (Class 1820064)]]
- ← Dependency: [[ApplicationDetail (Class 1820059)]]
- → Dependency: [[CreatedDocument]]
- → Dependency: [[NameType (Class 1820053)]]
- → Dependency: [[Employment (Class 1820049)]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientAddresses | AddressType |  |
| honorAfter | string |  |
| mothersName | string |  |
| contacts | ContactType |  |
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
| documents | CreatedDocument |  |
| financialData | FinancialData |  |
| preferredLanguage | Language |  |
| personCustomAttribute | PersonCustomAttribute |  |
