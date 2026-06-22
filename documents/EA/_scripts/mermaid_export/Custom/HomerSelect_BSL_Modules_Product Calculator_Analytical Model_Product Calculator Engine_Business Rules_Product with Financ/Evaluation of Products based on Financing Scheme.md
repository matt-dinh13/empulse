# Evaluation of Products based on Financing Scheme

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme
- **Diagram ID**: 154279
- **Elements**: 21
- **Connectors**: 22

```mermaid
graph TD
    ADD_BACKUP_Evaluation_of_Product_Offers["{ADD}BACKUP_Evaluation of Product Offers"]
    Offer_Financial_Parameters_Evaluation_of_Basic_Financial_Par["Offer Financial Parameters : Evaluation of Basic Financial Parameters of Product Offer"]
    MOD_Evaluate_Cash_Payment["{MOD}Evaluate Cash Payment"]
    Evaluate_Down_Payment["Evaluate Down Payment"]
    MOD_Evaluate_basic_financial_parameters_of_Product_Offer["{MOD}Evaluate basic financial parameters of Product Offer "]
    ADD_Evaluate_NetCredit_Amount_and_Limit["{ADD}Evaluate NetCredit Amount and Limit "]
    MOD_NEW_Evaluation_of_Product_Offers["{MOD}NEW_Evaluation of Product Offers"]
    MOD_Add_Product_Offer["{MOD}Add Product Offer"]
    Products_based_on_Financing_Scheme_DEL_Evaluation_of_Product["Products based on Financing Scheme :{DEL}Evaluation of Product Offer Financial Parameters"]
    DEL_Evaluate_Initial_Payment_Limits_for_Product_Variant["{DEL}Evaluate Initial Payment Limits for Product Variant"]
    Cash_Payment_on_Product["Cash Payment on Product"]
    MOD_Subvention_amount_definition["{MOD}Subvention amount definition"]
    Determine_first_insurance_period["Determine first insurance period"]
    DEL_Evaluate_Product_Offer_Financial_Parameters["{DEL}Evaluate Product Offer Financial Parameters"]
    Evaluate_Initial_Payment_Limits_for_Financing_Package["Evaluate Initial Payment Limits for Financing Package"]
    MOD_Filter_Financing_Scheme_Variants["{MOD}Filter Financing Scheme Variants"]
    MOD_Filter_Financing_Packages["{MOD}Filter Financing Packages"]
    DEL_Evaluation_of_Product_Offers["{DEL}Evaluation of Product Offers"]
    Logical_Data_Model_Product_Offer["Logical Data Model : Product Offer"]
    MOD_Calculate_product_offer["{MOD}Calculate product offer"]
    Calculate_product_offer_Calculate_product_offer["Calculate product offer : Calculate product offer"]
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| MOD_Subvention_amount_definition
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| MOD_Evaluate_Cash_Payment
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| Evaluate_Down_Payment
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| MOD_Evaluate_basic_financial_parameters_of_Product_Offer
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| ADD_Evaluate_NetCredit_Amount_and_Limit
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| MOD_Add_Product_Offer
    DEL_Evaluation_of_Product_Offers -->|unnamed| MOD_Add_Product_Offer
    MOD_Evaluate_basic_financial_parameters_of_Product_Offer -->|unnamed| Offer_Financial_Parameters_Evaluation_of_Basic_Financial_Par
    DEL_Evaluate_Initial_Payment_Limits_for_Product_Variant -->|unnamed| Cash_Payment_on_Product
    DEL_Evaluation_of_Product_Offers -->|unnamed| MOD_Subvention_amount_definition
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| Determine_first_insurance_period
    DEL_Evaluation_of_Product_Offers -->|unnamed| Determine_first_insurance_period
    DEL_Evaluation_of_Product_Offers -->|unnamed| DEL_Evaluate_Product_Offer_Financial_Parameters
    DEL_Evaluation_of_Product_Offers -->|unnamed| Evaluate_Initial_Payment_Limits_for_Financing_Package
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| Evaluate_Initial_Payment_Limits_for_Financing_Package
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| MOD_Filter_Financing_Scheme_Variants
    DEL_Evaluation_of_Product_Offers -->|unnamed| MOD_Filter_Financing_Scheme_Variants
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| MOD_Filter_Financing_Packages
    DEL_Evaluation_of_Product_Offers -->|unnamed| MOD_Filter_Financing_Packages
    DEL_Evaluate_Product_Offer_Financial_Parameters -->|unnamed| Products_based_on_Financing_Scheme_DEL_Evaluation_of_Product
    MOD_Calculate_product_offer -->|{DEL PCG-707}| DEL_Evaluation_of_Product_Offers
    MOD_Calculate_product_offer -->|{ADD PCG-707}| MOD_NEW_Evaluation_of_Product_Offers
```
