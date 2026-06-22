---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1212858
diagrams: 2
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 IncomingPaymentTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

Enumeration with possible types of incoming payment to creation.

## 🔗 Connections (1)

- ← Dependency: [[IncomingPaymentRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Incoming Payments Processing - JMS messages
- Logical: Processing Incoming Payments - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| PFC (Payment from client) |  |  |
| SU (Small underpayment) |  |  |
| IT (Internal transfer) |  |  |
| RCT (Reversal card transaction) |  |  |
| COM (Compensation to client) |  |  |
| GP (Gift payment) |  |  |
| DAD (Deficites and damages) |  |  |
| CS (Contract sale) |  |  |
| RFP (Receivable from partners) |  |  |
| PC (Payment cancellation) |  |  |
| {ADD}CONS (Consolidation) |  |  |
