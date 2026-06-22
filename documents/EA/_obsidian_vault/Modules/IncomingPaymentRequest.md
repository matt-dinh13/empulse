---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1148221
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 IncomingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

It represents one incoming payment to set (i.e. to create and pair / cancel and unpair) in the BSL.

Comm table source:
PAYIN220 (for filling values of particular attributes see the description on PAYIN220).

## 🔗 Connections (5)

- ← Dependency «transformation»: [[PAYIN220]]
- → Dependency: [[IncomingPaymentOperationTypeDto]]
- → Dependency: [[MoneyDto (Class 1212852)]]
- → Dependency: [[IncomingPaymentTypeDto]]
- → Dependency: [[IncomingPaymentSourceSystemDto]]

## 📊 Appears In (2 diagrams)

- Logical: Incoming Payments Processing - JMS messages
- Logical: Processing Incoming Payments - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| paymentDataExchangeID | string |  |
| paymentType | IncomingPaymentTypeDto |  |
| paymentChannel | string |  |
| amount | MoneyDto |  |
| depositDate | date |  |
| messageID | string |  |
| sourceSystem | IncomingPaymentSourceSystemDto |  |
| typeOfOperation | IncomingPaymentOperationTypeDto |  |
