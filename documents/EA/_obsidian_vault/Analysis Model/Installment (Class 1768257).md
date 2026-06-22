---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768257
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 🔗 Connections (2)

- → Dependency: [[InstallmentItem (Class 1768210)]]
- ← Dependency: [[{MOD}ApplicationDetail]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | integer |  |
| dateDue | date |  |
| dueDateCustomer | date |  |
| type | string |  |
| items | InstallmentItem |  |
