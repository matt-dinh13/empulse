---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI"
domain: "Analysis Model"
element_id: 1862045
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BankData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI

## 🔗 Connections (2)

- ← Dependency: [[GetBankDataResponse]]
- → Dependency: [[BankExtendedProperties]]

## 📊 Appears In (1 diagrams)

- Logical: BankManagementRestAPI - Get Bank Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankCode | string |  |
| bankName | string |  |
| DDType | string |  |
| bankStatus | string |  |
| syncCode | string |  |
| DDDueDateOffset | int |  |
| DDSupport | boolean |  |
| CashLoanEligible | boolean |  |
| SecondaryCode | string |  |
| {add}eMandateSupport | boolean |  |
| BankExtendedProperties | BankExtendedProperties |  |
