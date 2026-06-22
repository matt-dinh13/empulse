---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/Data streaming/Deal"
domain: "Modules"
element_id: 1710929
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 DealPeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/Data streaming/Deal

## 📝 Notes

Insurance Period structure

## 🔗 Connections (3)

- → Dependency: [[DealPeriodStatusType]]
- → Dependency: [[InsuranceAmount]]
- ← Dependency: [[Deal (Class 1710925)]]

## 📊 Appears In (1 diagrams)

- Logical: Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| startDate | Date |  |
| endDate | Date |  |
| status | DealPeriodStatusType |  |
| insurance | InsuranceAmount |  |
