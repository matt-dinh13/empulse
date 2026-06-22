# Card account selection on Application detail

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)
- **Diagram ID**: 158306
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    ADD_01_136_Verify_card_on_Application_detail["{ADD} 01.136 Verify card on Application detail"]
    ADD_Unique_for_Beneficiary["{ADD} Unique for Beneficiary
"]
    Cardholder_name["Cardholder name"]
    ADD_Cardholder_name["{ADD}Cardholder name"]
    Verify_card_data["Verify card data"]
    PAN_number["PAN number"]
    Card_issuer_name["Card issuer name"]
    Truncated_PAN["Truncated PAN"]
    ADD_Disbursement_to_card["{ADD}Disbursement to card"]
    ADD_Cardholder_name -->|unnamed| Cardholder_name
    Cardholder_name -->|unnamed| ADD_Unique_for_Beneficiary
    Verify_card_data -->|unnamed| ADD_01_136_Verify_card_on_Application_detail
```
