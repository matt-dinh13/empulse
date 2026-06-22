---
type: Activity
stereotype: "Activity"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1742189
diagrams: 1
connections: 4
tags:
  - activity
  - requirements-model
---

# ⚡ DMS Document API

> **Type**: Activity · **Stereotype**: «Activity»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 🔗 Connections (4)

- ← ControlFlow «MessageFlow»: [[Process ABDA result]]
- ← ControlFlow «MessageFlow»: [[Process Rapindo result]]
- → Dependency: [[DMS - Create document to store Rapindo result]]
- → Dependency: [[DMS - Update Document to store vehicle insurance]]

## 📊 Appears In (1 diagrams)

- Analysis: SCL After Activation Process
