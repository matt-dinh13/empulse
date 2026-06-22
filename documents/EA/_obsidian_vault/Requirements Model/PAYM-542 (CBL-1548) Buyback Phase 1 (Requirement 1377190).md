---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-542 (CBL-1548) Buyback Phase 1"
domain: "Requirements Model"
element_id: 1377190
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-542 (CBL-1548) Buyback Phase 1

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-542 (CBL-1548) Buyback Phase 1

## 📝 Notes

Customers need to be able to sell their old smartphone to lower the amount of down payment they have to pay in cash. When a customer comes to apply for a loan but the down payment is too big for him to pay, they can use the Buyback Program to lower the big down payment allowing them to take the loan.

BSL FTs agreed on a following solution:

	
- New outgoing payment type will be added (Buyback),
	
- this outgoing payment will be generated whenever buyback is used,
	
- status will be set to PAID immediately (similarly to subventions) because the payment will be created just for information/accounting, disbursement will be done in payment of type PTR (Payment to retailer), see below
	
- Buyback amount will be added to amount of a payment to retailer (PTR)
	
- Buyback amount will be present in already existing contractInfoPaymentItem element in outgoing payment file

## 🔗 Connections (1)

- ← Generalization: [[PAYM-1068 DEV Buyback Phase 1]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-542 (CBL-1548) Buyback Phase 1
