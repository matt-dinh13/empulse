---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-21858 (CLM-5676) Complaints Allocation & Tracking Tool"
domain: "Modules"
element_id: 1836526
diagrams: 5
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}GetTicketInfoRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-21858 (CLM-5676) Complaints Allocation & Tracking Tool

## 📝 Notes

Search criteria for getting TicketInfo (GET /ticketInfos)

## 🔗 Connections (1)

- ← Usage: [[TicketInfos]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-21858 (CLM-5676) Complaints Allocation & Tracking Tool
- Logical: Request Parameters
- Logical: Request Parameters
- Logical: Ticketing - search for ticket usage
- Logical: Ticketing - Ticket infos

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| department | string |  |
| typeCode | string |  |
| code | string |  |
| {MOD}relatedSubjectCodes | string |  |
| statusCode | string |  |
| userLanguage | string |  |
| categoryCode | int |  |
| createdFrom | dateTime |  |
| createdTo | dateTime |  |
| priorityCode | string |  |
| responseTime | int |  |
| resolutionTime | int |  |
| myCreated | boolean |  |
| myProcessed | boolean |  |
| page | int |  |
| field | string |  |
| direction | string |  |
| searchType | string |  |
| {MOD}relatedSubjectTypeCode | string |  |
| rulesIncluded | boolean |  |
| activeOnlyYN | boolean |  |
| {ADD}createdBy | string |  |
| modifiedBy | string |  |
