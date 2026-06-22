---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3649 (CLM-1438) Enable Get Commodity for Written Off Contracts via Self-Care API"
domain: "Requirements Model"
element_id: 1281893
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Modify API to retrieve commodity information for Written Off contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3649 (CLM-1438) Enable Get Commodity for Written Off Contracts via Self-Care API

## 📝 Notes

The goal is to update Constraint for UC01.758 Get contract commodities for self-care:
- add status H (Written Off) to possible statuses

API: https://bsl.[env]/bsl/openapi/v1.0/customers/[cuid]/contracts/[contractnumber]/commodities

## 🔗 Connections (1)

- → InformationFlow: [[{MOD}01.758 Get contract commodities for self-care]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-3649 (CLM-1438) Enable Get Commodity for Written Off Contracts via Self-Care API
