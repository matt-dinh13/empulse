---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights"
domain: "Analysis Model"
element_id: 1846347
diagrams: 4
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.667 Revoke disbursement channel change request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights

## 📝 Notes

By this use case the user revokes demanded changes on disbursement payment channel. 
The system:
- sets status of request
- creates a ticket to appropriate department

## 🔗 Connections (5)

- ← Dependency: [[Revoke]]
- → UseCase «include»: [[01.674 Delete card data in external module for contract]]
- → Realisation: [[01.667 Revoke disbursement channel change request]]
- → Realisation: [[Requirement1 - Verify change of disbursement payment channel]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: PAYM-1365 (CBL-3841) - BSL - send request to CEV to verify card data
- Custom: Show disbursement channel change request - UI
- Use Case: Disbursement channel change request processing
