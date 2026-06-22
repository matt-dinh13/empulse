---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1290 (CBL-2620) New insurance types for REL products"
domain: "Requirements Model"
element_id: 1878540
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Generate INS outgoing payment 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1290 (CBL-2620) New insurance types for REL products

## 📝 Notes

{ADD CBL-2620 PAYM-1290} 
Input:

	
- contract
	
- paymentChannelID
	
- payableDate   ...nullable
	
- amount
	
- contractPaymentStatus   ...ALLOWED, BLOCKED
	
- isSalesroomBlocked  ...boolean


For contract from the input the system creates an outgoing payment with the following parameters:

	
- Payment_Type = 'INS' (Premium to insurance company),
	
- Payment_Channel = paymentChannelID
	
- Creation_Date = 'current date',


	
- Payable_Date: = payableDate
	
- Amount = amount
	
- {ADD PAYM-5567} 
Status = 
If contarct type = SAI and global parameter OutgoingPaymentWaitForRelatedContract = true and related cash loan exist (record exist ExtendedPropertyValue.ExtPropertyItemCode = RELATED_LOAN, ExtendedPropertyValue.ParentID = cash loan ID), system check the status of related cash loan outgoing payment (outgoingPayment.contractID = related cash loan ID, outgoingPayment.transactionType 'CL') -> if status = D (delivered), than sets status = 'UNPAID', else if outgoing payment does not exist or has other status than 'delivered',  sets status = 'WAITING'.
Else if contract type = SAI and (global parameter OutgoingPaymentWaitForRelatedContract = true and no related cash loan exist)  or OutgoingPaymentWaitForRelatedContract = false, than set status = 'UNPAID'{/ADD}
Else status = "UNPAID"
	
- Blocked = 
- true if contractPaymentStatus = BLOCKED or isSalesroomBlocked = true
- false otherwise

## 🔗 Connections (3)

- ← Usage: [[05.099 Create outgoing payment via REST API]]
- ← Dependency: [[{MOD}05.098 Create outgoing payment on external request]]
- ← Dependency: [[{MOD}05.091 Generate outgoing payment - insurance]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1290 (CBL-2620) New insurance types for REL products
- Logical: OutgoingPaymentRestAPI
- Use Case: Generate and Cancel outgoing payments
