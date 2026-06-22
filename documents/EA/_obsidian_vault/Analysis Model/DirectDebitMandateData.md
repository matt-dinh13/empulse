---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1"
domain: "Analysis Model"
element_id: 1711087
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DirectDebitMandateData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1

## 🔗 Connections (4)

- → Dependency: [[BankAccountInfoDto]]
- → Dependency: [[ECSProviderData]]
- ← Dependency: [[GetDDMResponse]]
- → Dependency: [[{ADD}Extended Property]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceRestAPI - Get DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| confirmationStatus | string |  |
| documentUUID | string |  |
| limit | LimitDto |  |
| status | string |  |
| type | string |  |
| validFrom | date |  |
| validTo | date |  |
| bankAccountData | BankAccountInfoDto |  |
| ddmCode | string |  |
| contractCode | string |  |
| ECSProviderData | ECSProviderData |  |
| eligibleForDDSGeneration | boolean |  |
| confirmationStatusRemarkCode | string |  |
| externalCode | string |  |
| regularPaymentCode | string |  |
| regularPaymentAmount | MoneyDto |  |
| JFSPartners | DdmJfsPartnerDto |  |
| confirmationStatusRemarkValue | string |  |
| DDMExtendedProperty |  |  |
