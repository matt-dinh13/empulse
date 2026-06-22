---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model"
domain: "Analysis Model"
element_id: 1879282
diagrams: 10
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 Supplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model

## 📝 Notes

The abstract entity to keep definition of a supplement type.
Changes in the supplement definition will be versioned. It means respective supplement object refers to the supplement type based on which is created.

## 🔗 Connections (11)

- ← Generalization: [[Transaction Supplement]]
- ← Association: [[Contract Supplement (Class 1862126)]]
- → Association: [[Supplement Type (Enumeration 1879280)]]
- ← Generalization: [[Credit Limit Change Supplement]]
- ← Aggregation: [[Supplement To Required Document Container (Class 1879274)]]
- ← Aggregation: [[Supplement Document Type (Class 1879273)]]
- ← Aggregation: [[Evaluation Request Definition (Class 1879272)]]
- → Generalization: [[Supplement Versioned entity (Class 1879268)]]
- ← Aggregation: [[Supplement Process Setting (Class 1879267)]]
- ← Generalization: [[Collection Tool Service Supplement]]
- ← Aggregation: [[Service Type Supplement]]

## 📊 Appears In (10 diagrams)

- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: Collection tool operation domains
- Logical: Contract Supplements
- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Collection tool service
- Logical: Supplement definition for Credit limit change
- Logical: Supplement definition for Loan restructuring
- Logical: Supplement Versioned entity
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| UUID | string |  |
