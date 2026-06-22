---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI"
domain: "Analysis Model"
element_id: 1862063
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BankBranchData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI

## 🔗 Connections (2)

- → Dependency: [[BankBranchExtendedProperties]]
- ← Dependency: [[GetBankBranchDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: BankManagementRestAPI - Get Bank Branch Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankCode | string |  |
| MICR | string |  |
| name | string |  |
| status | string |  |
| syncCode | string |  |
| isHeadquarters | boolean |  |
| bankBranchCode | string |  |
| bankBranchExtendedProperties | BankBranchExtendedProperties |  |
