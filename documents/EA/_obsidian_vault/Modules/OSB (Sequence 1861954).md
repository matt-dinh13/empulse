---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Interaction Diagrams"
domain: "Modules"
element_id: 1861954
diagrams: 6
connections: 30
tags:
  - sequence
  - modules
---

# 📄 OSB

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Interaction Diagrams

## 🔗 Connections (30)

- → Sequence: [[INCPAY Module (Sequence 1861956)]]
- → Sequence: [[INCPAY Module (Sequence 1861956)]]
- → Sequence: [[INCPAY Module (Sequence 1861956)]]
- → Sequence: [[Local Payment gateway]]
- → Sequence: [[INCPAY Module (Sequence 1861956)]]
- ← Sequence: [[INCPAY Module (Sequence 1861956)]]
- → Sequence: [[INCPAY Module (Sequence 1861956)]]
- → Sequence: [[INCPAY Module (Sequence 1861956)]]
- → Sequence: [[Local Payment gateway]]
- → Sequence: [[Local Payment gateway]]
- ← Sequence: [[External System (CaBus)]]
- → Sequence: [[External System (CaBus)]]
- → Sequence: [[INCPAY Module]]
- ← Sequence: [[BSL (Sequence 1861946)]]
- ← Sequence: [[INP Module]]
- → Sequence: [[INP Module]]
- ← Sequence: [[INP Module]]
- ← Sequence: [[User (Actor 1861941)]]
- ← Sequence: [[User (Actor 1861941)]]
- → Sequence: [[User (Actor 1861941)]]
- ← Sequence: [[User (Actor 1861941)]]
- → Sequence: [[User (Actor 1861941)]]
- ← Sequence: [[BSL (Sequence 1861944)]]
- ← Sequence: [[BSL (Sequence 1861944)]]
- → Sequence: [[BSL (Sequence 1861944)]]
- → Sequence: [[BSL (Sequence 1861944)]]
- ← Sequence: [[BSL (Sequence 1861944)]]
- ← Sequence: [[BSL (Sequence 1861944)]]
- → Sequence: [[BSL (Sequence 1861944)]]
- ← Sequence: [[BSL (Sequence 1861944)]]

## 📊 Appears In (6 diagrams)

- Sequence: 01 Bulk import of payments (asynchronous)
- Sequence: 02 Create single incoming payment (GUI)
- Sequence: 04 Process incoming payment requests
- Sequence: 05a Cancel incoming payment via GUI (synchronous)
- Sequence: 06 Cancel payment via API (asynchronous)
- Sequence: 08 Creation of artificial payments
