---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/PaymentsWS REST"
domain: "Modules"
element_id: 1866925
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 IncomingPayment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/PaymentsWS REST

## 🔗 Connections (2)

- → Dependency: [[PaymentsWS (Interface 1866926)]]
- ← Dependency: [[CreateIncomingPaymentRequest (Class 1866922)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentsWS REST

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | bigDecimal |  |
| contractNumber | string |  |
| depositDate | date |  |
| hcBankAccountNumber | string |  |
| hcBankBranch | string |  |
| incomingPaymentChannel | string |  |
| payerBankAccountNumber | string |  |
| payerName | string |  |
| payerPersonalNumber | string |  |
| paymentChannelBranch | string |  |
| paymentType | string |  |
| transactionDate | date |  |
| transactionNumber | string |  |
