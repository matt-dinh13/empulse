---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855682
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 EarlyRepaymentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[ContractEarlyTerminationRequestParameters]]
- ← Generalization «XSDextension»: [[{ADD}CoolingOffPeriodRequestParameters]]
- ← Generalization «XSDextension»: [[FullEarlyRepaymentRequestParameters]]

## 📊 Appears In (2 diagrams)

- Logical: Loan Service Request notifications
- Logical: Loan Service Request notifications - CET&FER request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| repaymentAmount | MoneyDto |  |
