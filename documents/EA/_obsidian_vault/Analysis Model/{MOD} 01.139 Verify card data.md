---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Access Rights"
domain: "Analysis Model"
element_id: 1821368
diagrams: 5
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD} 01.139 Verify card data

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Access Rights

## 📝 Notes

This use case describes verification of card data in local module.

## 🔗 Connections (6)

- ← Dependency: [[CardEvidenceWS (Interface 1604443)]]
- ← Dependency: [[Verify card data (GUIElement 1820457)]]
- → Realisation: [[01.139 Verify card data]]
- → Dependency: [[Concatenate card holder name rule - VN]]
- ← Association: [[User (Actor 1880892)]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: Disbursement to card - product AF
- Custom: LOR-9703 AF: card verification
- Logical: CardEvidenceWS - VerifyCardData
- Use Case: Card evidence
