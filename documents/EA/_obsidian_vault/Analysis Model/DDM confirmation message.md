---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DDM"
domain: "Analysis Model"
element_id: 1860659
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DDM confirmation message

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DDM

## 📝 Notes

Exchange: bsl.installments.headers.ddm.exchange

Queue: bsl.installments.ddm.conf.queue

RoutingKey: 

Headers: OperationType = ddmConfirmation

## 🔗 Connections (4)

- → Dependency: [[remarkType]]
- → Dependency: [[bankAccountTypeType]]
- → Dependency: [[statusType]]
- ← Dependency: [[Confirm DDM via RMQ]]

## 📊 Appears In (1 diagrams)

- Logical: DDM confirmation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddmCode | string |  |
| externalMandate code | string |  |
| customerBank accountNumber | string |  |
| clientBankAccountType | BankAccountType |  |
| customerBankAccountName | string |  |
| conformationStatus | StatusType |  |
| remark | RemarkType |  |
