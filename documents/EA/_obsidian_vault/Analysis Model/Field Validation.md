---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model"
domain: "Analysis Model"
element_id: 1534456
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Field Validation

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model

## 📝 Notes

Validation performed for the application form configuration.

## 🔗 Connections (3)

- → Realisation: [[LOR-468 - Support for the parametrization of validations in DB]]
- → Association: [[Validation]]
- → Aggregation: [[Subprocess (Class 1534443)]]

## 📊 Appears In (2 diagrams)

- Logical: Form Validations
- Logical: Loan Origination Configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Validation | Validation |  |
| Field | string |  |
| Class | string |  |
| Active | boolean |  |
