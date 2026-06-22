---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1"
domain: "Modules"
element_id: 1784733
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 UpdatePeriodRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1

## 📝 Notes

{ADD CSI-1660 /}

## 🔗 Connections (3)

- → Dependency: [[DealPeriodStatusType (Enumeration 1795099)]]
- → Dependency: [[InsuranceAmount (Class 1795092)]]
- ← Dependency: [[Periods]]

## 📊 Appears In (1 diagrams)

- Logical: Create and Update Deal Period

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| startDate | date |  |
| endDate | date |  |
| status | DealPeriodStatusType |  |
| insuranceAmount | InsuranceAmount |  |
