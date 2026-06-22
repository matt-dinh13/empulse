# Replacement of standard insurance upon its cancelation or termination

```mermaid
graph TD
    el_1878109["Note"]
    el_1878964["Note"]
    el_1878966["Note"]
    MOD_08_346_Add_Insurance_service_on_Contract_common["{MOD}08.346 Add Insurance service on Contract common"]
    n_11_147_Activate_insurance_on_contract["11.147 Activate insurance on contract"]
    Get_Product_data_by_Code_and_Version["Get Product data by Code and Version"]
    MOD_05_091_Generate_outgoing_payment_insurance["{MOD}05.091 Generate outgoing payment - insurance"]
    MOD_Determine_Insurance_Period_End_for_additionally_added_In["{MOD}Determine Insurance Period End for additionally added Insurance"]
    n_11_040_Activate_insurance_contract["11.040 Activate insurance contract"]
    MOD_11_010_Create_insurance_contract["{MOD}11.010 Create insurance contract"]
    n_11_030_Sign_insurance_contract["11.030 Sign insurance contract"]
    n_11_020_Add_insurance_period["11.020 Add insurance period"]
    System_event["System event"]
    n_11_780_Process_Insurance_cancellation_or_termination_event["11.780 Process Insurance cancellation or termination event"]
    n_11_152_Activate_additionally_added_Insurance_CEL["11.152 Activate additionally added Insurance (CEL)"]
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| Get_Product_data_by_Code_and_Version
    n_11_147_Activate_insurance_on_contract -->|unnamed| n_11_040_Activate_insurance_contract
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| el_1878966
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| n_11_147_Activate_insurance_on_contract
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| n_11_030_Sign_insurance_contract
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| MOD_08_346_Add_Insurance_service_on_Contract_common
    el_1878109 -->|unnamed| n_11_780_Process_Insurance_cancellation_or_termination_event
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| MOD_11_010_Create_insurance_contract
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| n_11_152_Activate_additionally_added_Insurance_CEL
    n_11_152_Activate_additionally_added_Insurance_CEL -->|unnamed| MOD_05_091_Generate_outgoing_payment_insurance
    n_11_152_Activate_additionally_added_Insurance_CEL -->|unnamed| MOD_Determine_Insurance_Period_End_for_additionally_added_In
    n_11_152_Activate_additionally_added_Insurance_CEL -->|unnamed| n_11_040_Activate_insurance_contract
    n_11_152_Activate_additionally_added_Insurance_CEL -->|unnamed| n_11_020_Add_insurance_period
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| MOD_Determine_Insurance_Period_End_for_additionally_added_In
    MOD_08_346_Add_Insurance_service_on_Contract_common -->|unnamed| n_11_147_Activate_insurance_on_contract
    MOD_08_346_Add_Insurance_service_on_Contract_common -->|unnamed| MOD_11_010_Create_insurance_contract
    MOD_08_346_Add_Insurance_service_on_Contract_common -->|unnamed| n_11_030_Sign_insurance_contract
    System_event -->|unnamed| n_11_780_Process_Insurance_cancellation_or_termination_event
    el_1878964 -->|unnamed| n_11_780_Process_Insurance_cancellation_or_termination_event
```
