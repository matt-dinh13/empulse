---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model"
domain: "Analysis Model"
element_id: 1753291
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DDS Confirmation Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model

## 📝 Notes

{ADD PAYM-4952}

## 🔗 Connections (1)

- → Aggregation: [[DDS Request]]

## 📊 Appears In (1 diagrams)

- Logical: DDS Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DDSId | Long |  |
| DDMReference | String |  |
| ContractReference | String |  |
| ExternalReference | String |  |
| DueDate | Date |  |
| Amount | BigDecimal |  |
| Debited | Boolean |  |
| ReasonCode | String |  |
