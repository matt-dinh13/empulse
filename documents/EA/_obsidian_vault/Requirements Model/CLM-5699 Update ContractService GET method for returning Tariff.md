---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts"
domain: "Requirements Model"
element_id: 1880070
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-5699 Update ContractService GET method for returning Tariff

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts

## 📝 Notes

Goal of the task is adding Tariff code and Tariff version into the current Contract Service API methods.
Affected methods:

	
- /v8.0/contracts/{contractNumber}/services - Get all services related to contract
	
- /v8.0/contracts/{contractNumber}/services/{serviceId} - Get all services related to contract and external contract service id


Added attributes of the response:

	
- tarifCode - string (get from ContractService.Service Code)
	
- tariffVersion - integer (get from ContractService.Service.Service Version)

## 📊 Appears In (1 diagrams)

- Custom: CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts
