---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction"
domain: "Requirements Model"
element_id: 1819469
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 ConfirmationTxAndIPTransferDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction

## 📝 Notes

Transaction confirmation object which will be then transferred to installment plan using the offer code from IP which is returned in IP calculation.

## 🔗 Connections (2)

- ← Dependency: [[ActivateAccountRequest]]
- → Dependency: [[{MOD}ConfirmationTxDto]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction
- Logical: Account Management - Activate account
- Logical: Account management structures - Initial Transaction

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerCode | TransactionTypeVariantTypeDto |  |
| transaction | {MOD}ConfirmationTxDto |  |
