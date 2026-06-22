---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768246
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Employment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Department and designation of the employer of university.

## 🔗 Connections (4)

- → Dependency: [[Contact (Class 1768262)]]
- ← Dependency: [[{MOD}Application]]
- → Dependency: [[Address (Class 1768241)]]
- → Dependency: [[Enumerable (Class 1768208)]]

## 📊 Appears In (1 diagrams)

- Logical: Application

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| employer | Enumerable |  |
| employerIdentification | string |  |
| employerContact | ContactType |  |
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
