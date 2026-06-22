---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model"
domain: "Analysis Model"
element_id: 1753293
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DDS Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model

## 📝 Notes

{ADD PAYM-4952}

## 🔗 Connections (4)

- ← Aggregation: [[DDS Confirmation Request]]
- → Dependency: [[DDS Operation Type]]
- → Dependency: [[Direct Debit Statement Status]]
- ← Aggregation: [[DDS Import Request]]

## 📊 Appears In (1 diagrams)

- Logical: DDS Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| JobInstanceId | BigDecimal |  |
| Status | Direct Debit Statement Status |  |
| OperationType | DDS Operation Type |  |
| ErrorMessage | String |  |
| ErrorCode | String |  |
