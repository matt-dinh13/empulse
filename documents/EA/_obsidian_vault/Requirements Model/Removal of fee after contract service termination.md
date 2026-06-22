---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25867 (CSI-3602) Removal of fee after contract service termination"
domain: "Requirements Model"
element_id: 1833684
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Removal of fee after contract service termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25867 (CSI-3602) Removal of fee after contract service termination

## 📝 Notes

- Rule Calculate new installment amount on insurance termination renamed to {MOD}Calculate new installment amount on service termination  and moved to Common for CEL loan options part in Loan Options CEL package. Now it can be used generally for any contract service (not only contract insurance service).
	
- Code from 08.121 Terminate contract insurance common - scenario AW - CEL insurance contract termination moved to new general rule {ADD}Terminate Contract service for CEL contract and it is used by this AW
	
- UC08.091 Terminate Contract Service common - scenario AW - Terminate CEL service updated and rule {ADD}Terminate Contract service for CEL contract is used now.

## 📊 Appears In (1 diagrams)

- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination
