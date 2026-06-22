# Browse refunds

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds
- **Diagram ID**: 161004
- **Elements**: 14
- **Connectors**: 3

```mermaid
graph TD
    Show_contract_refund_items["Show contract refund items"]
    n_05_512_Show_contract_refund_items["05.512 Show contract refund items"]
    n_05_511_Browse_refund_items["05.511 Browse refund items"]
    Found_refunds["Found refunds"]
    Reset["Reset"]
    Search["Search"]
    Refunds_search_buttons["Refunds search buttons"]
    Refund_created_to["Refund created to"]
    Refund_created_from["Refund created from"]
    Status_of_refunds["Status of refunds"]
    Refund_channel_on_contract_filled["Refund channel on contract filled"]
    Contract_number["Contract number"]
    Search_criteria["Search criteria"]
    Browse_refund_items["Browse refund items"]
    Browse_refund_items -->|unnamed| n_05_511_Browse_refund_items
    Found_refunds -->|unnamed| n_05_512_Show_contract_refund_items
    Found_refunds -->|unnamed| Show_contract_refund_items
```
