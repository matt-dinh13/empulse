---
type: Class
stereotype: "Message"
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Consumed KAFKA messages/Ticketing/v1.0/RelatedSubject"
domain: "Analysis Model"
element_id: 1653941
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Ticket

> **Type**: Class · **Stereotype**: «Message»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Consumed KAFKA messages/Ticketing/v1.0/RelatedSubject

## 🔗 Connections (4)

- → Dependency: [[Item]]
- ← Dependency: [[{ADD}RelatedSubjectNotification]]
- → Dependency: [[Item]]
- → Dependency: [[Item]]

## 📊 Appears In (1 diagrams)

- Logical: RelatedSubject

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| category | {ADD}TicketEvent |  |
| type | Item |  |
| department | Item |  |
| activeStatus | boolean |  |
