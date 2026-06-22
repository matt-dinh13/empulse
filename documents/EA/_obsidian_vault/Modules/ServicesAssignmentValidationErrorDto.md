---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation"
domain: "Modules"
element_id: 1802504
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServicesAssignmentValidationErrorDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation

## 🔗 Connections (2)

- → Dependency: [[ServiceStatuses]]
- ← Dependency: [[ValidationError (Enumeration 1802501)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| message | string |  |
| type | string |  |
| serviceCode | string |  |
| minVersion | string |  |
| maxVersion | string |  |
| serviceStatuses | ServiceStatuses |  |
