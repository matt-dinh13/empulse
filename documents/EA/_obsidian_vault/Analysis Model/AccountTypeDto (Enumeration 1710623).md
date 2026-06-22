---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1710623
diagrams: 13
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 AccountTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-991 PAY /}

## 🔗 Connections (4)

- ← Dependency: [[BankAccountDto]]
- ← Dependency: [[GetBankAccountByCUIDDataDto]]
- ← Dependency: [[DDMBankAccountTypeDto]]
- ← Dependency: [[BankAccountInfoDto]]

## 📊 Appears In (13 diagrams)

- Logical: BankAccountsWS.getBankAccountByCUID
- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API
- Logical: ContractPaymentChannelManagementWS - GetContractDDMList
- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.getDDMByCode
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitService.updateDDM
- Logical: DirectDebitServiceV5 - Create DDM
- Logical: DirectDebitServiceV5 - Get DDM by contract
- Logical: DirectDebitServiceV5 - Get DDM by CUID
- Logical: DirectDebitServiceV5 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CA (Current account) |  |  |
| SA (Saving account) |  |  |
| CC (Cash credit) |  |  |
