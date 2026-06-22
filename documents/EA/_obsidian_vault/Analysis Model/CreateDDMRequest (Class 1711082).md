---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1"
domain: "Analysis Model"
element_id: 1711082
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 CreateDDMRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1

## 🔗 Connections (6)

- ← Dependency: [[DirectDebitServiceRestAPI]]
- → Dependency: [[createDDMAttributes]]
- → Dependency: [[DDMBankAccountData]]
- → Dependency: [[DdmJfsPartnerDto]]
- → Dependency: [[DDMExtendedProperties]]
- → Dependency: [[regularPaymentData]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceRestAPI - Create DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | DDMBankAccountData |  |
| ddmType | string |  |
| externalDDProvider | string |  |
| JFSPartner | DdmJfsPartnerDto |  |
| limitData | DDMLimitDataDto |  |
| contractCode | string |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
| DDMAttributes | DDMExtendedProperties |  |
| regularPaymentData | regularPaymentData |  |
