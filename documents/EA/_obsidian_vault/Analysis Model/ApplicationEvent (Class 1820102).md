---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820102
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 📝 Notes

This entity is filled for each event type listed in ApplicationEventType and in case of signed contract. eventType=SIGN is filled in too.

## 🔗 Connections (4)

- → Dependency: [[ApplicationEventType (Class 1820126)]]
- → Dependency: [[ChannelEventType (Class 1820106)]]
- → Realisation: [[LOR-658 PaperLess - provide contract history and contract detail before signature]]
- ← Dependency: [[ApplicationDetail (Class 1820059)]]

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
