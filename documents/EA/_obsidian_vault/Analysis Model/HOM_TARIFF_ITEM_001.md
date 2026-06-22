---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1371182
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 HOM_TARIFF_ITEM_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Each and every tariff consists from its items. These items define which fees/penalties can be charged according to this tariff.

## 🔗 Connections (6)

- ← Dependency: [[HOM_OFR_FPR_ITM2TF_ITM_001]]
- ← Dependency: [[HOM_OFR_INSTLMNT_PART_001]]
- ← Dependency: [[HOM_OFR_FIN_PR_I2S_ITM_001]]
- → Dependency: [[HOM_TARIFF_ITEM_GROUP_001]]
- → Dependency: [[HOM_TARIFF_ITEM_TYPE_001]]
- → Aggregation: [[HOM_TARIFF_001]]

## 📊 Appears In (2 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)
- Logical: Tariff (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| tariff ID | number |  |
| tariff item type code | HOM_TARIFF_ITEM_TYPE_001 |  |
| tariff item category type | string |  |
| amount | number |  |
| amount currency | string |  |
| calculation method type | string |  |
| max amount | number |  |
| max amount currency | string |  |
| min amount | number |  |
| min amount currency | string |  |
| percentage | number |  |
| percentage based on type | string |  |
| rounding type | string |  |
| rounding scale | number |  |
| tax percentage | number |  |
| dpd min | number |  |
| dpd max | number |  |
| annual rate projection | string |  |
| limit number from | number |  |
| limit number to | number |  |
| limit amount based on type | string |  |
| limit amount from amount | number |  |
| limit amount from currency | string |  |
| limit amount to amount | number |  |
| limit amount to currency | string |  |
| group code | HOM_TARIFF_ITEM_GROUP_001 |  |
| limit number based on type | string |  |
