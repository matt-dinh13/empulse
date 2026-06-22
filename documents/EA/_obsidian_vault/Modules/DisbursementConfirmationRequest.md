---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1602947
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 DisbursementConfirmationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Informs HoSel about result of payment transfer requested by ORDERPAY140 message.

## 🔗 Connections (2)

- ← Dependency «transformation»: [[STATEMENT240]]
- → Dependency: [[OutgoingPaymentEventTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentID | number |  |
| messageID | number |  |
| disbursementDate | date |  |
| deliveryStatus | OutgoingPaymentEventTypeDto |  |
| orderNumber | number |  |
