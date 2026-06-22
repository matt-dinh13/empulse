# Insurance Program functions

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model
- **Diagram ID**: 146573
- **Elements**: 23
- **Connectors**: 22

```mermaid
graph LR
    ADD_INSR_Get_Customer_personal_data_from_PIF["{ADD}INSR - Get Customer personal data from PIF"]
    Data_Eligibility_Validation_Data_Eligibility_Validation_v2["Data Eligibility Validation : Data Eligibility Validation v2"]
    Getting_Insurance_Program_data_Getting_Insurance_Program_dat["Getting Insurance Program data : Getting Insurance Program data v2"]
    Getting_Insurance_Programs_by_search_criteria_Getting_Insura["Getting Insurance Programs by search criteria : Getting Insurance Programs v2"]
    Getting_active_Insurance_Programs_Getting_Insurance_Programs["Getting active Insurance Programs :Getting Insurance Programs v1"]
    n_11_200_Get_Insurance_Programs_service(("11.200 Get Insurance Programs service"))
    Check_Commodity_type_data["Check Commodity type data"]
    Check_Max_sum_insured_for_client["Check Max sum insured for client"]
    Check_client_profession_eligibility["Check client profession eligibility"]
    Check_Max_sum_insured_for_contract["Check Max sum insured for contract"]
    Check_Maximum_client_age["Check Maximum client age"]
    Check_Minimum_Client_Age["Check Minimum Client Age"]
    Check_Insurance_Eligibility_based_on_Commodity_data["Check Insurance Eligibility based on Commodity data"]
    Check_Insurance_Eligibility_based_on_client_data["Check Insurance Eligibility based on client data"]
    Data_Eligibility_Validation_Data_Eligibility_Validation["Data Eligibility Validation : Data Eligibility Validation"]
    n_11_124_Validate_data_eligibility_for_insurance(("11.124 Validate data eligibility for insurance"))
    Getting_Eligibility_definitions_Getting_Eligibility_definiti["Getting Eligibility definitions : Getting Eligibility definitions v1"]
    n_11_204_Get_Insurance_Eligibility_definition_service(("11.204 Get Insurance Eligibility definition service"))
    Getting_Insurance_Program_data_Getting_Insurance_Program_dat["Getting Insurance Program data : Getting Insurance Program data v1"]
    Getting_Custom_Data_Definition_Getting_Custom_Data_Definitio["Getting Custom Data Definition : Getting Custom Data Definition v1"]
    n_11_202_Get_insurance_custom_data_definition_service_v2(("11.202 Get insurance custom data definition service v2"))
    n_11_050_Get_Insurance_Program_detail_service_v2(("11.050 Get Insurance Program detail service v2"))
    External_system[/"External system"/]
    Data_Eligibility_Validation_Data_Eligibility_Validation_v2 -->|unnamed| n_11_124_Validate_data_eligibility_for_insurance
    Getting_Insurance_Programs_by_search_criteria_Getting_Insura -->|unnamed| n_11_200_Get_Insurance_Programs_service
    Check_Insurance_Eligibility_based_on_Commodity_data -->|unnamed| Check_Commodity_type_data
    Check_Insurance_Eligibility_based_on_client_data -->|unnamed| Check_Max_sum_insured_for_client
    Check_Insurance_Eligibility_based_on_client_data -->|unnamed| Check_client_profession_eligibility
    Check_Insurance_Eligibility_based_on_client_data -->|unnamed| Check_Max_sum_insured_for_contract
    Check_Insurance_Eligibility_based_on_client_data -->|unnamed| Check_Maximum_client_age
    Check_Insurance_Eligibility_based_on_client_data -->|unnamed| Check_Minimum_Client_Age
    n_11_200_Get_Insurance_Programs_service -->|unnamed| Getting_active_Insurance_Programs_Getting_Insurance_Programs
    n_11_124_Validate_data_eligibility_for_insurance -->|unnamed| Check_Insurance_Eligibility_based_on_client_data
    n_11_124_Validate_data_eligibility_for_insurance -->|unnamed| ADD_INSR_Get_Customer_personal_data_from_PIF
    Data_Eligibility_Validation_Data_Eligibility_Validation -->|unnamed| n_11_124_Validate_data_eligibility_for_insurance
    Getting_Eligibility_definitions_Getting_Eligibility_definiti -->|unnamed| n_11_204_Get_Insurance_Eligibility_definition_service
    Getting_Custom_Data_Definition_Getting_Custom_Data_Definitio -->|unnamed| n_11_202_Get_insurance_custom_data_definition_service_v2
    Getting_Insurance_Program_data_Getting_Insurance_Program_dat -->|unnamed| n_11_050_Get_Insurance_Program_detail_service_v2
    Getting_Insurance_Program_data_Getting_Insurance_Program_dat -->|unnamed| n_11_050_Get_Insurance_Program_detail_service_v2
    n_11_124_Validate_data_eligibility_for_insurance -->|unnamed| Check_Insurance_Eligibility_based_on_Commodity_data
    External_system --> n_11_050_Get_Insurance_Program_detail_service_v2
    External_system --> n_11_202_Get_insurance_custom_data_definition_service_v2
    External_system --> n_11_200_Get_Insurance_Programs_service
    External_system --> n_11_204_Get_Insurance_Eligibility_definition_service
    External_system --> n_11_124_Validate_data_eligibility_for_insurance
```
