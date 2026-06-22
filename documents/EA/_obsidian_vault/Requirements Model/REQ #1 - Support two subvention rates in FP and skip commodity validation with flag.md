---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag"
domain: "Requirements Model"
element_id: 1688687
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Support two subvention rates in FP and skip commodity validation with flag

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag

## 📝 Notes

Instead of cancellation of contracts where the commodity validation fails, we automatically skip commodity validation, trigger a notification for Payments so that "partner" subvention is used for subvention payment recalculation together with handing over which subvention rate to use.

Goal of this task is:
 

	
- Add Subvention_Item.Purpose to Financial parameters and populate it on contract sign (to have multiple subventions on contract with various purposes).
	
- Add 'SKIPPED' to Commodity Validation Status enumeration (to be used in next step for flagging commodity).
	
- For Commodity.Validation Status = INVALID set Commodity.skippedValidation = True instead of contract canceling (to prevent contract with invalid commodity validation from automatic canceling).


Feature is controlled by global database parameter flagCommodityInsteadOfContractCancel.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag
