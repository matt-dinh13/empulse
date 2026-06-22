# CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA
- **Diagram ID**: 163893
- **Elements**: 4
- **Connectors**: 1

```mermaid
graph TD
    REQ_1_Extension_of_HO_ALOP_DATA_datasource_used_for_suppleme["REQ #1 - Extension of HO_ALOP_DATA datasource used for supplement"]
    HO_ALOP_DATA_HO_ALOP_DATA["HO_ALOP_DATA : HO_ALOP_DATA"]
    HO_ALOP_DATA_filling_rules["HO_ALOP_DATA filling rules"]
    MOD_13_205_Create_contract_supplement_documents_v2["{MOD}13.205 Create contract supplement documents v2"]
    MOD_13_205_Create_contract_supplement_documents_v2 -->|unnamed| HO_ALOP_DATA_filling_rules
```
