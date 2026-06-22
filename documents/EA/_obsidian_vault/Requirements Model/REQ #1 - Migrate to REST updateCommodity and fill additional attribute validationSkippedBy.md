---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3322) Migrate to REST updateCommodity and fill additional attribute skipped_by"
domain: "Requirements Model"
element_id: 1688756
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Migrate to REST updateCommodity and fill additional attribute validationSkippedBy

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3322) Migrate to REST updateCommodity and fill additional attribute skipped_by

## 📝 Notes

Goal of this task is:

	
- Migrate updateCommidity SOAP to REST for manual commodity update (Contract detail -> Commodity -> Edit commodity).
	
- If attribute validationSkipped = True then system populates new attribute validationSkippedBy.


Switching between SOAP and REST is controlled by CLM Feature Flag updateCommodityRest.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6340 (CLM-3322) Migrate to REST updateCommodity and fill additional attribute skipped_by
