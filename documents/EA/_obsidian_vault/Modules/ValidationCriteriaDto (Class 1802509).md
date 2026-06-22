---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation"
domain: "Modules"
element_id: 1802509
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ValidationCriteriaDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation

## 📝 Notes

Contract validation request criteria

## 🔗 Connections (4)

- → Dependency: [[ContractStatuses]]
- ← Dependency: [[ContractValidationRequestDto (Class 1802505)]]
- → Dependency: [[ServiceAssignmentDto]]
- → Dependency: [[ServiceAssignmentDto]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractStatuses | ContractStatuses |  |
| assignedServices | ServiceAssignmentDto |  |
| notAssignedServices | ServiceAssignmentDto |  |
