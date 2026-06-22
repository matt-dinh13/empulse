---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model"
domain: "Modules"
element_id: 821075
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 RefundPaymentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model

## 📝 Notes

It represents a notification about processing of request for setting of one refund payment.

LDM:
RefundItem

## 🔗 Connections (4)

- → Dependency «transformation»: [[RESULT290]]
- → Dependency «transformation»: [[REFUNDPAY222]]
- → Dependency: [[Processing RefundPaymentResponse]]
- → Dependency: [[RefundPaymentResultTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: Refunds - Communication Model
- Logical: Refunds - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | RefundPaymentResultTypeDto |  |
