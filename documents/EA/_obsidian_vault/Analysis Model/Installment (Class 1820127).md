---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820127
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 🔗 Connections (2)

- ← Dependency: [[ApplicationDetail (Class 1820059)]]
- → Dependency: [[InstallmentItem (Class 1820051)]]

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
