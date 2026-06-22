---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API"
domain: "Requirements Model"
element_id: 1819611
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 BankAccountInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API

## 🔗 Connections (2)

- ← Dependency: [[DDMInfoBaseDto (Class 1819628)]]
- → Dependency: [[AccountTypeDto (Enumeration 1819610)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Logical: ApplicationPaymentChannelManagementWS_v3 - Get DDM by Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountHolderName | string |  |
| accountNumber | string |  |
| accountType | AccountTypeDto |  |
| bankBranchCode | string |  |
| bankCode | string |  |
| micr | string |  |
| bankBranchSynchronizationCode | string |  |
| bankSynchronizationCode | string |  |
