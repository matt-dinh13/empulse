---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination"
domain: "Requirements Model"
element_id: 1752474
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Update/remove dependencies on forPayments attribute

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination

## 📝 Notes

Attribute forPayments is being moved from Bank Account entity to Salesroom/Partner 2 Bank Account entities. We need to update/remove usage of the attribute in:

	
- 05.701 Process DisbursementMessage: AW - Create outgoing payment for RCD
	
- business rule Get recipient data for Payment Channel
	
- business rule Generate payment orders from outgoing payments
	
- business rule Settle payments collected on POS with payment order
	
- business rule Application Processing
	
- 01.420 Create DDM on the contract
	
- 01.421 Create application DDM

## 🔗 Connections (1)

- → Generalization: [[PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination (Requirement 1752470)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination
