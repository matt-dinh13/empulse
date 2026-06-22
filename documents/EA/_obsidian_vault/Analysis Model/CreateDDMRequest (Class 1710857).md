---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5"
domain: "Analysis Model"
element_id: 1710857
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CreateDDMRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5

## 🔗 Connections (5)

- ← Dependency: [[DirectDebitService (Interface 1699813)]]
- → Dependency: [[DdmJfsPartnerDto]]
- → Dependency: [[DDMLimitDataDto]]
- → Dependency: [[DDMBankAccountTypeDto]]
- → Dependency: [[createDDMAttributes]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceV5 - Create DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | DDMBankAccountTypeDto |  |
| ddmType | string |  |
| externalDDMProvider | string |  |
| JFSPartners | DdmJfsPartnerDto |  |
| limitData | DDMLimitDataDto |  |
| contract | contractDDMBaseDto |  |
| validFrom | date |  |
| validTo | date |  |
| regularPaymentCode | string |  |
| createDDMAttribute | createDDMAttributes |  |
