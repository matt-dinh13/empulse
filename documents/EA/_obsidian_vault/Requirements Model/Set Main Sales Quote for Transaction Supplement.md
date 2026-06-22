---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1740 - Update method for TransactionSupplement creation"
domain: "Requirements Model"
element_id: 1878824
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Set Main Sales Quote for Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1740 - Update method for TransactionSupplement creation

## 📝 Notes

This rule describes how to update the Transaction Supplement with the main sales quote data. This data is used for backward compatibility of the Create Transaction Supplement method from BNPL business cases without SIR support.

Input:

	
- TransactionSupplement
	
- SQS.data
	
- paymentChannelCode
	
- transactionType


Stored values in Contract Supplement - Account Transaction Supplement extension:

	
- Chosen Offer Id = SQS.code
	
- Marketing Offer Id = SQS.specifications.value where key = 'MARKETING_OFFER_CODE'
	
- Disbursement Payment Channel = paymentChannelCode
	
- Transaction Type = transactionType
	
- Loan Type = SQS.purpose

## 🔗 Connections (2)

- ← Dependency: [[13.116 Add Sales Quote to Transaction Supplement (UseCase 1881439)]]
- ← Dependency: [[{MOD}13.100 Create Transaction Supplement service]]

## 📊 Appears In (3 diagrams)

- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement request creation - Use case model
- Use Case: Transaction Supplement Sales Quote adding
