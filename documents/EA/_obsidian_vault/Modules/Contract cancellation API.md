---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-23420 (CLM-6038) Contract cancellation API"
domain: "Modules"
element_id: 1807297
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Contract cancellation API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-23420 (CLM-6038) Contract cancellation API

## 📝 Notes

Current contract cancellation process in BSL (for UI and API):

	
- conditions check
	
- calling use case 01.360 Cancel contract, which updates contract status
	
- generation of Kafka message ContractCancelled
	
- once ContractCancelled is received (see Process ContractCancelled ), ContractCancellationSE is sent
	
- post-processing in {MOD}Process ContractCancellationSE  (generation of CFI, CATR etc)


New contract cancellation process (for UI and API) - in BSL driven by  feature flag enableCancelContractInComa:
BSL or COMA part:

	
- conditions check
	
- contract status update
	
- generation of Kafka message ContractCancelled

BSL part:

	
- once ContractCancelled is received (see Process ContractCancelled ), ContractCancellationSE is sent
	
- post-processing in {MOD}Process ContractCancellationSE  including calling use case 01.360 Cancel contract (without updating of contract status) + generation of CFI, CATR etc

## 📊 Appears In (1 diagrams)

- Custom: CBL-23420 (CLM-6038) Contract cancellation API
