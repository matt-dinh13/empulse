---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1868489
diagrams: 3
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {MOD}15.109 Contract Status Revert on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Access Rights

## 📝 Notes

{ADD CLM-3537 /}
The use case describes receiving a request for contracts status revert
Request is sent by POST on REST API : …/rest/v1/contracts-maintenance/contracts-status-revert
E.g. https://coma.id00a1.cz.infra/rest/v1/contracts-maintenance/contracts-status-revert
{
  "statusFrom": "H",
  "statusTo": "L",
  "reason": "SR-456789 - Mistake in the process",
  "contracts": [
    {
      "contractCode": "3800020248"
    }
  ]
}

## 🔗 Connections (2)

- ← Dependency: [[contracts-status-revert (Class 1868409)]]
- → Realisation: [[{ADD}Contracts revert Written-off to Paid-off (Requirement 1858815)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Contracts Status Revert
- Use Case: Use Cases
