---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages"
domain: "Analysis Model"
element_id: 1545030
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SimpleBusinessEventAttributeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages

## 📝 Notes

Common complex type for business event attributes containing value as a simple text (e.g. amount, card number etc.).

LDM:
BusinessEventAttribute

## 🔗 Connections (2)

- → Dependency: [[SimpleBusinessEventAttributeTypeDto]]
- → Generalization «XSD extension»: [[BusinessEventAttributeDto]]

## 📊 Appears In (3 diagrams)

- Logical: Business events - Messages
- Logical: Business events - provided interface
- Logical: Business events - Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | SimpleBusinessEventAttributeTypeDto |  |
| value | string |  |
