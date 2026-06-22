---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820049
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Employment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 📝 Notes

Department and designation of the employer of university.

## 🔗 Connections (6)

- → Dependency: [[Enumerable (Class 1820078)]]
- ← Dependency: [[PersonInformation (Class 1820119)]]
- ← Dependency: [[ClientData (Class 1820099)]]
- → Dependency: [[Contact (Class 1820081)]]
- → Dependency: [[Address (Class 1820098)]]
- ← Dependency: [[Application (Class 1820110)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| employer | Enumerable |  |
| employerContact | ContactType |  |
| employerIdentification | string |  |
| employerAddress | AddressType |  |
| employerIndustry | string |  |
| department | string |  |
| economicalStatus | string |  |
| employedFrom | date |  |
| profession | Enumerable |  |
| employmentType | string |  |
| salaryDay | integer |  |
| salaryPaymentMethod | string |  |
| totalWorkExperience | long |  |
| salaryFrequency | string |  |
| universityCourse | Enumerable |  |
| totalWorkExperienceInterval | string |  |
