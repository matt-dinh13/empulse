---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9725 (CLM-2983) Hide installment plan for REL contracts in BSL"
domain: "Requirements Model"
element_id: 1519358
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Hide installment plan for specified REL contracts in BSL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9725 (CLM-2983) Hide installment plan for REL contracts in BSL

## 📝 Notes

KZ needs to hide installment plan for specified contract for some period till interest is not calculated correctly due to COVID actions.

Implemented solution:

	
- Use existing table BSL_CONTRACT_HIDDEN_IS created within CBL-7390 with 2 columns (CONTRACT_CODE - varchar, HIDE_IS - 0/1)
	
- Add new access right UC12_620_overrule and assign it to role CARD_UNIT + OSPO_ADMIN
	
- Show AccountDetail.Installment plan tab only if (user has right UC12_620 AND contract code is not in table BSL_CONTRACT_HIDDEN_IS or has value of HIDE_IS = 0) OR user has role UC12_620_overrule

## 📊 Appears In (1 diagrams)

- Custom: CBL-9725 (CLM-2983) Hide installment plan for REL contracts in BSL
