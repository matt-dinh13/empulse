---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6282 (CLM-2048) New accounting specs for Insurance Securitization"
domain: "Requirements Model"
element_id: 1415289
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 New accounting specs for Insurance Securitization

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6282 (CLM-2048) New accounting specs for Insurance Securitization

## 📝 Notes

During calculations for securitization, we need to add and fill TariffItemTypeCode to SecuritizedPenaltyItem and SecuritizedFeeItem (now we only fill TariffItemCode there).

We need to add tariffItemTypeCode to following objects of SecuritizationService.java class (and maybe some other, please check):
* SecuritizedPenaltyItem
* SecuritizedFeeItem
* TariffItemRelatedResult

DTOs and hss-integration has to be updated as well.

## 🔗 Connections (1)

- → Generalization: [[PAYM-2314 CLM-2048 (CBL-6282) New accounting specs for Insurance Securitization]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-2314 CLM-2048 (CBL-6282) New accounting specs for Insurance Securitization
