# Access Rights

```mermaid
graph TD
    n_09_240_Show_salesroom_risk_data["09.240 Show salesroom (risk data)"]
    n_09_240_Show_salesroom_Commodity_tab["09.240 Show salesroom - Commodity tab"]
    n_09_240_Show_salesroom_Credit_product_tab["09.240 Show salesroom - Credit product tab"]
    n_09_240_Show_salesroom_Extended_properties_tab["09.240 Show salesroom - Extended properties tab"]
    n_09_240_Show_salesroom_Sales_agent_tab["09.240 Show salesroom - Sales agent tab"]
    n_09_240_Show_salesroom_Address_tab["09.240 Show salesroom - Address tab"]
    n_09_240_Show_salesrooms_Bank_account_tab["09.240 Show salesrooms - Bank account tab"]
    n_09_240_Show_salesroom_Contact_person_tab["09.240 Show salesroom - Contact person tab"]
    n_09_240_Show_salesroom_Contact_information_tab["09.240 Show salesroom - Contact information tab"]
    n_09_240_Show_salesroom_Notice_tab["09.240 Show salesroom - Notice tab"]
    n_09_220_Create_salesroom_risk_data["09.220 Create salesroom (risk data)"]
    n_09_220_Create_salesroom_basic_data["09.220 Create salesroom (basic data)"]
    Salesroom_Risk_data["Salesroom Risk data"]
    n_09_230_Update_salesroom_risk_data["09.230 Update salesroom (risk data)"]
    n_09_230_Update_salesroom_basic_data["09.230 Update salesroom (basic data)"]
    n_09_350_Move_salesroom["09.350 Move salesroom"]
    n_09_260_Change_salesroom_status_manually["09.260 Change salesroom status manually"]
    n_09_250_Find_salesroom["09.250 Find salesroom"]
    n_09_240_Show_salesroom["09.240 Show salesroom"]
    n_09_230_Update_salesroom["09.230 Update salesroom"]
    n_09_220_Create_salesroom["09.220 Create salesroom"]
    n_09_215_Set_payment_status_for_Salesroom_manually["09.215 Set payment status for Salesroom manually"]
    n_09_350_Move_salesroom["09.350 Move salesroom"]
    n_09_260_Change_salesroom_status_manually["09.260 Change salesroom status manually"]
    n_09_250_Find_salesroom["09.250 Find salesroom"]
    n_09_240_Show_salesroom["09.240 Show salesroom"]
    n_09_230_Update_salesroom["09.230 Update salesroom"]
    n_09_220_Create_salesroom["09.220 Create salesroom"]
    n_09_215_Set_payment_status_for_Salesroom_manually["09.215 Set payment status for Salesroom manually"]
    ADD_09_240_Show_salesroom_Sales_package_tab["{ADD}09.240 Show salesroom - Sales package tab"]
    n_09_220_Create_salesroom -->|unnamed| n_09_220_Create_salesroom_risk_data
    n_09_220_Create_salesroom -->|unnamed| n_09_220_Create_salesroom_basic_data
    n_09_220_Create_salesroom -->|unnamed| n_09_220_Create_salesroom
    n_09_220_Create_salesroom -->|unnamed| Salesroom_Risk_data
    n_09_350_Move_salesroom -->|unnamed| n_09_350_Move_salesroom
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Contact_information_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Contact_person_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Sales_agent_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Commodity_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Notice_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Address_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Extended_properties_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesroom_Credit_product_tab
    n_09_240_Show_salesroom -->|unnamed| n_09_240_Show_salesrooms_Bank_account_tab
    n_09_230_Update_salesroom -->|unnamed| Salesroom_Risk_data
    n_09_230_Update_salesroom -->|unnamed| n_09_230_Update_salesroom
    n_09_230_Update_salesroom -->|unnamed| n_09_230_Update_salesroom_risk_data
    n_09_230_Update_salesroom -->|unnamed| n_09_230_Update_salesroom_basic_data
    n_09_260_Change_salesroom_status_manually -->|unnamed| n_09_260_Change_salesroom_status_manually
    n_09_215_Set_payment_status_for_Salesroom_manually -->|unnamed| n_09_215_Set_payment_status_for_Salesroom_manually
    n_09_250_Find_salesroom -->|unnamed| n_09_250_Find_salesroom
    n_09_240_Show_salesroom -->|unnamed| ADD_09_240_Show_salesroom_Sales_package_tab
```
