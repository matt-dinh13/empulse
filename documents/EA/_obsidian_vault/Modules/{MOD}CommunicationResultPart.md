---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-5006 - Extend getCommunicationDetail with logicalDataType/CLM-5006 - Extend getCommunicationDetail with logicalDataType"
domain: "Modules"
element_id: 1813976
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 {MOD}CommunicationResultPart

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-5006 - Extend getCommunicationDetail with logicalDataType/CLM-5006 - Extend getCommunicationDetail with logicalDataType

## 🔗 Connections (4)

- ← Dependency: [[ClcCommunicationRecord]]
- ← Dependency: [[CompositeCommunicationRecord (Class 1813978)]]
- → Dependency: [[CommunicationCommunicationResult]]
- → Abstraction: [[CommunicationResult]]

## 📊 Appears In (4 diagrams)

- Custom: CLM-5006 - Extend getCommunicationDetail with logicalDataType
- Logical: Common
- Logical: getCommunicationDetail
- Logical: searchCommunication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| value | string |  |
| result | CommunicationResult |  |
| logicalDataType | string |  |
