---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Access rights"
domain: "Analysis Model"
element_id: 1817768
diagrams: 4
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.165 Display contracts to consolidate

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Access rights

## 📝 Notes

This use case displays list of contracts eligible for consolidation. User can select any of them and consolidate if all validations passes.

## 🔗 Connections (8)

- → Dependency «invokes»: [[01.750 Get contracts by client]]
- → Realisation: [[{MOD}Consolidation]]
- → Realisation: [[01.165 Display contracts to consolidate - edit consolidation amount for external refinanced contract]]
- → Realisation: [[01.165 Display contracts to consolidate - choose contract]]
- → Realisation: [[01.165 Display contracts to consolidate - choose external contract]]
- → Realisation: [[01.165 Display contracts to consolidate]]
- → Realisation: [[Display contracts to consolidate - update consolidated amount of the contract]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access rights
- Custom: Consolidation GUI
- Custom: LOR-9339 Consolidation of external contract
- Use Case: Consolidation Use case
