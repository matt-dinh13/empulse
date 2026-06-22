---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL"
domain: "Requirements Model"
element_id: 1833188
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 CommunicationEventType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL

## 📝 Notes

A structure of one communication event related to a client

## 🔗 Connections (2)

- → Dependency: [[{MOD}communicationRecordType]]
- ← Dependency: [[CreateCommunicationRequest]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL
- Logical: Communications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| communicationChannelCode | string |  |
| communicationRecord | communicationRecordType |  |
| cuid | long |  |
