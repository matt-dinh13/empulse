---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1"
domain: "Analysis Model"
element_id: 1711085
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 updateDDMRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1

## 🔗 Connections (4)

- → Dependency: [[DDMBankAccountData]]
- ← Dependency: [[DirectDebitServiceRestAPI]]
- → Dependency: [[DDMExtendedProperties]]
- → Dependency: [[regularPaymentData]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceRestAPI - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | DDMBankAccountData |  |
| contractCode | long |  |
| ddmCode | string |  |
| ddmType | string |  |
| externalDDProvider | string |  |
| limitData | DDMLimitDataDto |  |
| regularPaymentData | regularPaymentData |  |
| DDMextendedProperties | DDMExtendedProperties |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
