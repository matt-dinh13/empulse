---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1309264
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairedInstalmentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Paid instalment.

## 🔗 Connections (2)

- ← Dependency: [[InstalmentPaymentMatchResponse]]
- → Dependency: [[MoneyDto (Class 1638510)]]

## 📊 Appears In (2 diagrams)

- Logical: Account UI - Interface diagram - Installment schedule
- Logical: Structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| instalmentCode | AccountItemCodeType |  |
| pairedAmount | MoneyDto |  |
| pairedDate | date |  |
| paymentCode | AccountItemCodeType |  |
