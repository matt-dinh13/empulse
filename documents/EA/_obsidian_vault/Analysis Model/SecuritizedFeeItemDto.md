---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization"
domain: "Analysis Model"
element_id: 1713693
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizedFeeItemDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization

## 📝 Notes

Securitized fee item

## 🔗 Connections (1)

- ← Dependency: [[SecuritizedContractDto (Class 1713694)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Contract Securitization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariffItemCode | string |  |
| accruedFeeOnLastInstallment | MoneyDto |  |
| accruedFeeTillEndOfMonth | MoneyDto |  |
| totalPaidFee | MoneyDto |  |
| pastPrescribedFee | MoneyDto |  |
| {ADD}tariffItemTypeCode | string |  |
