---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771451
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Refinanced Contract 

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Contract intended for Consolidation by cash loan - temporary structure attached to Temporary Application

## 🔗 Connections (1)

- → Aggregation: [[{MOD}Temporary Application]]

## 📊 Appears In (2 diagrams)

- Logical: Temporary Application - detail
- Logical: Temporary Application - overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string (30) |  |
| isInternal | boolean |  |
| paymentChannelId | int |  |
| amount | Financial Amount |  |
| refinancedContractId | string (50) |  |
| contractSignDate | int |  |
| FERDueDate | date |  |
