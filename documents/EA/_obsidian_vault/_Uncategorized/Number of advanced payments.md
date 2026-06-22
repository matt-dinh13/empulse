---
type: Class
stereotype: "type"
package: ""
domain: "_Uncategorized"
element_id: 1879120
diagrams: 0
connections: 1
tags:
  - class
  - _uncategorized
---

# 🔷 Number of advanced payments

> **Type**: Class · **Stereotype**: «type»
> **Package**: N/A

## 📝 Notes

Number of advance payments
Value: 
-1: for maximal number of advance payments from cash payment client allows to pay on contract origination. 
0: no advance payment, i.e. cash payment = down payment + origination fee paid in advance (not as a part of loan)
Other number: exactly number of advance payments.

## 🔗 Connections (1)

- ← Dependency: [[Closed End Loan Product Variant]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| -1 | int |  |
| 0 | int |  |
| Number > 0 | int |  |
