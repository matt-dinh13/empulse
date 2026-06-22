---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model"
domain: "Analysis Model"
element_id: 1753285
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DDS Import Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model

## 🔗 Connections (1)

- → Aggregation: [[DDS Request]]

## 📊 Appears In (1 diagrams)

- Logical: DDS Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ContractReference; | String |  |
| DDMReference | String |  |
| Amount | BigDecimal |  |
| RequestedSourceSystem | String |  |
| DueDate | Date |  |
| Debited | Boolean |  |
| ReasonCode | String |  |
| DDMId | Long |  |
