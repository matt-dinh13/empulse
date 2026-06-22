---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768219
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

This entity is filled for each event type listed in ApplicationEventType and in case of signed contract. eventType=SIGN is filled in too.

## 🔗 Connections (4)

- → Realisation: [[LOR-658 PaperLess - provide contract history and contract detail before signature]]
- → Dependency: [[ApplicationEventType]]
- → Dependency: [[ChannelEventType]]
- ← Dependency: [[{MOD}ApplicationDetail]]

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
