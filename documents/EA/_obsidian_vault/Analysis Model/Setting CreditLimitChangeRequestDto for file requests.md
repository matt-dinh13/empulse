---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules"
domain: "Analysis Model"
element_id: 1860912
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Setting CreditLimitChangeRequestDto for file requests

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules

## 📝 Notes

This rule describes creation a CreditLimitChangeRequestDto entity based on a file with requests.
System creates CreditLimitChangeRequestDto structure as follow:
- requestId = sourceSystem.'BSL'; sourceTxId = Contract Supplement.Code
- requestDate = the current date and time
- originalCreditLimit = CurrentCreditLimit 
- requestedCreditLimit = RequestedCreditLimit
- creditLimitOperationType = 'CLIP'/CLDP
- creditLimitChangeEvent = 'CLIP_CAMPAIGN'/CLDP_CAMPAIGN
- accountNumber = the processed Contract.Account Number
- campaignDetails = Campaign Name
- effectiveInterestRate = Contract Supplement.Estimated EIR1

## 🔗 Connections (1)

- ← Dependency: [[13.450 Process supplement approval result (UseCase 1865654)]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
