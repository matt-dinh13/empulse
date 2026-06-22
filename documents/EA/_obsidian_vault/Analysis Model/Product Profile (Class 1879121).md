---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF structure"
domain: "Analysis Model"
element_id: 1879121
diagrams: 7
connections: 19
tags:
  - class
  - analysis-model
---

# 🔷 Product Profile

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF structure

## 📝 Notes

Product profile serves for unification of basic common parameters and rules of similar products, especially the way of processing of loan application and contract.

## 🔗 Connections (18)

- ← Dependency: [[Due Date Algorithm Parameters]]
- ← Dependency: [[{ADD} Service to Product Profile Relation]]
- ← Dependency: [[Product profile (GUIElement 1872095)]]
- ← Dependency: [[Profile]]
- → Dependency: [[First Due Date Algorithm Type]]
- → Dependency: [[{DEL}}Main Product Profile properties - validation rules]]
- ← Aggregation: [[Product Profile 2 Documentation Configuration]]
- → Dependency: [[First Day of Billing Period Algorithm Type]]
- → Dependency: [[Business Category (Class 1879134)]]
- → Dependency: [[Contract Negotiation Process Type]]
- → Dependency: [[Day Count Method Type]]
- ← Aggregation: [[Product Profile Installment Schedule]]
- ← Association: [[{MOD}Product]]
- ← Aggregation: [[Product Profile 2 Product Set]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[Accounting Method (Class 1879096)]]
- → Dependency: [[Product Transaction Type]]
- ← Aggregation: [[Product Profile 2 Application Form Configuration]]

## 📊 Appears In (7 diagrams)

- Logical: AF structure
- Logical: Documentation Configuration
- Logical: Due date calculation parameters
- Logical: Logical Data Model
- Logical: Product data synchronization mapping
- Logical: Product Management
- Logical: Product Profile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Active | Boolean |  |
| Product Type | Product Type |  |
| Initial Transaction Type | Product Transaction Type |  |
| Is Debit | boolean | false |
| Name | Text |  |
| Accounting Method | Accounting Method |  |
| Day Count Method | Day Count Method Type |  |
| Business Category | Business Category |  |
| Contract Negotiation Process | Contract Negotiation Process Type |  |
| Preferred First Due Date Algorithm | First Due Date Algorithm Type |  |
| Max Duration | Number |  |
| First Day of Billing Period Algorithm | First Day of Billing Period Algorithm Type |  |
| Maximum validity of prepared documents | number | 1 |
| Maximum documents preparation period | Integer |  |
