---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Access Rights"
domain: "Analysis Model"
element_id: 1850692
diagrams: 4
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.601 Process CEL Reward

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Access Rights

## 📝 Notes

This technical use case provides functionality for application of CEL Rewards service.
Client with good payment discipline is rewarded after fulfilling conditions of the service.

This use case consists of two parts:
- at the beginning of evaluated period Loxon (LCS) is notified using Loan Service Request about estimated amount of possible reward for upcoming evaluated period, DPD delay tolerance, length of upcoming evaluated period, start and end of evaluated period
- in the end of evaluated period when job is run to calculate charged reward and the result is communicated to client

## 🔗 Connections (9)

- → Dependency: [[Get CEL reward period for evaluation]]
- → Dependency: [[Checking of correct installment payments]]
- → Realisation: [[08.601 Process CEL Reward]]
- → Dependency: [[Calculate Reward base amount]]
- → Realisation: [[Update the evaluation of CEL reward service]]
- → Dependency: [[Calculate CEL reward amount]]
- → Dependency: [[Process upcoming CEL reward evaluated period]]
- → Dependency: [[Create CEL reward evaluated period]]
- ← UseCase «include»: [[08.602 Select CEL Rewards contracts (UseCase 1850691)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-11254 (CSI-575) Restriction of charging CEL rewards on closed cards
- Custom: IS-452 (CBL-2283) CEL Reward enhancement
- Use Case: CEL Rewards 
