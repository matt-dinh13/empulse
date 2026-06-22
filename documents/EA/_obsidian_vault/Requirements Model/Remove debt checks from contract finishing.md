---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing "
domain: "Requirements Model"
element_id: 1688779
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Remove debt checks from contract finishing

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing 

## 📝 Notes

Regular DC processing job (job/debtCatalogueProcessing.xml) and underlying UC 01.477 are already implemented and the job is currently turned off.

Remove the logic of debt amount checking and creation of small underpayment installment from the contract finishing UCs. Move this logic to the existing DC processing job (UC 01.477) and new UC for creating small underpayment. Start calling contract finishing asynchronously from the new UC using new SE ContractFinishingRequestedSE.

Use global parameter ASYNC_DC_CALCULATION to switch between the old and the new way. ASYNC_DC_CALCULATION = true => use the new way.

## 🔗 Connections (1)

- → Generalization: [[Debt Catalog (DC) to trigger contract finishing evaluation]]

## 📊 Appears In (1 diagrams)

- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
