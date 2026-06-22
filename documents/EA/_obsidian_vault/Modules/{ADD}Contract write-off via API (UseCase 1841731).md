---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Use Case Model"
domain: "Modules"
element_id: 1841731
diagrams: 1
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract write-off via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Use Case Model

## 📝 Notes

{ADD CLM-4839/}
This use case describes writing off a contract triggered by an external request from Loxon.

The request is done via REST API with a POST method:
/rest/v12/contracts/{contractCode}/write-off

https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/writeOffContract

## 🔗 Connections (4)

- → Realisation: [[{ADD}Contract write-off (Requirement 1838344)]]
- → Dependency: [[{ADD}writeOffContract (Boundary 1841723)]]
- → UseCase «extend»: [[{MOD}Contract write-off (UseCase 1841728)]]
- ← Association: [[{DEL}BSL user]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract write-off
