---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS"
domain: "Analysis Model"
element_id: 1216699
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AbstractMessageType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS

## 📝 Notes

Abstract message type. Contains common elements for all types of messages.

## 🔗 Connections (5)

- → Dependency: [[ReportContentType]]
- → Dependency: [[BusinessAttributeType (Class 1216696)]]
- ← Generalization «XSDextension»: [[SmsMessageType]]
- → Dependency: [[PriorityType (Enumeration 1216693)]]
- → Dependency: [[ReportLevel]]

## 📊 Appears In (1 diagrams)

- Logical: SendSmsMessageWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| systemCode | string |  |
| messageCode | string |  |
| effectiveDate | dateTime |  |
| expires | dateTime |  |
| attributes | BusinessAttributeType |  |
| priority | PriorityType |  |
| reportLevel | ReportLevel | NONE |
| reportContentType | ReportContentType | JSON |
