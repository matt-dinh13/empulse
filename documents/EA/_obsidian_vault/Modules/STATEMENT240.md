---
type: Class
stereotype: "output"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1568919
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 STATEMENT240

> **Type**: Class · **Stereotype**: «output»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Informs HoSel about result of payment transfer requested by ORDERPAY140 message.

## 🔗 Connections (6)

- ← Dependency «transformation»: [[DisbursementConfirmationResponse]]
- → Dependency «transformation»: [[DisbursementConfirmationRequest]]
- → Dependency «use»: [[CommResult]]
- → Dependency: [[Generating DisbursementConfirmationRequest]]
- → Dependency «use»: [[STATEMENT240 Delivery Status]]
- ← Dependency «transformation»: [[DisbursementConfirmationResponse (Class 1602948)]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | number |  |
| id_payout | number |  |
| amount_pay | decimal |  |
| date_pay | date |  |
| order_num | string |  |
| num_of_rows | string |  |
| delivery_status | STATEMENT240 Delivery Status |  |
| delivery_description | string |  |
| fail_reason | CommResult |  |
| time_stamp | datetime |  |
| processed | boolen |  |
