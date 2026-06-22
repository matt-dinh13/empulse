---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication"
domain: "Modules"
element_id: 1801388
diagrams: 1
connections: 14
tags:
  - class
  - modules
---

# 🔷 ClcCommunication

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication

## 🔗 Connections (14)

- → Dependency: [[ExternalId (Class 1813984)]]
- ← Dependency: [[createCommunication]]
- → Dependency: [[Contact (Class 1813979)]]
- → Dependency: [[Result (Class 1813973)]]
- → Dependency: [[Type (Class 1801413)]]
- → Dependency: [[CommunicationResultPart]]
- → Dependency: [[Status (Class 1813975)]]
- → Dependency: [[ClcCommuncationContract (Class 1801410)]]
- → Dependency: [[CommunicationUser]]
- → Dependency: [[CommunicationUser]]
- → Dependency: [[ClcCommuncationAddress (Class 1801404)]]
- → Dependency: [[ClcCommuncationEvent (Class 1801389)]]
- → Dependency: [[CommunicationClient]]
- → Dependency: [[CommunicationCommunicationChannel]]

## 📊 Appears In (1 diagrams)

- Logical: createCommunication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | CommunicationId |  |
| creationDate | string |  |
| createdBy | CommunicationUser |  |
| note | string |  |
| channel | CommunicationCommunicationChannel |  |
| status | CommunicationCommunicationStatus |  |
| result | CommunicationCommunicationResult |  |
| contact | CommunicationCommunicationContact |  |
| type | CommunicationCommunicationType |  |
| client | CommunicationClient |  |
| resultParts | ClcCommunicationCommunicationResultPart |  |
| originatedAt | string |  |
| originatedBy | CommunicationUser |  |
| contract | ClcCommuncationContract |  |
| address | ClcCommunicationAddress |  |
| event | ClcCommunicationEvent |  |
