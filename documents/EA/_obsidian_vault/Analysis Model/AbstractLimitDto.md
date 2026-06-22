---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types"
domain: "Analysis Model"
element_id: 1598849
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AbstractLimitDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types

## 📝 Notes

Abstract limit containing most common attributes.

## 🔗 Connections (5)

- → Dependency: [[PeriodDto (Enumeration 1598826)]]
- ← Generalization «XSDextension»: [[PermanentLimitDto]]
- → Association: [[CurrentValueChoice]]
- ← Generalization «XSDextension»: [[TemporaryLimitDto]]
- → Dependency: [[CurrencyCodeType (Class 1601402)]]

## 📊 Appears In (2 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currency | CurrencyCodeType |  |
| limitTypeId | string |  |
| period | PeriodDto |  |
