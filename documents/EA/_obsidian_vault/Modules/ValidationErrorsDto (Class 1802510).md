---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation"
domain: "Modules"
element_id: 1802510
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ValidationErrorsDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation

## 📝 Notes

List of validation errors for given contract

## 🔗 Connections (2)

- ← Dependency: [[ContractValidationResponseDto (Class 1802508)]]
- → Dependency: [[ValidationError (Enumeration 1802501)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| errors | ValidationError |  |
