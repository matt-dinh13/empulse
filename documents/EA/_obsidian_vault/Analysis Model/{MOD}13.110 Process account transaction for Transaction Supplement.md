---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Access Rights"
domain: "Analysis Model"
element_id: 1881417
diagrams: 6
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}13.110 Process account transaction for Transaction Supplement

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Access Rights

## 📝 Notes

The use case present function for creation of Transaction Supplement cardless transaction and sending it for authorization, or confirmation by the transaction type (CASH/POS) to the AM system. Next, the AM response is evaluated, then Transaction Supplement status is changed appropriately and cooperating systems notified.
The use case is triggered by ALOPRequestSignedSE system event

## 🔗 Connections (8)

- ← UseCase: [[CaBus-AM]]
- ← UseCase: [[System event]]
- → Dependency: [[Create CASH_POS transaction rule]]
- → Realisation: [[13.110 Authorize ALOP transaction]]
- → Dependency: [[Change status of Contract Supplement]]
- → Dependency: [[Get PaymentChannel data by paymentChannelId]]
- → Dependency: [[Call Transaction confirmation (REST) in AM]]
- → Dependency: [[{MOD}Create Confirm Transaction Request for AM]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-25062 (CSI-3393) sending Loan Code at Transaction Confirmation
- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement authorization/confirmation - Use case model
