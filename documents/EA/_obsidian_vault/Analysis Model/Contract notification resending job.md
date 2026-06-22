---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Use case model"
domain: "Analysis Model"
element_id: 1856405
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contract notification resending job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Use case model

## 📝 Notes

Automatic job code: CONTRACT_NOTIFICATION_RESEND
Description: It process requests for resending contract notification messages
Used for: UC 01.955 Generate Contract notification message on external request 

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY (outside business hours)
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.955 Generate Contract notification message on external request]]

## 📊 Appears In (1 diagrams)

- Use Case: Sending Contract notification on request
