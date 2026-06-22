---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878427
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Redirect links rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Every redirect link values has following form:

<RELEVANT_BSL_ENVIRONMENT>/<ENTITY_INFORMATION>

Thus for Contract search the link will be following:
<RELEVANT_BSL_ENVIRONMENT>/contract-search?applicationCode=<code of application>&searchFilter=<filter>

supported filters:

	
- DRAFTS


Example:
https://bsl.kz00a1.cz.infra/bsl/contract-search?applicationCode=3700086829&searchFilter=DRAFTS

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.300 Search for contract]]
