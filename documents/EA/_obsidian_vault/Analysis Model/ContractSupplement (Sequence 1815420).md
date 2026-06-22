---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Use Case Model/Card Balance Transfer request processing"
domain: "Analysis Model"
element_id: 1815420
diagrams: 1
connections: 25
tags:
  - sequence
  - analysis-model
---

# 📄 ContractSupplement

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Use Case Model/Card Balance Transfer request processing

## 🔗 Connections (25)

- ← Sequence: [[Actor1]]
- → Sequence: [[RMQ exchanges]]
- → Sequence: [[ContractSupplement (Sequence 1815420)]]
- ← Sequence: [[ContractSupplement (Sequence 1815420)]]
- → Sequence: [[PrintServer (Sequence 1815426)]]
- ← Sequence: [[SQS (Sequence 1815424)]]
- → Sequence: [[DMS (Sequence 1815425)]]
- → Sequence: [[KAFKA topic csi.contract.supplements]]
- ← Sequence: [[RMQ exchanges]]
- → Sequence: [[SQS (Sequence 1815424)]]
- → Sequence: [[ContractSupplement (Sequence 1815420)]]
- ← Sequence: [[ContractSupplement (Sequence 1815420)]]
- → Sequence: [[DSM]]
- → Sequence: [[ContractSupplement (Sequence 1815420)]]
- ← Sequence: [[ContractSupplement (Sequence 1815420)]]
- ← Sequence: [[DSM]]
- ← Sequence: [[DMS (Sequence 1815425)]]
- → Sequence: [[ContractSupplement (Sequence 1815420)]]
- ← Sequence: [[ContractSupplement (Sequence 1815420)]]
- ← Sequence: [[PrintServer (Sequence 1815426)]]
- → Sequence: [[KAFKA topic csi.contract.supplements]]
- → Sequence: [[DMS (Sequence 1815425)]]
- ← Sequence: [[DMS (Sequence 1815425)]]
- ← Sequence: [[COMA (Sequence 1815419)]]
- → Sequence: [[COMA (Sequence 1815419)]]

## 📊 Appears In (1 diagrams)

- Sequence: Card Balance Transfer request processing
