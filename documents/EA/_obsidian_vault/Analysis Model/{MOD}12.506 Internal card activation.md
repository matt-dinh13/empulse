---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1849977
diagrams: 6
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}12.506 Internal card activation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

This use case enables to activate a card from card detail.

## 🔗 Connections (6)

- ← Dependency: [[Activate (GUIElement 1609915)]]
- → Realisation: [[REQ#2 - Replace CardManagement by CardInfo API]]
- → Realisation: [[12.506 Activate card]]
- → UseCase «include»: [[12.536 Card activation (UseCase 1849966)]]
- ← Association: [[User (Actor 1880892)]]
- ← UseCase: [[CaBus-CMS]]

## 📊 Appears In (6 diagrams)

- Custom: Card detail - User interface
- Custom: Card operations - Access right
- Custom: CBL-10842 (CSI-182) Redesign of Card activation for PCID usage
- Custom: CLM-323 (CBL-68) Card delivery address selection
- Custom: Overview
- Use Case: Card activation
