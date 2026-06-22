---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502810
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ChangeRepaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD CBL-1440 PAY /}

## 🔗 Connections (6)

- ← Dependency: [[PaymentChannelWS (Interface 1502835)]]
- → Dependency: [[RepaymentChannelTypeDto (Enumeration 1465331)]]
- → Dependency: [[ContractStatusType (Enumeration 1833282)]]
- → Dependency: [[ContractDDMBaseDto]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]
- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]

## 📊 Appears In (3 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Change Repayment Channel
- Logical: PaymentChannelWSV3 - Change Repayment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contract | ContractDDMBaseDto |  |
| paymentChannel | RepaymentChannelTypeDto |  |
| contractStatus | External Reference |  |
