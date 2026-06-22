---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation"
domain: "Modules"
element_id: 1838624
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ValidationCriteriaDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation

## 📝 Notes

Contract validation request criteria

## 🔗 Connections (4)

- ← Dependency: [[ContractValidationRequestDto (Class 1838629)]]
- → Dependency: [[ServiceAssignmentDto (Class 1838630)]]
- → Dependency: [[ServiceAssignmentDto (Class 1838630)]]
- → Dependency: [[ContractStatuses (Enumeration 1838626)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractStatuses | ContractStatuses |  |
| assignedServices | ServiceAssignmentDto |  |
| notAssignedServices | ServiceAssignmentDto |  |
