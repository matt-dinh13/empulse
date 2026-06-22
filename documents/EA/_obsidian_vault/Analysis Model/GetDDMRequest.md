---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1"
domain: "Analysis Model"
element_id: 1711077
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GetDDMRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1

## 🔗 Connections (1)

- ← Dependency: [[DirectDebitServiceRestAPI]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceRestAPI - Get DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| contractCode | long |  |
| bankAccountNumber | string |  |
| status | string |  |
| confirmationStatus | string |  |
| valid | boolean |  |
| limit | MoneyDto |  |
| type | string |  |
