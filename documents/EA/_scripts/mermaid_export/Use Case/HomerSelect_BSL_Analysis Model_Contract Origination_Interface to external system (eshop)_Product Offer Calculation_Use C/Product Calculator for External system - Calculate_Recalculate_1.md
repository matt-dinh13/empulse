# Product Calculator for External system - Calculate/Recalculate

```mermaid
graph TD
    Default_document_container["Default document container"]
    MOD_Save_Product_Offer_Request["{MOD}Save Product Offer Request"]
    CalculateCustomerOffer_CustomerOfferWS_CalculateCustomerOffe["CalculateCustomerOffer : CustomerOfferWS - CalculateCustomerOffer"]
    MOD_CalculateCustomerOfferRequest_Check_Marketing_Offer["{MOD}CalculateCustomerOfferRequest - Check Marketing Offer"]
    RecalculateCustomerOfferRequest_Insurance_Eligibility["RecalculateCustomerOfferRequest - Insurance Eligibility"]
    MOD_Offer_recalculation["{MOD}Offer recalculation"]
    Customer_Offer_Recalculation_preferences["Customer Offer Recalculation - preferences"]
    MOD_RecalculateCustomerOfferRequest_validation_rules["{MOD}RecalculateCustomerOfferRequest - validation rules"]
    RecalculateCustomerOffer_CustomerOfferWS_RecalculateCustomer["RecalculateCustomerOffer : CustomerOfferWS - RecalculateCustomerOffer"]
    Prepare_CustomerOffer["Prepare CustomerOffer"]
    MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    Preliminary_installment_schedule["Preliminary installment schedule"]
    MOD_Calculate_product_offer["{MOD}Calculate product offer"]
    Save_Product_Offer_Response["Save Product Offer Response"]
    MOD_Customer_Offer_Calculation_preferences["{MOD}Customer Offer Calculation - preferences"]
    CalculateCustomerOfferRequest_validation_rules["CalculateCustomerOfferRequest - validation rules"]
    External_system["External system"]
    n_02_820_Calculate_Product_Offers_for_External_system["02.820 Calculate Product Offers for External system"]
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| RecalculateCustomerOffer_CustomerOfferWS_RecalculateCustomer
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| Prepare_CustomerOffer
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| Customer_Offer_Recalculation_preferences
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| Preliminary_installment_schedule
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| MOD_RecalculateCustomerOfferRequest_validation_rules
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| MOD_Offer_recalculation
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| Save_Product_Offer_Response
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| MOD_CalculateCustomerOfferRequest_Check_Marketing_Offer
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| CalculateCustomerOffer_CustomerOfferWS_CalculateCustomerOffe
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| Prepare_CustomerOffer
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| CalculateCustomerOfferRequest_validation_rules
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| MOD_Save_Product_Offer_Request
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| Preliminary_installment_schedule
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| MOD_Calculate_product_offer
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| MOD_Customer_Offer_Calculation_preferences
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| Save_Product_Offer_Response
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| MOD_Save_Product_Offer_Request
    External_system -->|unnamed| MOD_02_830_Recalculate_Product_Offers_for_External_system
    External_system -->|unnamed| n_02_820_Calculate_Product_Offers_for_External_system
    MOD_RecalculateCustomerOfferRequest_validation_rules -->|unnamed| RecalculateCustomerOfferRequest_Insurance_Eligibility
    Prepare_CustomerOffer -->|unnamed| Default_document_container
```
