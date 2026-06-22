---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1350413
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Get HC account number for outgoing payment disbursement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 📝 Notes

BankAccount.HolderType = 'HC'

HC bank account cannot be null but is not use when:
GlobalParameter.Code = OP_GEN_FILE & GlobalParameter.Value = 0
and
GlobalParameter.Code = OP_GEN_DISPATCH_NOTE & GlobalParameter.Value = 0

## 🔗 Connections (1)

- → Association: [[Get HC bank account]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
