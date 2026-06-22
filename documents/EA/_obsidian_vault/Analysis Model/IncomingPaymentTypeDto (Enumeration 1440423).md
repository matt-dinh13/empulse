---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments"
domain: "Analysis Model"
element_id: 1440423
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 IncomingPaymentTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments

## 📝 Notes

Enumeration with possible types of incoming payment to set.

## 🔗 Connections (1)

- ← Dependency: [[IncomingPaymentRequest (Class 1561651)]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - Set incoming payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| PFC (Payment from client) |  |  |
| SU (Small underpayment) |  |  |
| IT (Internal transfer) |  |  |
| RCT (Reversal card transaction) |  |  |
| COM (Compensation) |  |  |
| GP (Gift payment) |  |  |
| DAD (Deficites and damages) |  |  |
| CS (Contract sale) |  |  |
| RFP (Receivable from partners) |  |  |
| PC (Payment cancellation) |  |  |
