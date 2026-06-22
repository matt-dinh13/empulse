---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12580/CLM-4408 - Remove job contract finishing - COMA - Finish contract"
domain: "Modules"
element_id: 1800775
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4408 - Implement contract finishing

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12580/CLM-4408 - Remove job contract finishing - COMA - Finish contract

## 📝 Notes

Coma module finishes contract:

	
- updates contract status
	
- remove contract from Registration queue
	
- sends Kafka notification ContractFinished
	
- Temporarily trigger is API, which will be replaced by RabbitMQ notification from Debt catalogue (CLM-4456)

## 📊 Appears In (1 diagrams)

- Custom: CLM-4408 - Remove job contract finishing - COMA - Finish contract
