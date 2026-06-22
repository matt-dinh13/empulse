---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model"
domain: "Modules"
element_id: 1874472
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Account Transaction

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model

## 📝 Notes

It keeps object of financial transaction (moves) for revolving loan.
Transaction statuses are set only if transaction object of the Revolving account (CaBus) returns no-error response.

## 🔗 Connections (2)

- ← Association: [[Transaction Change Request (Class 1874477)]]
- → Aggregation: [[Sales Quote Item]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Subtype | string |  |
| Amount Billing | Financial Amount |  |
| Amount Original | Financial Amount |  |
| Conversion Rate | decimal |  |
| Data Exchange Id | string |  |
| Status | Account Transaction Status Type |  |
| Transaction Date | Date |  |
| Type | string |  |
| Commodity External Id | string |  |
| Payment Channel Id | string |  |
| IP Loan Code | string |  |
| Purpose | string |  |
