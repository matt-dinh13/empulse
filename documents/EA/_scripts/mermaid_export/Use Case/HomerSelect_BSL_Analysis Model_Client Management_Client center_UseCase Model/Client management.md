# Client management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/UseCase Model
- **Diagram ID**: 157656
- **Elements**: 22
- **Connectors**: 25

```mermaid
graph LR
    CLC[/"CLC"/]
    MOD_Select_Client_center_for_user["{MOD}Select Client center for user"]
    DEL_Check_Customer_offers_availability_on_Salesroom["{DEL}Check Customer offers availability on Salesroom"]
    Customer_offers_tab_v2_Customer_offers_tab_v2["Customer offers tab v2 : Customer offers tab v2"]
    Safe_guaranty_Safe_guaranty["Safe guaranty : Safe guaranty"]
    ADD_Get_active_Customer_offers["{ADD}Get active Customer offers"]
    MOD_06_032_Submit_response_on_customer_offer(("{MOD}06.032 Submit response on customer offer"))
    DEL_Get_alias_number_instead_of_original_for_Unique_Id_docum["{DEL}Get alias number instead of original for Unique Id document"]
    DEL_Get_original_number_instead_of_alias_for_Unique_Id_docum["{DEL}Get original number instead of alias for Unique Id document"]
    n_06_041_Show_clients_safe_guaranty(("06.041 Show clients safe guaranty"))
    BSL_to_CIF_mapping["BSL-to-CIF mapping"]
    diagram_8ADA19CD_B2D4_4635_8609_36DD709C1EB8["$diagram://{8ADA19CD-B2D4-4635-8609-36DD709C1EB8}"]
    n_06_060_Show_client_s_password(("06.060 Show client's password"))
    User_Interface_Model_Contract_detail["User Interface Model : Contract detail"]
    BSL["BSL"]
    CIF[/"CIF"/]
    Show_client_data_Show_client_data["Show client data : Show client data"]
    Search_clients_Search_Clients["Search clients : Search Clients"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    MOD_06_040_Search_Clients(("{MOD}06.040 Search Clients"))
    MOD_06_030_Show_Client_Data(("{MOD}06.030 Show Client Data"))
    User[/"User"/]
    MOD_06_040_Search_Clients -->|unnamed| BSL_to_CIF_mapping
    MOD_06_040_Search_Clients --- CLC
    MOD_06_030_Show_Client_Data -->|unnamed| MOD_Select_Client_center_for_user
    MOD_06_040_Search_Clients -->|unnamed| MOD_Select_Client_center_for_user
    ADD_Get_active_Customer_offers -->|unnamed| DEL_Check_Customer_offers_availability_on_Salesroom
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_Get_active_Customer_offers
    Customer_offers_tab_v2_Customer_offers_tab_v2 -->|unnamed| MOD_06_032_Submit_response_on_customer_offer
    MOD_06_040_Search_Clients -->|unnamed| DEL_Get_alias_number_instead_of_original_for_Unique_Id_docum
    MOD_06_030_Show_Client_Data -->|unnamed| DEL_Get_original_number_instead_of_alias_for_Unique_Id_docum
    MOD_06_030_Show_Client_Data --- CLC
    Safe_guaranty_Safe_guaranty -->|unnamed| n_06_041_Show_clients_safe_guaranty
    MOD_06_030_Show_Client_Data -->|unnamed| BSL_to_CIF_mapping
    n_06_060_Show_client_s_password -->|unnamed| diagram_8ADA19CD_B2D4_4635_8609_36DD709C1EB8
    MOD_06_040_Search_Clients --> CIF
    MOD_06_030_Show_Client_Data --> CIF
    User_Interface_Model_Contract_detail -->|unnamed| MOD_01_210_Show_contract_detail
    Search_clients_Search_Clients -->|unnamed| MOD_06_040_Search_Clients
    Show_client_data_Show_client_data -->|unnamed| MOD_06_030_Show_Client_Data
    MOD_01_210_Show_contract_detail -->|unnamed| DEL_Get_original_number_instead_of_alias_for_Unique_Id_docum
    User --- MOD_01_210_Show_contract_detail
    User --> MOD_06_030_Show_Client_Data
    User --> n_06_041_Show_clients_safe_guaranty
    User --> MOD_06_032_Submit_response_on_customer_offer
    User --> n_06_060_Show_client_s_password
    User --> MOD_06_040_Search_Clients
```
