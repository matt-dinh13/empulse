---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights"
domain: "Analysis Model"
element_id: 1877202
diagrams: 3
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}13.072 Create Credit limit change request for REL account

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights

## 📝 Notes

The use case presents for next step in the credit limit change functionality - creation request for CL change in the AM module.
It is run based on {ADD CSI-4104}CreditLimitChangeRequestSignedSE {/ADD}  {DEL CSI-4104} CreditLimitChangeRequestApprovedSE{/ADD} system event
Technical use case

## 🔗 Connections (4)

- → Dependency: [[Setting CreditLimitChangeRequestDto for messaging request]]
- → Realisation: [[13.072 Create Credit limit change request for REL account]]
- ← UseCase: [[CaBus-AM]]
- ← UseCase: [[System event]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
- Use Case: Credit Limit Change via messaging - Use Case model
