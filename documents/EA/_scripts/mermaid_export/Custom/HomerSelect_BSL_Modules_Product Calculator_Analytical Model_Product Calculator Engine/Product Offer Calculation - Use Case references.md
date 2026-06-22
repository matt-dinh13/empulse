# Product Offer Calculation - Use Case references

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine
- **Diagram ID**: 162642
- **Elements**: 19
- **Connectors**: 7

```mermaid
graph TD
    UseCase_Model_Offer_detail["UseCase Model : Offer detail"]
    n_01_077_Change_product_offer_parameters["01.077 Change product offer parameters"]
    UseCase_Model_Offer_detail["UseCase Model : Offer detail"]
    n_01_156_Adjust_credit_limit["01.156 Adjust credit limit"]
    Use_Case_Product_Calculator_for_External_system["Use Case : Product Calculator for External system"]
    Use_Case_Model_Select_insurance_services["Use Case Model : Select insurance services"]
    Business_Rules_Offer_recalculation["Business Rules : Offer recalculation"]
    MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    n_08_110_Select_insurance_services["08.110 Select insurance services"]
    UseCase_Model_Generate_optional_offers["UseCase Model : Generate optional offers"]
    Use_Case_Product_Calculator_for_External_system["Use Case : Product Calculator for External system"]
    Choose_Product_Offer_Choose_product_offer["Choose Product Offer : Choose product offer"]
    UseCase_Model_Choose_product_offer["UseCase Model : Choose product offer"]
    MOD_Offer_recalculation["{MOD}Offer recalculation"]
    Business_Rules_Calculate_product_offer["Business Rules : Calculate product offer"]
    n_01_155_Generate_optional_offers["01.155 Generate optional offers"]
    n_02_820_Calculate_Product_Offers_for_External_system["02.820 Calculate Product Offers for External system"]
    MOD_Calculate_product_offer["{MOD}Calculate product offer"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    n_01_156_Adjust_credit_limit -->|unnamed| MOD_Calculate_product_offer
    n_02_820_Calculate_Product_Offers_for_External_system -->|unnamed| MOD_Calculate_product_offer
    n_01_010_Choose_product_offer -->|unnamed| MOD_Calculate_product_offer
    n_01_155_Generate_optional_offers -->|unnamed| MOD_Calculate_product_offer
    n_01_077_Change_product_offer_parameters -->|unnamed| MOD_Offer_recalculation
    n_08_110_Select_insurance_services -->|unnamed| MOD_Offer_recalculation
    MOD_02_830_Recalculate_Product_Offers_for_External_system -->|unnamed| MOD_Offer_recalculation
```
