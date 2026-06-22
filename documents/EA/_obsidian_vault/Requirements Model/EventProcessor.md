---
type: Sequence
stereotype: "control"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Consolidation - CLM part sequence diagram"
domain: "Requirements Model"
element_id: 1063186
diagrams: 1
connections: 10
tags:
  - sequence
  - requirements-model
---

# 📄 EventProcessor

> **Type**: Sequence · **Stereotype**: «control»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Consolidation - CLM part sequence diagram

## 🔗 Connections (10)

- ← Sequence: [[IS module]]
- ← Sequence: [[01.180 Sign contract UC]]
- ← Sequence: [[05.350 Process disbursement confirmation message UC]]
- → Sequence: [[01.384 Finalize contract consolidation UC]]
- ← Sequence: [[01.384 Finalize contract consolidation UC]]
- → Sequence: [[JMS topic]]
- → Sequence: [[JMS topic]]
- ← Sequence: [[01.380 Prepare Contract for Consolidation UC]]
- → Sequence: [[01.380 Prepare Contract for Consolidation UC]]
- → Sequence: [[01.382 Perform consolidation UC]]

## 📊 Appears In (1 diagrams)

- Sequence: Consolidation - CLM part sequence diagram
