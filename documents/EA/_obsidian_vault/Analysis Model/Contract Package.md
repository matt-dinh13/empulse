---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1335502
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Contract Package

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Package for sending contract documentation to the HomeCredit.

## 🔗 Connections (7)

- ← Association: [[{ADD}ContractPackageSystemEvent]]
- ← Aggregation: [[{ADD_v07}ContractPackageTicket]]
- → Dependency: [[Contract Package Location]]
- → Dependency: [[Sales Area]]
- → Dependency: [[ContractPackageType]]
- → Dependency: [[ContractPackage Status]]
- ← Aggregation: [[Contract Package Item]]

## 📊 Appears In (4 diagrams)

- Logical: Contract Management
- Logical: Contract package system event schema
- Logical: Contract tracking
- Logical: Ticketing contract package mistakes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| PackageType | ContractPackageType |  |
| Code | Contract Package Code |  |
| Creation Date | DateTime |  |
| Date Sent | Date |  |
| Sender | User |  |
| Date Recieved | Date |  |
| Receiver | User |  |
| Location | Contract Package Location |  |
| Status | ContractPackage Status |  |
| Sales area | Sales Area |  |
| Salesroom Code | string |  |
