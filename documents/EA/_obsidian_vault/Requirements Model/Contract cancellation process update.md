---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2/CLM-6037 - BSL - Contract cancellation update"
domain: "Requirements Model"
element_id: 1807314
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Contract cancellation process update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2/CLM-6037 - BSL - Contract cancellation update

## 📝 Notes

Current contract cancellation process in BSL (for UI and API):

	
- conditions check
	
- calling use case 01.360 Cancel contract, which updates contract status
	
- generation of Kafka message ContractCancelled
	
- once ContractCancelled is received (see Process ContractCancelled ), ContractCancellationSE is sent
	
- post-processing in {MOD}Process ContractCancellationSE  (generation of CFI, CATR etc)


New contract cancellation process (for UI and API) - driven by  feature flag enableCancelContractInComa:
BSL or COMA part:

	
- conditions check
	
- contract status update
	
- generation of Kafka message ContractCancelled

BSL part:

	
- once ContractCancelled is received (see Process ContractCancelled ), ContractCancellationSE is sent
	
- post-processing in {MOD}Process ContractCancellationSE  including calling use case 01.360 Cancel contract (without updating of contract status) + generation of CFI, CATR etc


Updated UCs:
Removal of calling  Loyalty account cancellation and use case 01.360 Cancel contract:

	
- 01.330 Cancel signed contract manually
	
- 01.590 Cancel active contract manually
	
- 01.592 Cancel paid-off contract manually
	
- 01.332 Cancel signed contract service
	
- 01.333 Cancel active contract service
	
- 01.445 Cancel undisbursed contract (replacement of old ContractCancellationServiceFacade by new ClmContractCancellationServiceFacade is needed)
	
- 01.740 Process notification about credit account closure / AW - Process notification about cancellation (replacement of old ContractCancellationServiceFacade by new ClmContractCancellationServiceFacade in case it is called for contract)


Skip contract status update if already in Cancelled status:

	
- 01.360 Cancel contract


Add calling  Loyalty account cancellation and use case 01.360 Cancel contract :

	
- Process ContractCancellationSE

## 📊 Appears In (1 diagrams)

- Custom: CLM-6037 - BSL - Contract cancellation update
