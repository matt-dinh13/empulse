---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870140
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Contract Service from COS (SUP)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule describes how to get Contract Service data from the COS based on provided contractServiceExternalId.
 

	
- System calls GET GET https://cos.<environment>/rest/v1/contract-service/{contractServiceExternalIds}
	
- System returns the ContractService result. If COS component is unavailable (timeout), system returns error message of MSG_COS_NOT_AVAILABLE; e.g. Contract Service system is not available.

## 🔗 Connections (1)

- ← Dependency: [[13.020 Add Sales Quote to Contract Supplement]]

## 📊 Appears In (1 diagrams)

- Use Case: Add Sales Quote to Contract Supplement - Use Case Model
