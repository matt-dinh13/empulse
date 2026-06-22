---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1869699
diagrams: 7
connections: 23
tags:
  - class
  - analysis-model
---

# 🔷 DDM

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

Class serves to strore information about cient's direct defit mandates, their basic informations and states.

## 🔗 Connections (22)

- ← Association: [[{ADD}DDMSystemEvent]]
- ← Dependency: [[PAYM_Extended_Property_Value]]
- → Dependency: [[{ADD}DDM Type (Enumeration 1869700)]]
- → Dependency «use»: [[Regular payment type (Class 1822522)]]
- → Dependency: [[KeyOrValue Type]]
- → Dependency: [[DDM Status Type]]
- → Dependency: [[DDM Confirmation Status Type]]
- → Aggregation: [[DDM Outgoing Confirmation File]]
- → Dependency: [[ECS Provider (Enumeration 1869709)]]
- → Dependency: [[DDM Cancellation Reason]]
- ← Association: [[{MOD}DDM Document]]
- → Dependency: [[PAYM_Extended_Property_Group]]
- ← Aggregation: [[Direct Debit Statement]]
- → Dependency: [[Bank Account (Class 1627830)]]
- → Association: [[Bank (Class 1761500)]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Bank Account (Class 1627830)]]
- ← Aggregation: [[DDM Change Request]]
- → Dependency: [[{DEL}DDM regular payment type]]
- → Dependency: [[DDM Frequency Type]]
- ← Aggregation: [[DDM JFS Partner]]
- → Association: [[DDM Documents for Banks]]

## 📊 Appears In (7 diagrams)

- Logical: Contract - DDM
- Logical: Contract - Document
- Logical: Contract Management
- Logical: DDMSystemEvent schema
- Logical: Direct Debit Statements
- Logical: Incoming payments
- Logical: PAYM Extended Properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}Data Exchange ID | string |  |
| {MOD}Code | DDM Version Code |  |
| Confirmation status | DDM Confirmation Status Type |  |
| Confirmation status remark | KeyOrValue Type |  |
| Creation Date | DateTime |  |
| Frequency_Type | {DEL}DDM Frequency Type |  |
| Limit | Financial amount |  |
| Status | DDM Status Type |  |
| {ADD}DDM Type | boolean | STANDARD |
| Valid From | Datetime |  |
| Valid To | Datetime |  |
| ECS Provider | ECS Provider |  |
| External code | Text |  |
| Regular Payment Type | Regular payment type |  |
| Regular Payment Amount | Financial amount |  |
| {DEL}eMandate | boolean | false |
| {ADD}Bank account code | String |  |
