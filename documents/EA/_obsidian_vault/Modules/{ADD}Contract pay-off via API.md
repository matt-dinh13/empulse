---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Pay-off Contract/Use Case Model"
domain: "Modules"
element_id: 1841718
diagrams: 1
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract pay-off via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Pay-off Contract/Use Case Model

## 📝 Notes

{ADD CLM-4839/}
This use case describes paying off a contract triggered by an external request from Loxon.

The request is done via REST API with a POST method:
/rest/v12/contracts/{contractCode}/pay-off

https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/payOffContract

## 🔗 Connections (5)

- → Realisation: [[{ADD}Contract pay-off (Requirement 1838332)]]
- → Dependency: [[{ADD}payOffContract (Boundary 1841722)]]
- → Dependency: [[{ADD}writeOffContract (Boundary 1841723)]]
- → UseCase «extend»: [[{MOD}Contract pay-off]]
- ← Association: [[{DEL}BSL user]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract pay-off
