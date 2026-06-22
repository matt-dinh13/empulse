---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/signContract"
domain: "Modules"
element_id: 1842973
diagrams: 2
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD} Sign Contract via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/signContract

## 📝 Notes

{ADD CLM-6742}
This Use Case describes how to Sign Contract via API in COMA NG.

Request is sent by POST on REST API : 
*/rest/v1/contracts/signContract

Request URL:
https://coma.hoselng.cz.infra/rest/v1/contracts/{contractCode}/signContract

Swagger:
https://coma.hoselng.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V1/signContract

## 🔗 Connections (3)

- ← Dependency: [[Placeholder]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Association: [[External system (Actor 1869946)]]

## 📊 Appears In (2 diagrams)

- Logical: signContract
- Use Case: Use Case Model
