---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model"
domain: "Modules"
element_id: 1880266
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model

## 🔗 Connections (4)

- ← Dependency: [[Refund Item (Class 1877690)]]
- → Dependency: [[Contract Status Type (Class 1880267)]]
- ← Association: [[Incoming Payment To Contract]]
- → Dependency: [[Product Type (Class 1880265)]]

## 📊 Appears In (2 diagrams)

- Logical: Incoming payments
- Logical: INCPAY Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Code | String |  |
| Contract Status | Contract Status Type |  |
| Clients CUID | String |  |
| Credit Account Number | String |  |
| Product Type | Product Type |  |
| Sign Date | Product Type |  |
