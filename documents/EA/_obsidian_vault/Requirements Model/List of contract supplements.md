---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Contract Supplement screen flow"
domain: "Requirements Model"
element_id: 1843466
diagrams: 2
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 List of contract supplements

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Contract Supplement screen flow

## 📝 Notes

List of contract supplement related to the contract.

LDM: 
Contract->ContractSupplement

Localization code: SUP_ListOfContractSupplements

## 🔗 Connections (2)

- → Dependency: [[13.061 Show credit limit change request detail]]
- → Association «navigate»: [[{MOD}Transaction Supplement detail]]

## 📊 Appears In (2 diagrams)

- Custom: Contract Supplement screen flow
- Custom: Tab-Contract supplements

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Definition | string |  |
| Status | string |  |
| Created by | User |  |
| Created date | date |  |
| Updated by | User |  |
| Updated date | date |  |
| Buttons | buttons |  |
