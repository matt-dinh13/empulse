---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/CSD notification messages/Codelists"
domain: "Analysis Model"
element_id: 1718345
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 EnumListChangeMessage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/CSD notification messages/Codelists

## 📝 Notes

Notification for CodelistValue change

Attribute code represents identification of the codelist. Other attributes are subject of change. 

Notifications are processed asynchronously in CSD_IMPORT job. This job can be registered manually.

## 📊 Appears In (1 diagrams)

- Logical: Codelist notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| GroupId | string |  |
| Code | string |  |
