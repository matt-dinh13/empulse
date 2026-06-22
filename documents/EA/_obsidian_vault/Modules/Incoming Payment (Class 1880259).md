---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model"
domain: "Modules"
element_id: 1880259
diagrams: 2
connections: 15
tags:
  - class
  - modules
---

# 🔷 Incoming Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model

## 📝 Notes

Payment received from third party (e.g. payment from client)

Changed the cardinality between Refund Item and Incoming Payment from "1" to "0..1" (on Incoming Payment side).

## 🔗 Connections (15)

- ← Dependency: [[Refund Item (Class 1877690)]]
- → Association: [[Hc Bank Account]]
- → Dependency: [[Pairing Status (Class 1880271)]]
- ← Association: [[Refund Item (Class 1880261)]]
- → Association: [[Incoming Payment (Class 1880259)]]
- ← Association: [[Incoming Payment (Class 1880259)]]
- → Dependency: [[Incoming Payment Channel (Enumeration 1880268)]]
- ← Aggregation: [[{ADD}Incoming Payment on POS]]
- → Association: [[Incoming Payment (Class 1880259)]]
- ← Association: [[Incoming Payment (Class 1880259)]]
- → Dependency: [[IncomingPaymentSourceSystemType (DataType 1880260)]]
- → Dependency: [[Incoming Payment Status (Class 1880269)]]
- → Association: [[Incoming Payment To Contract]]
- → Dependency: [[Incoming Payment Type]]
- → Aggregation: [[Incoming Payment File (Class 1880257)]]

## 📊 Appears In (2 diagrams)

- Logical: Incoming payments
- Logical: INCPAY Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Description | Text |  |
| SourceSystem | IncomingPaymentSourceSystemType |  |
| Data exchange ID | ID |  |
| Amount | Financial amount |  |
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Deposit Date | Date |  |
| Pairing Status | Pairing Status |  |
| Payer Bank Account Number | Short Text |  |
| Payer Name | Text |  |
| Payer Personal Number | Number |  |
| Payment Channel Branch | Text |  |
| Payment Type | {MOD}Incoming Payment Type |  |
| Provided Contract Number | Text |  |
| Status | Incoming Payment Status |  |
| Transaction Date | Date |  |
| Transaction Number | Text |  |
| Transaction Time | Time |  |
| Payment Channel | Incoming Payment Channel |  |
| Charging date | Date |  |
| {ADD}Bank accout code | Text(20 |  |
| Cancellation Date | DateTime |  |
