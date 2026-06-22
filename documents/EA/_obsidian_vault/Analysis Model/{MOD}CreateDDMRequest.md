---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817888
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}CreateDDMRequest

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Request containing set of input parameters for creating a new instance of a direct debit mandate.

## 🔗 Connections (7)

- → Dependency: [[BankAccountDataDto (Class 1817893)]]
- → Dependency: [[DdmJfsPartnerDto (Class 1817908)]]
- → Dependency: [[MoneyDto (Class 1817900)]]
- → Dependency: [[DocumentDataDto]]
- → Dependency: [[DDMExtendedPropertiesDto]]
- → Dependency: [[RegularPaymentDataDto]]
- ← Dependency: [[DDM (Class 1817895)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitMandateRestV2 - CreateDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | BankAccountDataDto |  |
| contractCode | string |  |
| ddmFrequency | string |  |
| ddmType | string |  |
| documentData | DocumentDataDto |  |
| ecsProviderCode | string |  |
| extendedProperties | DDMExtendedPropertiesDto |  |
| externalCode | string |  |
| jfsPartner | DdmJfsPartnerDto |  |
| limit | MoneyDto |  |
| regularPaymentData | RegularPaymentDataDto |  |
| status | string |  |
| validFrom | date |  |
| validTo | date |  |
