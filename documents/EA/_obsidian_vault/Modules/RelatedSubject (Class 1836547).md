---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions"
domain: "Modules"
element_id: 1836547
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 RelatedSubject

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions

## 📝 Notes

Extension of RelatedSubject only in responses  to two ticket use cases on endpoints /Tickets/get and /Tickets/create.

## 🔗 Connections (1)

- → Aggregation: [[RelatedSubject (Class 1836537)]]

## 📊 Appears In (2 diagrams)

- Logical: Schema definitions
- Logical: TicketManagement - Create ticket overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| arrangedBy | string |  |
| arrangedOnSalesroom | string |  |
| updateDate | string |  |
