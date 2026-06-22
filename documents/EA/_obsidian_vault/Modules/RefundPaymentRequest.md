---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model"
domain: "Modules"
element_id: 821076
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 RefundPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model

## 📝 Notes

It represents one refund payment to set (i.e. to create or to cancel ) in the BSL.

## 🔗 Connections (6)

- ← Dependency «transformation»: [[REFUNDPAY222]]
- → Dependency: [[RefundRecipientTypeDto]]
- → Dependency: [[MoneyDto]]
- → Dependency: [[RefundSourceSystem]]
- → Dependency: [[RefundOperationTypeDto]]
- → Dependency: [[MoneyDto]]

## 📊 Appears In (2 diagrams)

- Logical: Refunds - Communication Model
- Logical: Refunds - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| refundDataExchangeID | string |  |
| amountOfRefund | MoneyDto |  |
| amountOfFee | MoneyDto |  |
| typeOfRecipient | RefundRecipientTypeDto |  |
| typeOfOperation | RefundOperationTypeDto |  |
| messageID | string |  |
| refundSource | RefundSourceSystem |  |
