---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310806
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Evaluation of Outgoing Payment Search criteria - CUSTOM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

Only records where together

	
- CreatedFrom <= OutgoingPayment.CreationDate <= CreatedTo
	
- MinimalAmount <= OutgoingPayment.Amount <= MaximalAmount


	
- OutgoingPayment.Status = entered Status
	
- OutgoingPayment.PaymentType = entered PaymentType
	
- OutgoingPayment. OBSOrderNumber = entered OBSOrderNumber
	
- Outgoing Payment.isOnlineDisbursement = entered Is online disbursement; if  Is online disbursement = null, it's not taken into account
	
- If GlobalParameter.isOBS = true then 
-- TransactionDateFrom <= OutgoingPayment.BSPaidDate <= TransactionDateTo 
else
-- TransactionDateFrom <= OutgoingPayment.OutgoingPaymentOrder.TransactionTime <= TransactionDateTo (only Day fraction of TransactionTime is compared)
	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom <= Outgoing Payment.Ready For Disbursement Date <= ReadyForDisbursementTo
{/ADD}

## 🔗 Connections (4)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → NoteLink: [[User Interface model _ Search criteria - CUSTOM]]
- → Generalization: [[Evaluation of Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - CUSTOM]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: Search criteria - CUSTOM
