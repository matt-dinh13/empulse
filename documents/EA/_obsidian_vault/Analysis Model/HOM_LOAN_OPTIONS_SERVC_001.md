---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371219
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_LOAN_OPTIONS_SERVC_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

This class is specialization of class Service

## 🔗 Connections (1)

- → Aggregation: [[HOM_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service ID | number |  |
| length | number |  |
| premium interest rate | number |  |
| early repayment algorithm type | string |  |
| immediate early repayment available flag | boolean |  |
| moratorium | number |  |
| accepted due date shift | number |  |
| max dpd count | number |  |
| min date before | number |  |
| accept small underpayment flag | boolean |  |
| cop length | number |  |
| automatic refund generation flag | boolean |  |
| minimal PER amount rate | number |  |
| allow request in moratorium | boolean |  |
| minimal last installment amount | number |  |
| PER type | string |  |
| allow PER amount interval | boolean |  |
| process on balance change | boolean |  |
| allow ER date choice | boolean |  |
| max days before ER | number |  |
| notify collection system | boolean |  |
| min days after last DD | number |  |
| max days after last DD | number |  |
| debt tolerance | number |  |
| charge EOM fee | boolean |  |
