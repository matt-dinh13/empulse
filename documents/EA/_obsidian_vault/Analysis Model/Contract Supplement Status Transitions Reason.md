---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model"
domain: "Analysis Model"
element_id: 1862410
diagrams: 3
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 Contract Supplement Status Transitions Reason

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model

## 📝 Notes

List of reasons for contract supplement status change. For each value of the list is set its purpose (for which target state can be used) and who can use it (system, or user).
Notice: The enumeration does not contain all codes used in the application. There are presented only values which needs some functions of the system (Role Type = 'SYSTEM'), possibly also values used by both system or user (Role Type = 'USER') here.
Values used only by user are not presented here and every country can define cancellation reasons by itself.
The attribute Used Deal Type determinates for which kind of entity with specific attributes (i.e. REL / CEL contract or REL transactions) can be the particular reason used.

## 🔗 Connections (2)

- → Dependency: [[Contract Supplement Status Type (Class 1862124)]]
- ← Dependency: [[Contract Supplement Status Transition]]

## 📊 Appears In (3 diagrams)

- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: Contract Supplements
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Value | Text |  |
| Role Type | Text |  |
| Used Deal Type | Used Deal Type |  |
| Transition Type | Contract Supplement Status Type |  |
| Active Flag | boolean |  |
| CABUS_TIMEOUT |  |  |
| INVALID_CREDIT_LIMIT |  |  |
| SYSTEM_ERROR |  |  |
| ACCOUNT_IS_BLOCKED_DUE_TO_HC |  |  |
| ACCOUNT_IS_BLOCKED_DUE_TO_COLL |  |  |
| LAP_FAILED_TO_FINISH |  |  |
| TIMEOUT_IN_PROCESSING |  |  |
| RELATED_SERVICE_REQUEST_EXPIRED |  |  |
| OTHER_SERVICE_APPLIED |  |  |
