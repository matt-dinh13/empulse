---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ContractActivated notification data"
domain: "Requirements Model"
element_id: 1742197
diagrams: 1
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 ContractActivatedPayload

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ContractActivated notification data

## 📝 Notes

Data of Contract obtained from the coma.contract.event.v1 KAFKA topic

## 🔗 Connections (4)

- → Realisation: [[Receive coma.contract.event.v1 notification]]
- → Usage: [[DocumentPayload]]
- → Usage: [[ProductPayload]]
- → Usage: [[StatusTransitionPayload]]

## 📊 Appears In (1 diagrams)

- Logical: ContractActivated notification data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customerId | string |  |
| documents | DocumentPayload |  |
| product | ProductPayload |  |
| statusTransitions | StatusTransitionPayload |  |
| code | string |  |
