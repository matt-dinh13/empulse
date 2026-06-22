---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner"
domain: "Analysis Model"
element_id: 1279516
diagrams: 2
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 Available disbursement channel

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner

## 📝 Notes

Defines disbursement channels available for partner / salesroom.

## 🔗 Connections (10)

- → Dependency: [[PaymentProviderType]]
- → Dependency: [[Salesroom Disbursement Channel]]
- → Dependency: [[Partner Disbursement Channel]]
- → Dependency: [[Partner Disbursement Channel]]
- → Dependency: [[Partner Disbursement Channel]]
- → Dependency: [[Partner Disbursement Channel]]
- → Dependency: [[Salesroom Disbursement Channel]]
- → Dependency: [[Salesroom Disbursement Channel]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Channel | Payment Channel Type |  |
| Product Type | Product Type |  |
| TransactionType | Product Transaction Type |  |
| paymentProviders | PaymentProviderType |  |
