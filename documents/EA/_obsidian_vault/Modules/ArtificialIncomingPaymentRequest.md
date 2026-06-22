---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1148222
diagrams: 3
connections: 8
tags:
  - class
  - modules
---

# 🔷 ArtificialIncomingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

Via this message the BSL requests creation / cancellation of a new incoming payment.
It is used only for artificial payments, e.g. Small underpayment etc.

## 🔗 Connections (7)

- → Dependency: [[ArtificialIncomingPaymentSourceSystemDto (Enumeration 1212856)]]
- → Dependency: [[ArtificialIncomingPaymentOperationTypeDto (Enumeration 1212854)]]
- → Dependency «transformation»: [[REQUESTPAYMENT135]]
- → Dependency: [[ArtificialIncomingPaymentPurposeTypeDto (Enumeration 1212855)]]
- → Dependency «transformation»: [[ORDERPAY140]]
- → Dependency: [[ArtificialIncomingPaymentTypeDto (Enumeration 1212853)]]
- → Dependency: [[Processing ArtificialIncomingPaymentRequest]]

## 📊 Appears In (3 diagrams)

- Logical: Incoming Payments Processing - JMS messages
- Logical: Outgoing payments - Communication Model
- Logical: Processing Incoming Payments - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| amount | MoneyDto |  |
| paymentDataExchangeId | string |  |
| paymentType | ArtificialIncomingPaymentTypeDto |  |
| purpose | ArtificialIncomingPurposeTypeDto |  |
| typeOfOperation | ArtificialIncomingPaymentOperationTypeDto |  |
| sourceSystem | ArtificialIncomingPaymentSourceSystemDto |  |
