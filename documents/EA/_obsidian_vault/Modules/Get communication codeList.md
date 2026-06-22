---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-29618 - Create new APIs on CLC for OS CS project"
domain: "Modules"
element_id: 1869596
diagrams: 11
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 Get communication codeList

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-29618 - Create new APIs on CLC for OS CS project

## 📝 Notes

This Use-Case is invoked, when user starts to filling "new communication" record (via GUI).
APIs provide code-list with code and name values, in order to display and fill in correct values when submitting Create Communication form.

## 🔗 Connections (11)

- → Realisation: [[getCommunicationTypesPart]]
- → Realisation: [[CommunicationSubTypeSpec (Class 1869619)]]
- → Realisation: [[getCommunicationChannels (Class 1869594)]]
- ← Association: [[User (Actor 1869632)]]
- → Realisation: [[getCommunicationStatus (Class 1869611)]]
- → Realisation: [[getCommunicationTypes (Class 1869628)]]
- → Realisation: [[getCommunicationSubTypeSubSpec (Class 1869624)]]
- → Realisation: [[getCommunicationResults (Class 1874319)]]
- → Realisation: [[getCommunicationResultValues (Class 1869608)]]
- → Realisation: [[getCommunicationSubTypes (Class 1869616)]]
- → Realisation: [[getCommunicationResultTypes]]

## 📊 Appears In (11 diagrams)

- Custom: CBL-29618 - Create new APIs on CLC for OS CS project
- Logical: getCommunicationChannels
- Logical: getCommunicationResults
- Logical: getCommunicationResultTypesPart
- Logical: getCommunicationResultValues
- Logical: getCommunicationStatus
- Logical: getCommunicationSubTypes
- Logical: getCommunicationSubTypeSpec
- Logical: getCommunicationSubTypeSubSpec
- Logical: getCommunicationTypes
- Use Case: codeList
