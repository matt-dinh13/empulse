# LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain
- **Diagram ID**: 151880
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    Update_application_payment_channel["Update application payment channel"]
    Get_application_payment_channel_by_its_purpose["Get application payment channel by its purpose"]
    LOR_9414_Remove_usage_of_global_parameter_DDM_CHANGE_BA_FOR_["LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain"]
    MOD_01_422_Update_application_DDM["{MOD}01.422 Update application DDM"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    MOD_01_422_Update_application_DDM -->|{DEL LOR-9414/}| Get_application_payment_channel_by_its_purpose
    MOD_01_422_Update_application_DDM -->|{DEL LOR-9414/}| Update_application_payment_channel
```
