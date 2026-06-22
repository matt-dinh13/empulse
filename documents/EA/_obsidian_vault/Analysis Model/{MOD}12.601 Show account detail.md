---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Access right"
domain: "Analysis Model"
element_id: 1878573
diagrams: 10
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}12.601 Show account detail

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Access right

## 📝 Notes

This use case describes how system displays details of a revolving account.

## 🔗 Connections (8)

- ← Dependency: [[List of contracts (Object 1565368)]]
- ← Dependency: [[Account detail (Screen 1878063)]]
- → Realisation: [[12.601 Show account detail]]
- → Realisation: [[{MOD}Account detail visibility]]
- → Association: [[User (Actor 1880892)]]
- → Dependency: [[{MOD}Business type of loan]]
- → Association: [[CaBus-AM]]
- ← Dependency: [[Account (Class 1881245)]]

## 📊 Appears In (10 diagrams)

- Custom: Access right
- Custom: CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts
- Custom: CBL-25127 (CSI-3646) Display BNPL Credit Limit
- Custom: CBL-5594 (CLM-2052) Limited access on BSL Account detail for Salary product
- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
- Custom: CBL-9725 (CLM-2983) Hide installment plan for REL contracts in BSL
- Custom: Contract detail
- Custom: List of contracts - KZ
- Custom: Show account detail
- Use Case: Account detail
