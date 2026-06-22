---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/_Interface/Setting of ECS partner on DDM for JL API/PAYM/Business rules"
domain: "Analysis Model"
element_id: 1369973
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Setting of ECS partner on DDM for JL API

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Setting of ECS partner on DDM for JL API/PAYM/Business rules

## 📝 Notes

{ADD CBL-4767 PAYM-1790}
This business rule returns ECS Provider Code based on provided inputs.

Input:
bankBranchCode
bankBranchSecondaryCode
bankCode
bankDDProvider
bankDDproviderType
bankName
co-lendingPartner

Output:
ECSProviderCode

## 🔗 Connections (3)

- ← Dependency: [[Evaluate and set provider for DDM draft]]
- ← Dependency: [[Check and update provider on DDM]]
- ← Dependency: [[{MOD}01.422 Update application DDM]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Logical: Setting of ECS partner on DDM for JL API
