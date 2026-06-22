---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1734194
diagrams: 1
connections: 1
tags:
  - object
  - analysis-model
---

# 🔸 Available Sales Packages

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface

## 📝 Notes

List of sales packages available to be assigned to the salesroom (sales packages which are not already assigned today or in future).

Data are retrieved by method SalesPackageWS.GetSalesPackageAssignmentCodeLists.SalesPackage (in attribute description referenced as SP). Only active records are displayed.

Data in grid can be filtered according to rule Filter available sales packages for an assignment to salesroom.

Paging: yes

Localization code: SAL_AvailableSalesPackages

## 🔗 Connections (1)

- → Dependency: [[{ADD}Filter available sales packages for an assignment to salesroom]]

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package to Salesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Selection | checkbox | false |
