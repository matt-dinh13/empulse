---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Access Rights"
domain: "Analysis Model"
element_id: 1852807
diagrams: 12
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.720 Reactivate finished contracts

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Access Rights

## 📝 Notes

The use case describes a process of reactivation finished contract due to removing a client's payment from an installment.
The process checks if the finished contract has an outstanding debt > 0. If so, the contract status is changed to "active", eventually "paid-of" - it depends on the last contract status before "finished".
There are processed only contracts that are registered for this check by some of following actions:

	
- cancel incoming payment
	
- un/pair incoming payment
	
- processing of imported incoming payments

Process is triggered automatically - see automatic job proposal in Contract reactivation job.

## 🔗 Connections (3)

- → Realisation: [[01.720 Reactivate finished contracts]]
- → Dependency: [[Contract reactivation job]]
- ← UseCase: [[Time (Actor 1880869)]]

## 📊 Appears In (12 diagrams)

- Custom: Access Rights
- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Custom: CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CLM Overview
- Custom: CLM-3818 - Contract registration, activation and reactivation
- Custom: Overview
- Use Case: Cancellation incoming payment manually
- Use Case: Contract reactivation
- Use Case: Process batch of incoming payment processing requests
- Use Case: Reflection of change of balance
- Use Case: Reflection of change of balance
