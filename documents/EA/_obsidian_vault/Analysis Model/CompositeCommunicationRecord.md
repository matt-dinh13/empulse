---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/getCommunicationDetail"
domain: "Analysis Model"
element_id: 1706995
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CompositeCommunicationRecord

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/getCommunicationDetail

## 📝 Notes

Gets masked if priv ...SENSITIVE_DATA is not present for user.

## 🔗 Connections (7)

- → Dependency: [[Type (Class 1706996)]]
- → Dependency: [[Channel (Class 1707003)]]
- → Dependency: [[ExternalId]]
- ← Dependency: [[{ADD}getCommunicationDetail]]
- → Dependency: [[Result (Class 1707001)]]
- → Dependency: [[Contact (Class 1706993)]]
- → Dependency: [[Status (Class 1706992)]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationDetail

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
| status | CommunicationStatus |  |
| type | CommunicationType |  |
