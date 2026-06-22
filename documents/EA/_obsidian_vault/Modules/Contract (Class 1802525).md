---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v11/searchContracts"
domain: "Modules"
element_id: 1802525
diagrams: 1
connections: 11
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v11/searchContracts

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (11)

- → Usage: [[ContractProduct (Class 1802526)]]
- → Usage: [[ContractRepaymentChannel]]
- → Usage: [[ContractCustomer (Class 1802524)]]
- → Usage: [[{DEL}ContractActualDebt]]
- → Usage: [[ContractlFinancialParameter]]
- → Usage: [[ExtendedProperty (Class 1802520)]]
- → Usage: [[{ADD}ContractCommodity]]
- → Usage: [[ContractOfferFinancialParameters]]
- → Aggregation: [[ContractsResponse]]
- → Usage: [[ContractService (Class 1802516)]]
- → Usage: [[ContractEvent (Class 1802513)]]

## 📊 Appears In (1 diagrams)

- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| contractStatus | string |  |
| customer | ContractCustomer |  |
| product | contractProduct |  |
| contractEvents | ContractEvent |  |
| creditAccountNumber | string |  |
| financialParameter | ContractFinancialParameter |  |
| hiddenStatus | int |  |
| contractType | string |  |
| extendedProperties | ExtendedProperty |  |
| contractServices | ContractService |  |
| {ADD}contractCommodities | ContractCommodity |  |
| offerFinancialParameter | ContractOfferFinancialParameters |  |
| {DEL}actualDebt | ContractActualDebt |  |
| repaymentChannel | ContractRepaymentChannel |  |
| installmentExists | boolean |  |
