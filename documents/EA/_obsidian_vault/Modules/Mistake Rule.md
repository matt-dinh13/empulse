---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799228
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Mistake Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Country configurable list of all allowed combinations of Ticket Type, Document Type (optional), Department and Ticket Priority for mistake recording (i.e. creation of mistake ticket). It means that records in this table define which TicketTypes (i.e. mistake types) can be recorded on various document types, to which department the newly created mistakes (mistake types) are assigned and whether the recorded mistakes are critical (whether the ticket must be closed/canceled for contract to be registered). This entity is specifically used for tickets related to contract document registration process or a process of receiving a contract package.

## 🔗 Connections (4)

- → Association: [[TicketType]]
- → Association: [[Priority (Enumeration 1799236)]]
- → Association: [[Department (Enumeration 1799235)]]
- → Dependency: [[MistakeRuleType]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ActiveYN | Boolean |  |
| {DEL}Description | string |  |
| DocumentTypeCode | string |  |
| RuleType | MistakeRuleType |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
