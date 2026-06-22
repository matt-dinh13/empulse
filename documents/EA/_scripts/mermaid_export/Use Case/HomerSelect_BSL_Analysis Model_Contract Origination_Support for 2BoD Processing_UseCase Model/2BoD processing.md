# 2BoD processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model
- **Diagram ID**: 149837
- **Elements**: 18
- **Connectors**: 20

```mermaid
graph LR
    Queue_control_panel_product_AF_Queue_control_panel_product_A["Queue control panel - product AF : Queue control panel - product AF"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    n_01_083_Fill_in_application_2BoD(("01.083 Fill in application - 2BoD"))
    n_01_027_Switch_contract_2BoD_queue_type(("01.027 Switch contract 2BoD queue type"))
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    MOD_01_300_Search_for_contract(("{MOD}01.300 Search for contract"))
    Release_contract_Release_contract["Release contract : Release contract"]
    View_2BoD_history_View_2BoD_filling_history["View 2BoD history :View 2BoD filling history"]
    Algorithms["Algorithms"]
    Algorithm_Find_which_2BoD_queue_type_is_a_contract_in["Algorithm: Find which 2BoD queue type is a contract in"]
    n_01_033_Show_2BoD_filling_history(("01.033 Show 2BoD filling history"))
    Algorithm_Check_if_contract_is_currently_in_2BoD_queue["Algorithm: Check if contract is currently in 2BoD queue"]
    Algorithm_Find_user_assigned_to_contract_in_2BoD_queue["Algorithm: Find user assigned to contract in 2BoD queue"]
    n_01_032_Reschedule_2BoD_call(("01.032 Reschedule 2BoD call"))
    Contract_search_01_300_Search_for_contract["Contract search : 01.300 Search for contract"]
    n_01_031_Release_assigned_contract(("01.031 Release assigned contract"))
    User[/"User"/]
    n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual(("01.325 Cancel In Pre-Process or In Process contract manually"))
    User --- n_01_031_Release_assigned_contract
    User --- MOD_01_210_Show_contract_detail
    User --- n_01_027_Switch_contract_2BoD_queue_type
    User --- n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual
    User --- n_01_083_Fill_in_application_2BoD
    User --- n_01_032_Reschedule_2BoD_call
    User --> MOD_01_300_Search_for_contract
    n_01_031_Release_assigned_contract -->|unnamed| Release_contract_Release_contract
    MOD_01_300_Search_for_contract -->|unnamed| MOD_01_210_Show_contract_detail
    Queue_control_panel_product_AF_Queue_control_panel_product_A -->|unnamed| n_01_027_Switch_contract_2BoD_queue_type
    n_01_032_Reschedule_2BoD_call -->|unnamed| Queue_control_panel_product_AF_Queue_control_panel_product_A
    n_01_033_Show_2BoD_filling_history -->|unnamed| View_2BoD_history_View_2BoD_filling_history
    n_01_031_Release_assigned_contract -->|unnamed| Contract_search_01_300_Search_for_contract
    n_01_033_Show_2BoD_filling_history --- User
    n_01_031_Release_assigned_contract -->|unnamed| Access_control_to_Contract_by_Salesroom
    MOD_01_300_Search_for_contract -->|unnamed| n_01_083_Fill_in_application_2BoD
    n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual -->|unnamed| Access_control_to_Contract_by_Salesroom
    n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual -->|unnamed| MOD_01_210_Show_contract_detail
    n_01_083_Fill_in_application_2BoD -->|unnamed| Access_control_to_Contract_by_Salesroom
    MOD_01_300_Search_for_contract -->|unnamed| Contract_search_01_300_Search_for_contract
```
