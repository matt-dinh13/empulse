# Deal Period prolongation - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model
- **Diagram ID**: 159285
- **Elements**: 19
- **Connectors**: 21

```mermaid
graph LR
    ADD_Create_notifications_for_Deal_prolongation["{ADD}Create notifications for Deal prolongation"]
    ADD_11_070_Prolong_Deal_Period_VAS(("{ADD}11.070 Prolong Deal Period (VAS)"))
    Determine_register_inclusion_date["Determine register inclusion date"]
    Check_DPD_limit_for_Deal_prolongation["Check DPD limit for Deal prolongation"]
    ADD_11_076_Finalize_Deal_Period(("{ADD}11.076 Finalize Deal Period"))
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    ADD_Determine_next_Deal_Period["{ADD}Determine next Deal Period"]
    ADD_11_072_Create_New_Period_for_Prolongation_VAS(("{ADD}11.072 Create New Period for Prolongation (VAS)"))
    Deals_v1_Prolong_Deal["Deals_v1 : Prolong Deal"]
    Check_INSR_Insurance_Program_eligibility["Check INSR Insurance Program eligibility"]
    ADD_Create_Outgoing_Payment_by_calling_BSL_API["{ADD}Create Outgoing Payment by calling BSL API"]
    ADD_Create_Payment_Channel_for_Premium_payment["{ADD}Create Payment Channel for Premium payment"]
    ADD_Check_Deal_Period_limit_passed["{ADD}Check Deal Period limit passed"]
    Get_Insurance_Program_data_from_INSR["Get Insurance Program data from INSR"]
    Calculate_Net_Premium_based_on_Revenue_Share["Calculate Net Premium based on Revenue Share"]
    InsuranceProgram[/"InsuranceProgram"/]
    External_system[/"External system"/]
    ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon(("{ADD}11.074 Finalize Elapsed and Create new Period for Prolongation (VAS)"))
    ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon -->|unnamed| Check_INSR_Insurance_Program_eligibility
    External_system --- ADD_11_070_Prolong_Deal_Period_VAS
    Deals_v1_Prolong_Deal -->|unnamed| ADD_11_070_Prolong_Deal_Period_VAS
    ADD_11_076_Finalize_Deal_Period -->|unnamed| Determine_register_inclusion_date
    ADD_11_072_Create_New_Period_for_Prolongation_VAS -->|unnamed| Check_DPD_limit_for_Deal_prolongation
    ADD_11_072_Create_New_Period_for_Prolongation_VAS -.->|include| ADD_11_076_Finalize_Deal_Period
    ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon -.->|include| ADD_11_076_Finalize_Deal_Period
    ADD_11_070_Prolong_Deal_Period_VAS -->|unnamed| Get_Service_definition_from_Services
    ADD_11_070_Prolong_Deal_Period_VAS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    ADD_11_072_Create_New_Period_for_Prolongation_VAS -->|unnamed| ADD_Create_notifications_for_Deal_prolongation
    ADD_11_070_Prolong_Deal_Period_VAS -.->|include| ADD_11_072_Create_New_Period_for_Prolongation_VAS
    ADD_11_070_Prolong_Deal_Period_VAS -.->|include| ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon
    ADD_11_072_Create_New_Period_for_Prolongation_VAS -->|unnamed| Check_INSR_Insurance_Program_eligibility
    ADD_11_076_Finalize_Deal_Period -->|unnamed| ADD_Create_Outgoing_Payment_by_calling_BSL_API
    ADD_11_076_Finalize_Deal_Period -->|unnamed| ADD_Create_Payment_Channel_for_Premium_payment
    ADD_11_072_Create_New_Period_for_Prolongation_VAS -->|unnamed| ADD_Check_Deal_Period_limit_passed
    ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon -->|unnamed| ADD_Check_Deal_Period_limit_passed
    ADD_11_076_Finalize_Deal_Period -->|unnamed| Get_Insurance_Program_data_from_INSR
    ADD_11_076_Finalize_Deal_Period -->|unnamed| Calculate_Net_Premium_based_on_Revenue_Share
    ADD_11_076_Finalize_Deal_Period --- InsuranceProgram
    ADD_11_072_Create_New_Period_for_Prolongation_VAS -->|unnamed| ADD_Determine_next_Deal_Period
```
