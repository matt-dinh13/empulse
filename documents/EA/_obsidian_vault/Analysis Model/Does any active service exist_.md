---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833444
diagrams: 1
connections: 3
tags:
  - decision
  - analysis-model
---

# 🔀 Does any active service exist?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 🔗 Connections (3)

- → ControlFlow: [[Set result_TRUE]]
- ← ControlFlow: [[Check for active GP_GRP service]]
- → ControlFlow: [[Show MSG_GP_OR_GRP_ASSIGNED_TO_CONTRACT]]

## 📊 Appears In (1 diagrams)

- Activity: Check concurrent active loan services - Activity
