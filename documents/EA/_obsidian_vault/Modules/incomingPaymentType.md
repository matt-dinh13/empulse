---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Consumed File Structures/IncomingPaymentsFile"
domain: "Modules"
element_id: 1622404
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 incomingPaymentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Consumed File Structures/IncomingPaymentsFile

## 📝 Notes

Structure of incoming payment for incoming payment file ( hsIncomingPaymentFile)

## 🔗 Connections (3)

- ← Dependency: [[incomingPaymentsType]]
- → Dependency: [[bankAccountNumberType (Class 1622407)]]
- → Dependency: [[moneyAmountType (Class 1622406)]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingPayments file structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | moneyAmountType |  |
| contractNumber | string |  |
| depositDate | date |  |
| hcBankAccountNumber | bankAccountNumberType |  |
| hcBankBranch | string |  |
| payerBankAccountNumber | bankAccountNumberType |  |
| payerName | string |  |
| payerPersonalNumber | integer |  |
| paymentChannel | string |  |
| paymentChannelBranch | string |  |
| paymentType | string |  |
| transactionDate | date |  |
| transactionNumber | string |  |
| transactionTime | time |  |
