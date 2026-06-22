---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 1185067
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 PAYIN220 Payment Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Data type for types of incoming payment (e.g. payment from client)

JMS message destination:
IncomingPaymentRequest.paymentType.*

## 🔗 Connections (1)

- ← Usage: [[PAYIN220]]

## 📊 Appears In (2 diagrams)

- Logical: Processing Incoming Payments - Communication Model
- Logical: Processing Incoming Payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| PFC (Payment from client) |  |  |
| IT (Internal transfer) |  |  |
| SU (Small uderpayment) |  |  |
| COM (Compensation) |  |  |
| RCT (Reversal card transaction) |  |  |
| RFP (Receivable from partners) |  |  |
| OTH (Other - for payment cancellation) |  |  |
| GP (Gift payment) |  |  |
| {ADD}CONS - Consolidation |  |  |
