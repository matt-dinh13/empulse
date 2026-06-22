---
type: Class
stereotype: "Message"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedNotification"
domain: "Modules"
element_id: 1800461
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}TicketChangedNotification

> **Type**: Class · **Stereotype**: «Message»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedNotification

## 📝 Notes

{ADD CLM-1492 /}
https://tck.id00a1.cz.infra/tck/async-api/ui/index.html?schemaUrl=%2Ftck%2Fasync-api%2Fschema&definition=clm%3Adefault

## 🔗 Connections (1)

- → Dependency: [[{ADD}TicketEvent]]

## 📊 Appears In (1 diagrams)

- Logical: TicketChangedNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| action | {ADD}TicketEvent |  |
| ticket | Ticket |  |
| changeDate | dateTime |  |
