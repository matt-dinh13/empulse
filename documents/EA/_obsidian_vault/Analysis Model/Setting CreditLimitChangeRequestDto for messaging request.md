---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model"
domain: "Analysis Model"
element_id: 1877215
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Setting CreditLimitChangeRequestDto for messaging request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model

## 📝 Notes

This rule describes creation a CreditLimitChangeRequestDto entity based on a request from message.

System creates CreditLimitChangeRequestDto structure as follow:
- requestId = sourceSystem.'BSL'; sourceTxId = ContractSupplement.Code
- requestDate = the current date and time
- originalCreditLimit = ContractSupplement.Original Credit Limit 
- requestedCreditLimit = ContractSupplement.Requested Credit Limit
- creditLimitOperationType = ContractSupplement -> Supplement.Change Type
- creditLimitChangeEvent = CLIP_CAMPAIGN/CLDP_CAMPAIGN/CLIP_CLIENT/CLDP_CLIENT
- accountNumber = the processed Contract.Account Number
- campaignDetails = ContractSupplement -> Campaign Offer.Campaign Name
- effectiveInterestRate = ContractSupplement.Estimated EIR1

## 🔗 Connections (1)

- ← Dependency: [[{MOD}13.072 Create Credit limit change request for REL account]]

## 📊 Appears In (1 diagrams)

- Use Case: Credit Limit Change via messaging - Use Case model
