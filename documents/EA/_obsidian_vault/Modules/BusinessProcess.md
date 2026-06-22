---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification"
domain: "Modules"
element_id: 1545335
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 BusinessProcess

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification

## 📝 Notes

Element containing attributes of a business process, during which certain contact was established.

## 🔗 Connections (2)

- ← Dependency: [[ContactEvent]]
- → Dependency: [[BusinessProcessDetails]]

## 📊 Appears In (1 diagrams)

- Logical: PartyContactNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessProcessId | string |  |
| businessProcessType | string |  |
| businessProcessStatusCode | string |  |
| businessProcessDetails | BusinessProcessDetails |  |
