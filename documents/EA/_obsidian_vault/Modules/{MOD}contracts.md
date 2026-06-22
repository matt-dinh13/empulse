---
type: Class
stereotype: "resource"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-4303 - Drop /search path from Contracts V11"
domain: "Modules"
element_id: 1800686
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 {MOD}contracts

> **Type**: Class · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-4303 - Drop /search path from Contracts V11

## 📝 Notes

{MOD CLM-4303 GET /rest/v11/contracts/search => GET /rest/v11/contracts/}

## 🔗 Connections (4)

- → Dependency: [[{MOD}Contracts search (UseCase 1873969)]]
- → Dependency: [[ContractsResponse]]
- → Dependency: [[ContractsRequest]]
- ← Dependency: [[Contract Management (Class 1859203)]]

## 📊 Appears In (3 diagrams)

- Custom: CLM-4303 - Drop /search path from Contracts V11
- Logical: REST
- Logical: searchContracts
