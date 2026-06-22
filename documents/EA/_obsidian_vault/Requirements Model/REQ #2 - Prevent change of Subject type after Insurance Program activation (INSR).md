---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9563 (CLM-2927) Insurance program - Subject type validation"
domain: "Requirements Model"
element_id: 1688621
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Prevent change of Subject type after Insurance Program activation (INSR)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9563 (CLM-2927) Insurance program - Subject type validation

## 📝 Notes

This requirement regards the new INSR module.
Goal of this task is to prevent change of the Subject type after Insurance Program activation. It can be ensured by entering of Subject type on the first step of the Create Insurance program UI, i.e. Subject type will be disabled on the Set main IP parameters screen.
Additionally, it is needed to correct the behavior of the UI when a value is changed in the Subject type listbox:
If GOODS value is chosen, the Eligible commodity tab is available otherwise it is hidden.

## 📊 Appears In (1 diagrams)

- Custom: CBL-9563 (CLM-2927) Insurance program - Subject type validation
