---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Access Rights"
domain: "Analysis Model"
element_id: 1817777
diagrams: 4
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.462 Get DDM by application

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Access Rights

## 📝 Notes

Purpose of this use case is to get list of Direct Debit Mandate (DDM) related to the application via API.

## 🔗 Connections (7)

- → Dependency: [[Get bank branch data]]
- → Realisation: [[01.462 Get DDM by application]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Get bank data]]
- → Dependency: [[Get all application DDM]]
- ← Realisation: [[ApplicationPaymentChannelManagementWS_v3 (Interface 1819587)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Logical: ApplicationPaymentChannelManagementWS_v3 - Get DDM by Contract
- Use Case: Use Case
