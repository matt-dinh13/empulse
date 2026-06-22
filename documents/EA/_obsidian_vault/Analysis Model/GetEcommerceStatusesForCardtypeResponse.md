---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardTypeWS"
domain: "Analysis Model"
element_id: 1187988
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetEcommerceStatusesForCardtypeResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardTypeWS

## 📝 Notes

E-commerce statuses for card type response.

## 🔗 Connections (3)

- ← Dependency: [[CardTypeWS (Interface 1187982)]]
- → Dependency «use»: [[EcommerceStatusesForCardTypeResponseResultCodeDto]]
- → Dependency «use»: [[AvailableEcommerceStatusDto]]

## 📊 Appears In (1 diagrams)

- Logical: CardTypeWS.GetEcommerceStatusesForCardtype

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | EcommerceStatusesForCardTypeResponseResultCodeDto |  |
| availableEcommerceStatuses | AvailableEcommerceStatusDto |  |
