---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval"
domain: "Requirements Model"
element_id: 1757336
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2495 Transaction Supplement - Update status to REJECTED

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval

## 📝 Notes

Create new API for change TransactionSupplement status:

	
- ../v2.0/transaction-supplement/reject


Generate the KAFKA notification: TransactionSupplementRejected

Notice The TransactionSupplement approval will be done the current way via POST transaction-supplements/authorize

## 📊 Appears In (1 diagrams)

- Custom: CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval
