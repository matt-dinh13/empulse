---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/User Interface"
domain: "Analysis Model"
element_id: 1637263
diagrams: 4
connections: 13
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}09.020 Update partner

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/User Interface

## 📝 Notes

{DEL PCG-3232/}
This UC describes the way, that user is able to update any saved information about partner. Because the information about partner can change in time, user has to be able to keep this information up to date. Also any mistakes made during creation of partner can be corrected in this process.

## 🔗 Connections (12)

- ← Dependency: [[Create_Update Partner]]
- ← Dependency: [[Update partner]]
- → Dependency: [[Create partner]]
- → Realisation: [[{DEL}09.020 Update partner (risk data)]]
- → Realisation: [[REQ#1 Message SELLERPLACE130 (Boundary 1610899)]]
- → Dependency: [[REQ3 - Adjust Partner_Sales room detail to ID specifics]]
- → Dependency: [[Partner Risk data]]
- → Realisation: [[{DEL}09.020 Update partner]]
- → Realisation: [[BSL REQ 1_ Set available disbursement channels for partner _ salesroom]]
- → Realisation: [[{DEL}09.020 Update partner (basic data)]]
- → UseCase «include»: [[09.030 Show partner (UseCase 1637262)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Create/Update partner
- Custom: Partner - Access Rights
- Custom: Show partner detail
- Use Case: Manage partner
