---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing"
domain: "Requirements Model"
element_id: 1723838
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Create a new usecase to process registration and finishing of contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing

## 📝 Notes

The goal of new UC 01.714 is to check contract status and process needed actions according system setting:

- for registered contract do finishing
- for unregistered contract do action according new system property FinishUnregisteredContract:
  -- DO_NOTHING - nothing is done
  -- FINISH_ONLY - contract is finished without registration
  -- FINISH_WITH_AUTOREG - contract is registered with ForceAutoRegistration flag and finished

## 📊 Appears In (1 diagrams)

- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
