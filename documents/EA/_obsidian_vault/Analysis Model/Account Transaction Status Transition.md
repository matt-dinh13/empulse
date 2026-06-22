---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1860889
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Account Transaction Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

Log of status transitions for Account Transaction

## 🔗 Connections (2)

- → Dependency: [[Account Transaction Status Type]]
- → Aggregation: [[Account Transaction]]

## 📊 Appears In (3 diagrams)

- Logical: Account transaction - Logical data model
- Logical: CSI-1740 - Update TransactionSupplement domain
- Logical: Transaction Supplement authorization method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created by | User |  |
| Status | Account Transaction Status Type |  |
| Creation Date | DateTime |  |
