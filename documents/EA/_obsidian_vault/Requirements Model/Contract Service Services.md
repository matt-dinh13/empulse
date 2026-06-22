---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1110 (CLM-935) New service to get insurance data for list of contracts"
domain: "Requirements Model"
element_id: 1768086
diagrams: 9
connections: 21
tags:
  - interface
  - requirements-model
---

# 🔶 Contract Service Services

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1110 (CLM-935) New service to get insurance data for list of contracts

## 🔗 Connections (21)

- → Dependency: [[{MOD}01.774 Create Contract Service]]
- → Dependency: [[08.495 Cancel Contract Service externally]]
- → Dependency: [[01.759 Get contract services for self-care (UseCase 1869812)]]
- → Usage: [[GetContractServicesResponse_v8]]
- → Dependency: [[01.769 Set Contract Service status (UseCase 1879716)]]
- → Usage: [[TerminateContractServiceRequest]]
- → Dependency: [[08.490 Terminate Contract Service externally]]
- → Dependency: [[01.759 Get contract services for self-care (UseCase 1869812)]]
- → Usage: [[GetContractServicesRequest_v8]]
- → Usage: [[{ADD}CreateContractServiceRequest_v3]]
- → Dependency: [[01.782 Replace Contract Service (UseCase 1879688)]]
- → Usage: [[CancelContractServiceRequest]]
- → Dependency: [[ReplaceContractServiceRequest]]
- → Dependency: [[SetContractServiceStatusRequest]]
- → Dependency: [[CreateContractServiceRequest]]
- → Dependency: [[GetContractServicesResponse]]
- → Dependency: [[GetContractServicesRequest]]
- → Dependency: [[ReplaceContractServiceResponse]]
- → Dependency: [[CreateContractServiceResponse]]
- ← Dependency: [[REQ#1_ New service to get insurance data for list of contracts]]
- → Aggregation: [[services (Class 1853828)]]

## 📊 Appears In (9 diagrams)

- Logical: CBL-1110 (CLM-935) New service to get insurance data for list of contracts
- Logical: Contract Services - GET contract services
- Logical: Contract Services - GET contract services v8
- Logical: Contract Services - POST create contract service
- Logical: Contract Services - POST replace contract service
- Logical: Contract Services - PUT set contract service status
- Logical: ContractService - Create Contract Service method
- Logical: ContractServices - Cancel ContractService
- Logical: ContractServices - Terminate ContractService
