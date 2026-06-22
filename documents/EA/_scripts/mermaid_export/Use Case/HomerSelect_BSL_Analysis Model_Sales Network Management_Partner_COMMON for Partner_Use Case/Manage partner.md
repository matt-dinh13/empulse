# Manage partner

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Use Case
- **Diagram ID**: 139391
- **Elements**: 23
- **Connectors**: 15

```mermaid
graph LR
    Algorithm_Set_payment_status_for_Partner_to_Allowed["Algorithm: Set payment status for Partner to Allowed"]
    Manage_Partner_Change_Partner_status["Manage Partner : Change Partner status"]
    Create_Update_Partner_Create_Update_partner["Create/Update Partner : Create/Update partner"]
    Manage_Notices_Manage_Notices["Manage Notices : Manage Notices"]
    Manage_Taxes_Manage_Taxes["Manage Taxes : Manage Taxes"]
    n_09_210_Set_payment_status_for_Partner_manually(("09.210 Set payment status for Partner manually"))
    n_09_040_Change_status_of_partner_manually(("09.040 Change status of partner manually"))
    Find_Partner_Find_Partner["Find Partner : Find Partner"]
    Manage_Commissions_Manage_commissions["Manage Commissions : Manage commissions"]
    Manage_Contact_Information_Manage_contact_information["Manage Contact Information : Manage contact information"]
    Partner_settings["Partner settings"]
    Manage_Addresses_Manage_addresses["Manage Addresses : Manage addresses"]
    Manage_Bank_Accounts_Manage_Bank_Accounts["Manage Bank Accounts : Manage Bank Accounts"]
    Manage_contact_persons_Manage_contact_persons["Manage contact persons : Manage contact persons"]
    Manage_Salesroom_Manage_salesroom["Manage Salesroom : Manage salesroom"]
    Generating_partner_s_code["Generating partner’s code"]
    n_09_050_Find_partner(("09.050 Find partner"))
    n_09_030_Show_partner(("09.030 Show partner"))
    DEL_09_020_Update_partner(("{DEL}09.020 Update partner"))
    User[/"User"/]
    DEL_09_010_Create_partner(("{DEL}09.010 Create partner"))
    Algorithm_Set_payment_status_for_Partner_to_Disabled["Algorithm: Set payment status for Partner to Disabled"]
    Algorithm_Set_payment_status_for_Salesroom_to_Disabled["Algorithm: Set payment status for Salesroom to Disabled"]
    n_09_040_Change_status_of_partner_manually -->|unnamed| Manage_Partner_Change_Partner_status
    DEL_09_020_Update_partner -->|unnamed| Create_Update_Partner_Create_Update_partner
    DEL_09_010_Create_partner -->|unnamed| Create_Update_Partner_Create_Update_partner
    n_09_210_Set_payment_status_for_Partner_manually -->|unnamed| Algorithm_Set_payment_status_for_Partner_to_Allowed
    Find_Partner_Find_Partner -->|unnamed| n_09_050_Find_partner
    n_09_210_Set_payment_status_for_Partner_manually -->|unnamed| Algorithm_Set_payment_status_for_Salesroom_to_Disabled
    Generating_partner_s_code -->|unnamed| DEL_09_010_Create_partner
    n_09_210_Set_payment_status_for_Partner_manually -->|unnamed| Algorithm_Set_payment_status_for_Partner_to_Disabled
    n_09_030_Show_partner -.->|include| n_09_050_Find_partner
    User --> n_09_210_Set_payment_status_for_Partner_manually
    User --> n_09_030_Show_partner
    User --- n_09_050_Find_partner
    User --- DEL_09_020_Update_partner
    User --> n_09_040_Change_status_of_partner_manually
    User --> DEL_09_010_Create_partner
```
