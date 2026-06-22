---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1758555
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 PAYM_Extended_Property_Value

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

Object keeping the specific values of individual extended property items. Each record has a direct link to the parent object itself as well as to extended property item and extended property group defining the type of entity for such object.

## 🔗 Connections (5)

- → Dependency: [[Outgoing Payment]]
- → Association: [[PAYM_Extended_Property_Item]]
- → Dependency: [[DDM Draft]]
- → Dependency: [[DDM (Class 1869699)]]
- → Association: [[PAYM_Extended_Property_Group]]

## 📊 Appears In (3 diagrams)

- Logical: Contract - DDM
- Logical: DDM Draft
- Logical: PAYM Extended Properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Extended Property Item Code | PAYM_Extended_Property_Item |  |
| Extended Property Group Code | PAYM_Extended_Property_Group |  |
| Parent ID | long |  |
| Value | string |  |
| Archived | boolean |  |
| Created By | User |  |
| Creation Date | dateTime |  |
