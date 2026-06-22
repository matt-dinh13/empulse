---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Logical data model"
domain: "Analysis Model"
element_id: 1798519
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RelatedSubject

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Logical data model

## 📝 Notes

Entity that contains information about business object which are related to the ticket (i.e. Contract, Document, Package,...).

## 🔗 Connections (2)

- → Dependency: [[RelatedSubjectType (Enumeration 1799234)]]
- → Aggregation: [[Ticket (Class 1799223)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract registration
- Logical: Ticketing - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Version | Number (18,0) |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| Type | RelatedSubjectType |  |
| ArrangedBy | User |  |
| ArrangedOnSalesroom | SalesroomCode |  |
| TicketId | Number (18,0) |  |
