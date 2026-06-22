---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API"
domain: "Requirements Model"
element_id: 1821412
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 BankAccount

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API

## 📝 Notes

Object containing the data of some particular bank account.

## 🔗 Connections (2)

- ← Dependency «use»: [[PaymentChannel (Class 1821431)]]
- ← Dependency «use»: [[DirectDebitMandate (Class 1821408)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| bankCode | string |  |
| bankName | string |  |
| bankBranchCode | string |  |
| bankBranchMICR | string |  |
| bankBranchName | string |  |
| holderName | string |  |
| type | string |  |
