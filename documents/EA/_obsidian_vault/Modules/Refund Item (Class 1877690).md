---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Logical Data Model"
domain: "Modules"
element_id: 1877690
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Refund Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Logical Data Model

## 📝 Notes

A basic entity for Refund (returning of overpayments to customer, partners, or to internal company account)

## 🔗 Connections (3)

- → Dependency: [[{MOD}Contract (Class 1879596)]]
- → Dependency: [[Contract (Class 1880266)]]
- → Dependency: [[Incoming Payment (Class 1880259)]]

## 📊 Appears In (1 diagrams)

- Logical: INCPAY Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Code | String |  |
| Refund status type | String |  |
| Refund amount | Financial Amount |  |
| Creation date | Date Time |  |
| Update Date | Date Time |  |
| Version | int |  |
| Incoming payment ID | int |  |
| Created By | int |  |
| Charge processing fee | Boolean |  |
| Updated By | int |  |
| Processing fee amount | Financial amount |  |
| Tariff item type code | String |  |
