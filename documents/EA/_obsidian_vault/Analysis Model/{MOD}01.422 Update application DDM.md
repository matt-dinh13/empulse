---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Access Rights/Direct debit mandates"
domain: "Analysis Model"
element_id: 1818673
diagrams: 7
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.422 Update application DDM

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Access Rights/Direct debit mandates

## 📝 Notes

This use case enables the user to update the existing direct debit mandate for a particular application.

## 🔗 Connections (10)

- → Association: [[User (Actor 1880892)]]
- → Realisation: [[01.422 Update application DDM]]
- → Dependency: [[Update application payment channel]]
- → Dependency: [[Get application payment channel by its purpose]]
- → Dependency: [[Setting of ECS partner on DDM for JL API (Requirement 1369973)]]
- → Dependency: [[Check and update provider on DDM]]
- → Dependency: [[Get application DDM]]
- → Dependency: [[Update application DDM]]
- ← Realisation: [[Create_Update DDM (Screen 1820847)]]
- ← Dependency: [[Update (GUIElement 1821042)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: Create/Update DDM
- Custom: LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
- Custom: LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain
- Custom: LOR-9490 DDM source - existing ddm
- Custom: Tab - Direct debit mandates
- Use Case: Direct debit mandates
