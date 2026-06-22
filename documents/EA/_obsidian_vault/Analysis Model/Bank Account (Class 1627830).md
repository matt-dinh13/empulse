---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1627830
diagrams: 16
connections: 22
tags:
  - class
  - analysis-model
---

# 🔷 Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

Contains all information about bank account of given entity (e.g. client's bank account)

## 🔗 Connections (21)

- ← Dependency: [[Bank account type]]
- ← Dependency: [[Bank account type]]
- ← Dependency: [[Bank account type]]
- ← Dependency: [[Bank account type]]
- ← Association: [[Outgoing Payment File]]
- ← Association: [[Salesroom Bank Account (Class 1556405)]]
- ← Association: [[Partner Bank Account (Class 1595591)]]
- → Dependency: [[Account Type]]
- ← Association: [[Bank Technical Account]]
- → Association: [[Bank Branch (Class 1761502)]]
- → Dependency: [[Currency (Class 1819822)]]
- → Dependency: [[Account Holder Type]]
- ← Association: [[Outgoing Payment Order]]
- ← Association: [[{ADD}JFC Partner Code To Bank Account]]
- ← Association: [[Contract Status Transition Request for Termination]]
- ← Dependency: [[DDM (Class 1869699)]]
- → Aggregation: [[DDM (Class 1869699)]]
- ← Association: [[{MOD}Payment Channel]]
- ← Association: [[{MOD}Payment Channel]]
- ← Association: [[Incoming Payment]]
- ← Association: [[Contract Bank Account]]

## 📊 Appears In (16 diagrams)

- Logical: Automatic source bank account assignment - OP orders
- Logical: Bank Management
- Logical: Common - Bank account
- Logical: Contract
- Logical: Contract - DDM
- Logical: Contract finishing - LDM
- Logical: Contract Management
- Logical: Incoming payments
- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments
- Logical: Partner
- Logical: Payment Channels
- Logical: Salesroom
- Logical: SNM Bank Account Synchronization
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account Number | Account number (35) |  |
| Archived | Boolean |  |
| Currency | Currency |  |
| {DEL}For payments | Boolean |  |
| Holder Name | Text (255) |  |
| Holder type | Account Holder Type |  |
| Type | Account Type |  |
| {ADD}Bank Branch Synchronization Code | Text (20) |  |
| {ADD}Bank Account Code | Text (20) |  |
