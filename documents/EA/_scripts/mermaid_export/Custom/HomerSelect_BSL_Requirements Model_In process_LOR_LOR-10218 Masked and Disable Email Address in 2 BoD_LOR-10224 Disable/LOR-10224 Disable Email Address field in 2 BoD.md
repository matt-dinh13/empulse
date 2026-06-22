# LOR-10224 Disable Email Address field in 2 BoD

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10218 Masked and Disable Email Address in 2 BoD/LOR-10224 Disable Email Address field in 2 BoD
- **Diagram ID**: 157382
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    LOR_10218_Masked_and_Disable_Email_Address_in_2_BoD["LOR-10218 Masked and Disable Email Address in 2 BoD"]
    LOR_10224_Disable_Email_Address_field_in_2_BoD["LOR-10224 Disable Email Address field in 2 BoD"]
    Contact_to_client_PH["Contact to client PH"]
    MOD_Display_email_on_2Bod_CLX_AF["{MOD}Display email on 2Bod CLX AF"]
    MOD_01_078_Display_unmasked_client_e_mail_on_CLX["{MOD}01.078 Display unmasked client e-mail on CLX"]
    LOR_10224_Disable_Email_Address_field_in_2_BoD -->|unnamed| LOR_10218_Masked_and_Disable_Email_Address_in_2_BoD
    MOD_01_078_Display_unmasked_client_e_mail_on_CLX -->|unnamed| MOD_Display_email_on_2Bod_CLX_AF
```
