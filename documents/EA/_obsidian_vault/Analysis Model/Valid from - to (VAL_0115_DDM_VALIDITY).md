---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1246500
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Valid from - to (VAL_0115_DDM_VALIDITY)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

This validation is skipped when DDM is being updated and ValidTo = SystemDate.

ValidFrom < ValidTo (skipped if ValidTo is null or if both the values are null)
Related validation message: MSG_0051

## 🔗 Connections (1)

- ← Dependency: [[DDM time validity common]]

## 📊 Appears In (1 diagrams)

- Custom: Time validity
