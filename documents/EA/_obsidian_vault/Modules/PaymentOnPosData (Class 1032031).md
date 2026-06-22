---
type: Class
stereotype: "XSDtolLevelElement"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided Data Sources/HO_PAYMENT_ON_POS_DATA"
domain: "Modules"
element_id: 1032031
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 PaymentOnPosData

> **Type**: Class · **Stereotype**: «XSDtolLevelElement»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided Data Sources/HO_PAYMENT_ON_POS_DATA

## 📝 Notes

{ADD PBR-1266 /}
Data source for print of receipt of incoming payment created on POS.

## 🔗 Connections (1)

- → Dependency: [[PaymentOnPosSettlementDto]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PAYMENT_ON_POS_DATA data source for print

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payment | PaymentOnPosSettlementDto |  |
| clientsLanguage | string |  |
