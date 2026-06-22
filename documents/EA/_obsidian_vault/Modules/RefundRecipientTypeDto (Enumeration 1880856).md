---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Generated RMQ messages"
domain: "Modules"
element_id: 1880856
diagrams: 1
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 RefundRecipientTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Generated RMQ messages

## 📝 Notes

Enumeration with possible refund payment recipient types (it should not be a real recipient, e.g. in case of transfer to the technical HC account)

## 🔗 Connections (1)

- ← Dependency: [[CreateRefundRequest (Class 1880857)]]

## 📊 Appears In (1 diagrams)

- Logical: Create Refund Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CLIENT |  |  |
| PARTNER |  |  |
| FRAUD |  |  |
| BANK_INCOME |  |  |
| ANOTHER_CONTRACT |  |  |
