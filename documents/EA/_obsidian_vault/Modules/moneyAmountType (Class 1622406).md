---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Consumed File Structures/IncomingPaymentsFile"
domain: "Modules"
element_id: 1622406
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 moneyAmountType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Consumed File Structures/IncomingPaymentsFile

## 📝 Notes

Structure of money amount used for incomingPaymentType structure

## 🔗 Connections (3)

- → Dependency: [[currencyType (Class 1622405)]]
- ← Dependency: [[incomingPaymentType]]
- → Dependency: [[moneyValueType (Class 1622402)]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingPayments file structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| moneyValue | moneyValueType |  |
| currency | currencyType |  |
