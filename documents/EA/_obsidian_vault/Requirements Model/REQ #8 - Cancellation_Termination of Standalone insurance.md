---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1314968
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #8 - Cancellation/Termination of Standalone insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

This part of requirement describes possibilities of cancellation or termination already running standalone insurance.
Basic conditions for cancellation of insurance related to the SAI contract:

	
- In case the SAI contract is before FINISHED status (K), cancellation of insurance is possible only by cancellation of SAI contract (i.e. via Contract detail - Cancel contract functionality)


	
- In case of  SAI contract is FINISHED, it is possible to cancel insurance via Contract detail - Insurance tab by choosing an insurance to cancel. Other rules for insurance cancellation are preserved but ContractServiceChangedSE is not generated (so neither ContractFullInfoRequest message). The SAI contract status stays unchanged. 


Basic conditions for termination of insurance related to the SAI contract:

	
- In case the SAI contract is before FINISHED status (K), termination of insurance (i.e. via Contract detail - Insurance tab) is NOT possible. It is possible only cancellation of SAI contract (i.e. via Contract detail - Cancel contract functionality)
	
- In case of  SAI contract is FINISHED, it is possible to terminate insurance via Contract detail - Insurance tab by choosing an insurance to terminate (other rules for insurance termination are preserved). The SAI contract status stays unchanged.

## 📊 Appears In (1 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
