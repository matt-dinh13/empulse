# PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back

```mermaid
graph TD
    MOD_Tariff_Item_activation_validation_rules["{MOD}Tariff Item activation validation rules"]
    MOD_Base_Type["{MOD}Base Type"]
    Logical_Data_Model_Base_Types["Logical Data Model : Base Types"]
    ADD_Divide_By_Terms_rule["{ADD}Divide By Terms rule"]
    MOD_TariffItemDto_validation["{MOD}TariffItemDto - validation"]
    Validation_Rules_Validation_Rules["Validation Rules : Validation Rules"]
    MOD_TariffItemDto["{MOD}TariffItemDto"]
    Tariffs_TariffDto["Tariffs : TariffDto"]
    User_Interface_Tariff_Item_detail["User Interface : Tariff Item detail"]
    User_Interface_Set_Tariff_Item["User Interface : Set Tariff Item"]
    User_Interface["User Interface"]
    MOD_Tariff_Item["{MOD}Tariff Item"]
    Logical_Data_Model_Tariff_and_Tariff_Item_Management["Logical Data Model : Tariff and Tariff Item Management"]
    ADD_ServiceParametersIBACK["{ADD}ServiceParametersIBACK"]
    IBACK["IBACK"]
    Service_Type_Specific_Extension_Service_Type_Specific_Extens["Service Type Specific Extension : Service Type Specific Extension"]
    User_Interface["User Interface"]
    User_Interface_Model_Show_Service["User Interface Model : Show Service"]
    User_Interface_Model_Set_main_Service_properties["User Interface Model : Set main Service properties"]
    ADD_Interest_Back_Service["{ADD}Interest Back Service"]
    IBACK_IBACK["IBACK : IBACK"]
    IBACK["IBACK"]
    MOD_Service_Type_Definition["{MOD}Service Type Definition"]
    Logical_Data_Model_Loan_Service_Type_definition["Logical Data Model : Loan Service Type definition"]
    PCG_5511_CBL_29642_BRPH_2099_Create_New_Service_Type_Interes["PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back"]
    service_type_IBACK["service type  IBACK"]
    Divide_by_terms_in_tariff_item["Divide by terms in tariff item"]
    MOD_TariffItemDto_validation -->|unnamed| MOD_Tariff_Item_activation_validation_rules
    MOD_TariffItemDto_validation -->|unnamed| ADD_Divide_By_Terms_rule
```
