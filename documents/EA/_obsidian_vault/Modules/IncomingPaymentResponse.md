---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1148220
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 IncomingPaymentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

It represents a notification about processing of request of setting one incoming payment.

## 🔗 Connections (4)

- → Dependency «transformation»: [[PAYIN220]]
- → Dependency: [[IncomingPaymentResultTypeDto (Enumeration 1212857)]]
- → Dependency «transformation»: [[RESULT290]]
- → Dependency: [[Processing IncomingPaymentResponse]]

## 📊 Appears In (3 diagrams)

- Logical: Incoming Payments Processing - JMS messages
- Logical: IncomingPaymentResponseV2
- Logical: Processing Incoming Payments - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | IncomingPaymentResultTypeDto |  |
