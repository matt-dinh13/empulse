---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310797
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Evaluation of Outgoing Payment Search criteria - ORIGINATING POS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

Only records where together

	
- OutgoingPayment.Contract ( Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED)->{/ADD} Salesroom.Code = entered code OriginatingSalesroom (exact match of string is searched)


	
- CreatedFrom <= OutgoingPayment.CreationDate <= CreatedTo
	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom <= Outgoing Payment.Ready For Disbursement Date <= ReadyForDisbursementTo
{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Generalization: [[Evaluation of Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - ORIGINATING POS]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: Search criteria - ORIGINATING POS
