---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623731
diagrams: 5
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Same file content not imported (VAL_0709)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

System checks if file with same content (represented by hash) is not yet imported and is in one of following statuses: 'Not started', 'Running', 'Finished'.

In case the validation fails, system shows a message (MSG_0189) saying the file with the same content was already imported - by who, when and what status is the file currently in.

## 🔗 Connections (4)

- ← Dependency: [[01.801 Import sold contracts file (UseCase 1839171)]]
- ← Dependency: [[01.861 Import contract securitization file]]
- ← Dependency: [[04.100 Add charging requests]]
- ← Dependency: [[05.300 Import disbursement confirmations]]

## 📊 Appears In (5 diagrams)

- Custom: Import XML files
- Use Case: Charging request
- Use Case: Contract securitization
- Use Case: Disbursement confirmations
- Use Case: Import sold contracts file
