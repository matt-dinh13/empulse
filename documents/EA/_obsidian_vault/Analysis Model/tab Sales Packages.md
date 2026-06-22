---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1734206
diagrams: 1
connections: 1
tags:
  - screen
  - analysis-model
---

# 📱 tab Sales Packages

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface

## 📝 Notes

Tab for displaying of Sales Package to Salesroom assignment properties. All items are read only.

Data for displaying  are retrieved by method SalesPackageWS.GetSalesPackageAssignment with input data as follows:
- type = SALESROOM
- value = code of currently displayed salesroom

System reads structure GetSalesPackageAssignmentResponse.ResultGetSalesPackageAssignment.SalesPackageAssignmentValues
(in attribute description it is referenced as SPAValues).

## 🔗 Connections (1)

- → Realisation: [[09.240 Show salesroom (UseCase 1387392)]]

## 📊 Appears In (1 diagrams)

- Custom: tab Sales Packages
