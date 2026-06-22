---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1734199
diagrams: 1
connections: 2
tags:
  - screen
  - analysis-model
---

# 📱 Assign Sales Packages to Salesroom

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface

## 📝 Notes

Form for sales package assignment to salesroom.

Data for displaying  are retrieved by method SalesPackageWS.GetSalesPackageAssignment with input data as follows:
- type = SALESROOM
- value = code of currently displayed salesroom

System reads structure GetSalesPackageAssignmentResponse.ResultGetSalesPackageAssignment.SalesPackageAssignmentValues
(in attribute description it is referenced as SPAValues).
Entered dates ValidFrom/To are adjusted according to the rule Sales Package Management and Assignment - rules for transformation of ValidFrom/ValidTo from UI.

Localization code: SAL_AssignSalesPackage

## 🔗 Connections (2)

- → Realisation: [[{ADD}09.276 Assign sales package to salesroom (UseCase 1274812)]]
- → Dependency: [[Sales Package Management and Assignment - rules for transformation of ValidFrom_ValidTo from UI]]

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package to Salesroom
