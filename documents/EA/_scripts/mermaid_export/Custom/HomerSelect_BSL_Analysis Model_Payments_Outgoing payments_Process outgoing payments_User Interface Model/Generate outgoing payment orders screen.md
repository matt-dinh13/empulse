# Generate outgoing payment orders screen

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/User Interface Model
- **Diagram ID**: 116270
- **Elements**: 11
- **Connectors**: 1

```mermaid
graph TD
    ADD_Source_account_will_be_determinated_automatically_for_it["{ADD}Source account will be determinated automatically for items with joint-lending. "]
    MOD_05_110_Generate_payment_orders["{MOD}05.110 Generate payment orders"]
    Payments["Payments"]
    Payments["Payments"]
    Generate["Generate"]
    Buttons["Buttons"]
    Payments_sum["Payments sum"]
    Payments_in_selection["Payments in selection"]
    Outgoing_bank_account["Outgoing bank account"]
    Generate_outgoing_payment_orders["Generate outgoing payment orders"]
    Generate_outgoing_payment_orders["Generate outgoing payment orders"]
    Generate_outgoing_payment_orders -->|unnamed| MOD_05_110_Generate_payment_orders
```
