---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /User Interface Model/Personal Document Container"
domain: "Analysis Model"
element_id: 1431046
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 List of personal document containers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /User Interface Model/Personal Document Container

## 📝 Notes

It displays list of personal document containers filtered by particular filtering field (if applicable).
Once the user pusher the row with record, detail of the personal document container is displayed (LOR.102 Display personal document container or LOR.101 Update personal document container based on status).

## 🔗 Connections (4)

- → Realisation: [[02.350 Deactivate document container (UseCase 876489)]]
- → Dependency: [[Cancel personal document container]]
- → Dependency: [[Activate personal document container]]
- → Realisation: [[02.330 Show document container detail (UseCase 876486)]]

## 📊 Appears In (1 diagrams)

- Custom: Personal Document Container

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Status | string |  |
| Minimal count of documents | integer |  |
| Person scoring segment | string |  |
| Type | string |  |
| Cancel | icon |  |
| Activate | icon |  |
