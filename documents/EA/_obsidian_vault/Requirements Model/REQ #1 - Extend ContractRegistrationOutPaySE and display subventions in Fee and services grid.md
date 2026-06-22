---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid"
domain: "Requirements Model"
element_id: 1688720
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid

## 📝 Notes

Instead of cancellation of contracts where the commodity validation fails, we automatically skip commodity validation, trigger a notification for Payments so that "partner" subvention is used for subvention payment recalculation together with handing over which subvention rate to use.

Goal of this task is:

	
- Extend system event ContractRegistrationOutPaySE with list of commodities, where validation was skipped.


	
- Check if subventions are displayed in Fees and services grid and make sure that this grid is ready for multiple subventions.


Feature is controlled by global database parameter flagCommodityInsteadOfContractCancel.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid
