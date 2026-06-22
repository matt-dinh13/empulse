---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1869667
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateOutgoingPaymentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3635}

## 🔗 Connections (3)

- → Dependency: [[OutgoingPaymentTypeDto]]
- ← Dependency: [[OutgoingPaymentRestAPI (Interface 1869669)]]
- → Dependency: [[CreateOutgoingPaymentAttribute]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingPaymentRestAPI - Create Outgoing Payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| PaymentChannelDataExchangeID | string |  |
| amount | MoneyDto |  |
| paymentType | string |  |
| contractCode | string |  |
| attributes | CreateOutgoingPaymentAttributeDto |  |
