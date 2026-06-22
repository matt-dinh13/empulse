---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API"
domain: "Requirements Model"
element_id: 1819628
diagrams: 2
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 DDMInfoBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API

## 🔗 Connections (5)

- → Dependency: [[DDMConfirmStatusTypeDto (Enumeration 1819618)]]
- → Dependency: [[DDMStatusTypeDto (Enumeration 1819616)]]
- → Dependency: [[FrequencyTypeDto (Enumeration 1819613)]]
- → Dependency: [[BankAccountInfoDto (Class 1819611)]]
- ← Dependency: [[GetDDMByApplicationResponse]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Logical: ApplicationPaymentChannelManagementWS_v3 - Get DDM by Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| limit | MoneyDto |  |
| code | string |  |
| frequency | FrequencyTypeDto |  |
| bankAccount | BankAccountInfoDto |  |
| validFrom | date |  |
| validTo | date |  |
| ecsProvider | string |  |
| externalCode | string |  |
| status | DDMStatusTypeDto |  |
| confirmationStatus | DDMConfirmStatusTypeDto |  |
| confirmationStatusRemark | string |  |
| eMandate | boolean |  |
