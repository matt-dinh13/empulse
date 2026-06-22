---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-4976 REST API getCommunicationDetail - add support for CUID"
domain: "Modules"
element_id: 1813978
diagrams: 4
connections: 12
tags:
  - class
  - modules
---

# 🔷 CompositeCommunicationRecord

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-4976 REST API getCommunicationDetail - add support for CUID

## 📝 Notes

Gets masked if priv ...SENSITIVE_DATA is not present for user.

## 🔗 Connections (12)

- ← Dependency: [[searchCommunication (Class 1801391)]]
- → Dependency: [[{ADD}User]]
- → Dependency: [[Type (Class 1813980)]]
- → Dependency: [[ExternalId (Class 1813984)]]
- → Dependency: [[Contact (Class 1813979)]]
- → Dependency: [[ClcCommunicationClient]]
- → Dependency: [[Channel (Class 1813977)]]
- → Dependency: [[{MOD}CommunicationResultPart]]
- → Dependency: [[Status (Class 1813975)]]
- → Dependency: [[User (Class 1813974)]]
- → Dependency: [[Result (Class 1813973)]]
- ← Dependency: [[getExternalCommunicationDetail (Class 1813995)]]

## 📊 Appears In (4 diagrams)

- Custom: CLM-4976 REST API getCommunicationDetail - add support for CUID
- Logical: Common
- Logical: getExternalCommunicationDetail
- Logical: searchCommunication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}client | ClcCommuncationClient |  |
| {ADD}creationDate | string |  |
| contact | CommunicationContact |  |
| createdBy | CommunicationUser |  |
| externalId | CommunicationId |  |
| channel | CommunicationChannel |  |
| note | string |  |
| result | CommunicationResult |  |
| status | CommunicationStatus |  |
| type | CommunicationType |  |
| resultParts | ClcCommunicationResultPart |  |
