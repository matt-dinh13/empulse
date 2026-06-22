---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826907
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1795 Update methods returning TransactionSupplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

Expected changes:

	
- Contract supplement detail screen - update info about transactions
	
- TS refunding - Account Transaction.PaymentChannelId - add it into new transaction if the partial refund is done
	
- Transaction Supplement API, Get Transaction Supplement - return TransactionSupplement_v2 structure
	
- Transaction Supplement API, Cancel Transaction Supplement - return TransactionSupplement_v2 structure
	
- Contract Supplement API, Get Contract Supplement by CUID - return the new TransactionSupplement_v4 structure

## 🔗 Connections (1)

- → Generalization: [[CSI-1740 - Update method for TransactionSupplement creation (Requirement 1826916)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
