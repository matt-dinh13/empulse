---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1290 (CBL-2620) New insurance types for REL products"
domain: "Requirements Model"
element_id: 1878555
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Generate INR outgoing payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1290 (CBL-2620) New insurance types for REL products

## 📝 Notes

{ADD CBL-2620 PAYM-1290} 
Input:

	
- contract
	
- payableDate   ..nullable
	
- amount


For contract from the input the system creates an outgoing payment with the following parameters:

	
- Payment_Type = 'IRS' (Insurance revenue),
	
- Payment_Channel = null
	
- Creation_Date = 'current date',


	
- Payable_Date: = payableDate
	
- Amount = amount
	
- Status = "PAID"

## 🔗 Connections (3)

- ← Usage: [[05.099 Create outgoing payment via REST API]]
- ← Dependency: [[{MOD}05.098 Create outgoing payment on external request]]
- ← Dependency: [[{MOD}05.091 Generate outgoing payment - insurance]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1290 (CBL-2620) New insurance types for REL products
- Logical: OutgoingPaymentRestAPI
- Use Case: Generate and Cancel outgoing payments
