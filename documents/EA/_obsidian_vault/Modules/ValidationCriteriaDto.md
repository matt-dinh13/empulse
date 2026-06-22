---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation"
domain: "Modules"
element_id: 1802495
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ValidationCriteriaDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation

## 📝 Notes

Contract validation request criteria

## 🔗 Connections (3)

- → Dependency: [[{ADD}ServiceDto]]
- → Dependency: [[{ADD}ServiceDto]]
- ← Dependency: [[ContractValidationRequestDto]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractStatuses | string |  |
| {ADD}assignedServices | ServiceDto |  |
| {ADD}notAssignedServices | ServiceDto |  |
