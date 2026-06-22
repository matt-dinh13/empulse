---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1"
domain: "Modules"
element_id: 1826441
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 CreateDealRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1

## 🔗 Connections (5)

- → Dependency: [[DealCustomData (Class 1795095)]]
- → Dependency: [[DealService (Class 1795096)]]
- → Dependency: [[DealType (Enumeration 1795086)]]
- → Dependency: [[RelatedSubject (Class 1795091)]]
- ← Dependency: [[Deals (Interface 1827210)]]

## 📊 Appears In (1 diagrams)

- Logical: Create Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| baseCode | string |  |
| customerId | long |  |
| service | DealService |  |
| customData | InsuranceCustomData |  |
| relatedSubjects | RelatedSubject |  |
