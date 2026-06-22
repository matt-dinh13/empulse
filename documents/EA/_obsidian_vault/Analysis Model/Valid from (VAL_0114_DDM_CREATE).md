---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1246498
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Valid from (VAL_0114_DDM_CREATE)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

This validation is not performed when DDM is updated. Besides, this validation is applicable only if contract is not in status 'APPROVED'.

The following must be true:

	
- ValidFrom  must be >= today + GlobalParameter DaysBeforeInstallmentDate

Related validation message: MSG_0382

## 🔗 Connections (1)

- ← Dependency: [[DDM time validity from]]

## 📊 Appears In (1 diagrams)

- Custom: Time validity
