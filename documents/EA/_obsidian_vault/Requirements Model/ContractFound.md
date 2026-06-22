---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services"
domain: "Requirements Model"
element_id: 1833287
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 ContractFound

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services

## 🔗 Connections (3)

- ← Dependency: [[GetContractListResponse]]
- → Dependency: [[MoneyDto (Class 1833302)]]
- → Dependency: [[CreditType (Enumeration 1833297)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Logical: ContractWS - GetContractList method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}totalOutstandingDebt | MoneyDto |  |
| contractCode | string |  |
| contractType | CreditType |  |
