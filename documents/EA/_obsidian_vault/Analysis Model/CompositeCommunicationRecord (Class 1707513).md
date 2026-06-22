---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/searchCommunication"
domain: "Analysis Model"
element_id: 1707513
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 CompositeCommunicationRecord

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/searchCommunication

## 📝 Notes

Gets masked if priv ...SENSITIVE_DATA is not present for user.

## 🔗 Connections (8)

- → Dependency: [[Result (Class 1707517)]]
- → Dependency: [[Channel (Class 1707520)]]
- → Dependency: [[Type (Class 1707516)]]
- → Dependency: [[Contact (Class 1707522)]]
- ← Dependency: [[{ADD}searchCommunication]]
- → Dependency: [[ClcCommuncationClient]]
- → Dependency: [[Status (Class 1707511)]]
- → Dependency: [[ExternalId (Class 1707510)]]

## 📊 Appears In (1 diagrams)

- Logical: searchCommunication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contact | CommunicationContact |  |
| createdBy | string |  |
| dateCreated | string |  |
| externalId | CommunicationId |  |
| channel | CommunicationChannel |  |
| note | string |  |
| result | CommunicationResult |  |
| {ADD}client | ClcCommuncationClient |  |
| status | CommunicationStatus |  |
| type | CommunicationType |  |
