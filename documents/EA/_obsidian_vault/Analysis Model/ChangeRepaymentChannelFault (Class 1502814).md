---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502814
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ChangeRepaymentChannelFault

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (5)

- → Dependency: [[ValidationResultDto (Class 1710617)]]
- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[ChangeRepaymentChannelResultTypeDto]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]
- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]

## 📊 Appears In (3 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Change Repayment Channel
- Logical: PaymentChannelWSV3 - Change Repayment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResult | ValidationResultDto |  |
