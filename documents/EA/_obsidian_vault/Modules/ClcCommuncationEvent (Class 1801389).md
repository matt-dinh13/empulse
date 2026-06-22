---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication"
domain: "Modules"
element_id: 1801389
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ClcCommuncationEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication

## 📝 Notes

Communication record event

## 🔗 Connections (4)

- ← Dependency: [[ClcCommunication]]
- → Dependency: [[CommunicationUser]]
- → Dependency: [[User (Class 1813974)]]
- → Dependency: [[CommunicationCommunicationChannel]]

## 📊 Appears In (1 diagrams)

- Logical: createCommunication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| processingStatus | string |  |
| assignedTo | CommunicationUser |  |
| system | string |  |
| channel | CommunicationCommunicationChannel |  |
