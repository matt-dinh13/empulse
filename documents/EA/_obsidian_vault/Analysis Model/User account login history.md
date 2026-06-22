---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1686937
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 User account login history

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

Grid of tickets assigned to communication history records of client.
Default order by: Created when desc

List of tickets related to displayed communication. For detail info see 07.120 Show communication ticket list use case
Default order by: Created when desc, TICKET.ID desc
Paging Yes

## 📊 Appears In (1 diagrams)

- Custom: Tab User accounts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Date | Date Time |  |
| Status | String |  |
