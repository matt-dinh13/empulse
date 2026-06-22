# Ublock Confirmation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface
- **Diagram ID**: 140756
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    Printable_characters_up_to_255["Printable characters up to 255"]
    Mandatory_for_VN_country["Mandatory for VN country"]
    ADD_Note["{ADD}Note"]
    Charge_fee_for_Card_unblockage_customer_request["Charge fee for Card unblockage - customer request?"]
    Cancel["Cancel"]
    OK["OK"]
    Do_you_really_want_to_unblock_card_with_blocking_reason_Cust["Do you really want to unblock card with blocking reason Customer request?"]
    Ublock_Confirmation["Ublock Confirmation"]
    n_12_505_Unblock_card["12.505 Unblock card"]
    Ublock_Confirmation -->|unnamed| n_12_505_Unblock_card
    ADD_Note -->|unnamed| Mandatory_for_VN_country
    ADD_Note -->|unnamed| Printable_characters_up_to_255
```
