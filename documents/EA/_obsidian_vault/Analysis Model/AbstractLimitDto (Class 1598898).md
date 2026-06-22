---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types"
domain: "Analysis Model"
element_id: 1598898
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AbstractLimitDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types

## 📝 Notes

Abstract limit containing most common attributes.

## 🔗 Connections (5)

- → Dependency: [[PeriodDto (Enumeration 1598908)]]
- → Association: [[CurrentValueChoice (Class 1598897)]]
- → Dependency: [[CurrencyCodeType (Class 1598895)]]
- ← Generalization «XSDextension»: [[TemporaryLimitDto (Class 1598889)]]
- ← Generalization «XSDextension»: [[PermanentLimitDto (Class 1598885)]]

## 📊 Appears In (2 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currency | CurrencyCodeType |  |
| limitTypeId | string |  |
| period | PeriodDto |  |
