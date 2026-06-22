---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model"
domain: "Analysis Model"
element_id: 1857184
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Check Moment For Recalculation Reason

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model

## 📝 Notes

The entity is used to map relations between Check moment type (system event) and recalculation reason of the installment schedule. It is intended as setting for IS printouts generatating.

## 🔗 Connections (2)

- → Usage: [[Recalculation Reason (Class 1833457)]]
- → Usage: [[{MOD}Check Moment Type]]

## 📊 Appears In (1 diagrams)

- Logical: Printing an Installment schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active Flag | boolean |  |
| Event | {MOD}Check Moment Type |  |
| Recalculation Reason | Recalculation Reason |  |
