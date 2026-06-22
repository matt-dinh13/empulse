---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Access Rights"
domain: "Analysis Model"
element_id: 1850694
diagrams: 7
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}08.605 Update CEL reward payment channel automatically

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Access Rights

## 📝 Notes

{ADD CSI-575 /}
This use case describes an update of the CEL reward payment channels after some debit card contract (account) is terminated. All CEL reward payment channels which uses this account is updated to OC type (own contract).

The use case is run based on a ContractFinishingAutomaticallySE system events which is generated during contract termination confirmation by 01.740 Process notification about credit account closure   

Input: ContractFinishingAutomaticallySE system event

## 🔗 Connections (2)

- → UseCase: [[System event]]
- → Realisation: [[{ADD}08.605 Update CEL reward payment channel automatically]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-11254 (CSI-575) Restriction of charging CEL rewards on closed cards
- Custom: CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished
- Use Case: CEL Rewards 
- Use Case: Contract finishing automatically
- Use Case: Contract finishing manually
- Use Case: REL contract termination request
