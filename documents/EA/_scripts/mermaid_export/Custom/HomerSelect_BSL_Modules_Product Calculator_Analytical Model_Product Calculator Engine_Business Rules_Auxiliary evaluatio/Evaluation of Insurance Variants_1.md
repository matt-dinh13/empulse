# Evaluation of Insurance Variants

```mermaid
graph TD
    ADD_Insurance_service_eligibility_check["{ADD}Insurance service eligibility check"]
    MOD_NEW_Service_determination["{MOD}NEW Service determination"]
    DEL_Insurance_determination["{DEL}Insurance determination"]
    MOD_Eligible_Insurance_Service["{MOD}Eligible Insurance Service"]
    MOD_Prepare_list_of_derived_Insurance_Variants["{MOD}Prepare list of derived Insurance Variants"]
    Business_Rules_Calculate_product_offer["Business Rules : Calculate product offer"]
    MOD_Evaluation_of_Insurance_Variants["{MOD}Evaluation of Insurance Variants"]
    MOD_Offer_recalculation["{MOD}Offer recalculation"]
    MOD_Evaluation_of_Insurance_Variants -->|unnamed| MOD_Prepare_list_of_derived_Insurance_Variants
    DEL_Insurance_determination -->|unnamed| MOD_Eligible_Insurance_Service
    MOD_Prepare_list_of_derived_Insurance_Variants -->|{DEL PCG-2994/}| MOD_Eligible_Insurance_Service
    MOD_Prepare_list_of_derived_Insurance_Variants -->|{ADD PCG-2994/}| ADD_Insurance_service_eligibility_check
    MOD_NEW_Service_determination -->|{ADD PCG-2994/}| ADD_Insurance_service_eligibility_check
```
