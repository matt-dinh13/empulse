---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1873981
diagrams: 4
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contracts validation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights

## 📝 Notes

{ADD CLM-3748/}
The use case describes validating list of contracts based on criterias.

Request is sent by POST on REST API : …/rest/v1/contracts-maintenance/contracts-status-revert
E.g. https://coma.vn00a1.cz.infra/rest/v1/contracts-validation/
{
  "contracts": [
    "3700020223",
    "3700020231",
    "3700020232"
  ],
  "validationCriteria": {
    "contractStatuses": [
      "A",
      "T",
      "N"
    ]
  }
}

## 🔗 Connections (2)

- ← Dependency: [[contracts-validation]]
- → Realisation: [[{ADD}Contracts validation]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-11068 (CLM-3798) - Add new types of validation - serviceAssigned, serviceNotAssigned
- Logical: Contracts validation
- Use Case: Use Cases
