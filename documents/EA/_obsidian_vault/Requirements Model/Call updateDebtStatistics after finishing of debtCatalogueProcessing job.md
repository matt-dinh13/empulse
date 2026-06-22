---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing "
domain: "Requirements Model"
element_id: 1688777
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Call updateDebtStatistics after finishing of debtCatalogueProcessing job

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing 

## 📝 Notes

Stop/deactivate the debt statistics job and call UC 01.482 directly from UC 01.477 for each recalculated contract.

Use global parameter ASYNC_DC_CALCULATION to switch between the old and the new way. ASYNC_DC_CALCULATION = true => use the new way.

## 🔗 Connections (1)

- → Generalization: [[Debt Catalog (DC) to trigger contract finishing evaluation]]

## 📊 Appears In (1 diagrams)

- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
