---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805098
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-5981 Termination of the SAI with installments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

There is required SAI contract termination including insurance termination 
Proposal:
Could be ensured via Insurance termination function (i.e. BSL UI, or WEB API)

	
- Operator uses the current insurance termination function placed on BSL Contract detail - Insurance tab
	
- In case of SAI, system calls API for calculation remaining installment needs to be paid (Installments)
	
- Installment schedule is regenerated, all future installments are cancelled and an installment with "termination amount" is exposed.
	
- Insurance is terminated
	
- when the customer repays all prescribed debt, the SAI contract is finished automatically.


Prerequisites:

	
-

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
