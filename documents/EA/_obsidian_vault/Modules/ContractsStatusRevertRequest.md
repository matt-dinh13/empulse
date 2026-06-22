---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts Maintenance/v1/Contracts Status Revert"
domain: "Modules"
element_id: 1801901
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ContractsStatusRevertRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts Maintenance/v1/Contracts Status Revert

## 📝 Notes

POST request parameters for .../contracts-status-reverts

## 🔗 Connections (2)

- → Dependency: [[Contract (Class 1802488)]]
- ← Dependency: [[contracts-status-revert]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts Status Revert

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contracts | Contract |  |
| statusFrom | string |  |
| statusTo | string |  |
| reason | string |  |
