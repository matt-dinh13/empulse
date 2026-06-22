---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds"
domain: "Analysis Model"
element_id: 1877182
diagrams: 2
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 Process Refund Request with external identifiers

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds

## 📝 Notes

This technical use case (access right 99.999) processes Refund Request from external system, typically INCPAY module. A refund gets created as a result.
The main difference to the existing refund processing use cases in BSL is that the refund created via this functionality uses external identifiers of a payment instead of a direct link to a payment. Usage of external identifiers is necessary because the payment might not be present in BSL at all, only in INCPAY module. This use case therefore has to be used for refund request processing in case INCPAY module is turned on and the refund has to be tied to a specific incoming payment.
Typical usage: 

	
- Manual refund of a payment from payment detail.
	
- Bulk cancellation of overpayment.

## 🔗 Connections (2)

- ← UseCase: [[Local System]]
- ← Dependency: [[CreateRefundRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Create Refund Request
- Use Case: Refund request processing
