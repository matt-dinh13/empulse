---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model/Service Interpreter (SIR)/SIR_salesquote_processing_seq"
domain: "Modules"
element_id: 1749354
diagrams: 1
connections: 7
tags:
  - sequence
  - modules
---

# 📄 ContractService

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model/Service Interpreter (SIR)/SIR_salesquote_processing_seq

## 🔗 Connections (7)

- → Sequence: [[SIR (Sequence 1749358)]]
- ← Sequence: [[SIR (Sequence 1749358)]]
- → Sequence: [[ContractService (Sequence 1749354)]]
- ← Sequence: [[ContractService (Sequence 1749354)]]
- → Sequence: [[RMQ.csi.contract-service]]
- → Sequence: [[RMQ.csi.contract-service]]
- ← Sequence: [[RQM.csi.am. processservice operationnotification]]

## 📊 Appears In (1 diagrams)

- Sequence: SIR_salesquote_processing
