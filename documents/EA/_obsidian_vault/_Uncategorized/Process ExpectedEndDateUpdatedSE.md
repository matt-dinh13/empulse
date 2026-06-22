---
type: UseCase
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1879760
diagrams: 0
connections: 0
tags:
  - usecase
  - _uncategorized
---

# 🎯 Process ExpectedEndDateUpdatedSE

> **Type**: UseCase
> **Package**: N/A

## 📝 Notes

Input: ExpectedEndDateUpdatedSE system event

1. System gets Contract based on ExpectedEndDateUpdatedSE .ContractId.
2. If Contract has any CEL financial parameters then system sends ContractFullInfoRequest notification for the Contract and received ExpectedEndDateUpdatedSE . If an error occurs then its logged as Failed System Event and use case ends.
4. Use case ends.
