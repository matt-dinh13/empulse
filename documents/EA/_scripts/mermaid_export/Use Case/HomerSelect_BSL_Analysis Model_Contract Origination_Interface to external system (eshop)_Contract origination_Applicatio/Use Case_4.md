# Use Case

```mermaid
graph TD
    Check_that_user_is_assigned_to_the_same_salesroom["Check that user is assigned to the same salesroom"]
    External_system["External system"]
    MOD_01_170_Update_offer_externally["{MOD}01.170 Update offer externally"]
    n_01_168_Refuse_offers_externally["01.168 Refuse offers externally"]
    n_01_167_Accept_offer_externally["01.167 Accept offer externally"]
    DEL_01_166_Get_application_offers["{DEL}01.166 Get application offers"]
    MOD_01_170_Update_offer_externally -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    n_01_168_Refuse_offers_externally -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    n_01_167_Accept_offer_externally -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    DEL_01_166_Get_application_offers -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    External_system -->|unnamed| MOD_01_170_Update_offer_externally
    External_system -->|unnamed| DEL_01_166_Get_application_offers
    External_system -->|unnamed| n_01_167_Accept_offer_externally
    External_system -->|unnamed| n_01_168_Refuse_offers_externally
```
