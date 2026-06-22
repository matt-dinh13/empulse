---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans"
domain: "Requirements Model"
element_id: 1063133
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 - New functionality for consolidation perfoming

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans

## 📝 Notes

The function will be triggered from:

	
- Disbursement confirmation (Top up variant)
	
- Preparation of consolidation (Restructuring variant)


What should be done here:

	
- Create payment(s) for consolidated contract(s) -> send them into PAY (Pay module ensures pairing payment(s) on consolidated contract(s), FER se provede podle nastaveni bud okamzite nebo az jobem na konci dne -> potreba vynutit FER okamzite!)
	
- IS notifies about FER on consolidated contract(s)
	
- the function checks if all consolidated contracts are FER, if no, wait on next notification, if so, continues with next step
- if FER amount is not enough for a consolidated contract, system will wait on manual solving the problem (e.g. adding a payment to the consolidated contract) 
	
- Set Consolidation service as EXECUTED, send a message ()

## 📊 Appears In (1 diagrams)

- Custom: CLM-93 (CBL-29) Consolidation (Top-up) for cash loans
