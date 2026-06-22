---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)"
domain: "Modules"
element_id: 1568920
diagrams: 4
connections: 10
tags:
  - class
  - modules
---

# 🔷 ORDERPAY140

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)

## 📝 Notes

This message is a request to banking system to realize payment order to the bank account of client or partner held in some other bank.

## 🔗 Connections (9)

- ← Dependency «transformation»: [[ArtificialIncomingPaymentRequest]]
- → Realisation: [[REQ#1 Update of ORDERPAY140 message]]
- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[ORDERPAY140 Beneficiary Type]]
- → Dependency «use»: [[ORDERPAY140 Type Orderpay]]
- → Dependency «use»: [[ORDERPAY140 Transfer Type]]
- ← Dependency «transformation»: [[OutgoingPaymentDto]]
- ← Dependency «transformation»: [[PaymentOrderRequest (Class 1602950)]]
- ← Dependency «transformation»: [[CancelOutgoingPaymentRequest]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2350 - OBS interface - Operations on contract (REL)
- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - Communication tables
- Logical: Processing Incoming Payments - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | number |  |
| id_payout | number |  |
| id_orderpay_cancelled | number |  |
| id_credit | number |  |
| type_orderpay | ORDERPAY140 Type Orderpay |  |
| sellerplace_code | string |  |
| transfer_type | ORDERPAY140 Transfer Type |  |
| bankcode | string |  |
| num_account | string |  |
| num_tech_account | string |  |
| amount_pay | decimal |  |
| date_due | date |  |
| kbe | string |  |
| beneficiary_name | string |  |
| beneficiary_number | string |  |
| beneficiary_type |  |  |
| bank_name | string |  |
| bank_number | string |  |
| id_result190 | number |  |
| time_stamp | datetime |  |
| resul_code | CommResult |  |
