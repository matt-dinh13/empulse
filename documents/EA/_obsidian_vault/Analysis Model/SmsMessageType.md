---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS"
domain: "Analysis Model"
element_id: 1216694
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SmsMessageType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS

## 📝 Notes

Short message type.

## 🔗 Connections (3)

- ← Dependency: [[SendSmsMessagesRequest]]
- → Dependency: [[recipient]]
- → Generalization «XSDextension»: [[AbstractMessageType (Class 1216699)]]

## 📊 Appears In (1 diagrams)

- Logical: SendSmsMessageWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| recipient | recipient |  |
| text | string |  |
| isInteractive | boolean |  |
| answerTill | dateTime |  |
