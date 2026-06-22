---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation"
domain: "Modules"
element_id: 1802508
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ContractValidationResponseDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation

## 📝 Notes

Result of contract validation with list of contracts numbers which are valid and validation errors for each contract that failed validation

## 🔗 Connections (2)

- → Dependency: [[ValidationErrorsDto (Class 1802510)]]
- ← Dependency: [[{ADD}contracts-validation]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| valid | string |  |
| errors | ValidationErrorsDto |  |
