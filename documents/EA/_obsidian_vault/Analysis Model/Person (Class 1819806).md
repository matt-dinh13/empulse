---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819806
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Person

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 🔗 Connections (4)

- → Dependency: [[Contact (Class 1819789)]]
- → Dependency: [[Remittance Data (Class 1819759)]]
- ← Dependency: [[Application (Class 1819757)]]
- → Dependency: [[PersonAddress (Class 1819740)]]

## 📊 Appears In (1 diagrams)

- Logical: Application

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name1 | string |  |
| name2 | string |  |
| name3 | string |  |
| name4 | string |  |
| name5 | string |  |
| name6 | string |  |
| fullName | string |  |
| birthDate | date |  |
| genderType | GenderType |  |
| address | PersonAddress |  |
| relationType | string |  |
| contacts | Contact |  |
| remitter | boolean |  |
| birthPlace | string |  |
| identificationNumber | string |  |
| remittance | RemittanceData |  |
| personId | string |  |
