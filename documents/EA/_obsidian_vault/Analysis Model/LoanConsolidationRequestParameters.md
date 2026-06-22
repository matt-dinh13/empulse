---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855678
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 LoanConsolidationRequestParameters

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 📝 Notes

Service request specific parameters (Loan Service Request). It is filled in for requestsType = LCONS

## 🔗 Connections (2)

- ← Dependency: [[RequestParametersChoice]]
- → Dependency: [[ConsolidatedContract]]

## 📊 Appears In (2 diagrams)

- Logical: Loan Service Request notifications
- Logical: Loan Service Request notifications - Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| consolidatedContracts | ConsolidatedContract |  |
