# Access Rights

```mermaid
graph TD
    ADD_06_030_Show_client_data_show_client_address_data["{ADD}06.030 Show client data (show client address data)"]
    ADD_06_030_Show_client_data_display_Parent_name["{ADD}06.030 Show client data (display Parent name)"]
    ADD_06_030_Show_client_data_display_Gender["{ADD}06.030 Show client data (display Gender)"]
    ADD_06_030_Show_client_data_display_Date_of_birth["{ADD}06.030 Show client data (display Date of birth)"]
    n_06_032_Submit_response_on_customer_offer["06.032 Submit response on customer offer"]
    n_06_032_Submit_response_on_customer_offer["06.032 Submit response on customer offer"]
    n_06_030_Show_client_data_hidden_contracts["06.030 Show client data (hidden contracts)"]
    n_06_030_Show_client_s_phone_Client_detail["06.030 Show client´s phone (Client detail)"]
    n_06_060_Show_client_s_password["06.060 Show client's password"]
    n_06_060_Show_client_s_password["06.060 Show client's password"]
    n_06_030_Show_client_data_CB_results["06.030 Show client data (CB results)"]
    n_06_030_Show_client_data["06.030 Show client data"]
    n_06_030_Show_client_data_Manage_in_CIF["06.030 Show client data (Manage in CIF)"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_data_hidden_contracts
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_display_Gender
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_data_CB_results
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_display_Parent_name
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_s_phone_Client_detail
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_show_client_address_data
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_display_Date_of_birth
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_data_Manage_in_CIF
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_data
    n_06_032_Submit_response_on_customer_offer -->|unnamed| n_06_032_Submit_response_on_customer_offer
    n_06_060_Show_client_s_password -->|unnamed| n_06_060_Show_client_s_password
```
