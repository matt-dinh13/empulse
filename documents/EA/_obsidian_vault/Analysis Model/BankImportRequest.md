---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank Management"
domain: "Analysis Model"
element_id: 1557363
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 BankImportRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank Management

## 📝 Notes

{ADD CBL-9395 PAYM-3032}

## 🔗 Connections (3)

- → Dependency: [[Bank Status]]
- → Dependency: [[Direct Debit Type]]
- ← Dependency: [[{ADD} BankManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankManagementWS - BankImport

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| BankCode | string |  |
| BankName | string |  |
| BankSecondaryCode | string |  |
| CashLoanEligible | boolean |  |
| DDProviderType | Direct Debit Type |  |
| DirectDebitProvider | string |  |
| DueDateOffset | int |  |
| Status | Bank Status |  |
| UsableForDD | boolean |  |
| OwnDDProvider | boolean |  |
