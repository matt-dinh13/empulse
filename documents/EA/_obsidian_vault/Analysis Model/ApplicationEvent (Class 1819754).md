---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819754
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

This entity is filled for each event type listed in ApplicationEventType and in case of signed contract. eventType=SIGN is filled in too.

## 🔗 Connections (4)

- → Realisation: [[LOR-658 PaperLess - provide contract history and contract detail before signature]]
- ← Dependency: [[ApplicationDetail]]
- → Dependency: [[ChannelEventType (Class 1819790)]]
- → Dependency: [[ApplicationEventType (Class 1819731)]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| createdBy | string |  |
| creationDate | datetime |  |
| salesroom | string |  |
| eventType | ApplicationEventType |  |
| eventChannel | ChannelEventType |  |
