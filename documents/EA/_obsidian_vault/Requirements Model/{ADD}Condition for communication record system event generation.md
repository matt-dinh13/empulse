---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3917 (CLM-1508) BSL Communication - support for notification about specific comm records"
domain: "Requirements Model"
element_id: 1442206
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Condition for communication record system event generation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3917 (CLM-1508) BSL Communication - support for notification about specific comm records

## 📝 Notes

{ADD CLM-1508/}
Condition based on communication record channel and status
System event CommunicationRecordCreatedSE is generated only for active combination (ActiveYN=1) of communication record channel and status based on configurable setting Logical Data Model :Communication record notification setting.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}07.040 Create communication record manually]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-3917 (CLM-1508) BSL Communication - REQ #2
- Use Case: Communication records
