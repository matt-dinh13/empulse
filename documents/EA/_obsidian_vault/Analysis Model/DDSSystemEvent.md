---
type: Class
stereotype: "abstract"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model"
domain: "Analysis Model"
element_id: 1230724
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 DDSSystemEvent

> **Type**: Class · **Stereotype**: «abstract»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model

## 🔗 Connections (5)

- → Generalization: [[SystemEvent]]
- ← Generalization: [[{ADD}DDSPostedSE]]
- → Association: [[Direct Debit Statement]]
- ← Generalization: [[DDSConfirmationSE]]
- → Dependency «processed by»: [[{MOD}System event processing]]

## 📊 Appears In (3 diagrams)

- Logical: COMMON for system events
- Logical: DDSSystemEvent schema
- Use Case: System events processing
