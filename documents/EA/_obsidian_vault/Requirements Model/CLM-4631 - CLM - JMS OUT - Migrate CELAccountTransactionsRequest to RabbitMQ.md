---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14692 (CLM-4631) - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ"
domain: "Requirements Model"
element_id: 1689645
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4631 - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14692 (CLM-4631) - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ

## 📝 Notes

Developer notes

	
- Sending of CATR v3 into RabbitMQ implemented in 22.3.44.
	
-  Sending of JMS is still preserved.
	
- Destination RabbitMQ exchange: clm.event.account and routing key: cel-account-transactions.v3
	
- How to test check: https://jira.homecredit.net/jira/browse/CLM-3791
	
- B3 header should be propagated
	
- Logging ensured by new AmqpLoggingMessagePostProcessor
	
- Rabbit sending can be disabled via feature flag celAccountTransactionsRequestRabbit

## 📊 Appears In (1 diagrams)

- Custom: CBL-14692 (CLM-4631) - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ
