---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3917 (CLM-1508) BSL Communication - support for notification about specific comm records"
domain: "Requirements Model"
element_id: 1646117
diagrams: 4
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 Communication Record

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3917 (CLM-1508) BSL Communication - support for notification about specific comm records

## 📝 Notes

A single topic (issue/problem/inquiry) communicated with the client during a communication event (e.g. personal data change request).

Historization holds records of all historical versions of BSL_COMMUNICATION_RECORD entries. A new historization is created on each change.

## 🔗 Connections (7)

- ← Dependency: [[Note]]
- → Association: [[Contact (Class 1647755)]]
- ← Aggregation: [[CommunicationRecord2Ticket]]
- → Aggregation: [[Communication Event]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Address]]
- ← Aggregation: [[Communication Result Part]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-3917 (CLM-1508) BSL Communication - REQ #1
- Custom: UI: Account blockage
- Logical: Communication
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created by | User |  |
| Creation Date | DateTime |  |
| Note | Text |  |
| Original created by | User |  |
| Original creation date | DateTime |  |
| External Id | String |  |
| Type Code | Communication Type |  |
| Subtype Code | Communication Subtype |  |
| Channel Code | Communication Channel |  |
| Status Code | Communication Status |  |
| Subtype Specification Code | Communication Subtype Specification |  |
| Subtype Subspecification Code | Communication Subtype Subspecification |  |
| Result Type Code | Communication Result Type |  |
| Update Date | DateTime |  |
| Updated By | User |  |
