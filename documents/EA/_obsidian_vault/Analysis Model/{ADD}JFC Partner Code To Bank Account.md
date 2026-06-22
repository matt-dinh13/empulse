---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746971
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}JFC Partner Code To Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

{ADD PAYM-1488 CBL-3570}
Keeps relation between Credit Owner Codes (it should be only JFC Partners) and Bank account.

This setting is used during outgoing payment orders generation to select appropriate source bank account, through which money will be disbursed.

## 🔗 Connections (2)

- → Association: [[Bank Account (Class 1627830)]]
- → Dependency: [[Credit Owner]]

## 📊 Appears In (1 diagrams)

- Logical: Automatic source bank account assignment - OP orders

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| JFC Partner Code | string |  |
| {ADD}Partner bank account code | Text(20) |  |
