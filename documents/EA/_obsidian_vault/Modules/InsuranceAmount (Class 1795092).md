---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1"
domain: "Modules"
element_id: 1795092
diagrams: 6
connections: 4
tags:
  - class
  - modules
---

# 🔷 InsuranceAmount

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1

## 🔗 Connections (4)

- ← Dependency: [[UpdatePeriodRequest]]
- ← Dependency: [[CreatePeriodRequest]]
- ← Dependency: [[DealPeriod (Class 1795094)]]
- ← Usage: [[{ADD}ProlongDealPeriodRequest]]

## 📊 Appears In (6 diagrams)

- Logical: Create and Update Deal Period
- Logical: Create Deal
- Logical: Deal structures
- Logical: Find Deal
- Logical: Get Deal
- Logical: Prolong Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sumInsured | currency |  |
| premium | InsuranceService |  |
| premiumTerminated | InsuranceService |  |
