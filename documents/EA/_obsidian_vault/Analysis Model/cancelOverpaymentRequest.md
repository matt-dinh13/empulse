---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Clear overpayment"
domain: "Analysis Model"
element_id: 1735170
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 cancelOverpaymentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Clear overpayment

## 📝 Notes

{ADD CBL-7789}
A list of parameters for POST of overpayment/bulkclear or overpayment/clear
{/ADD}

## 🔗 Connections (2)

- → Dependency: [[refundType]]
- ← Usage: [[clearOverpayment]]

## 📊 Appears In (1 diagrams)

- Logical: Clear overpayment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | money |  |
| contractCode | string |  |
| refundType | refundType |  |
