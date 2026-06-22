---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/User Interface"
domain: "Analysis Model"
element_id: 1637273
diagrams: 4
connections: 14
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}09.010 Create partner

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/User Interface

## 📝 Notes

{DEL PCG-3232/}
This UC describes the interaction between user and system in process of creating a new Partner in the Sales Network. Creating a partner is the first step in process to make partner able to provide loans.

## 🔗 Connections (13)

- ← Dependency: [[Generating partner’s code]]
- ← Dependency: [[Create partner (GUIElement 1572113)]]
- ← Dependency: [[Create_Update Partner]]
- → Realisation: [[{DEL}09.010 Create partner (basic data)]]
- → Realisation: [[REQ#1 Message SELLERPLACE130 (Boundary 1610899)]]
- → Realisation: [[BSL REQ 1_ Set available disbursement channels for partner _ salesroom]]
- → Realisation: [[{DEL}09.010 Create partner (Requirement 1637254)]]
- → Realisation: [[{DEL}09.010 Create partner (risk data)]]
- → Dependency: [[REQ3 - Adjust Partner_Sales room detail to ID specifics]]
- → Dependency: [[Partner Risk data]]
- → UseCase «include»: [[09.030 Show partner (UseCase 1637262)]]
- ← Dependency: [[Create partner (GUIElement 1817336)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Create/Update partner
- Custom: Find partner
- Custom: Partner - Access Rights
- Use Case: Manage partner
