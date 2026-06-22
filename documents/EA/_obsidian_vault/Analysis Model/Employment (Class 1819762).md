---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819762
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Employment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Department and designation of the employer of university.

## 🔗 Connections (6)

- → Dependency: [[Address (Class 1819809)]]
- → Dependency: [[Contact (Class 1819789)]]
- ← Dependency: [[Application (Class 1819757)]]
- ← Dependency: [[PersonInformation]]
- ← Dependency: [[{MOD}ClientData (Class 1819736)]]
- → Dependency: [[Enumerable (Class 1819735)]]

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
