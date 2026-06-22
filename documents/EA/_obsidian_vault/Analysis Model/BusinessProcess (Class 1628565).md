---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification"
domain: "Analysis Model"
element_id: 1628565
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BusinessProcess

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification

## 📝 Notes

Element containing attributes of a business process, during which certain contact was established.

## 🔗 Connections (2)

- ← Dependency: [[ContactEvent (Class 1628569)]]
- → Dependency: [[BusinessProcessDetails (Class 1628570)]]

## 📊 Appears In (1 diagrams)

- Logical: PartyContactNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessProcessId | string |  |
| businessProcessType | string |  |
| businessProcessStatusCode | string |  |
| businessProcessDetails | BusinessProcessDetails |  |
