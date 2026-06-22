---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 824506
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InstalmentPaymentMatchResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Instalment and payments search. Returns active items only.

## 🔗 Connections (4)

- → Dependency: [[InstalmentHeadDto (Class 1309267)]]
- → Dependency: [[PairedInstalmentDto (Class 1309264)]]
- → Dependency: [[BasicAccountItemDto]]
- ← Dependency: [[AccountUIWS]]

## 📊 Appears In (2 diagrams)

- Logical: Account UI - Interface diagram
- Logical: Account UI - Interface diagram - Installment schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| instalments | InstalmentHeadDto |  |
| payments | BasicAccountItemDto |  |
| pairedInstalments | PairedInstalmentDto |  |
