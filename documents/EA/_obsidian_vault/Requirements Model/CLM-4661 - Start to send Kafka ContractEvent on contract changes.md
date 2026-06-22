---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes"
domain: "Requirements Model"
element_id: 1690618
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4661 - Start to send Kafka ContractEvent on contract changes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes

## 📝 Notes

ContractChangedEvent  Kafka is generated and stored into corresponding outbox table instead of immediate dispatching of following events:

	
- ContractSignSE => ContractSigned Kafka
	
- ContractActivationSE => ContractActivated Kafka
	
- ContractFinishingAutomaticallySE => ContractFinished Kafka
	
- ContractPaidOffSE => ContractPaidOff Kafka
	
- ContractWrittenOffSE => ContractWrittenOff Kafka
	
- ContractCancellationSE => ContractCancelled Kafka

All previously mentioned Kafka events are consumed by BSL and translated into traditional BSL system events which dispatched eventually right after

## 📊 Appears In (1 diagrams)

- Custom: CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
