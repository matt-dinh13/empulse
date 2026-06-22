---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1868484
diagrams: 2
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contracts search

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Access Rights

## 📝 Notes

{ADD CLM-4306 /}
This use case describes returning contract data based on request get criteria. Part of this use case is request validation and providing response based on selected projections.

Request is sent by GET on REST API : 
*/rest/v11/contracts
https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/2.%20Contracts%20V11/searchContracts_1

## 🔗 Connections (2)

- → Usage: [[Define set of attributes for response]]
- → Realisation: [[{ADD}Contracts search (Requirement 1858813)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Use Cases
