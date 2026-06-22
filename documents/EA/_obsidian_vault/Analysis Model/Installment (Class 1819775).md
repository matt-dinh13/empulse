---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819775
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 🔗 Connections (2)

- → Dependency: [[InstallmentItem (Class 1819813)]]
- ← Dependency: [[ApplicationDetail]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | integer |  |
| dateDue | date |  |
| type | string |  |
| dueDateCustomer | date |  |
| items | InstallmentItem |  |
