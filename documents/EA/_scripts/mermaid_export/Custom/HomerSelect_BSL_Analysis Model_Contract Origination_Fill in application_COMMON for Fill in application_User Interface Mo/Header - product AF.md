# Header - product AF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF
- **Diagram ID**: 148135
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    Joint_lending_partner["Joint lending partner"]
    Credit_information_for_revolving_loan["Credit information (for revolving loan)"]
    Show_service_information["Show service information"]
    Sent_to_approval_by["Sent to approval by"]
    Send_to_approval["Send to approval"]
    MOD_Credit_information_for_close_end_loan["(MOD)Credit information (for close end loan)"]
    POS_and_Partner_address["POS and Partner address"]
    POS_and_Partner_name["POS and Partner name"]
    Header_product_AF["Header - product AF"]
    Credit_information_for_revolving_loan -->|unnamed| Show_service_information
    MOD_Credit_information_for_close_end_loan -->|unnamed| Show_service_information
```
