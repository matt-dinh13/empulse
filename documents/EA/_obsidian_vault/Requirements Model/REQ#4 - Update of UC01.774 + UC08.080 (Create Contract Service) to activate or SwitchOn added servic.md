---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8246 (CLM-2557) Implementation of API + UI for service replacement"
domain: "Requirements Model"
element_id: 1499072
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#4 - Update of UC01.774 + UC08.080 (Create Contract Service) to activate or SwitchOn added service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8246 (CLM-2557) Implementation of API + UI for service replacement

## 📝 Notes

ContractService is created in the status NEW.
For services with flag SERVICE_SWITCH_ALLOWED the status is changed to ACTIVE after first Switch on.
For other services no status change was implemented, so the automatic change to ACTIVE was added.

## 📊 Appears In (1 diagrams)

- Custom: CBL-8246 (CLM-2557) Implementation of API + UI for service replacement
