---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1742198
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Receive coma.contract.event.v1 notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

KAFKA topic = coma.contract.event.v1
Received only ce_type = net.homecredit.coma.contract.event.v1.ContractActivated
Only contract type = CEL is accepted. For other types, the process ends.
Needed data for next usage are described in the ContractActivatedPayload structures
Documentation:
https://coma.id00c1.id.infra/async-api/ui/index.html?schemaUrl=%2Fasync-api%2Fschema&definition=clm%3Adefault

## 🔗 Connections (2)

- ← Realisation: [[ContractActivatedPayload]]
- ← Dependency: [[Get Contract data]]

## 📊 Appears In (2 diagrams)

- Analysis: SCL After Activation Process
- Logical: ContractActivated notification data
