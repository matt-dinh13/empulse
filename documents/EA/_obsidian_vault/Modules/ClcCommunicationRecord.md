---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getCommunicationDetail"
domain: "Modules"
element_id: 1801366
diagrams: 1
connections: 8
tags:
  - class
  - modules
---

# 🔷 ClcCommunicationRecord

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getCommunicationDetail

## 🔗 Connections (8)

- → Dependency: [[{MOD}CommunicationResultPart]]
- → Dependency: [[ClcCommunicationClient]]
- → Dependency: [[User (Class 1813974)]]
- ← Dependency: [[getCommunicationDetail (Class 1801365)]]
- → Dependency: [[ClcCommuncationAddress]]
- → Dependency: [[ClcCommuncationEvent]]
- → Dependency: [[ClcCommuncationContract]]
- → Dependency: [[{MOD}ClcCommuncationChannel]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationDetail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| address | ClcCommuncationAddress |  |
| client | ClcCommunicationClient |  |
| contract | ClcCommunicationContract |  |
| event | ClcCommunicationEvent |  |
| channel | CommunicationChannel |  |
| resultParts | ClcCommunicationResultPart |  |
| originatedAt | string |  |
| {MOD}originatedBy | CommunicationUser |  |
