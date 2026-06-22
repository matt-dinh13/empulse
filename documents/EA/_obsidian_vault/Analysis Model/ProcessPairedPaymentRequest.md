---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1107132
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ProcessPairedPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

Result of pairing incoming payments in the external system

## 🔗 Connections (2)

- → Dependency: [[PaymentProcessingNotificationDto (Class 1160753)]]
- ← Dependency: [[AccountNotificationWS]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationWS - Incoming payment processing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pairResult | PaymentProcessingNotificationDto |  |
