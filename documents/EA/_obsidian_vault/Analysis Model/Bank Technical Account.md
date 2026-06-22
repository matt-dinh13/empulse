---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Logical Data Model/Common"
domain: "Analysis Model"
element_id: 1627831
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Bank Technical Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Logical Data Model/Common

## 📝 Notes

Technical account - example of use: In OBS, cash loans to clients with bank account at Kazpost are not sent directly to clients' accounts one by one. Instead, a bulk payment (containing multiple outgoing payments) is created and sent to Kazpost's technical account together with a list of disbursed contracts. Kazpost uses two technical accounts for bulk payments - one for disbursement to clients' card accounts and one for disbursement to client current accounts.

## 🔗 Connections (3)

- → Association: [[Bank Account (Class 1627830)]]
- → Dependency: [[Technical account type]]
- → Aggregation: [[Bank (Class 1761500)]]

## 📊 Appears In (1 diagrams)

- Logical: Common - Bank account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Key | Technical account type |  |
| Valid from | date |  |
| Valid to | date |  |
| {ADD}Bank account code | Text(20) |  |
