---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Access Rights"
domain: "Analysis Model"
element_id: 1816916
diagrams: 3
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.420 Cancel Card Balance Transfer request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Access Rights

## 📝 Notes

{ADD CSI-3268 /}
The use case presents a method for cancellation of Card Balance Transfer request. There can only be canceled requests (Contract Supplements) where related Supplement.Supplement Process Setting.Status has Cancel Manually flag allowed.

## 🔗 Connections (3)

- ← Dependency: [[{ADD}CardBalanceTransferSupplement]]
- → Realisation: [[{ADD}13.420 Cancel Card Balance Transfer request]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Cancel Card Balance Transfer Supplement - Web Service
- Use Case: Card Balance Transfer request processing - Use Case Model
