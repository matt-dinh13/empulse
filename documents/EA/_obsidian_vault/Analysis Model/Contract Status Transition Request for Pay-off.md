---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Logical Data Model"
domain: "Analysis Model"
element_id: 1347798
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Contract Status Transition Request for Pay-off

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Logical Data Model

## 📝 Notes

This entity keeps information about requests for pay-off in case of asynchronous communication with Cabus.

## 🔗 Connections (1)

- → Generalization: [[Contract Status Transition Request (Class 1879566)]]

## 📊 Appears In (1 diagrams)

- Logical: Request for pay-off (REL)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Reason | Contract Status Transitions Reasons |  |
| {ADD}Request Id | string |  |
