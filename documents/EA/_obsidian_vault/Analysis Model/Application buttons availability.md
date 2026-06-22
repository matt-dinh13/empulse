---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764668
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Application buttons availability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

If a user does not have the basic access right of the use case that is run by a button, then the button won't be visible at all for the user. Similarly, when a button runs more than one use case, the use has to have rights for all of the use cases.

If a user has the access rights to perform a functionality started by a button but the functionality is not available at this time, then the button will be visible, but disabled for the user. Rules "when the functionality is not available" have to be described in UC specification (i.e. it has to be described under which conditions is button disabled).

If button executes a use case and preconditions of that use case are not met, then the button will be disabled (in case that another behavior is required, then it has to be described in UC specification).

## 🔗 Connections (1)

- ← Dependency: [[General rules for user interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
