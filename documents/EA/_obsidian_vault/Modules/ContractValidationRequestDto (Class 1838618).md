---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation"
domain: "Modules"
element_id: 1838618
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ContractValidationRequestDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation

## 📝 Notes

Request with list of contracts and validation criteria

## 🔗 Connections (3)

- → Dependency: [[ValidationCriteriaDto (Class 1838619)]]
- ← Dependency: [[contracts-validation (Class 1838091)]]
- → Dependency: [[Contract (Class 1838615)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts validation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contracts | string |  |
| validationCriteria | ValidationCriteriaDto |  |
