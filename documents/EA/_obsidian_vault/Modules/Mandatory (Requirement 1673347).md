---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673347
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Mandatory

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules

## 📝 Notes

System checks if file with same name is not yet imported and is in one of following statuses: 'Not started', 'Running', 'Finished'.

In case the validation fails, system shows a message (MSG_0188) saying the file with the same name was already imported - by who, when and what status is the file currently in.

Message example:
Import of file XY_ABCDEFGH_2011-06-22_1.xml failed.
File with the same name was already imported by John Brown at 14:32:22 21/06/2011 and it is in status finished.

## 🔗 Connections (2)

- ← Dependency: [[Payment channel on pair payment (Action 1673342)]]
- ← Dependency: [[Charging date is between original deposit date and current date (Requirement 1673346)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
