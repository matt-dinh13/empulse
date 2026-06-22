---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS"
domain: "Analysis Model"
element_id: 1848196
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreateIncomingPaymentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS

## 🔗 Connections (2)

- → Dependency: [[SourceSystemDto (Enumeration 1855754)]]
- ← Dependency: [[IncomingPaymentModuleWS (Interface 1855753)]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingPaymentModuleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentDataExchangeID | string |  |
| sourceSystem | SourceSystemDto |  |
| depositDate | date |  |
| paymentChannel | string |  |
| paymentChannelBranch | string |  |
| hcBankAccountNumber | string |  |
| hcBankBranch | string |  |
| contractNumber | string |  |
| payerName | string |  |
| payerPersonalNumber | integer |  |
| payerBankAccountNumber | string |  |
| transactionDate | date |  |
| transactionTime | time |  |
| amount | MoneyDto |  |
| transactionNumber | string |  |
| paymentType | string |  |
