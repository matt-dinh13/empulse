---
type: Class
stereotype: "XSDtolLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ON_POS_DATA"
domain: "Analysis Model"
element_id: 998767
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOnPosData

> **Type**: Class · **Stereotype**: «XSDtolLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ON_POS_DATA

## 📝 Notes

{ADD PBR-1266 /}
Data source for print of receipt of incoming payment created on POS.

## 🔗 Connections (1)

- → Dependency: [[PaymentOnPosSettlementDto (Class 1482213)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PAYMENT_ON_POS_DATA data source for print

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payment | PaymentOnPosSettlementDto |  |
| clientsLanguage | string |  |
