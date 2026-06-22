---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/Service responses on Account Closure events"
domain: "Requirements Model"
element_id: 1735989
diagrams: 1
connections: 18
tags:
  - sequence
  - requirements-model
---

# 📄 AM

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/Service responses on Account Closure events

## 🔗 Connections (18)

- → Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[AM (Sequence 1735989)]]
- ← Sequence: [[AM (Sequence 1735989)]]
- → Sequence: [[AM (Sequence 1735989)]]
- ← Sequence: [[AM (Sequence 1735989)]]
- → Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[AM (Sequence 1735989)]]
- ← Sequence: [[AM (Sequence 1735989)]]
- ← Sequence: [[Cancellation request]]
- → Sequence: [[AM (Sequence 1735989)]]
- ← Sequence: [[AM (Sequence 1735989)]]
- → Sequence: [[RMQ exchange am.topic.account.closure]]
- ← Sequence: [[BSL_Contract]]
- ← Sequence: [[Payoff request]]
- → Sequence: [[RMQ echange clm.request.account]]
- ← Sequence: [[Termination request]]
- ← Sequence: [[Write-off request]]

## 📊 Appears In (1 diagrams)

- Sequence: Service responses on Account Closure events
