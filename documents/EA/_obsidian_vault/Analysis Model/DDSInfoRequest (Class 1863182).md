---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS"
domain: "Analysis Model"
element_id: 1863182
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DDSInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS

## 📝 Notes

{PBR-164 /}
Direct debit statement information

## 🔗 Connections (1)

- → Dependency: [[DDSStatusType]]

## 📊 Appears In (1 diagrams)

- Logical: DDS result notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| lastDirectDebitDate | dateTime |  |
| lastDirectDebitStatus | DDSStatusType |  |
| lastBounceReason | string |  |
| amount | PositiveMoneyDto |  |
| dueDate | string |  |
| reuqestId | string |  |
| reuqestSourceSystem | string |  |
