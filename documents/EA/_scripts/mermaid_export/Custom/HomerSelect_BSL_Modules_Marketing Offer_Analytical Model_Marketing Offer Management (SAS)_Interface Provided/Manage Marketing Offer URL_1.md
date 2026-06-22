# Manage Marketing Offer URL

```mermaid
graph TD
    DEL_02_906_Marketing_Offers_Management_Update_Marketing_Offe["{DEL}02.906 Marketing Offers Management - Update Marketing Offer"]
    DEL_Marketing_Offers["{DEL}Marketing Offers"]
    DEL_02_906_Marketing_Offers_Management_Send_response["{DEL}02.906 Marketing Offers Management - Send response"]
    DEL_02_906_Marketing_Offers_Management_Edit_Person_Data["{DEL}02.906 Marketing Offers Management - Edit Person Data"]
    DEL_02_906_Marketing_Offers_Management_Display_client_info_d["{DEL}02.906 Marketing Offers Management - Display client info details "]
    DEL_02_906_Marketing_Offers_Management["{DEL}02.906 Marketing Offers Management"]
    DEL_02_906_Marketing_Offers_Management["{DEL}02.906 Marketing Offers Management"]
    DEL_Manage_Marketing_Offer_URL["{DEL}Manage Marketing Offer URL"]
    DEL_Manage_Marketing_Offer_URL -->|unnamed| DEL_02_906_Marketing_Offers_Management
    DEL_Manage_Marketing_Offer_URL -->|unnamed| DEL_Marketing_Offers
    DEL_Marketing_Offers -->|unnamed| DEL_02_906_Marketing_Offers_Management
    DEL_02_906_Marketing_Offers_Management -->|unnamed| DEL_02_906_Marketing_Offers_Management_Update_Marketing_Offe
    DEL_02_906_Marketing_Offers_Management -->|unnamed| DEL_02_906_Marketing_Offers_Management_Edit_Person_Data
    DEL_02_906_Marketing_Offers_Management -->|unnamed| DEL_02_906_Marketing_Offers_Management_Send_response
    DEL_02_906_Marketing_Offers_Management -->|unnamed| DEL_02_906_Marketing_Offers_Management_Display_client_info_d
    DEL_02_906_Marketing_Offers_Management -->|unnamed| DEL_02_906_Marketing_Offers_Management
```
