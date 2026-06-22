---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages"
domain: "Analysis Model"
element_id: 1483826
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CreateBusinessEventRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages

## 📝 Notes

Complex type for business events.

LDM:
BusinessEvent

## 🔗 Connections (3)

- ← Dependency: [[ContractBusinessEventWS]]
- → Dependency: [[BusinessEventAttributeDto]]
- → Dependency: [[BusinessEventTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: Business events - Messages
- Logical: Business events - provided interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| type | BusinessEventTypeDto |  |
| modifiedBy | string |  |
| timeOfModification | dateTime |  |
| attributes | BusinessEventAttributeDto |  |
