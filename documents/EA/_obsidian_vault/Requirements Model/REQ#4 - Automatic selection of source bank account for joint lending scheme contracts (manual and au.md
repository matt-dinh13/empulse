---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments"
domain: "Requirements Model"
element_id: 1318891
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#4 - Automatic selection of source bank account for joint lending scheme contracts (manual and automatic outgoing payments orders generation). 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments

## 📝 Notes

Determine source bank account when generating outgoing payments on basis of mapping from the first bullet point and joint lending partner assigned to a contract.

One of the following adjustments in outgoing payment orders generation:
 

	
- Either enable user to select specific Joint Lending partner on Browse outgoing payments screen, preselect source bank account on Generate orders screen
	
- Or implement the changes only on Generate orders screen (notification about automatic choice of source bank account for some of the contracts, generation of multiple files upon single 'Generate orders' clicking).



    Necessary changes on Browse outgoing payments and Generate orders screens.
    Consider impact to automatic generation of outgoing payments where default bank account is now used.

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
