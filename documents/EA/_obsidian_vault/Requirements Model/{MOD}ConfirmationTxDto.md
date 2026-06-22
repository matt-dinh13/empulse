---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction"
domain: "Requirements Model"
element_id: 1819459
diagrams: 7
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ConfirmationTxDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction

## 📝 Notes

Confirmed Transaction definition

## 🔗 Connections (8)

- ← Dependency: [[ConfirmTransactionRequest]]
- ← Dependency: [[ActivateAccountRequest]]
- ← Dependency: [[ConfirmTransactionWithIPConversionRequest]]
- → Dependency: [[TransactionSubTypeDto]]
- ← Dependency: [[ConfirmationTxAndIPTransferDto (Class 1819469)]]
- → Dependency: [[TransactionTypeVariantTypeDto (Class 1734235)]]
- → Generalization «XSDextension»: [[TransactionDto]]
- → Dependency: [[{ADD}CommodityDto]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction
- Logical: Account Management - Activate account
- Logical: Account management structures
- Logical: Account management structures - Initial Transaction
- Logical: Account TransactionsWS - usage on REL transaction confirmation and IP conversion
- Logical: AccountManagementWS - Contract signing
- Logical: AccountTransactionWS - usage on REL transaction confirmation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| authorizationSourceID | TransactionSourceIdDto |  |
| classificationGroup | string |  |
| confirmationDate | date |  |
| reconciliationAmount | PositiveMoneyDto |  |
| transactionSubType | TransactionSubTypeDto |  |
| transactionTypeVariant | TransactionTypeVariantTypeDto |  |
| {ADD}commodities | CommodityDto |  |
