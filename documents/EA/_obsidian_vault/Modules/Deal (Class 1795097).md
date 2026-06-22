---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1"
domain: "Modules"
element_id: 1795097
diagrams: 12
connections: 22
tags:
  - class
  - modules
---

# 🔷 Deal

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1

## 📝 Notes

{ADD CSI-1454 /}
Deal response structure

## 🔗 Connections (22)

- ← Dependency: [[{ADD}OperationStatus]]
- → Dependency: [[{DEL}DealOperationStatus]]
- → Dependency: [[DealOperationStatusType (Enumeration 1795101)]]
- → Dependency: [[DealService (Class 1795096)]]
- → Dependency: [[DealCustomData (Class 1795095)]]
- → Dependency: [[DealPeriod (Class 1795094)]]
- → Dependency: [[DealStatusTransition (Class 1795093)]]
- → Dependency: [[RelatedSubject (Class 1795091)]]
- → Dependency: [[InsuranceDeal (Class 1795090)]]
- → Dependency: [[DealStatusType (Enumeration 1795087)]]
- → Dependency: [[DealType (Enumeration 1795086)]]
- ← Dependency: [[Deals]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Dependency: [[Deals (Interface 1827210)]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Dependency: [[Deals (Interface 1827210)]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Usage: [[Deals (Interface 1827210)]]
- ← Dependency: [[Periods]]

## 📊 Appears In (12 diagrams)

- Logical: Activate Deal
- Logical: Cancel Deal
- Logical: Create and Update Deal Period
- Logical: Create Deal
- Logical: Deactivate Deal
- Logical: Deal structures
- Logical: Deals_v2.Activate Deal
- Logical: Find Deal
- Logical: Get Deal
- Logical: Prolong Deal
- Logical: Replace Deal Service
- Logical: Terminate Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| code | string |  |
| type | string |  |
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
