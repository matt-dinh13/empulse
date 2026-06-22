---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805089
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-5982 Condition accepted of SAI with installments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

Current behaviour:

	
- Condition accepted for both SAI with/without installments is set on COP (Cooling-off Period Service) execution (UC01.711, UC01.252, triggered by UC08.252) - it needs to be fixed, so that only SAI without installments is affected.
	
- Condition accepted for SAI with installments is also set on the SAI contract sign


Expected behaviour:

	
- Condition accepted for SAI with installments is set on the SAI contract sign only
	
- Condition accepted for SAI with installments on COP execution needs to be removed, so that only SAI without installments is affected.

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
