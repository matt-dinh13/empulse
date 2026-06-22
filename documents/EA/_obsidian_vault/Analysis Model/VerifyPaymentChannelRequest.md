---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774716
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 VerifyPaymentChannelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 📝 Notes

{ADD CBL-11220 PAYM-3896}

## 🔗 Connections (3)

- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- → Dependency: [[PaymentChannelVerificationAttributes]]
- → Dependency: [[PaymentChannelVerificationEntityDto]]

## 📊 Appears In (2 diagrams)

- Logical: PaymentChannelRestAPI - Verify Payment Channel
- Logical: PaymentChannelRestAPI - Verify Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| bankAccountType | string |  |
| bankCode | string |  |
| entity | PaymentChannelVerificationEntityDto |  |
| paymentChannelVerificationAttributes | PaymentChannelVerificationAttributes |  |
| transactionType | string |  |
