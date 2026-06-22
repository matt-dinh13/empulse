---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655415
diagrams: 1
connections: 8
tags:
  - state
  - analysis-model
---

# 🔄 PLW - LAP waiting

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 🔗 Connections (8)

- → ObjectFlow: [[ACL Approved with Cross-sell limits]]
- → StateFlow: [[POG - Offers generated]]
- → StateFlow: [[Leave status _In pre-process_]]
- → StateFlow: [[Leave status _In pre-process_]]
- → StateFlow: [[PDRAFT - Draft]]
- ← StateFlow: [[PCI - CIF identified]]
- → StateFlow: [[PLF - LAP failed]]
- → ObjectFlow: [[CF Client draft]]

## 📊 Appears In (1 diagrams)

- Statechart: In Pre-process (P)
