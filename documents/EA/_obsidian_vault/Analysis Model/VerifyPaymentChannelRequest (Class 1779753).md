---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779753
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 VerifyPaymentChannelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11220 PAYM-3896}

## 🔗 Connections (3)

- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- → Dependency: [[PaymentChannelVerificationEntityDto (Class 1779752)]]
- → Dependency: [[PaymentChannelVerificationAttributes (Class 1779738)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - PaymentChannelVerification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| bankAccountType | string |  |
| bankCode | string |  |
| entity | PaymentChannelVerificationEntityDto |  |
| paymentChannelVerificationAttributes | PaymentChannelVerificationAttributes |  |
| transactionType | string |  |
