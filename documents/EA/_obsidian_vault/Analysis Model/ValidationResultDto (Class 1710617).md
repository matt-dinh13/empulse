---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1710617
diagrams: 15
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 ValidationResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 🔗 Connections (10)

- ← Dependency: [[CancelDDMFault]]
- ← Dependency: [[ChangeDDMStatusFault]]
- ← Dependency: [[CalculateDDMLimitFault]]
- ← Dependency: [[getBankAccountByCUIDFault]]
- ← Dependency: [[PaymentChannelFault]]
- ← Dependency: [[ChangeRepaymentChannelFault (Class 1502814)]]
- ← Dependency: [[updateDDMDocumentFault]]
- ← Dependency: [[getDDMByContractFault]]
- ← Dependency: [[CreateDDMFault]]
- ← Dependency: [[UpdateDDMFault]]

## 📊 Appears In (15 diagrams)

- Logical: BankAccountsWS.getBankAccountByCUID
- Logical: DirectDebitMandate.cancelDDM
- Logical: DirectDebitService.calculateDDMLimit
- Logical: DirectDebitService.changeDDMStatus
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.updateDDM
- Logical: directDebitService.updateDDMDocument
- Logical: DirectDebitServiceV5 - Update DDM
- Logical: PaymentChannelWS
- Logical: PaymentChannelWS - get payment channels by bank account data
- Logical: PaymentChannelWSV2 - Change Repayment Channel
- Logical: PaymentChannelWSV2 - Get Payment Channel By Bank Account
- Logical: PaymentChannelWSV3 - Change Repayment Channel
- Logical: PaymentChannelWSV3 - Get Payment Channel By Bank Account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributeCode | string |  |
| errorMessageCode | string |  |
