---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1875598
diagrams: 5
connections: 18
tags:
  - class
  - analysis-model
---

# 🔷 Incoming Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Logical Data Model

## 📝 Notes

Payment received from third party (e.g. payment from client)

Changed the cardinality between Refund Item and Incoming Payment from "1" to "0..1" (on Incoming Payment side).

## 🔗 Connections (18)

- ← Association: [[IncomingPaymentSystemEvent]]
- ← Association: [[{ADD}ReversalPaymentNotificationSE]]
- → Aggregation: [[Incoming Payment File]]
- ← Association: [[Refund Item]]
- → Association: [[Incoming Payment]]
- ← Association: [[Incoming Payment]]
- → Association: [[Bank Account (Class 1627830)]]
- ← Aggregation: [[Incoming Payment on POS]]
- → Association: [[Incoming Payment]]
- ← Association: [[Incoming Payment]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- → Dependency: [[Incoming Payment Pairing Reason]]
- → Dependency: [[Incoming Payment Channel]]
- → Dependency: [[Pairing Status]]
- → Dependency: [[{MOD}Incoming Payment Type]]
- ← Association: [[Incoming Payment Pairing]]
- → Dependency: [[IncomingPaymentSourceSystemType]]
- → Dependency: [[Incoming Payment Status]]

## 📊 Appears In (5 diagrams)

- Logical: Incoming payments
- Logical: IncomingPaymentSystemEvent schema
- Logical: Installment Schedule
- Logical: Notification system event schema
- Logical: Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Cancellation Date | DateTime |  |
| Description | Text |  |
| SourceSystem | Source System Type |  |
| Amount | Financial amount |  |
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Data exchange ID | ID |  |
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
| Pairing Reason | Incoming Payment Pairing Reason  |  |
| Charging date | Date |  |
| {ADD}Bank account code | Text(20) |  |
