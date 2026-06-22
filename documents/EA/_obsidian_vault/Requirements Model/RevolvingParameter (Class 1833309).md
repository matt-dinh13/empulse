---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services"
domain: "Requirements Model"
element_id: 1833309
diagrams: 3
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 RevolvingParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services

## 📝 Notes

Parameters specific for CEL contract types

## 🔗 Connections (1)

- ← Dependency: [[GroupChoice (Class 1833313)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Logical: ContractWS - GetContractDetail method
- Logical: ContractWS - GetContractForDisbursement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditLimit | MoneyDto |  |
| minInstallmentAmount | MoneyDto |  |
| installmentDueDayShift | positiveInteger |  |
