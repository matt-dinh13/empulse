---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Logical Data Model/OutgoingDirectDebitMandates"
domain: "Analysis Model"
element_id: 1511241
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 channelType

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Logical Data Model/OutgoingDirectDebitMandates

## 📝 Notes

DDM.ECS_provider = NULL: channel = 'DD'
DDM.ECS_provider.ECS_Provider type = 'ECS': channel = 'ECS'
DDM.ECS_provider.ECS_Provider type = 'ACH': channel = 'ACH'

## 🔗 Connections (1)

- ← Association: [[directDebitMandate]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingDirectDebitMandates

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DD |  |  |
| ECS |  |  |
| ACH |  |  |
