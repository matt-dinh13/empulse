---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval"
domain: "Requirements Model"
element_id: 1757339
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2511 SIR - Add the transaction approval request into the process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval

## 📝 Notes

Divide the UC 16.020 Process request for a loan to two parts:

	
- the first part: creation Transaction Supplement, adding Sales Quotes and based on the Supplement related Evaluation Request Definition either sending request for approval to LAP RMQ exchange, or directly run the second part of the process
	
- the second part: receiving the approval result from lap.core.approvalProcessResult.queue, evaluate the result, update TransactionSupplement status, authorization of the TransactionSupplement


Changes in the current functions:

	
- UC13.118 Authorize transactions in Transaction Supplement - Transaction Supplement status is set to APPROVED here. The status will be changed only when the current TransactionSupplement status = IN_PROCESS
	
- transaction-supplements GET method - return CUID in relatedSubjects where code='CLIENT'; contract code in relatedSubjects where code='CONTRACT'


Initial setting:

	
- privilege for SIR user to call PUT transaction-supplements/reject

## 📊 Appears In (1 diagrams)

- Custom: CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval
