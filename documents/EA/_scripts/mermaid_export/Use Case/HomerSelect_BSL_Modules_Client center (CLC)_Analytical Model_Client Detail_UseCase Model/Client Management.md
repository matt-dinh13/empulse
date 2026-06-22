# Client Management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/UseCase Model
- **Diagram ID**: 164421
- **Elements**: 22
- **Connectors**: 20

```mermaid
graph LR
    User[/"User"/]
    User_Interface_Model_Tab_List_of_tickets["User Interface Model : Tab List of tickets"]
    n_07_120_Show_communication_ticket_list_v2(("07.120 Show communication ticket list v2"))
    Tab_User_Accounts_Tab_User_accounts["Tab User Accounts : Tab User accounts"]
    ADD_Show_tab_User_accounts(("{ADD}Show tab User accounts"))
    Tab_List_of_contracts_Tab_List_of_contracts["Tab List of contracts : Tab List of contracts"]
    Tab_Customer_Offers_v2_Customer_offers_tab_v2["Tab Customer Offers v2 : Customer offers tab v2"]
    Tab_List_of_communication_List_of_communication["Tab List of communication : List of communication"]
    ADD_07_130_Get_communication_from_external_systems(("{ADD}07.130 Get communication from external systems"))
    MOD_Show_Tab_List_of_communication(("{MOD}Show Tab List of communication"))
    Show_tab_Customer_offers(("Show tab Customer offers"))
    Is_Marketing_Offer_to_be_Responded["Is Marketing Offer to be Responded"]
    User_Interface_Model_Tab_List_of_contracts["User Interface Model : Tab List of contracts"]
    ADD_Show_tab_List_of_contracts(("{ADD}Show tab List of contracts"))
    ADD_Check_Customer_offers_availability_on_Salesroom["{ADD}Check Customer offers availability on Salesroom"]
    ADD_Get_active_Customer_offers["{ADD}Get active Customer offers"]
    n_06_032_Submit_response_on_customer_offer(("06.032 Submit response on customer offer"))
    Get_original_number_instead_of_alias_for_Unique_Id_document["Get original number instead of alias for Unique Id document"]
    diagram_8ADA19CD_B2D4_4635_8609_36DD709C1EB8["$diagram://{8ADA19CD-B2D4-4635-8609-36DD709C1EB8}"]
    n_06_060_Show_client_s_password(("06.060 Show client's password"))
    Show_client_data_Show_client_data["Show client data : Show client data"]
    MOD_06_030_Show_Client_Data(("{MOD}06.030 Show Client Data"))
    ADD_Get_active_Customer_offers -->|unnamed| ADD_Check_Customer_offers_availability_on_Salesroom
    n_07_120_Show_communication_ticket_list_v2 -->|unnamed| User_Interface_Model_Tab_List_of_tickets
    ADD_Show_tab_User_accounts -->|unnamed| Tab_User_Accounts_Tab_User_accounts
    MOD_Show_Tab_List_of_communication -->|unnamed| Tab_List_of_communication_List_of_communication
    MOD_Show_Tab_List_of_communication -.->|include| ADD_07_130_Get_communication_from_external_systems
    Show_tab_Customer_offers -->|unnamed| Tab_Customer_Offers_v2_Customer_offers_tab_v2
    ADD_Show_tab_List_of_contracts -->|unnamed| Tab_List_of_contracts_Tab_List_of_contracts
    MOD_06_030_Show_Client_Data -->|unnamed| Show_tab_Customer_offers
    n_06_060_Show_client_s_password -->|unnamed| diagram_8ADA19CD_B2D4_4635_8609_36DD709C1EB8
    Show_client_data_Show_client_data -->|unnamed| MOD_06_030_Show_Client_Data
    MOD_06_030_Show_Client_Data -->|unnamed| MOD_Show_Tab_List_of_communication
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_Show_tab_User_accounts
    MOD_06_030_Show_Client_Data -->|unnamed| n_07_120_Show_communication_ticket_list_v2
    MOD_06_030_Show_Client_Data -->|unnamed| Get_original_number_instead_of_alias_for_Unique_Id_document
    MOD_06_030_Show_Client_Data -->|unnamed| Is_Marketing_Offer_to_be_Responded
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_Show_tab_List_of_contracts
    Is_Marketing_Offer_to_be_Responded -->|unnamed| ADD_Get_active_Customer_offers
    User --- MOD_06_030_Show_Client_Data
    User --- n_06_032_Submit_response_on_customer_offer
    User --- Show_tab_Customer_offers
```
