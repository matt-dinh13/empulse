---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-28551 (CSI-4100) Expose BSA API and implement Rabbit notification"
domain: "Modules"
element_id: 1861202
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1 - Expose following APIs for end user usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-28551 (CSI-4100) Expose BSA API and implement Rabbit notification

## 📝 Notes

1/ Expose following APIs for end user usage:
POST /rest/v1/bulk-changes - to create new bulk operation and start validation
POST /rest/v1/bulk-changes/id/start - to start execution
GET /rest/v1/bulk-changes/id - to get details and status of operation
GET /rest/v1/bulk-changes/id/contracts - to get list of contract of operation

## 📊 Appears In (1 diagrams)

- Custom: CBL-28551 (CSI-4100) Expose BSA API and implement Rabbit notification
