---
type: Class
stereotype: "Message"
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Consumed KAFKA messages/Ticketing/v1.0/RelatedSubject"
domain: "Analysis Model"
element_id: 1653943
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}RelatedSubjectNotification

> **Type**: Class · **Stereotype**: «Message»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Consumed KAFKA messages/Ticketing/v1.0/RelatedSubject

## 📝 Notes

{ADD CLM-3712/}

## 🔗 Connections (3)

- → Dependency: [[Subject]]
- → Dependency: [[TicketEvent]]
- → Dependency: [[Ticket]]

## 📊 Appears In (1 diagrams)

- Logical: RelatedSubject

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | {ADD}TicketEvent |  |
| eventDate | dateTime |  |
| relatedSubject | Ticket |  |
| tickets | Ticket |  |
