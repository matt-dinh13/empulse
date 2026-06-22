---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1820047
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 PaymentChannel

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Object containing data about some particular payment channel.

## 🔗 Connections (3)

- ← Dependency: [[Application (Class 1820110)]]
- ← Dependency: [[Application (Class 1820110)]]
- → Dependency: [[Account Type (Enumeration 1820093)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Logical: Application

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| accountNumber | string |  |
| currency | string |  |
| holderName | string |  |
| accountType | Account Type |  |
| ddmLimitAmount | decimal |  |
| ddmValidFrom | date |  |
| ddmValidTo | date |  |
| bankBranch | string |  |
| salesroom | long |  |
| ddmRegularPayment | string |  |
| ddmRegularPaymentAmount | long |  |
| truncatedPan | string |  |
| cardIssuerName | string |  |
| externalCardId | string |  |
