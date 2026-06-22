# PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC
- **Diagram ID**: 164649
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    MOD_OfferDto["{MOD}OfferDto"]
    MOD_Structured_Parameter_Types["{MOD}Structured Parameter Types"]
    MOD_Standard_STND["{MOD}Standard (STND)"]
    MOD_Offer_recalculation["{MOD}Offer recalculation"]
    MOD_Calculate_product_offer["{MOD}Calculate product offer"]
    REQ_2_A_new_output_attribute_remaining_cash_payment_from_pro["REQ#2 A new output attribute remaining cash payment from product calculator"]
    REQ_1_A_new_input_attribute_trade_in_amount_for_product_calc["REQ#1 A new input attribute trade-in amount for product calculator"]
    MOD_OfferDto -->|unnamed| REQ_2_A_new_output_attribute_remaining_cash_payment_from_pro
    MOD_Structured_Parameter_Types -->|unnamed| REQ_2_A_new_output_attribute_remaining_cash_payment_from_pro
    MOD_Standard_STND -->|unnamed| REQ_2_A_new_output_attribute_remaining_cash_payment_from_pro
    MOD_Offer_recalculation -->|unnamed| REQ_1_A_new_input_attribute_trade_in_amount_for_product_calc
    MOD_Calculate_product_offer -->|unnamed| REQ_1_A_new_input_attribute_trade_in_amount_for_product_calc
```
