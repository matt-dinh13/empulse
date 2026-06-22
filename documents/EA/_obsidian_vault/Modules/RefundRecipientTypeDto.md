---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model"
domain: "Modules"
element_id: 815931
diagrams: 2
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 RefundRecipientTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model

## 📝 Notes

Enumeration with possible refund payment recipient types (it should not be a real recipient, e.g. in case of transfer to the technical HC account)..

## 🔗 Connections (1)

- ← Dependency: [[RefundPaymentRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Refunds - Communication Model
- Logical: Refunds - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ANOTHER_CONTRACT |  |  |
| BANK_INCOME |  |  |
| CLIENT |  |  |
| FRAUD |  |  |
