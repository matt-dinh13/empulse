---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication"
domain: "Modules"
element_id: 1801402
diagrams: 1
connections: 11
tags:
  - class
  - modules
---

# 🔷 ClcCreateCommunication

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication

## 📝 Notes

Request body object for creation of communication extended by attributes related to CLC

## 🔗 Connections (11)

- → Dependency: [[CreateCommunicationResultPart]]
- → Dependency: [[CreateCommunicationCommunicationResult]]
- ← Dependency: [[createCommunication]]
- → Dependency: [[ClcCommuncationAddress (Class 1801404)]]
- → Dependency: [[Type (Class 1801411)]]
- → Dependency: [[CreateCommunicationCommunicationStatus]]
- → Dependency: [[ClcCommuncationContract (Class 1801410)]]
- → Dependency: [[CreateCommunicationCommunicationChannel]]
- → Dependency: [[CommunicationClient]]
- → Dependency: [[CreateCommunicationCommunicationContact]]
- → Dependency: [[CreateCommunicationUser]]

## 📊 Appears In (1 diagrams)

- Logical: createCommunication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| note | string |  |
| client | CreateCommunicationClient |  |
| channel | CreateCommunicationCommunicationChannel |  |
| status | CreateCommunicationCommunicationStatus |  |
| result | CreateCommunicationCommunicationResult |  |
| contact | CreateCommunicationCommunicationContact |  |
| type | CreateCommunicationCommunicationType |  |
| resultParts | CreateCommunicationResultPart |  |
| originatedAt | string |  |
| originatedBy | CreateCommunicationUser |  |
| contract | ClcCreateCommunicationContract |  |
| address | ClcCreateCommunicationAddress |  |
