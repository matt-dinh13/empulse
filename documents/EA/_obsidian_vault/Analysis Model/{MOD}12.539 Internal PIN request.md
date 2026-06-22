---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1849988
diagrams: 5
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}12.539 Internal PIN request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

This use case describes how a user can request for a PIN to a card from card detail.

## 🔗 Connections (6)

- ← Dependency: [[Request PIN]]
- → Realisation: [[REQ#2 - Replace CardManagement by CardInfo API]]
- → Realisation: [[12.539 Internal PIN request]]
- → UseCase «include»: [[12.535 Prepare for PIN request (UseCase 1849981)]]
- ← UseCase: [[User (Actor 1880892)]]
- ← UseCase: [[CaBus-CMS]]

## 📊 Appears In (5 diagrams)

- Custom: Card detail - User interface
- Custom: Card operations - Access right
- Custom: CBL-10842 (CSI-182) Redesign of Card activation for PCID usage
- Custom: CLM-323 (CBL-68) Card delivery address selection
- Use Case: PIN request
