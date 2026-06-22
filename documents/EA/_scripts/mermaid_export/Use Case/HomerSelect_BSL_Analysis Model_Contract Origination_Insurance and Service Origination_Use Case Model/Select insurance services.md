# Select insurance services

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Use Case Model
- **Diagram ID**: 158219
- **Elements**: 15
- **Connectors**: 13

```mermaid
graph LR
    Service_Exclusivity_Check["Service Exclusivity Check"]
    Service_Inclusivity_Check["Service Inclusivity Check"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    Offer_Recalculation_Offer_recalculation["Offer Recalculation : Offer recalculation"]
    Insurance_product_AF_Insurance_product_AF["Insurance - product AF : Insurance - product AF"]
    Copy_insurance_custom_data_between_offers["Copy insurance custom data between offers"]
    MOD_Offer_recalculation["{MOD}Offer recalculation"]
    Product_offer_detail_Product_offer_detail["Product offer detail : Product offer detail"]
    Insurance_services_selection_Insurance_services_selection["Insurance services selection : Insurance services selection"]
    Collect_insurance_custom_data_Collect_insurance_custom_data["Collect insurance custom data : Collect insurance custom data"]
    n_01_158_Accept_offer(("01.158 Accept offer"))
    MOD_08_115_Collect_insurance_custom_data_for_alternative_off(("{MOD}08.115 Collect insurance custom data for alternative offer"))
    User[/"User"/]
    n_08_110_Select_insurance_services(("08.110 Select insurance services"))
    Prepare_Services_for_Selection["Prepare Services for Selection"]
    n_08_110_Select_insurance_services -->|unnamed| Service_Exclusivity_Check
    n_08_110_Select_insurance_services -->|unnamed| Algorithm_Find_tariff_items_by_usage
    n_08_110_Select_insurance_services -->|unnamed| Prepare_Services_for_Selection
    n_08_110_Select_insurance_services -->|unnamed| Service_Inclusivity_Check
    n_08_110_Select_insurance_services -->|unnamed| MOD_Offer_recalculation
    MOD_08_115_Collect_insurance_custom_data_for_alternative_off -->|unnamed| Copy_insurance_custom_data_between_offers
    MOD_08_115_Collect_insurance_custom_data_for_alternative_off -->|unnamed| Collect_insurance_custom_data_Collect_insurance_custom_data
    n_01_158_Accept_offer -->|unnamed| MOD_08_115_Collect_insurance_custom_data_for_alternative_off
    MOD_Offer_recalculation -->|unnamed| Service_Inclusivity_Check
    User --- n_01_158_Accept_offer
    User --> n_08_110_Select_insurance_services
    User --> MOD_08_115_Collect_insurance_custom_data_for_alternative_off
    MOD_Offer_recalculation -->|unnamed| Offer_Recalculation_Offer_recalculation
```
