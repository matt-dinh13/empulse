---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-4303 - Drop /search path from Contracts V11"
domain: "Modules"
element_id: 1800792
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4303  - Drop /search path from Contracts V11


> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-4303 - Drop /search path from Contracts V11

## 📝 Notes

GET /rest/v11/contracts/search => GET /rest/v11/contracts only

Old endpoint should be preserved for some time, but deprecated, from Swagger remove immediately

Once COMA in PROD, we should align also CLC / GMA to stop using deprecated endpoint.

## 📊 Appears In (1 diagrams)

- Custom: CLM-4303 - Drop /search path from Contracts V11
