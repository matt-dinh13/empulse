---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Pay-off Contract/Use Case Model"
domain: "Modules"
element_id: 1867062
diagrams: 2
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {DEL}Process account closure

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Pay-off Contract/Use Case Model

## 🔗 Connections (4)

- → UseCase «include»: [[{MOD}Contract pay-off]]
- → Dependency: [[{MOD}Contract write-off (UseCase 1841728)]]
- → Dependency: [[AccountClosureResult (Class 1838278)]]
- ← Dependency «notify»: [[Account management (Actor 1869950)]]

## 📊 Appears In (2 diagrams)

- Use Case: Contract pay-off
- Use Case: Contract write-off
