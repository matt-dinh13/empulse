---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1761501
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Bank Branch Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Entity is used to hold information about bank's address or it's parts.

## 🔗 Connections (3)

- → Dependency: [[SN Address Role]]
- ← Association: [[Bank Branch (Class 1761502)]]
- → Association: [[Address]]

## 📊 Appears In (3 diagrams)

- Logical: Address - CORE
- Logical: Bank Management
- Logical: BankManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Role | SN Address Role |  |
