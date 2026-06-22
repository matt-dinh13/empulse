---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-12587 (CSI-1864) Custom data definition and validation"
domain: "Modules"
element_id: 1715771
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 INSR + VASDea Custom data definition and validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-12587 (CSI-1864) Custom data definition and validation

## 📝 Notes

Custom data definition was already implemented in INSR within CSI-769.

Table ho.bsl_insur_cust_data_def is extended by DATA_TYPE_CODE which uses custom data validation library.
Also endpoint /rest/v3/insurance-programs with projection CUSTOM_DATA returns detailed data definition, e.g.:

GET https://insr.in00c1.in.infra/rest/v3/insurance-programs/MAX_INS:3?projections=CUSTOM_DATA

Original /rest/v1.0/insurance-programs/TEST02:1/custom-data/ should be mark as deprecated and not used.

Selection of custom data in the INSR UI cannot be updated until LOR uses old validation based on HO.BSL_CUSTOM_DATA_DEF_4_INSR.
Once new validation based on data provided by rest/v3/insurance-programs is implemented in all places we can update INSR UI and support definition of own custom type.

CreateDeal action for VASDeal is updated to use custom data validation library.

## 📊 Appears In (1 diagrams)

- Custom: CBL-12587 (CSI-1864) Custom data definition and validation
