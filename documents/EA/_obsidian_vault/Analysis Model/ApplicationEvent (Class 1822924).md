---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Application"
domain: "Analysis Model"
element_id: 1822924
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationEvent

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Application

## 📝 Notes

This entity is filled for each event type listed in ApplicationEventType and in case of signed contract. eventType=SIGN is filled in too.

## 🔗 Connections (3)

- → Dependency: [[ChannelEventType (Class 1822932)]]
- → Dependency: [[ApplicationEventType (Class 1822919)]]
- ← Dependency: [[{MOD}ApplicationDetailRestTO]]

## 📊 Appears In (1 diagrams)

- Logical: Application

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| createdBy | string |  |
| creationDate | datetime |  |
| salesroom | string |  |
| eventType | ApplicationEventType |  |
| eventChannel | ChannelEventType |  |
