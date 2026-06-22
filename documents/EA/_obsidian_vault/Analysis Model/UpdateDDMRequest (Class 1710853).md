---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5"
domain: "Analysis Model"
element_id: 1710853
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UpdateDDMRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5

## 🔗 Connections (4)

- ← Dependency: [[DirectDebitService (Interface 1699813)]]
- → Dependency: [[DDMBankAccountTypeDto]]
- → Dependency: [[DDMLimitDataDto]]
- → Dependency: [[updateDDMAttributes]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceV5 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | DDMBankAccountTypeDto |  |
| contract | ContractDDMBaseDto |  |
| ddmCode | string |  |
| ddmType | string |  |
| externalDDProvider | string |  |
| limitData | DDMLimitDataDto |  |
| validFrom | date |  |
| validTo | date |  |
| regularPaymentCode | string |  |
| updateDDMAttributes | updateDDMAttributes |  |
