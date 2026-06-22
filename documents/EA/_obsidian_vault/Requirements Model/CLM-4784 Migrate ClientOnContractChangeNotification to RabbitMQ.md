---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14688 (CLM-4784) Migrate ClientOnContractChangeNotification to RabbitMQ"
domain: "Requirements Model"
element_id: 1713977
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4784 Migrate ClientOnContractChangeNotification to RabbitMQ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14688 (CLM-4784) Migrate ClientOnContractChangeNotification to RabbitMQ

## 📝 Notes

It is required to migrate the ClientOnContractChangeNotification be migrated to RabbitMQ. It is controlled by the feature flag given below.

Developer notes

	
- Feature flag (enabled everywhere by default): cfiSecuritizationClientOnChangeRabbit
	
- Destination/routing specification:


	
- Exchange: clm.event.contract
	
- Routing key: client-on-contract-change.v1
	
- Routing headers:

                    messageType: client-on-contract-change.v1
                    contractType: CEL/REL/SAI

## 📊 Appears In (1 diagrams)

- Custom: CBL-14688 (CLM-4784) Migrate ClientOnContractChangeNotification to RabbitMQ
