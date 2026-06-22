---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/Insurance Program LDM modification"
domain: "Modules"
element_id: 1591203
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Insurance Eligibility Criteria

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/Insurance Program LDM modification

## 📝 Notes

Criteria for limiting clients eligible for the insurance program.

## 🔗 Connections (3)

- → Aggregation: [[Insurance Program]]
- ← Aggregation: [[Eligible Commodity Type (Class 1877909)]]
- ← Aggregation: [[Ineligible Profession (Class 1591204)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Program LDM modification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Max Sum Insured Contract | Financial Amount |  |
| Max Sum Insured Client | Financial Amount |  |
| Min Age | Number |  |
| Max Age Male | Number |  |
| Max Age Female | Number |  |
| Max Age Restriction Type | Max Age Restriction Type |  |
