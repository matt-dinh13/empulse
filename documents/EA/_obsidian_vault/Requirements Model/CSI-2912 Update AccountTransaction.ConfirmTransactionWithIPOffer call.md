---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL"
domain: "Requirements Model"
element_id: 1831494
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2912 Update AccountTransaction.ConfirmTransactionWithIPOffer call

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL

## 📝 Notes

There is expected change of the current M API of AccountTransaction.ConfirmTransactionWithIPOffer call to the new REST API confirm transaction - see https://am.in00a1.cz.infra/cabus-am/rest/swagger-ui/index.html?urls.primaryName=api-next#/AccountTransactions/postAccountTransaction.

The attribute of sourceCode will be string.

Affected use cases:

	
- 13.110 Process account transaction for Transaction Supplement
	
- 13.114 Process transaction cancellation request

 Both UCs uses common part of the Call Confirm transaction service where the current SOAP API call will be replaced with calling the new REST method for transaction confirmation.

## 📊 Appears In (1 diagrams)

- Custom: CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL
