# UI for management of Commodity Validation Setting

```mermaid
graph TD
    DEL_01_616_Archive_Commodity_Validation_Rule_UI["{DEL}01.616 Archive Commodity Validation Rule UI"]
    DEL_01_604_Archive_Commodity_Validation_Rule["{DEL}01.604 Archive Commodity Validation Rule"]
    DEL_01_602_Get_Commodity_Validation_Rule["{DEL}01.602 Get Commodity Validation Rule"]
    DEL_01_615_Show_Commodity_Validation_Rule_detail_UI["{DEL}01.615 Show Commodity Validation Rule detail UI"]
    DEL_01_614_Clone_Commodity_Validation_Rule_UI["{DEL}01.614 Clone Commodity Validation Rule UI"]
    DEL_01_613_Search_Commodity_Validation_Rule_UI["{DEL}01.613 Search Commodity Validation Rule UI"]
    DEL_01_612_Update_Commodity_Validation_Rule_UI["{DEL}01.612 Update Commodity Validation Rule UI"]
    DEL_01_601_Set_Commodity_Validation_Rule["{DEL}01.601 Set Commodity Validation Rule"]
    DEL_01_611_Create_new_Commodity_Validation_Rule_UI["{DEL}01.611 Create new Commodity Validation Rule UI"]
    User["User"]
    DEL_01_612_Update_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_601_Set_Commodity_Validation_Rule
    DEL_01_611_Create_new_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_601_Set_Commodity_Validation_Rule
    DEL_01_614_Clone_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_601_Set_Commodity_Validation_Rule
    DEL_01_612_Update_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_602_Get_Commodity_Validation_Rule
    DEL_01_613_Search_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_602_Get_Commodity_Validation_Rule
    DEL_01_614_Clone_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_602_Get_Commodity_Validation_Rule
    DEL_01_615_Show_Commodity_Validation_Rule_detail_UI -->|unnamed| DEL_01_602_Get_Commodity_Validation_Rule
    DEL_01_616_Archive_Commodity_Validation_Rule_UI -->|unnamed| DEL_01_604_Archive_Commodity_Validation_Rule
    User -->|unnamed| DEL_01_612_Update_Commodity_Validation_Rule_UI
    User -->|unnamed| DEL_01_611_Create_new_Commodity_Validation_Rule_UI
    User -->|unnamed| DEL_01_615_Show_Commodity_Validation_Rule_detail_UI
    User -->|unnamed| DEL_01_616_Archive_Commodity_Validation_Rule_UI
    User -->|unnamed| DEL_01_614_Clone_Commodity_Validation_Rule_UI
    User -->|unnamed| DEL_01_613_Search_Commodity_Validation_Rule_UI
```
