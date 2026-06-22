---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1290873
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Add new recalculation reasons settings to DB

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes

## 📝 Notes

For the new recalculation reasons (EG and EM), initial settings have to be added to the DB table INSTALLMENT_INCL_IN_OP with following values:

RECALCULATION_REASON: EG, EM
TERMS_AND_CONDITIONS_CODE: all active T&C
INSTALLMENT_PART_TYPE: S, I
ACTIVE_FLAG: 1
VERSION: 0

## 🔗 Connections (1)

- → Generalization: [[Add support for FER service with included GIFT payments]]

## 📊 Appears In (1 diagrams)

- Custom: IS-393 (CBL-1855) Full early repayment services changes
