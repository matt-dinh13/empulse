---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819801
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ExtendedInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Extended application data, that can be updated after the final evaluation.

LDM of attributes
- key= Contract->ExtendedInformation.Key (name of the enumeration, one of following values Enterprise_Category, Enterprise_Subcategory, Investment_Amount, Investment_Category)
- value = Contract->ExtendedInformation.Value

## 🔗 Connections (3)

- ← Dependency: [[ApprovedApplication (Class 1819797)]]
- → Generalization «XSDextension»: [[KeyValueType (Class 1819772)]]
- ← Dependency: [[Application (Class 1819757)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: ApplicationManagementWS_v22 - UpdateApprovedApplication
