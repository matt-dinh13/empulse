---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Pay-off Contract/Use Case Model"
domain: "Modules"
element_id: 1841717
diagrams: 1
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contract pay-off

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Pay-off Contract/Use Case Model

## 📝 Notes

{ADD CLM-4480/}
This use case describes contract pay-off based on RabbitMQ notification from Account management.

## 🔗 Connections (7)

- → Dependency: [[Set contract status to paid-off rule (Requirement 1838335)]]
- → Realisation: [[{ADD}Contract pay-off (Requirement 1838332)]]
- ← UseCase «extend»: [[{ADD}Contract pay-off via API]]
- → Dependency: [[{ADD}Create business event (Requirement 1842057)]]
- → Dependency: [[{MOD}Manage CST request (Requirement 1842056)]]
- → Dependency «notify»: [[{DEL}BSL]]
- ← UseCase «include»: [[{DEL}Process account closure]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract pay-off
