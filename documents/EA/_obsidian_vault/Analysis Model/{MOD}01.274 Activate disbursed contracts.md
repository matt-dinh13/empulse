---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights"
domain: "Analysis Model"
element_id: 1868315
diagrams: 7
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.274 Activate disbursed contracts

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights

## 📝 Notes

This is implemented as a job executed daily.
Purpose of this use case is to find contracts in status 'Signed' which were disbursed  to client (Contract.ConditionsAccepted = ‘Accepted’) which were registered (Contract.RegistrationStatus = ‘Registered’ (R))  and activates them (call for them usecase Activate contract). 
Next, there are finished Standalone insurance contracts (Contract.Contract Type = 'SAI' {ADD CLM-3818}and Contract.Has Installments = False{/ADD}) having status Active here.

## 🔗 Connections (4)

- → Dependency: [[Activate Disbursed Contracts]]
- → Realisation: [[01.274 Activate disbursed contracts]]
- → UseCase «include»: [[{MOD}01.290 Activate contract]]
- ← UseCase: [[Time (Actor 1880869)]]

## 📊 Appears In (7 diagrams)

- Custom: AccessRights
- Custom: CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
- Custom: CLM-3818 - Contract registration, activation and reactivation
- Custom: PAYM-1613 - savingOfPaymentChannels
- Use Case: Activate Insurance contract
- Use Case: Activation of contract on a repayment
- Use Case: Insurance Contract Management
