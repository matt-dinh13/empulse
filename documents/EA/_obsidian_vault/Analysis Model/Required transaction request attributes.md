---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model"
domain: "Analysis Model"
element_id: 1878818
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Required transaction request attributes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model

## 📝 Notes

Following attributes of the transaction request must exists in the other transaction supporting components:

	
- custometId, contractCode - exists in the BSL
	
- chosenOfferId - SQS component
	
- applicationCode - value still doesn't exist in Contract Supplement by Contract Supplement.Code; exists in ADS module, get paymentChannelId for next check
	
- paymentChannelId - exists in PCH module

## 📊 Appears In (1 diagrams)

- Use Case: Transaction Supplement test cases
