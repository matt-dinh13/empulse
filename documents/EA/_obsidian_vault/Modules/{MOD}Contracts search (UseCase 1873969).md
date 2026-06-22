---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1873969
diagrams: 7
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contracts search

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights

## 📝 Notes

This use case describes returning contract data based on request get criteria. Part of this use case is request validation and providing response based on selected projections.

Request is sent by GET on REST API : 
*/rest/v11/contracts
https://coma.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/2.%20Contracts%20V11/searchContracts_1

## 🔗 Connections (6)

- ← Dependency: [[{MOD}contracts]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- → Usage: [[{ADD}Define set of attributes for response]]
- → Realisation: [[{ADD}Contracts search]]
- → Usage: [[{MOD}Get documents for contract]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-18910 (CLM-5173) Applicant support on contract
- Custom: CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param
- Logical: searchContracts
- Logical: searchContracts
- Logical: searchContracts
- Use Case: Use Cases
