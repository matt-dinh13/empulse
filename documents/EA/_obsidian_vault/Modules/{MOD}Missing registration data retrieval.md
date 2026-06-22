---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module"
domain: "Modules"
element_id: 1851669
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Missing registration data retrieval

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module

## 📝 Notes

{ADD CLM-5164/}

System retrieves missing data from the following data sources via REST API calls:
- BSL: getDDM
- COMA: getContract
{ADD CLM-5687}- HOMESIS: getExperimentalFeatures if they are used{/ADD}
Registration data are retrieved directly from database.

## 🔗 Connections (1)

- ← Dependency: [[Resolve an action for contract]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-17316 (CLM-5164) Registration based on REM module
- Custom: CBL-19733 (CLM-5687) Preserve old precondition in queue management
- Use Case: Resolving registration action
