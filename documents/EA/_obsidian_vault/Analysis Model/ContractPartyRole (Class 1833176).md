---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v1.0/Contract Financial Partnerships"
domain: "Analysis Model"
element_id: 1833176
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ContractPartyRole

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v1.0/Contract Financial Partnerships

## 🔗 Connections (4)

- → Usage: [[RoleType]]
- → Usage: [[ContractPartyRoleAttribute]]
- ← Usage: [[ContractFinancialPartneshipResponse]]
- → Usage: [[Party (Class 1833179)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Financial Partnerships

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| party | Party |  |
| role | RoleType |  |
| validForm | date |  |
| validTo | date |  |
| attributes | ContractPartyRoleAttribute |  |
