---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764663
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Concurrent data modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

When data of any entity are modified by an user and user tries to store this changes, then system will check that this object wasn't modified by somebody else in parallel (check that data or version in DB is still the same). If change was done, then message MSG_0383 is shown and user won't be able to store data.

## 🔗 Connections (1)

- ← Dependency: [[General rules for use cases]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
