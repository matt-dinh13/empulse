# CBL-2537 (CLM-1146) New API to Send IMEI / SN When Signed Status for Partner Portal

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2537 (CLM-1146) New API to Send IMEI / SN When Signed Status for Partner Portal
- **Diagram ID**: 100569
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    el_1241526["Note"]
    Contract_Commodities_Contract_Commodities["Contract Commodities : Contract Commodities"]
    el_1241525["Note"]
    REQ_2_System_provides_API_to_update_commodity_data["REQ#2 - System provides API to update commodity data."]
    REQ_1_System_provides_API_to_get_commodity_ID_and_commodity_["REQ#1 - System provides API to get commodity ID and commodity data related to contract."]
    ADD_New_API_to_Send_IMEI_SN_When_Signed_Status_for_Partner_P["{ADD}New API to Send IMEI / SN When Signed Status for Partner Portal"]
    REQ_2_System_provides_API_to_update_commodity_data -->|unnamed| ADD_New_API_to_Send_IMEI_SN_When_Signed_Status_for_Partner_P
    REQ_1_System_provides_API_to_get_commodity_ID_and_commodity_ -->|unnamed| ADD_New_API_to_Send_IMEI_SN_When_Signed_Status_for_Partner_P
    Contract_Commodities_Contract_Commodities -->|unnamed| REQ_1_System_provides_API_to_get_commodity_ID_and_commodity_
    el_1241525 -->|unnamed| REQ_2_System_provides_API_to_update_commodity_data
```
