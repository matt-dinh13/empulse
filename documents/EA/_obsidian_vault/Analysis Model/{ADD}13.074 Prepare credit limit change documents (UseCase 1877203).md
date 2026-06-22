---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights"
domain: "Analysis Model"
element_id: 1877203
diagrams: 3
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.074 Prepare credit limit change documents

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights

## 📝 Notes

{ADD CSI-4104 /}
The use case presents function for generating documents for the credit limit change supplement
The use case is triggered by CreditLimitChangeRequestApprovedSE system event

## 🔗 Connections (5)

- → Realisation: [[13.102 Prepare ALOP Request documents]]
- → Dependency: [[Change status of Contract Supplement]]
- → Association: [[System event]]
- → Realisation: [[{ADD}13.074 Prepare credit limit change documents]]
- → Dependency: [[{MOD}13.205 Create contract supplement documents v2]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
- Use Case: Credit Limit Change via messaging - Use Case model
