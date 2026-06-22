---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/payOffContract"
domain: "Modules"
element_id: 1851488
diagrams: 3
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract pay-off via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/payOffContract

## 📝 Notes

{ADD CLM-4839/}
This use case describes paying off a contract triggered by an external request from Loxon.

The request is done via REST API with a POST method:
/rest/v12/contracts/{contractCode}/pay-off

https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/payOffContract

## 🔗 Connections (7)

- ← Dependency: [[Contract (Interface 1839994)]]
- → Dependency: [[{ADD}payOffContract (Class 1854214)]]
- → Dependency: [[{ADD}writeOffContract (Boundary 1859223)]]
- → Realisation: [[{ADD}Contract pay-off]]
- → UseCase «extend»: [[{MOD}Contract pay-off (UseCase 1851484)]]
- ← Association: [[BSL user]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (3 diagrams)

- Logical: payOffContract
- Use Case: Contract pay-off
- Use Case: Pay-off CEL contract
