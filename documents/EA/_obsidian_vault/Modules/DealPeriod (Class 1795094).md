---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1"
domain: "Modules"
element_id: 1795094
diagrams: 5
connections: 3
tags:
  - class
  - modules
---

# 🔷 DealPeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1

## 📝 Notes

Insurance Period structure

## 🔗 Connections (3)

- → Dependency: [[DealPeriodStatusType (Enumeration 1795099)]]
- ← Dependency: [[Deal (Class 1795097)]]
- → Dependency: [[InsuranceAmount (Class 1795092)]]

## 📊 Appears In (5 diagrams)

- Logical: Create and Update Deal Period
- Logical: Create Deal
- Logical: Deal structures
- Logical: Find Deal
- Logical: Get Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}externalId | string |  |
| startDate | Date |  |
| endDate | Date |  |
| endDateOriginal | Date |  |
| status | DealPeriodStatusType |  |
| {MOD}insuranceAmount | InsuranceAmount |  |
