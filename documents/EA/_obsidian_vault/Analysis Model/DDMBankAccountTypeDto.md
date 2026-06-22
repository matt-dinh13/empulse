---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM"
domain: "Analysis Model"
element_id: 1710624
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 DDMBankAccountTypeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM

## 📝 Notes

{ADD PAYM-1844 CBL-1541 /}

## 🔗 Connections (5)

- ← Dependency: [[CreateDDMRequest]]
- ← Dependency: [[UpdateDDMRequest]]
- → Dependency: [[AccountTypeDto (Enumeration 1710623)]]
- ← Dependency: [[CreateDDMRequest (Class 1710857)]]
- ← Dependency: [[UpdateDDMRequest (Class 1710853)]]

## 📊 Appears In (4 diagrams)

- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.updateDDM
- Logical: DirectDebitServiceV5 - Create DDM
- Logical: DirectDebitServiceV5 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| accountHolderName | string |  |
| accountType | AccountTypeDto |  |
| bankBranchSyncCode | string |  |
