---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310788
diagrams: 3
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Evaluation of Outgoing Payment Search criteria - UNPAID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

Only records where together

	
- OutgoingPayment.Status = Unpaid (U)
	
- OutgoingPayment.PaymentType = entered Payment Type


	
- DATE(OutgoingPayment.CreationDate) >= CreatedFrom
	
- DATE(OutgoingPayment.CreationDate) <= CreatedTo
	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom <= Outgoing Payment.Ready For Disbursement Date <= ReadyForDisbursementTo
{/ADD}
	
- OutgoingPayment.Amount.Currency = Currency
	
- OutgoingPayment.IsBlocked = false
	
- OutgoingPayment->Payment Channel.Status Of Last Change Request is not in (NEW, REJECTED)
	
- Outgoing Payment.isOnlineDisbursement = entered Is online disbursement; if  Is online disbursement = null, it's not taken into account


	
- Amount sum limit
If user entered Amount sum limit in the search criteria then system limits found payments by the sum of amounts according to following algorithm:
1. Create empty result list.
2. Add each found payment ordered by creation time ascending to the result list until sum of outgoing payment amounts in the result list exceeds the entered Amount sum limit
	
- {ADD PAYM-1488 CBL-3570}
Joint-lending partner code search condition:
- if null or if the field is not visible, the system does not take this condition into account
- if "No partner" --> only Outgoing Payments where Joint-lending Partner Code = null
- if any other value --> only Outgoing Payments where Joint-lending Partner Code = selected value
{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Generalization: [[Evaluation of Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - UNPAID]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Custom: Search criteria - UNPAID
