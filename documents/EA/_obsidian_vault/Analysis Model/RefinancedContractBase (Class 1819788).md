---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819788
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefinancedContractBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Entity holding basic data about the refinanced contract.

## 🔗 Connections (2)

- ← Dependency: [[Application (Class 1819757)]]
- ← Generalization «XSDextension»: [[RefinancedContract (Class 1819734)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| internal | boolean |  |
| amount | decimal |  |
