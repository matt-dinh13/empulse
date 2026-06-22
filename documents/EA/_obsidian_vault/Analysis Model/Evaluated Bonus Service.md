---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874232
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Evaluated Bonus Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

A bonus service which is evaluated and possibly applied when the loan service is asked

Notice: It is created only for Gift payment service now - see

## 🔗 Connections (2)

- → Aggregation: [[Loan Service Request (Class 1868549)]]
- → Dependency: [[Bonus Service Attribute]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service Code | string |  |
| Service Attributes | Bonus Service Attribute |  |
| Applied On Request YN | boolean |  |
