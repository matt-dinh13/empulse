---
type: UseCase
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1879751
diagrams: 0
connections: 0
tags:
  - usecase
  - _uncategorized
---

# 🎯 Process RecalculateInterestRateSE

> **Type**: UseCase
> **Package**: N/A

## 📝 Notes

Input: RecalculateInterestRateSE system event

1. System gets Contract based on RecalculateInterestRateSE.ContractId.
2. If Contract has any CEL financial parameters then system sends ContractFullInfoRequest notification for the Contract and received RecalculateInterestRateSE. If an error occurs then its logged as Failed System Event and use case ends.
4. Use case ends.
