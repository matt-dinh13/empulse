---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16848 (CLM-4832) - Process RabbitMQ WriteOffRequest"
domain: "Requirements Model"
element_id: 1720599
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-16848 (CLM-4832) - Process RabbitMQ WriteOffRequest

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16848 (CLM-4832) - Process RabbitMQ WriteOffRequest

## 📝 Notes

{ADD CLM-4832/}

Develop a new CEL write-off UC based on request from Loxon.

Steps:

	
- introduce new use case for CEL contracts write-off based on Loxon request
- for contract validation and contract operations COMA API will be used
	
- Stop to change contract status as part of IS use case 03.120 (other teams should not directly access our data)
	
- introduce separated use cases for ContractPaidOffSE and ContractWrittenOffSE for IS team (they will do debt re-calculation there)
	
- {DEL CLM-5124}IS changes are controlled by CLM Feature Flag recalculateDebtInfoAfterContractPaidWriteOff{/DEL}

## 📊 Appears In (1 diagrams)

- Custom: CBL-16848 (CLM-4832) - Process RabbitMQ WriteOffRequest
