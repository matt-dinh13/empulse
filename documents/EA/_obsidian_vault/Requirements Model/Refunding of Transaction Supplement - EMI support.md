---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826910
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Refunding of Transaction Supplement - EMI support

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

Refunding of Transaction Supplement after acceptation via API

	
- support for EMI VAS is missing for now


There isn't clear business and accounting side of this operation
Possible cases:

	
- Full refund - refunding the master (purchase) transaction could be solved standard way, transactions related to the loan service (insurances) should be solved by AM when a notification about the loan service/insurance is received by AM.
	
- Partial refund - partial refunding the master (purchase) transaction could be solved standard way, if an insurance is related to the returned commodity, and this insurance will be cancelled, the related transaction is solved as mentioned in Full refund.

## 🔗 Connections (1)

- → Generalization: [[TODO + OPEN QUESTIONS]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
