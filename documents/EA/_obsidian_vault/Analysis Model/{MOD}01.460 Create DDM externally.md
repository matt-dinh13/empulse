---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Access Rights"
domain: "Analysis Model"
element_id: 1817773
diagrams: 4
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.460 Create DDM externally

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Access Rights

## 📝 Notes

Purpose of this use case is to create a new Direct Debit Mandate (DDM) for application via API.

## 🔗 Connections (9)

- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Realisation: [[01.460 Create DDM externally]]
- → Dependency: [[Get allowed repayment methods for application]]
- → Realisation: [[01.460 Create DDM externally - all applications]]
- → Dependency: [[Determinate DDM valid to for contract]]
- → Dependency: [[Algorithm_ Calculate DDM limit]]
- → Dependency: [[Create validation error message]]
- ← Realisation: [[ApplicationPaymentChannelManagementWS_v3 (Interface 1819587)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Logical: ApplicationPaymentChannelManagementWS_v3 - Create DDM
- Use Case: Use Case
