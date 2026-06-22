---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869793
diagrams: 6
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.758 Get contract commodities for self-care

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

Use case provides list of contract commodities for self-care purposes

...openapi/v2.0/customers/{customerId}/contracts/{contractNumber}/commodities
e.g.: https://bsl.in00c1.in.infra/bsl/openapi/v2.0/customers/10132756/contracts/4000000028/commodities

## 🔗 Connections (6)

- ← InformationFlow: [[REQ#1 - Modify API to retrieve commodity information for Written Off contracts]]
- ← Dependency: [[commodities (Class 1844142)]]
- → Realisation: [[01.758 Get contract commodities for self-care]]
- → Dependency: [[Getting Commodity data rule]]
- → Dependency: [[Supported contract statuses for self-care]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Custom: CBL-3649 (CLM-1438) Enable Get Commodity for Written Off Contracts via Self-Care API
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Logical: Contract Commodities
- Use Case: Customer Self-Care API - Use Case Model
