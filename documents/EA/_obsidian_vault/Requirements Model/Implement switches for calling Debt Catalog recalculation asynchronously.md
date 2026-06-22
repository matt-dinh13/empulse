---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing "
domain: "Requirements Model"
element_id: 1688783
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Implement switches for calling Debt Catalog recalculation asynchronously

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing 

## 📝 Notes

If global parameter ASYNC_DC_CALCULATION = true then execute DC recalculation asynchronously (by inserting an entry to the DB table BSL_DEBT_CATALOGUE_REQ) instead of calling UC 01.474 directly. All requests created in one transaction should be committed to the DB together once the transaction is finished. Note that DB table BSL_DEBT_CATALOGUE_REQ already exists.

Implement the change also in:
* UpdateDebtCatalogueMBean
* TimeShiftContract

Do not implement change in:
* 01.360 Cancel contract - will be solved in another story
* 01.715 Finish contract automatically - will be solved in another story

Keep GP turned off everywhere, turn it on just for testing purposes.

Post-condition: If GP is turned on, all affected use cases create records in BSL_DEBT_CATALOGUE_REQ table and do not call UC 01.474 directly.

## 🔗 Connections (1)

- → Generalization: [[Debt Catalog (DC) to trigger contract finishing evaluation]]

## 📊 Appears In (1 diagrams)

- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
