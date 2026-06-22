---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1310796
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Evaluation of Outgoing Payment Search criteria - PAID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

- Only records where together
	
- If GlobalParameter.isOBS = true then 
-- OutgoingPayment.Status = Delivered (D)
-- TransactionDateFrom <= OutgoingPayment.BSPaidDate <= TransactionDateTo 
else
-- OutgoingPayment.Status = Paid (P)
-- TransactionDateFrom <= OutgoingPayment.OutgoingPaymentOrder.TransactionTime <= TransactionDateTo (only Day fraction of TransactionTime is compared)
	
- OutgoingPayment.PaymentType = entered Payment Type
	
- Outgoing Payment.isOnlineDisbursement = entered Is online disbursement; if  Is online disbursement = null, it's not taken into account

## 🔗 Connections (2)

- → Generalization: [[Evaluation of Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - PAID]]

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - PAID
