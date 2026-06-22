---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights"
domain: "Analysis Model"
element_id: 1876328
diagrams: 5
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.202 Extend or Reactivate ER request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights

## 📝 Notes

This use case allows to modify existing not executed FER or PER request:
- extend validity if request is in status CREATED
- reactivate if request is in status CANCELLED.

Then ER is executed immediately if sufficient amount is paired.

## 🔗 Connections (3)

- → Dependency: [[{ADD}03.202 Extend or Reactivate ER request]]
- ← Dependency: [[ER request history]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-23535 (CLM-6055) Update of conditions for FER service request
- Custom: CBL-7022 (CLM-2201) Admin function for FER request in the past
- Custom: ER request history
- Use Case: Show ER request history
