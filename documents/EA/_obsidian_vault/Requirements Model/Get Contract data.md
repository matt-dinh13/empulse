---
type: Activity
stereotype: "Activity"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1742233
diagrams: 1
connections: 3
tags:
  - activity
  - requirements-model
---

# ⚡ Get Contract data

> **Type**: Activity · **Stereotype**: «Activity»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 🔗 Connections (3)

- → ControlFlow «SequenceFlow»: [[Contract type (Decision 1742236)]]
- ← ControlFlow «SequenceFlow»: [[ContractActivated (Event 1742212)]]
- → Dependency: [[Receive coma.contract.event.v1 notification]]

## 📊 Appears In (1 diagrams)

- Analysis: SCL After Activation Process
