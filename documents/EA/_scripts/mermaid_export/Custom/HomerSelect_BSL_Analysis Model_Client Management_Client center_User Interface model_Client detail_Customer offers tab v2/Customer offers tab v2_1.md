# Customer offers tab v2

```mermaid
graph TD
    MOD_Offer_information_area["{MOD}Offer information area"]
    ADD_Guideline["{ADD}Guideline"]
    ADD_CRM_Business_description["{ADD}CRM Business description"]
    ADD_CRM_Business_hint["{ADD}CRM Business hint"]
    ADD_Products["{ADD}Products"]
    X_sell_offer_recalculation["X-sell offer recalculation"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    Update_offer["Update offer"]
    MOD_Tab_information_area["{MOD}Tab information area"]
    MOD_06_032_Submit_response_on_customer_offer["{MOD}06.032 Submit response on customer offer"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    Client_detail_screen["Client detail screen"]
    Last_response["Last response"]
    Comment["Comment"]
    Response["Response"]
    Submit_response["Submit response"]
    Calculate_offer["Calculate offer"]
    Initial_Transaction_Type["Initial Transaction Type"]
    Product_Type["Product Type"]
    Maximal_Monthly_Payment["Maximal Monthly Payment"]
    Maximal_Credit_Amount["Maximal Credit Amount"]
    Valid_To["Valid To"]
    Valid_From["Valid From"]
    Offer_Name["Offer Name"]
    Customer_Offer_detail["Customer Offer detail"]
    ADD_Customer_offers_tab_v2["{ADD}Customer offers tab v2"]
    ADD_Customer_offers_tab_v2 -->|unnamed| Client_detail_screen
    ADD_Customer_offers_tab_v2 -->|unnamed| MOD_06_030_Show_Client_Data
    Calculate_offer -->|unnamed| n_01_010_Choose_product_offer
    Submit_response -->|unnamed| MOD_06_032_Submit_response_on_customer_offer
    Update_offer -->|unnamed| n_01_143_Recalculate_client_s_x_sell_offer
    Update_offer -->|unnamed| X_sell_offer_recalculation
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| n_01_010_Choose_product_offer
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| n_01_010_Choose_product_offer
```
