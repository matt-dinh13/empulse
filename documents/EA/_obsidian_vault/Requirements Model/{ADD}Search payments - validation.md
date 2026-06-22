---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL"
domain: "Requirements Model"
element_id: 1872606
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Search payments - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL

## 📝 Notes

{ADD PAYM-5190/}
For country: VN

searchPaymentsRequest 

	
- depositDateFrom, depositDateTo
must be both or none filled
depositDateTo higher than depositDateFrom
depositDateTo - depositDateFrom =< 14
	
- amountTo
higher or equal than amountFrom
higher than 0
	
- amountFrom
lower or equal than amountTo
higher than 0
	
- paymentType
must exists in Incoming Payment Type
	
- paymentChannel
must exists in Incoming Payment Channel
	
- status
must exists in Incoming Payment Status
	
- pairingStatus
must exists in Pairing Status

## 🔗 Connections (1)

- ← Dependency: [[{ADD}searchPayments]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-5190 BRVN-154 Overpayment process for REL
- Custom: Validation Rules
- Use Case: Use Case Model
