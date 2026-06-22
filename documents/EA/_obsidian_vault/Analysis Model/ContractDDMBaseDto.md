---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDM"
domain: "Analysis Model"
element_id: 1710618
diagrams: 12
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 ContractDDMBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDM

## 📝 Notes

{ADD CBL-29 PAY /}

## 🔗 Connections (13)

- ← Dependency: [[ResumeDDMResponse]]
- ← Dependency: [[ResumeDDMForContractRequest]]
- ← Dependency: [[SuspendDDMForContractRequest]]
- ← Dependency: [[SuspendDDMResponse]]
- ← Dependency: [[ChangeRepaymentChannelRequest (Class 1502810)]]
- ← Dependency: [[GetDDMByContractRequest]]
- ← Dependency: [[CreateDDMRequest]]
- ← Dependency: [[CreateDDMRequest]]
- ← Dependency: [[UpdateDDMRequest]]
- → Dependency: [[ContractStatusType (Enumeration 1833282)]]
- ← Dependency: [[DDMInfoBaseDto]]
- ← Dependency: [[DDMInfoBaseDto (Class 1710851)]]
- ← Dependency: [[DDMInfoMessage]]

## 📊 Appears In (12 diagrams)

- Logical: DDM Info
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitService.resumeDDM
- Logical: DirectDebitService.suspendDDM
- Logical: DirectDebitService.updateDDM
- Logical: DirectDebitServiceV5 - Get DDM by contract
- Logical: DirectDebitServiceV5 - Get DDM by CUID
- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Change Repayment Channel
- Logical: PaymentChannelWSV3 - Change Repayment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| {ADD}contractStatus | ContractStatusType |  |
