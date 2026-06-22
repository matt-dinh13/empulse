---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1290962
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 REQ#3 - Use template MSG_PAYMENT_PAIRED_DPD properly

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

MSG_PAYMENT_PAIRED_DPD template will be used if there there is any unpaid installment after due date (including penalty) or if calculated DPD > 0.

## 🔗 Connections (2)

- → Generalization: [[CBL-2228 Changes for ID Payment SMS]]
- ← Realisation: [[{MOD}03.701 Trigger sending SMS to client]]
