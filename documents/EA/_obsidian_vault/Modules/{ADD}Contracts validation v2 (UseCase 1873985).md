---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1873985
diagrams: 3
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contracts validation v2

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights

## 📝 Notes

{ADD CLM-4315/}
The use case describes validating list of contracts based on criterias.

Request is sent by POST on REST API : …/rest/v2/contracts-validation/
E.g. https://coma.vn00a1.cz.infra/rest/v2/contracts-validation/
{
  "contracts": [
    "3700020223",
    "3700020231",
    "3700020232"
  ],
  "validationCriteria": {
    "contractStatuses": [
      "APPROVED"
    ],
    "assignedServices": [
      {
        "serviceCode": "IS_PAYHOL",
        "minVersion": 1,
        "maxVersion": 5,
        "statuses": [
          "NEW"
        ]
      }
    ],
    "notAssignedServices": [
      {
        "serviceCode": "IS_PAYHOL",
        "minVersion": 1,
        "maxVersion": 5,
        "statuses": [
          "NEW"
        ]
      }
    ]
  }
}

## 🔗 Connections (2)

- ← Dependency: [[{ADD}contracts-validation]]
- → Realisation: [[{ADD}Contracts validation]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Contracts validation
- Use Case: Use Cases
