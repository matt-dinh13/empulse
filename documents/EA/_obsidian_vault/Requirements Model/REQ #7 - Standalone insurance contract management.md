---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1314970
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #7 - Standalone insurance contract management

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

This part of the requirement describes needed changes of the standard contract management considered for SAI contract type.
Following changes in UCs, User interfaces are expected:

	
- 01.730 Finish contract manually: SAI contracts cannot be finished manually by user
	
- 01.550 Process request for contract write-off -> Validation rules for Write-offs VN rule: SAI contracts will be excluded form write-off processing
	
- 01.410 Pay-off contract manually, 01.500 Pay-off contracts from file: SAI contracts cannot be paid-off


	
- Contract detail (user interface)
>Tab-Payment channels:
- Non revolving area panel - invisible for SAI
- Debt catalogue information panel - invisible for SAI
- Cash/consumer loan information  - invisible for SAI
>Tab-Contract supplements - the panel is invisible for SAI contract

## 📊 Appears In (1 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
