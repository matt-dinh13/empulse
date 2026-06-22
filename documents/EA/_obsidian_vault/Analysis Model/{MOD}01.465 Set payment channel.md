---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Access Rights"
domain: "Analysis Model"
element_id: 1817776
diagrams: 3
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.465 Set payment channel

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Access Rights

## 📝 Notes

This use case describes how payment channel to application is being created and updated

## 🔗 Connections (8)

- → Realisation: [[01.465 Set payment channel]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Dependency: [[Payment channel validation]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Realisation: [[01.465 Set payment channel - all applications]]
- ← Realisation: [[ApplicationPaymentChannelManagementWS_v3 (Interface 1819587)]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: ApplicationPaymentChannelManagementWS_v3 - SetPaymentChannel
- Use Case: Use Case
