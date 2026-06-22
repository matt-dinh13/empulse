---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition"
domain: "Modules"
element_id: 1836474
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 ErrorMessageRest

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition

## 📝 Notes

Data structure holding information about the error that occurred.

## 🔗 Connections (4)

- ← Dependency: [[_departments]]
- ← Dependency: [[_tickets]]
- ← Dependency: [[_tickets_{ticketCode}_transitions]]
- → Dependency: [[{ADD}PropertyError]]

## 📊 Appears In (4 diagrams)

- Logical: addTransition
- Logical: createTicket
- Logical: listDepartments
- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorCode | string |  |
| errorMessage | string |  |
| propertyErrors | PropertyError |  |
| traceId | string |  |
