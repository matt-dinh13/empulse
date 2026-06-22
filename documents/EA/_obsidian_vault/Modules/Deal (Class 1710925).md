---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/Data streaming/Deal"
domain: "Modules"
element_id: 1710925
diagrams: 1
connections: 9
tags:
  - class
  - modules
---

# 🔷 Deal

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/Data streaming/Deal

## 📝 Notes

Deal instance structure

## 🔗 Connections (9)

- → Dependency: [[DealCustomData]]
- → Dependency: [[DealPeriod]]
- → Dependency: [[DealType]]
- → Dependency: [[DealStatusType]]
- → Dependency: [[RelatedSubject (Class 1710927)]]
- → Dependency: [[DealStatusTransition]]
- → Dependency: [[InsuranceDeal]]
- → Dependency: [[DealOperationStatusType]]
- → Dependency: [[DealService]]

## 📊 Appears In (1 diagrams)

- Logical: Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| code | string |  |
| dealType | string |  |
| {DEL}baseCode | string |  |
| customerId | long |  |
| programId | string |  |
| service | DealService |  |
| automaticProlongation | boolean |  |
| periodLimit | int |  |
| currentStatus | DealStatusType |  |
| statusTransitions | DealStatusTransition |  |
| currentOperationStatus | DealOperationStatusType |  |
| customData | DealCustomData |  |
| relatedSubjects | RelatedSubject |  |
| periods | DealPeriod |  |
| insurance | InsuranceDeal |  |
