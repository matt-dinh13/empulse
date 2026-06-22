---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention"
domain: "Requirements Model"
element_id: 1587866
diagrams: 4
connections: 7
tags:
  - enumeration
  - requirements-model
---

# 📝 OutgoingPaymentTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

## 📝 Notes

Enumeration of types of outgoing payment

## 🔗 Connections (7)

- ← Dependency: [[{ADD}CreatePaymentChannelRequest]]
- ← Dependency: [[{ADD}CreateOutgoingPaymentRequest]]
- ← Dependency: [[GenerateOutgoingPaymentOrderRequest]]
- ← Dependency: [[SimpleOutgoingPaymentDto]]
- ← Dependency: [[OutgoingPaymentDto]]
- ← Dependency: [[CreateOutgoingPaymentRequest]]
- ← Dependency: [[GenerateOutgoingPaymentRequest]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Logical: Outgoing payments request
- Logical: OutgoingPaymentsWS
- Logical: OutgoingPaymentsWS - generateOutgoingPaymentOrder

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| BN (Bonus) |  |  |
| {DEL}BVA (Bonus VAT) |  |  |
| {DEL}BWH (Bonus WHT) |  |  |
| CL (Cash loan disbursement) |  |  |
| CPR (Corrective payment to retailer) |  |  |
| INR (Insurance revenue) |  |  |
| INS (Premium to insurance compayn) |  |  |
| PC (Participation) |  |  |
| PTR (Payment to retailer) |  |  |
| {DEL}PVA (Participation VAT) |  |  |
| {DEL}PWH (Participation WHT) |  |  |
| RTC (Refund to client) |  |  |
| RTP (Refund to partner) |  |  |
| SVP (Subvention from Manufacturer) |  |  |
| SVS (Subvention from Sales Partner) |  |  |
| {ADD} ERF (External refinance) |  |  |
| BBP (Buyback payment) |  |  |
| {ADD} REW (CEL reward) |  |  |
| {ADD} SRS (Service related subvention) |  |  |
