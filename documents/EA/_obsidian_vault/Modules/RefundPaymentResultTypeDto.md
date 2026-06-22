---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model"
domain: "Modules"
element_id: 815932
diagrams: 2
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 RefundPaymentResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model

## 📝 Notes

Enumeration with possible results of processing a request for setting one refund payment.

## 🔗 Connections (1)

- ← Dependency: [[RefundPaymentResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Refunds - Communication Model
- Logical: Refunds - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK |  |  |
| CONTRACT_NOT_FOUND |  |  |
| REFUND_TO_CANCEL_NOT_FOUND |  |  |
| REFUND_TO_CREATE_ALREADY_EXIST |  |  |
| UNDEFINED_ERROR |  |  |
