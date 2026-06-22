---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-23482 (CSI-3253) Insurance status update for PH"
domain: "Requirements Model"
element_id: 1812443
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Req #1 - new Finished and Default status for insurance contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-23482 (CSI-3253) Insurance status update for PH

## 📝 Notes

Functionality for PH only - driven by new feature flag useFinishedDefaultInsuranceStatus 

New statuses for insurance contract:
- F (Finished)
- D (Default)
Update DB constraint for Insurance contract and Insurance contract status transition.

INS_CONTRACT_FINISHING job should be rescheduled to 0:30 to run after midnight and update status immediately once period ends (for PH only).

## 📊 Appears In (1 diagrams)

- Custom: CBL-23482 (CSI-3253) Insurance status update for PH
