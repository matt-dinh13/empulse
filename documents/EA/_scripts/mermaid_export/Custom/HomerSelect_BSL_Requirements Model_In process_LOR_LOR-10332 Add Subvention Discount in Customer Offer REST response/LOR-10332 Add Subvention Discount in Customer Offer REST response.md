# LOR-10332 Add Subvention Discount in Customer Offer REST response

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response
- **Diagram ID**: 158611
- **Elements**: 13
- **Connectors**: 10

```mermaid
graph TD
    ADD_SubventionTO["{ADD}SubventionTO"]
    CustomerOfferRestTO["CustomerOfferRestTO"]
    Financing_Package_Subvention["Financing Package Subvention"]
    Subvention_Participant["Subvention Participant"]
    Offer_Service_Subvention_Item["Offer Service Subvention Item"]
    Offer_Service_Tariff_Item["Offer Service Tariff Item"]
    Offer_Tariff_Item["Offer Tariff Item"]
    MOD_Offer_Subvention_Item["{MOD}Offer Subvention Item"]
    MOD_Subvention["{MOD}Subvention"]
    Financial_Parameter_Item_Type["Financial Parameter Item Type"]
    Offer_Financial_Parameter_Item["Offer Financial Parameter Item"]
    LOR_10445_CustomerOffer_API_add_subvention_to_the_GET_respon["LOR-10445 CustomerOffer API: add subvention to the GET response"]
    LOR_10332_Add_Subvention_Discount_in_Customer_Offer_REST_res["LOR-10332 Add Subvention Discount in Customer Offer REST response"]
    LOR_10445_CustomerOffer_API_add_subvention_to_the_GET_respon -->|unnamed| LOR_10332_Add_Subvention_Discount_in_Customer_Offer_REST_res
    CustomerOfferRestTO -->|unnamed| ADD_SubventionTO
    Offer_Tariff_Item -->|unnamed| Offer_Financial_Parameter_Item
    Offer_Service_Tariff_Item -->|unnamed| Offer_Tariff_Item
    Offer_Service_Subvention_Item -->|unnamed| MOD_Offer_Subvention_Item
    MOD_Offer_Subvention_Item -->|unnamed| Offer_Financial_Parameter_Item
    Offer_Financial_Parameter_Item -->|unnamed| Financial_Parameter_Item_Type
    MOD_Offer_Subvention_Item -->|unnamed| MOD_Subvention
    MOD_Offer_Subvention_Item -->|{PCG-1844}| Financing_Package_Subvention
    MOD_Offer_Subvention_Item -->|unnamed| Subvention_Participant
```
