---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1309267
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 InstalmentHeadDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Account instalments grouped by due date na instalment type.

## 🔗 Connections (3)

- ← Dependency: [[InstalmentPaymentMatchResponse]]
- → Dependency: [[InstalmentDto]]
- → Dependency: [[InstalmentTypeDto (Enumeration 1309279)]]

## 📊 Appears In (2 diagrams)

- Logical: Account UI - Interface diagram - Installment schedule
- Logical: Structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyDto |  |
| dueDate | date |  |
| instalments | InstalmentsDto |  |
| instalmentType | InstalmentTypeDto |  |
