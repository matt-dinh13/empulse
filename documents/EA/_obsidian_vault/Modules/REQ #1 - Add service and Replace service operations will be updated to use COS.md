---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-26584 (CSI-3772) Usage of COS for Loyalty service add and replace"
domain: "Modules"
element_id: 1861197
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #1 -  Add service and Replace service operations will be updated to use COS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-26584 (CSI-3772) Usage of COS for Loyalty service add and replace

## 📝 Notes

Current BSA Add service and Replace service operations will be updated to use COS.

Following is needed:
- DB:
-- extend Bulk operation by new fields OperationSubType and ExecutionSystem
-- extend Validation Status enum by new status WAITING_FOR_CONFIRMATION

- create operation 
-- system checks provided service type and store it to OperationSubType
-- if service type=LOYALTY then ExecutionSystem is set to COS
- validation 
-- can be as is
- execution if ExecutionSystem = COS: 
-- will be extended to use COS instead of BSL
-- ContractResult.ExecutionStatus will be set to WAITING_FOR_CONFIRMATION after processing of each item (to support async processing in COS when result of action is not provided in the direct response but later on by notification)
-- bulk operation status will not be changed after all items is processed (will be updated once notification for all items are received), it means bulk operation stay in EXECUTION_IN_PROGRESS until BSA receives notifications for all items, UI refresh is done in this status so result will be shown automatically (if user stays on the operation detail page)

## 📊 Appears In (1 diagrams)

- Custom: CBL-26584 (CSI-3772) Usage of COS for Loyalty service Add and Replace
