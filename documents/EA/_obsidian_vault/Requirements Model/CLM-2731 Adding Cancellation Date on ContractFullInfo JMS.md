---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8838 (CLM-2731) Adding Cancellation Date on ContractFullInfo JMS"
domain: "Requirements Model"
element_id: 1496104
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-2731 Adding Cancellation Date on ContractFullInfo JMS

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8838 (CLM-2731) Adding Cancellation Date on ContractFullInfo JMS

## 📝 Notes

Goal of this task is to add a new contract event, i.e. contract cancelled - into the current ContractFullInfoRequest message.
Next, we change data source of the the current CFI ContractEvent - L_DISBURSEMENT for Initial Transaction = 'POS' into data from CONSUMER_LOAN_DISBURSED Business Event.

## 📊 Appears In (1 diagrams)

- Custom: CBL-8838 (CLM-2731) Adding Cancellation Date on ContractFullInfo JMS
