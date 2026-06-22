---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1710621
diagrams: 12
connections: 9
tags:
  - enumeration
  - analysis-model
---

# 📝 DDMResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 🔗 Connections (9)

- ← Dependency: [[CancelDDMFault]]
- ← Dependency: [[ChangeDDMStatusFault]]
- ← Dependency: [[CalculateDDMLimitFault]]
- ← Dependency: [[getBankAccountByCUIDFault]]
- ← Dependency: [[ChangeRepaymentChannelFault (Class 1502814)]]
- ← Dependency: [[updateDDMDocumentFault]]
- ← Dependency: [[getDDMByContractFault]]
- ← Dependency: [[CreateDDMFault]]
- ← Dependency: [[UpdateDDMFault]]

## 📊 Appears In (12 diagrams)

- Logical: BankAccountsWS.getBankAccountByCUID
- Logical: DirectDebitMandate.cancelDDM
- Logical: DirectDebitService.calculateDDMLimit
- Logical: DirectDebitService.changeDDMStatus
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.updateDDM
- Logical: directDebitService.updateDDMDocument
- Logical: DirectDebitServiceV5 - Create DDM
- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Change Repayment Channel
- Logical: PaymentChannelWSV3 - Change Repayment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| INVALID_DATA |  |  |
| SYSTEM_ERROR |  |  |
