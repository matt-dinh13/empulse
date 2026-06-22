---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation"
domain: "Modules"
element_id: 1802494
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ValidationErrorsDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation

## 📝 Notes

List of validation errors for given contract

## 🔗 Connections (2)

- → Dependency: [[ValidationErrorDto]]
- ← Dependency: [[ContractValidationResponseDto]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| errors | ValidationErrorDto |  |
