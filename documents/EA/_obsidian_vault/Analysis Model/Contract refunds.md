---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds"
domain: "Analysis Model"
element_id: 1842758
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Contract refunds

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds

## 📝 Notes

Grid with refund items related to the passed contract.

LDM:
list of RefundItem where RefundItem.ContractCode = passed ContractCode

## 🔗 Connections (3)

- → Dependency: [[05.514 Cancel refund item (UseCase 1877125)]]
- → Dependency: [[05.513 Process outgoing payment for refund items (UseCase 1877129)]]
- → Association: [[Cancel refund item]]

## 📊 Appears In (1 diagrams)

- Custom: Show contract refunds

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Checked | boolean |  |
| {MOD}Incoming payment ID | Text |  |
| Refund order | Text |  |
| Creation date | Date Time |  |
| Amount | Financial Amount |  |
| Type | Refund Type |  |
| Recipient | Refund Recipient Type |  |
| Status | Refund Status Type |  |
| Action | buttons |  |
| {ADD}Update date | Date Time |  |
| {ADD}Created by | Text |  |
| {ADD}Updated by | Text |  |
