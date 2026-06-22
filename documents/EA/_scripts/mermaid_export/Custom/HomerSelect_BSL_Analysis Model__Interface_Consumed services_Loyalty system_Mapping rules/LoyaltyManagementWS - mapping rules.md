# LoyaltyManagementWS - mapping rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules
- **Diagram ID**: 81756
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    ADD_GetListOfRewardSchemasRequest["{ADD}GetListOfRewardSchemasRequest"]
    CancelAccountTerminationRequest["CancelAccountTerminationRequest"]
    Mapping_CancelAccountTerminationRequest_LoyaltyManagementWS["Mapping CancelAccountTerminationRequest - LoyaltyManagementWS"]
    CancelAccountRequest["CancelAccountRequest"]
    Mapping_CancelAccountRequest_LoyaltyManagementWS["Mapping CancelAccountRequest - LoyaltyManagementWS"]
    MOD_Mapping_InitiateAccountTerminationtRequest_LoyaltyManage["{MOD}Mapping InitiateAccountTerminationtRequest - LoyaltyManagementWS
"]
    MOD_InitiateAccountTerminationRequest["{MOD}InitiateAccountTerminationRequest"]
    Mapping_CreateAccountRequest_LoyaltyManagementWS["Mapping CreateAccountRequest - LoyaltyManagementWS"]
    CreateAccountRequest["CreateAccountRequest"]
    CreateAccountRequest -->|unnamed| Mapping_CreateAccountRequest_LoyaltyManagementWS
    MOD_InitiateAccountTerminationRequest -->|unnamed| MOD_Mapping_InitiateAccountTerminationtRequest_LoyaltyManage
    CancelAccountRequest -->|unnamed| Mapping_CancelAccountRequest_LoyaltyManagementWS
    CancelAccountTerminationRequest -->|unnamed| Mapping_CancelAccountTerminationRequest_LoyaltyManagementWS
```
