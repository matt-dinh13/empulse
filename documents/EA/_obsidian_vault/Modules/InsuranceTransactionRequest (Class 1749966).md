---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1749966
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 InsuranceTransactionRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

It represent a account transactions which occurred on a insurance contract in one moment (except contract signature - this information is send due CELAccountTransactionsRequest together with transactions on fees and principal).

## 🔗 Connections (4)

- → Dependency: [[Processing InsuranceTransactionRequest]]
- → Dependency: [[InitialTransactionType (Enumeration 1471785)]]
- → Dependency «transformation»: [[TRANSAC150]]
- → Dependency: [[CELInsuranceAccountTransaction]]

## 📊 Appears In (2 diagrams)

- Logical: Additional insurance transaction - Communication model
- Logical: Additional insurance transaction - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionDate | date |  |
| contractCode | string |  |
| insuranceItem | External Reference |  |
| typeOfOperation | CELAccountTransactionsOperationType |  |
| {ADD}initTransactionType | InitialTransactionType |  |
