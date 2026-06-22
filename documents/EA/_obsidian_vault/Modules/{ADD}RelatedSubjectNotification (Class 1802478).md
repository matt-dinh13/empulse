---
type: Class
stereotype: "Message"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/Related Subject Notification"
domain: "Modules"
element_id: 1802478
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}RelatedSubjectNotification

> **Type**: Class · **Stereotype**: «Message»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/Related Subject Notification

## 📝 Notes

{ADD CLM-3712/}

## 🔗 Connections (3)

- → Dependency: [[TicketEvent (Enumeration 1802481)]]
- → Dependency: [[Subject (Class 1802479)]]
- → Dependency: [[Ticket (Class 1802480)]]

## 📊 Appears In (1 diagrams)

- Logical: RelatedSubject

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | {ADD}TicketEvent |  |
| eventDate | dateTime |  |
| relatedSubject | Ticket |  |
| tickets | Ticket |  |
