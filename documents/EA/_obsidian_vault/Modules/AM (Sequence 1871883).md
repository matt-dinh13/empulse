---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model/Service Interpreter (SIR_NG) - interaction diagrams/SIR_AccountService-Salesquote_processing_seq"
domain: "Modules"
element_id: 1871883
diagrams: 1
connections: 6
tags:
  - sequence
  - modules
---

# 📄 AM

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model/Service Interpreter (SIR_NG) - interaction diagrams/SIR_AccountService-Salesquote_processing_seq

## 🔗 Connections (6)

- → Sequence: [[AM (Sequence 1871883)]]
- ← Sequence: [[AM (Sequence 1871883)]]
- → Sequence: [[RMQ am.event.notification]]
- ← Sequence: [[RMQ.csi.contract-service (Sequence 1871893)]]
- → Sequence: [[RQM.csi.am. processservice operationnotification (Sequence 1871889)]]
- ← Sequence: [[RMQ.csi.contract-service (Sequence 1871893)]]

## 📊 Appears In (1 diagrams)

- Sequence: SIR_AccountService_Salesquote_processing
