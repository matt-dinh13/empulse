---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/Schema definitions"
domain: "Analysis Model"
element_id: 1856567
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InsurancePeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/Schema definitions

## 📝 Notes

Insurance Period structure

## 🔗 Connections (2)

- → Dependency: [[InsurancePeriodStatusType]]
- ← Dependency: [[InsuranceContract (Class 1856488)]]

## 📊 Appears In (1 diagrams)

- Logical: InsuranceContract structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | InsurancePeriodStatusType |  |
| startDate | Date |  |
| endDate | Date |  |
| sumInsured | Money |  |
| premium | Money |  |
