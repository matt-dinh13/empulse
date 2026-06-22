---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getCommunicationDetail"
domain: "Modules"
element_id: 1801363
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ClcCommuncationEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getCommunicationDetail

## 🔗 Connections (3)

- → Dependency: [[User (Class 1813974)]]
- ← Dependency: [[ClcCommunicationRecord]]
- → Dependency: [[{MOD}ClcCommuncationChannel]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationDetail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}assignedTo | CommunicationUser |  |
| channel | CommunicationChannel |  |
| processingStatus | string |  |
| system | string |  |
