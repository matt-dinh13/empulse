---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1212852
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 MoneyDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages

## 📝 Notes

It represents information about amount of a incoming payment (i.e. an amount and a currency).

## 🔗 Connections (1)

- ← Dependency: [[IncomingPaymentRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Incoming Payments Processing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | decimal |  |
| currency | string |  |
