---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310808
diagrams: 3
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Evaluation of Outgoing Payment Search criteria - STANDARD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

A) User entered Sum limit:
If user entered sum limit in a search criteria system limits found payments by the sum of amounts according to following algorithm:
1. Sort found payments by creation time from oldest to youngest. 
2. Create empty result list.
3. Evaluated payments one after another in order of sort in step 1. 

	
- If sum of amounts in the result list plus evaluated payment amount (OUTGOING_PAYMENT.AMOUNT.VALUE) didn't exceed the limit the evaluated payment is added to the result list
	
- If sum of amounts in the result list equals the limit further payments evaluation is skipped.


B) User entered Payment status:
Outgoing payment status search criteria is a little bit different than outgoing payment status type enumeration (OUTGOING_PAYMENT.STATUS). Following mapping rules describe how outgoing payment status search criteria enumeration corresponds to outgoing payment status type and what conditions outgoing payment has to satisfy.
Outgoing payment status search criteria enumeration:

	
- “unpaid” => status type is "unpaid" and recipient bank account exists (see validation rule {Recipient bank account exists}) and payable date (if set) <= current date.
	
- “unpaid (cannot be paid out)” => status type is "unpaid" and and either recipient bank account does not exist (see validation rule {Recipient bank account exists}) or payable date is set and it is > current date
	
- “cancelled” => status type is "cancelled"
	
- “order generating” => status type is “order generating”
	
- “paid” => status type is "paid"


	
- CreatedFrom <= OutgoingPayment.CreationDate <= CreatedTo (only date fraction of CreationDate is compared)
	
- Outgoing Payment.isOnlineDisbursement = entered Is online disbursement; if  Is online disbursement = null, it's not taken into account
	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom <= Outgoing Payment.Ready For Disbursement Date <= ReadyForDisbursementTo
{/ADD}
	
- {ADD PAYM-1488 CBL-3570}
Joint-lending partner code search condition:
- if null or if the field is not visible, the system does not take this condition into account
- if "No partner" --> only Outgoing Payments where Joint-lending Partner Code = null
- if any other value --> only Outgoing Payments where Joint-lending Partner Code = selected value
{/ADD}


C) User entered Payment order ID:
If user entered Payment Order ID in the search criteria system limits found payment by the payment order file payments belong in.

## 🔗 Connections (3)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Generalization: [[Evaluation of Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - STANDARD]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Custom: Search criteria - STANDARD
