---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1860892
diagrams: 4
connections: 5
tags:
  - enumeration
  - analysis-model
---

# 📝 Transaction Subtype

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

This enumeration contains possible values of account transaction subtypes.
The content is 1:1 the same as values in TransactionSubTypeDto.
Each change in interface has to be reflected even within this class.

## 🔗 Connections (5)

- ← Dependency: [[Outgoing Payment]]
- ← Dependency: [[{ADD}Automatic Payment Orders Setting]]
- → Dependency: [[TransactionSubTypeDto]]
- ← Dependency: [[Transaction To Tariff Item Group]]
- ← Dependency: [[Account Transaction]]

## 📊 Appears In (4 diagrams)

- Logical: Account transaction - Logical data model
- Logical: Automatic Outgoing Payment Orders Setting
- Logical: Mapping Transaction to Tariff Item Group
- Logical: Outgoing Payments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| REG_INT |  |  |
| TW | string |  |
| UN_GP_INT |  |  |
| CD | string |  |
| CL | string |  |
| UNKNOWN | string |  |
| IP_INT |  |  |
