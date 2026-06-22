# Other Card operations - Use case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Use case
- **Diagram ID**: 161441
- **Elements**: 20
- **Connectors**: 23

```mermaid
graph LR
    Get_attributes_for_checkboxes_on_Card_replacement_form["Get attributes for checkboxes on Card replacement form"]
    Getting_client_s_delivery_address["Getting client's delivery address"]
    Getting_POS_delivery_address["Getting POS delivery address"]
    Get_Card_delivery_options["Get Card delivery options"]
    CIF[/"CIF"/]
    CardModificationWS_CardModificationWS_UpdateCardDeliveryType["CardModificationWS : CardModificationWS.UpdateCardDeliveryType"]
    CardInfoWS_CardInfoWS_GetCard["CardInfoWS : CardInfoWS.GetCard"]
    User_interface_Change_delivery_address["User interface : Change delivery address"]
    User_interface_Card_detail_User_interface["User interface : Card detail - User interface"]
    n_12_510_Change_delivery_address(("12.510 Change delivery address"))
    CardTypeWS_CardTypeWS_GetEcommerceStatusesForCardtype["CardTypeWS : CardTypeWS.GetEcommerceStatusesForCardtype"]
    CardModificationWS_CardModificationWS_ChangeEcommerceStatus["CardModificationWS : CardModificationWS.ChangeEcommerceStatus"]
    User_interface_E_commerce_security_level_change["User interface : E-commerce security level change"]
    Get_client_current_contacts_from_CIF["Get client current contacts from CIF"]
    n_12_542_Change_e_commerce_security_level(("12.542 Change e-commerce security level"))
    CaBus_CMS[/"CaBus-CMS"/]
    n_12_509_Change_emboss_name(("12.509 Change emboss name"))
    User_interface_Card_replacement["User interface : Card replacement"]
    User[/"User"/]
    n_12_503_Replace_card(("12.503 Replace card"))
    n_12_542_Change_e_commerce_security_level -->|unnamed| Get_client_current_contacts_from_CIF
    n_12_510_Change_delivery_address -->|unnamed| Getting_client_s_delivery_address
    n_12_510_Change_delivery_address -->|unnamed| Getting_POS_delivery_address
    n_12_510_Change_delivery_address -->|unnamed| Get_Card_delivery_options
    n_12_510_Change_delivery_address -->|unnamed| User_interface_Change_delivery_address
    n_12_510_Change_delivery_address -->|unnamed| User_interface_Card_detail_User_interface
    CardModificationWS_CardModificationWS_UpdateCardDeliveryType -->|unnamed| n_12_510_Change_delivery_address
    CardInfoWS_CardInfoWS_GetCard -->|unnamed| n_12_510_Change_delivery_address
    n_12_503_Replace_card -->|unnamed| Get_attributes_for_checkboxes_on_Card_replacement_form
    n_12_510_Change_delivery_address -->|unnamed| Get_client_current_contacts_from_CIF
    User_interface_Card_replacement -->|unnamed| n_12_503_Replace_card
    CardTypeWS_CardTypeWS_GetEcommerceStatusesForCardtype -->|unnamed| n_12_542_Change_e_commerce_security_level
    CardModificationWS_CardModificationWS_ChangeEcommerceStatus -->|unnamed| n_12_542_Change_e_commerce_security_level
    User_interface_E_commerce_security_level_change -->|unnamed| n_12_542_Change_e_commerce_security_level
    n_12_503_Replace_card --- CaBus_CMS
    n_12_509_Change_emboss_name --- CaBus_CMS
    CaBus_CMS --> n_12_510_Change_delivery_address
    CaBus_CMS --> n_12_542_Change_e_commerce_security_level
    User --- n_12_509_Change_emboss_name
    User --> n_12_542_Change_e_commerce_security_level
    User --- n_12_503_Replace_card
    User --> n_12_510_Change_delivery_address
    CIF --> n_12_510_Change_delivery_address
```
