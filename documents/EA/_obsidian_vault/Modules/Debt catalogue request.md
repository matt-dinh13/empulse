---
type: Sequence
stereotype: "entity"
package: "HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs "
domain: "Modules"
element_id: 1623326
diagrams: 1
connections: 5
tags:
  - sequence
  - modules
---

# 📄 Debt catalogue request

> **Type**: Sequence · **Stereotype**: «entity»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs 

## 🔗 Connections (5)

- ← Sequence: [[Update overdue debt data loader]]
- ← Sequence: [[Publish debt full info job]]
- ← Sequence: [[Update overdue debt dispatcher job]]
- → Sequence: [[Update overdue debt dispatcher job]]
- ← Sequence: [[BSL (Actor 1623318)]]

## 📊 Appears In (1 diagrams)

- Sequence: Scheduled jobs - sequence diagram
