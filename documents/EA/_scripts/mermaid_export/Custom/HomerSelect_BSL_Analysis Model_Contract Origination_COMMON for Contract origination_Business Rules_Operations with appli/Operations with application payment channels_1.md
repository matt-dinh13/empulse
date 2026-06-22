# Operations with application payment channels

```mermaid
graph TD
    Get_salesroom_bank_account_for_payments["Get salesroom bank account for payments"]
    Get_external_payment_card_data["Get external payment card data"]
    Select_salesroom_for_application_payment_channel["Select salesroom for application payment channel"]
    Mapping_of_selected_reward_payment_method_to_CEL_reward_paym["Mapping of selected reward payment method to CEL reward payment channel attributes"]
    Get_application_payment_channel_by_its_purpose["Get application payment channel by its purpose"]
    Delete_application_payment_channel_by_its_purpose["Delete application payment channel by its purpose"]
    Validate_application_payment_channel["Validate application payment channel"]
    Update_application_payment_channel["Update application payment channel"]
    Get_application_payment_channel["Get application payment channel"]
    Create_application_payment_channel["Create application payment channel"]
    Save_application_payment_channel_data["Save application payment channel data"]
    Save_application_payment_channel_data -->|unnamed| Create_application_payment_channel
    Save_application_payment_channel_data -->|unnamed| Update_application_payment_channel
    Delete_application_payment_channel_by_its_purpose -->|unnamed| Get_application_payment_channel_by_its_purpose
    Save_application_payment_channel_data -->|unnamed| Get_application_payment_channel_by_its_purpose
    Update_application_payment_channel -->|{ADD LOR-7391/}| Select_salesroom_for_application_payment_channel
    Create_application_payment_channel -->|{ADD LOR-7391/}| Select_salesroom_for_application_payment_channel
```
