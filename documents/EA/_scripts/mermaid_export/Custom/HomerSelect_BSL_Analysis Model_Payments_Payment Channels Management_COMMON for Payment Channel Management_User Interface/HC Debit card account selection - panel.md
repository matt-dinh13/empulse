# HC Debit card account selection - panel

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model
- **Diagram ID**: 146423
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Selection_of_Product_Type_for_product_calculation["Selection of Product Type for product calculation"]
    Choose_product_offer["Choose product offer"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    Create_new_debit_card["Create new debit card"]
    MOD_01_671_Get_HC_debit_card_account_data["{MOD}01.671 Get HC debit card account data"]
    Use_existing_account["Use existing account"]
    HC_Debit_card_account_selection_panel["HC Debit card account selection panel"]
    Use_existing_account -->|unnamed| MOD_01_671_Get_HC_debit_card_account_data
    Create_new_debit_card -->|unnamed| n_01_010_Choose_product_offer
    Create_new_debit_card -->|unnamed| Choose_product_offer
```
