---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1868490
diagrams: 3
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 Get contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Access Rights

## 📝 Notes

This use case describes returning contract data based on request search criteria. Part of this use case is request validation and providing response based on selected projections.

Request is sent by GET on REST API : 
*/rest/v12/contracts/

https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/1.%20Contracts%20V12/getContract

## 🔗 Connections (3)

- → Realisation: [[{ADD}Get contract (Requirement 1858829)]]
- → Dependency: [[Define set of attributes for response]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: getContract
- Use Case: Use Cases
