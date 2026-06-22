---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Logical Data Model"
domain: "Analysis Model"
element_id: 1502305
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Insurance Eligibility Criteria

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Logical Data Model

## 📝 Notes

Criteria for limiting clients eligible for the insurance program.

## 🔗 Connections (4)

- ← Aggregation: [[Ineligible Profession]]
- → Aggregation: [[Insurance Program]]
- → Dependency: [[Max Age Restriction Type]]
- ← Aggregation: [[Eligible Commodity Type]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Program

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Max Sum Insured Contract | Financial Amount |  |
| Max Sum Insured Client | Financial Amount |  |
| Min Age | Number |  |
| Max Age Male | Number |  |
| Max Age Female | Number |  |
| Max Age Restriction Type | Max Age Restriction Type |  |
