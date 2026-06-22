---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights"
domain: "Analysis Model"
element_id: 1868322
diagrams: 9
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.290 Activate contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights

## 📝 Notes

This UC was created to separate contract activation from contract registration since these actions needn't follow each other. This use case describes which actions have to be performed when a contract is moved to status 'Active'. 

In case of an Insurance activation, there are only processed the Insurances where premium is charged by BSL in this use case. 
For the Insurance charged by AM, see UC 11.772 Activate insurance on Contract event notification

## 🔗 Connections (7)

- → Realisation: [[01.290 Activate contract (Requirement 1875427)]]
- → UseCase «include»: [[{MOD}05.091 Generate outgoing payment - insurance]]
- → UseCase «include»: [[11.040 Activate insurance contract (UseCase 1879790)]]
- → Dependency: [[{MOD}Calculation of Loan Service parameters]]
- → Dependency: [[Create first insurance period upon activation]]
- ← UseCase «include»: [[{MOD}01.274 Activate disbursed contracts]]
- ← UseCase: [[CaBus-AM]]

## 📊 Appears In (9 diagrams)

- Custom: AccessRights
- Custom: CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
- Custom: CLM-3818 - Contract registration, activation and reactivation
- Use Case: Activate Insurance contract
- Use Case: Activation of contract on a repayment
- Use Case: Contract registration
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: Insurance Contract Management
