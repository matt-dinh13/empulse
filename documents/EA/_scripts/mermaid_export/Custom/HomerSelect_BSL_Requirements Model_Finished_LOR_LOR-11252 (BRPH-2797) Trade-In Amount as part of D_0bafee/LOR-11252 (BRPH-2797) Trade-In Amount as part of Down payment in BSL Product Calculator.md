# LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator
- **Diagram ID**: 164659
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    Offer_Financial_Parameter["Offer Financial Parameter"]
    MOD_Customer_Offer_Calculation_preferences["{MOD}Customer Offer Calculation - preferences"]
    Customer_Offer_Recalculation_preferences["Customer Offer Recalculation - preferences"]
    v2_Financial_Parameters_v2["v2 : Financial Parameters v2"]
    CustomerOfferRestV2_CustomerOfferRestV2_GetCustomerOffer["CustomerOfferRestV2 : CustomerOfferRestV2 - GetCustomerOffer"]
    REQ_4_Put_only_trade_in_amount_into_input_of_product_calcula["REQ#4 Put only trade-in amount into input of product calculation"]
    REQ_3_Update_BSL_REST_API_Financial_parameters_Endpoint_V2_G["REQ#3 Update BSL REST API Financial parameters Endpoint V2 GET /v2.0/financial-parameters/detail to be able to return trade-in amount and Remaining cash payment in its response body"]
    REQ_2_Update_BSL_REST_API_Customer_Offer_GET_v2_0_customerOf["REQ#2 Update BSL REST API Customer Offer GET /v2.0/customerOffers to be able to return trade-in amount and Remaining cash payment in its response body"]
    REQ_Add_two_trade_in_amount_and_Remaining_cash_payment_colum["REQ# Add two trade-in amount and Remaining cash payment columns into BSL_OFFER_FIN_PARAMETERS"]
    REQ_1_Update_BSL_REST_API_Customer_Offer_POST_v2_0_customerO["REQ#1 Update BSL REST API Customer Offer POST /v2.0/customerOffers/calculate and /v2.0/customerOffers/recalculate to be able to receive and save trade-in amount in its request body"]
    Offer_Financial_Parameter -->|unnamed| REQ_Add_two_trade_in_amount_and_Remaining_cash_payment_colum
    MOD_Customer_Offer_Calculation_preferences -->|unnamed| REQ_4_Put_only_trade_in_amount_into_input_of_product_calcula
    Customer_Offer_Recalculation_preferences -->|unnamed| REQ_4_Put_only_trade_in_amount_into_input_of_product_calcula
    v2_Financial_Parameters_v2 -->|unnamed| REQ_3_Update_BSL_REST_API_Financial_parameters_Endpoint_V2_G
    CustomerOfferRestV2_CustomerOfferRestV2_GetCustomerOffer -->|unnamed| REQ_2_Update_BSL_REST_API_Customer_Offer_GET_v2_0_customerOf
```
