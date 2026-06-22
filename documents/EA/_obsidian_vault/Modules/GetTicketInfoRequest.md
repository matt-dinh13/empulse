---
type: Class
stereotype: "REST Definition"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19733 (CLM-5722) Document missing features"
domain: "Modules"
element_id: 1865249
diagrams: 4
connections: 1
tags:
  - class
  - modules
---

# 🔷 GetTicketInfoRequest

> **Type**: Class · **Stereotype**: «REST Definition»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19733 (CLM-5722) Document missing features

## 📝 Notes

Search criteria for getting TicketInfo (GET /ticketInfos)

ADD TFT-4739}If the attribute relatedSubjectCodes is filled then this attribute is mandatory.{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[TicketInfosV2]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-19733 (CLM-5722) Document missing features
- Custom: CBL-29392 (CLM-7205) Ticket search by contract salesroom code
- Logical: Request Parameters
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| searchType | string |  |
| page | int |  |
| sortItemsInDirection | string |  |
| sortItemsByField | string |  |
| statusCodes | string[] |  |
| relatedSubjectTypeCode | string |  |
| relatedSubjectCodes | string |  |
| priorityCode | string |  |
| assignedTo | string |  |
| queue | string |  |
| activeOnly | boolean |  |
| projection | string | DEFAULT |
| ticketType | string |  |
| ticketCategory | string |  |
| createdFrom | string |  |
| createdTo | string |  |
| createdBy | string |  |
| transitionOriginatedBy | string |  |
| originatedBy | string |  |
| {ADD}relatedSubjectOriginatedOnSalesrooms | string |  |
