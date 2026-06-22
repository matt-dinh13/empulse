---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished"
domain: "Requirements Model"
element_id: 1690307
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4409 - BSL - Process Kafka notification ContractFinished

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished

## 📝 Notes

BSL application processes Kafka notification ContractFinished from COMA and generates ContractFinishingAutomaticallySE system event which triggers:

	
- sending of JMS ContractFullInfo - in CLM adapter
	
- updating of reward channel via API - in CSI adapter
	
- finishing of insurance contract - in CSI adapter - only for non REL contracts (enabled by feature flag enableInsuranceContractFinishOnSE)


Add following feature flags into BSL:

	
- feature flag enableContractFinishInComa - disables finishing job in BSL and only logs contract IDs as warning, ideally there should be no logs as contract should be finished by COMA prior job run
	
- feature flag enableInsuranceContractFinishOnSE - turns off finishing of insurance contract as part of contract finishing use case, enables its finishing as part of processing of ContractFinishingAutomaticallySE in CSI adapter

## 📊 Appears In (1 diagrams)

- Custom: CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished
