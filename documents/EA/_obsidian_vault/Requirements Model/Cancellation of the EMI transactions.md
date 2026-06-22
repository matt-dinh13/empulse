---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826912
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Cancellation of the EMI transactions

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

Cancellation of Transaction Supplement before acceptation (doc signature) via API, or automatically on timeout

	
- if transaction are authorized, the authorization should be cancelled in the AM - should it be canceled by TransactionSupplement
	
- possible created loan services inc insurances should be canceled - SIR would react on TransactionSupplementCancellation notification and check if loan services exists on the TransactionSupplement. If so, SIR calls contractservice and/or contractservice/insurance to cancel them.

## 🔗 Connections (1)

- → Generalization: [[TODO + OPEN QUESTIONS]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
