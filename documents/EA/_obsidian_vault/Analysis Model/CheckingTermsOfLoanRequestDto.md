---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855660
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CheckingTermsOfLoanRequestDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 📝 Notes

Service request specific parameters (Loan Service Request). It is filled in for requestsType = CHECKTL

## 🔗 Connections (2)

- ← Dependency: [[RequestParametersChoice]]
- → Dependency: [[CheckedDocumentAttribute]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Request notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| checkedDocumentAttributes | CheckedDocumentAttribute |  |
| checkingResult | string |  |
| penaltyCharged | boolean |  |
