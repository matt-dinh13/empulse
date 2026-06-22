---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Data prepared notification"
domain: "Analysis Model"
element_id: 953660
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Event

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Data prepared notification

## 📝 Notes

General notification message received from OSB. It can notify about change of Customer in CIF, or preparation of a file to processing in a directory of application server.
For Type of Event = FILE_TRANSFERED data is mapped into FileSE (system event)

## 🔗 Connections (1)

- ← Dependency: [[EventNotificationService]]

## 📊 Appears In (1 diagrams)

- Logical: Data prepared notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| MessageId | string |  |
| Type | string |  |
| {MOD}Code | string |  |
| BusinessId | string |  |
| Request | anyType |  |
