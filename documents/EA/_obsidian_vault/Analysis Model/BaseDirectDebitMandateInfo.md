---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817903
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 BaseDirectDebitMandateInfo

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Object containing the base set of data about the direct debit mandate (or its draft)

## 🔗 Connections (9)

- ← Generalization «XSDextension»: [[{MOD}DirectDebitMandateData]]
- → Dependency: [[DdmJfsPartnerDto (Class 1817908)]]
- → Dependency: [[DDMExtendedPropertiesDto]]
- → Dependency: [[DocumentDataDto]]
- → Dependency: [[MoneyDto (Class 1817900)]]
- ← Generalization «XSDextension»: [[CreateDDMDraftRequest]]
- ← Generalization «XSDextension»: [[UpdateDDMOrDraftRequest]]
- → Dependency: [[DraftBankAccountDataDto]]
- → Dependency: [[RegularPaymentDataDto]]

## 📊 Appears In (3 diagrams)

- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | DraftBankAccountDataDto |  |
| contractCode | string |  |
| ddmFrequency | string |  |
| ddmType | string |  |
| documentData | DocumentDataDto |  |
| extendedProperties | DDMExtendedPropertiesDto |  |
| externalCode | string |  |
| fsPartner | DdmJfsPartnerDto |  |
| limit | MoneyDto |  |
| regularPaymentData | RegularPaymentDataDto |  |
| status | string |  |
| validFrom | date |  |
| validTo | date |  |
