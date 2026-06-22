---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799235
diagrams: 2
connections: 6
tags:
  - enumeration
  - modules
---

# 📝 Department

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Country configurable enumeration of all departments which can work with tickets.

## 🔗 Connections (6)

- ← Association: [[StatusTransition (Class 1799246)]]
- ← Association: [[Mistake Rule]]
- ← Dependency: [[Rule (Class 1799225)]]
- ← Dependency: [[Rule (Class 1799225)]]
- → Association: [[Role (Enumeration 1799224)]]
- ← Association: [[Ticket (Class 1799223)]]

## 📊 Appears In (2 diagrams)

- Logical: Ticketing - Logical Data Model
- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Value | Text |  |
| {DEL}Description | Text |  |
| Version | Number (18,0) |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| ActiveYN | Boolean |  |
| FrontOfficeFlag | Boolean |  |
