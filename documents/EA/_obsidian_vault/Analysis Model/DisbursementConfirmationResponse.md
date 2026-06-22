---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments"
domain: "Analysis Model"
element_id: 1230862
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 DisbursementConfirmationResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments

## 📝 Notes

Response on STATEMENT 240 message.

## 🔗 Connections (5)

- → Dependency «transformation»: [[RESULT290]]
- → Dependency: [[DisbursementConfirmationResultTypeDto]]
- → Dependency: [[DisbursementConfirmationResultTypeDto (Enumeration 1671297)]]
- → Dependency: [[Processing DisbursementConfirmationResponse]]
- → Dependency «transformation»: [[STATEMENT240]]

## 📊 Appears In (1 diagrams)

- Logical: Disbursement confirmation response

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | DisbursementConfirmationResultTypeDto |  |
