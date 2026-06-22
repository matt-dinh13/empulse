# Collection tools request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Use case model
- **Diagram ID**: 150273
- **Elements**: 25
- **Connectors**: 28

```mermaid
graph LR
    Get_client_current_data_from_CIF["Get client current data from CIF"]
    Get_client_documents_needed_to_service_request["Get client documents needed to service request"]
    Get_supplement_documents_required_for_service_request["Get supplement documents required for service request"]
    Service_eligibility_rules["Service eligibility rules"]
    Eligibility_Criteria_Repository_Eligibility_Criteria_Reposit["Eligibility Criteria Repository : Eligibility Criteria Repository"]
    n_08_061_Show_parameters_for_change_due_date(("08.061 Show parameters for change due date"))
    Change_due_date_request_creation_and_processing["Change due date request creation and processing"]
    n_08_400_Show_parameters_for_loan_restructuring(("08.400 Show parameters for loan restructuring"))
    Loan_restructuring_request_creation["Loan restructuring request creation"]
    Logical_Data_Model_Service_Eligibility["Logical Data Model : Service Eligibility"]
    Logical_Data_Model_Collection_tools_evaluation_domains["Logical Data Model : Collection tools evaluation domains"]
    Create_collection_tool_service_request_Create_collection_too["Create collection tool service request : Create collection tool service request"]
    Check_chosen_service_for_eligibility["Check chosen service for eligibility"]
    n_08_905_Show_supplement_documents_for_service_request(("08.905 Show supplement documents for service request"))
    Get_list_of_Eligibility_Criteria_Parameters_for_Service["Get list of Eligibility Criteria Parameters for Service"]
    n_08_354_Show_parameters_of_payment_holiday(("08.354 Show parameters of payment holiday"))
    CIF[/"CIF"/]
    Create_Collection_tool_service_request(("Create Collection tool service request"))
    Available_collection_tools_Tab_Available_collection_tools["Available collection tools : Tab - Available collection tools"]
    User_Interface_Model_Collection_tools_overview["User Interface Model : Collection tools overview"]
    User[/"User"/]
    Get_available_collection_tool_services["Get available collection tool services"]
    Check_contracts_for_collection_tool_services_eligibility["Check contracts for collection tool services eligibility"]
    n_08_900_Show_available_collection_tools_for_client_s_contra(("08.900 Show available collection tools for client's contracts"))
    Payment_holiday_request_creation["Payment holiday request creation"]
    Logical_Data_Model_Service_Eligibility -->|unnamed| Check_chosen_service_for_eligibility
    Check_chosen_service_for_eligibility -->|unnamed| Service_eligibility_rules
    Create_collection_tool_service_request_Create_collection_too -->|unnamed| n_08_905_Show_supplement_documents_for_service_request
    Logical_Data_Model_Service_Eligibility -->|unnamed| Get_list_of_Eligibility_Criteria_Parameters_for_Service
    Check_contracts_for_collection_tool_services_eligibility -->|unnamed| Get_list_of_Eligibility_Criteria_Parameters_for_Service
    Eligibility_Criteria_Repository_Eligibility_Criteria_Reposit -->|unnamed| Check_chosen_service_for_eligibility
    Check_contracts_for_collection_tool_services_eligibility -->|unnamed| Service_eligibility_rules
    Logical_Data_Model_Collection_tools_evaluation_domains -->|unnamed| Get_available_collection_tool_services
    Available_collection_tools_Tab_Available_collection_tools -->|unnamed| n_08_900_Show_available_collection_tools_for_client_s_contra
    User_Interface_Model_Collection_tools_overview -->|unnamed| n_08_900_Show_available_collection_tools_for_client_s_contra
    Logical_Data_Model_Service_Eligibility -->|unnamed| Check_contracts_for_collection_tool_services_eligibility
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| Check_contracts_for_collection_tool_services_eligibility
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| Get_available_collection_tool_services
    Logical_Data_Model_Collection_tools_evaluation_domains -->|unnamed| Check_contracts_for_collection_tool_services_eligibility
    User --> Create_Collection_tool_service_request
    User --> n_08_900_Show_available_collection_tools_for_client_s_contra
    CIF --> n_08_900_Show_available_collection_tools_for_client_s_contra
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Create_Collection_tool_service_request
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Check_chosen_service_for_eligibility
    n_08_354_Show_parameters_of_payment_holiday -.->|include| n_08_905_Show_supplement_documents_for_service_request
    n_08_400_Show_parameters_for_loan_restructuring -.->|include| n_08_905_Show_supplement_documents_for_service_request
    n_08_400_Show_parameters_for_loan_restructuring -->|unnamed| Check_chosen_service_for_eligibility
    n_08_400_Show_parameters_for_loan_restructuring -->|unnamed| Create_Collection_tool_service_request
    n_08_061_Show_parameters_for_change_due_date -.->|include| n_08_905_Show_supplement_documents_for_service_request
    n_08_061_Show_parameters_for_change_due_date -->|unnamed| Create_Collection_tool_service_request
    n_08_061_Show_parameters_for_change_due_date -->|unnamed| Check_chosen_service_for_eligibility
    n_08_905_Show_supplement_documents_for_service_request -->|External Reference| Get_supplement_documents_required_for_service_request
    n_08_905_Show_supplement_documents_for_service_request -->|External Reference| Get_client_documents_needed_to_service_request
```
