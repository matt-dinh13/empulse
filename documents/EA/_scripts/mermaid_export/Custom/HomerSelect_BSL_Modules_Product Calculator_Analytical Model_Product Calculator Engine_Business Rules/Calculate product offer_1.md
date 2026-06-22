# Calculate product offer

```mermaid
graph TD
    ADD_Additional_fees_calculation["{ADD}Additional fees calculation"]
    ADD_Insurance_service_eligibility_check["{ADD}Insurance service eligibility check"]
    Service_qualification_criteria_check["Service qualification criteria check"]
    Commodity_type_criterion_check["Commodity type criterion check"]
    Default_document_container["Default document container"]
    MOD_Check_compatibility_of_service_type_to_product_propertie["{MOD}Check compatibility of service type to product properties"]
    Add_mandatory_service["Add mandatory service"]
    Installment_Plan_Evaluation_of_IP_for_Product_Offer_with_Fin["Installment Plan : Evaluation of IP for Product Offer with Financing Scheme"]
    ADD_Generation_of_CEL_Installment_Plan["{ADD}Generation of CEL Installment Plan"]
    MOD_NEW_Evaluation_of_Product_Offers["{MOD}NEW_Evaluation of Product Offers"]
    Evaluation_of_Installment_Plan_for_REL["Evaluation of Installment Plan for REL"]
    Service_Subvention_Calculation["Service Subvention Calculation"]
    Check_Service_Availability_on_Salesroom["Check Service Availability on Salesroom"]
    Get_Salesroom_Sales_Items["Get Salesroom Sales Items"]
    el_1878782["Text"]
    Evaluation_of_Products_based_on_Financing_Scheme_Evaluation_["Evaluation of Products based on Financing Scheme : Evaluation of Products based on Financing Scheme"]
    DEL_Evaluation_of_Product_Offers["{DEL}Evaluation of Product Offers"]
    Evaluate_parameters_for_First_Installment_Due_Date_determina["Evaluate parameters for First Installment Due Date determination"]
    MOD_Evaluate_First_Installment_Due_Date["{MOD}Evaluate First Installment Due Date"]
    Service_Exclusivity_Check["Service Exclusivity Check"]
    Service_Inclusivity_Check["Service Inclusivity Check"]
    Save_offers_to_Offer_Repository["Save offers to Offer Repository"]
    Insurance_evaluation_Evaluation_of_Insurance_Variants["Insurance evaluation : Evaluation of Insurance Variants"]
    MOD_Evaluation_of_Insurance_Variants["{MOD}Evaluation of Insurance Variants"]
    Product_Calculator_Engine_Product_Offer_Calculation_Use_Case["Product Calculator Engine : Product Offer Calculation - Use Case references"]
    Business_Rules_Evaluation_of_Presented_interest_rates["Business Rules : Evaluation of Presented interest rates"]
    Calculation_of_Presented_IR_for_Product_Offer["Calculation of Presented IR for Product Offer"]
    MOD_Get_allowed_Product_Types_on_POS["{MOD}Get allowed Product Types on POS"]
    Web_camera_check["Web camera check"]
    Calculate_product_offer_Eligible_Insurance_Service["Calculate product offer : Eligible Insurance Service"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    MOD_Fees_determination["{MOD}Fees determination"]
    Calculate_product_offer_Evaluation_of_product_sub_variant["Calculate product offer : Evaluation of product sub-variant"]
    MOD_Calculate_product_offer["{MOD}Calculate product offer"]
    MOD_Product_selection["{MOD}Product selection"]
    Evaluation_of_product_sub_variant["Evaluation of product sub-variant"]
    Sorting_of_generated_Optional_product_offers["Sorting of generated Optional product offers"]
    Sorting_of_generated_offers["Sorting of generated offers"]
    MOD_Sorting_of_generated_Primary_product_offers["{MOD}Sorting of generated Primary product offers"]
    MOD_Document_container_check["{MOD}Document container check"]
    el_1878787["Boundary"]
    MOD_NEW_Service_determination["{MOD}NEW Service determination"]
    MOD_Calculate_product_offer -->|{ADD PCG-707}| MOD_NEW_Evaluation_of_Product_Offers
    MOD_Calculate_product_offer -->|unnamed| ADD_Additional_fees_calculation
    DEL_Evaluation_of_Product_Offers -->|unnamed| Evaluation_of_Products_based_on_Financing_Scheme_Evaluation_
    MOD_NEW_Evaluation_of_Product_Offers -->|unnamed| Evaluation_of_Products_based_on_Financing_Scheme_Evaluation_
    MOD_Product_selection -->|unnamed| Get_Salesroom_Sales_Items
    Check_Service_Availability_on_Salesroom -->|unnamed| Get_Salesroom_Sales_Items
    MOD_NEW_Service_determination -->|unnamed| Check_Service_Availability_on_Salesroom
    MOD_Calculate_product_offer -->|unnamed| Evaluation_of_Installment_Plan_for_REL
    MOD_Calculate_product_offer -->|unnamed| Evaluate_parameters_for_First_Installment_Due_Date_determina
    MOD_Calculate_product_offer -->|unnamed| ADD_Generation_of_CEL_Installment_Plan
    MOD_Calculate_product_offer -->|unnamed| Add_mandatory_service
    Add_mandatory_service -->|unnamed| MOD_Check_compatibility_of_service_type_to_product_propertie
    Web_camera_check -->|unnamed| Default_document_container
    MOD_Document_container_check -->|unnamed| Default_document_container
    MOD_Calculate_product_offer -->|unnamed| Commodity_type_criterion_check
    MOD_NEW_Service_determination -->|unnamed| Service_qualification_criteria_check
    MOD_NEW_Service_determination -->|{ADD PCG-2994/}| ADD_Insurance_service_eligibility_check
    MOD_Calculate_product_offer -->|unnamed| Service_Subvention_Calculation
    MOD_Product_selection -->|unnamed| Web_camera_check
    MOD_Product_selection -->|unnamed| MOD_Document_container_check
    MOD_Sorting_of_generated_Primary_product_offers -->|unnamed| Sorting_of_generated_offers
    MOD_Calculate_product_offer -->|unnamed| Sorting_of_generated_offers
    Sorting_of_generated_Optional_product_offers -->|unnamed| Sorting_of_generated_offers
    Calculate_product_offer_Evaluation_of_product_sub_variant -->|unnamed| Evaluation_of_product_sub_variant
    MOD_Calculate_product_offer -->|unnamed| Evaluation_of_product_sub_variant
    MOD_Calculate_product_offer -->|unnamed| MOD_Product_selection
    MOD_Calculate_product_offer -->|{DEL PCG-707}| DEL_Evaluation_of_Product_Offers
    MOD_Calculate_product_offer -->|unnamed| MOD_NEW_Service_determination
    MOD_Product_selection -->|unnamed| MOD_Get_allowed_Product_Types_on_POS
    MOD_Calculate_product_offer -->|unnamed| Calculation_of_Presented_IR_for_Product_Offer
    MOD_Calculate_product_offer -->|unnamed| MOD_Evaluation_of_Insurance_Variants
    MOD_Calculate_product_offer -->|unnamed| Save_offers_to_Offer_Repository
    MOD_Calculate_product_offer -->|unnamed| Service_Inclusivity_Check
    ADD_Insurance_service_eligibility_check -->|unnamed| Service_Exclusivity_Check
    MOD_NEW_Service_determination -->|unnamed| Service_Exclusivity_Check
    MOD_Calculate_product_offer -->|unnamed| MOD_Evaluate_First_Installment_Due_Date
    MOD_Calculate_product_offer -->|unnamed| MOD_Fees_determination
    MOD_Fees_determination -->|unnamed| Algorithm_Find_tariff_items_by_usage
```
