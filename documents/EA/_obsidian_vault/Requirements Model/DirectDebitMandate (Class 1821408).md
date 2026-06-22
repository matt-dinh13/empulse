---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API"
domain: "Requirements Model"
element_id: 1821408
diagrams: 2
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 DirectDebitMandate

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API

## 📝 Notes

Object containing the data of some particular direct debit mandate.

## 🔗 Connections (5)

- ← Dependency «use»: [[DirectDebitMandates]]
- → Dependency: [[Get bank branch data]]
- → Dependency: [[Get bank data]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[BankAccount (Class 1821412)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | BankAccount |  |
| code | string |  |
| ecsProviderCode | string |  |
| limit | MoneyType |  |
| regularPaymentType | string |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
