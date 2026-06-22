---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model"
domain: "Modules"
element_id: 1877915
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Insurance Eligibility Criteria

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model

## 📝 Notes

Criteria for limiting clients eligible for the insurance program.

## 🔗 Connections (4)

- → Dependency: [[Max Age Restriction Type (Class 1877912)]]
- → Aggregation: [[Insurance Program (Class 1877910)]]
- ← Aggregation: [[Eligible Commodity Type (Class 1877909)]]
- ← Aggregation: [[Ineligible Profession (Class 1877918)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Max Sum Insured Contract | Financial Amount |  |
| Max Sum Insured Client | Financial Amount |  |
| Min Age | Number |  |
| Max Age Male | Number |  |
| Max Age Female | Number |  |
| Max Age Restriction Type | Max Age Restriction Type |  |
