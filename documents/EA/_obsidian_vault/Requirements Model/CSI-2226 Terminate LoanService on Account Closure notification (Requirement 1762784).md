---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type"
domain: "Requirements Model"
element_id: 1762784
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2226 Terminate LoanService on Account Closure notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type

## 📝 Notes

Goal of this requirement is to replace various sources of contract/account finishing notifications for triggering the loan service/insurance termination by Account Closure notification only - see UC 08.295 Process Account Closure notifications extension
Additionally, the current contract event processors which terminate the insurance will be switched-off - see UC 01.740 and UC Process ContractFinishingAutomaticallySE [CSI]

## 🔗 Connections (2)

- → Aggregation: [[CSI-2052 - Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type]]
- ← Dependency: [[Impacted Use Cases]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type
