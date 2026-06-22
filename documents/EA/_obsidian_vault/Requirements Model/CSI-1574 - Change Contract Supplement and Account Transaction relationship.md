---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process"
domain: "Requirements Model"
element_id: 1834353
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1574 - Change Contract Supplement and Account Transaction relationship

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process

## 📝 Notes

Due to Transaction Supplement cancellation support, it is needed to change relationship between Contract Supplement and Account Transaction entities.
Now, Contract Supplement must be able to aggregate more Account Transaction records instead to refer only one Account Transaction record.
Next, a new entity for a Transaction Supplement change requests storage.

Notice:
The mentioned entities are replicated into DWH

## 🔗 Connections (1)

- → Generalization: [[CBL-16689 BNPL Cancellation - API_Process]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16689 (CSI-1531) BNPL Cancellation - API/Process
