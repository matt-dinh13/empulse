---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights"
domain: "Analysis Model"
element_id: 1846345
diagrams: 4
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.666 Reject disbursement channel change request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights

## 📝 Notes

By this use case the user rejects demanded changes on disbursement payment channel. 
The system:
- invokes appropriate UC for contract cancellation (if the user does not confirm it, the use case ends)
- sets status on request 
- creates appropriate business event on contract  
- sends a notification to user's inbox who created the request
- creates a ticket to appropriate department

## 🔗 Connections (9)

- ← Dependency: [[Reject]]
- → Realisation: [[Requirement1 - Verify change of disbursement payment channel]]
- → Realisation: [[01.666 Reject disbursement channel change request]]
- → Dependency «include»: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- → UseCase «include»: [[01.674 Delete card data in external module for contract]]
- → UseCase «include»: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- → Dependency «include»: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- → Dependency «include»: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: PAYM-1365 (CBL-3841) - BSL - send request to CEV to verify card data
- Custom: Show disbursement channel change request - UI
- Use Case: Disbursement channel change request processing
