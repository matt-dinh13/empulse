---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-443 (CBL-1940) COP_CET_services_changes"
domain: "Requirements Model"
element_id: 1290893
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 IS-443 (CBL-1940) COP_CET_services_changes

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-443 (CBL-1940) COP_CET_services_changes

## 📝 Notes

For contract early termination (CET):
We need to modify CET service execution, in order to close the contract in the same day when all conditions of CET are met. For now, somewhere at 22:00 our system checks for conditions of ER-service and at 20:00 system finishing the contract with executed service. That’s why our Clients get their contracts closed only at the third day after their ER-request. 

For cooling-off period:
We need to modify COP service execution, in order to close the contract in the same day when all conditions of COP are met. For now, contracts are finishing only after the duration of COP are ended and required sums were paid – that behavior could cause us a lot of legal troubles. For example, if client signs agreement about COP at 7th day of contracts signing and required sums are paid, contract has to be finished not on 14th day, but on 7th day.

FER:
The same solution will be implemented also for FER service evaluation since it was requested independently by IN in SR-493990.

SR-493990:
Customer has foreclosed the loan (ER was activated and customer paid the amount), as soon as pairing happens and outstanding is “0”- contract is moved to status finished with closure date as Payment recd +1 day.

## 🔗 Connections (1)

- ← Generalization: [[Finish contract immediately after CET_COP_FER request processing if agreed]]

## 📊 Appears In (1 diagrams)

- Custom: IS-443 (CBL-1940) COP_CET_services_changes
