---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1746980
diagrams: 7
connections: 20
tags:
  - class
  - analysis-model
---

# 🔷 Outgoing Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Payment which was generated on the basis of contract (e.g. concrete refundation for partner, partner's participation, premium payment to insurance company).

## 🔗 Connections (20)

- → Dependency: [[{DEL}Partner Tax]]
- → Association: [[{MOD}Payment Channel]]
- → Dependency: [[{DEL}Commission]]
- → Dependency: [[Transaction Subtype]]
- → Association: [[Outgoing Payment]]
- ← Association: [[Outgoing Payment]]
- → Dependency: [[PAYM_Extended_Property_Group]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- → Aggregation: [[Outgoing Payment Order]]
- → Dependency: [[Outgoing Payment Type]]
- ← Aggregation: [[tariff_item2out_pay]]
- ← Aggregation: [[{MOD}Outgoing Payment Status Transition]]
- → Dependency: [[Outgoing Payment Status]]
- → Association: [[PTR2SUBVENTION]]
- ← Association: [[Outgoing Payment File Generation Request]]
- ← Dependency: [[PAYM_Extended_Property_Value]]
- ← Dependency: [[Insurance Period (Class 1852788)]]
- ← Association: [[Refund Order]]
- ← Association: [[{ADD}OutgoingPaymentCreatedSE]]
- ← Association: [[OutgoingPaymentCanceledSE]]

## 📊 Appears In (7 diagrams)

- Logical: Contract Management
- Logical: Insurance Contract
- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments
- Logical: OutgoingPaymentSystemEvent
- Logical: PAYM Extended Properties
- Logical: Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Payable Date | Date |  |
| Amount | Financial amount |  |
| Creation Date | DateTime |  |
| BS Paid Date | date |  |
| BS Order Number | string |  |
| Payment Type | Outgoing Payment Type |  |
| Status | Outgoing Payment Status |  |
| Transaction Subtype | Transaction Subtype |  |
| Is Online Disbursement | Boolean | false |
| TransactionSourceCode | String |  |
| TransactionSourceSystem | String |  |
| IsBlocked | Boolean | false |
| {ADD}Ready For Disbursement Date | DateTime |  |
| {ADD}Joint-lending Partner Code | String |  |
| LoanCode | string |  |
