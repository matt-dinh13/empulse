---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1212857
diagrams: 3
connections: 2
tags:
  - enumeration
  - modules
---

# 📝 IncomingPaymentResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

Enumeration with possible results of processing a request for setting one incoming payment.

## 🔗 Connections (2)

- ← Dependency: [[IncomingPaymentResponse]]
- ← Dependency: [[{ADD}IncomingPaymentResponseV2]]

## 📊 Appears In (3 diagrams)

- Logical: Incoming Payments Processing - JMS messages
- Logical: IncomingPaymentResponseV2
- Logical: Processing Incoming Payments - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK |  |  |
| CONTRACT_NOT_FOUND |  |  |
| WRONG_CONTRACT_STATE |  |  |
| AMOUNT_FOR_CREATE_IS_NOT_POSITIVE  |  |  |
| PAYMENT_TO_CANCEL_NOT_FOUND |  |  |
| PAYMENT_ALREADY_EXIST |  |  |
| WRONG_AMOUNT_FOR_CANCELLATION |  |  |
| PAYMENT_HAS_BEEN_ALREADY_CANCELED |  |  |
| UNDEFINED_ERROR |  |  |
| NO_INSTALLMENTS |  |  |
