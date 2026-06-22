---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Request Parameters"
domain: "Modules"
element_id: 1836540
diagrams: 5
connections: 2
tags:
  - class
  - modules
---

# 🔷 TicketRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Request Parameters

## 📝 Notes

Input parameters structure for creation of Ticket method (POST /tickets)

## 🔗 Connections (2)

- ← Dependency: [[Tickets (Class 1836080)]]
- → Dependency: [[RelatedSubject (Class 1836537)]]

## 📊 Appears In (5 diagrams)

- Logical: Request Parameters
- Logical: Request Parameters
- Logical: Ticketing - Create mistake ticket API usage
- Logical: Ticketing - Create ticket overview (with TypeSpecification)
- Logical: TicketManagement - Create ticket overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| arrangedByName | string |  |
| code | string |  |
| communicationRecordCode | string |  |
| contractCode | string |  |
| contractPackageCode | string |  |
| contractSupplementCode | string |  |
| customerCode | string |  |
| department | string |  |
| description | string |  |
| documentExternalId | string |  |
| priority | int |  |
| relatedSubjects | RelatedSubject |  |
| statusDescription | string |  |
| type | string |  |
| typeSpec | string |  |
