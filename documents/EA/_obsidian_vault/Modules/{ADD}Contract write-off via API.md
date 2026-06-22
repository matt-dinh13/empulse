---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/writeOffContract"
domain: "Modules"
element_id: 1798713
diagrams: 3
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract write-off via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/writeOffContract

## 📝 Notes

{ADD CLM-4839/}
This use case describes writing off a contract triggered by an external request from Loxon.

The request is done via REST API with a POST method:
/rest/v12/contracts/{contractCode}/write-off

https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/writeOffContract

## 🔗 Connections (5)

- → Realisation: [[{ADD}Contract write-off]]
- → UseCase «extend»: [[{MOD}Contract write-off]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Association: [[BSL user]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (3 diagrams)

- Logical: writeOffContract
- Use Case: Contract write-off
- Use Case: Write-off CEL contract
