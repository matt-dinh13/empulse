---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1673434
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Same file content not imported (VAL_0709)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 📝 Notes

System checks if file with same content (represented by hash) is not yet imported and is in one of following statuses: 'Not started', 'Running', 'Finished'.

In case the validation fails, system shows a message (MSG_0189) saying the file with the same content was already imported - by who, when and what status is the file currently in.

## 📊 Appears In (1 diagrams)

- Use Case: Import incoming payments
