# CBL-1533 Adjust OFP

```mermaid
classDiagram
    class MOD_Financing_Scheme_Variant["{MOD}Financing Scheme Variant"]
    class Version_Key["Version Key"]
    class Financing_Scheme["Financing Scheme"]
    class Financing_Package_Item["Financing Package Item"]
    class Financing_Package["Financing Package"]
    class Product_To_Financing_Package["Product To Financing Package"]
    class MOD_Product["{MOD}Product"]
    class Product_Variant["Product Variant"]
    class Service["Service"]
    class Offer_RELIP_Service_Variant_Installment["Offer RELIP Service Variant Installment"]
    class Offer_RELIP_Service_Variant["Offer RELIP Service Variant"]
    class RELIP_Service_Variant["RELIP Service Variant"]
    class RELIP_Service["RELIP Service"]
    class RELIP_Service_Variant_Term["RELIP Service Variant Term"]
    class Offer_RELIP_Service["Offer RELIP Service"]
    class Installment_Part_Type["Installment Part Type"]
    class MOD_Tariff["{MOD}Tariff"]
    class Offer_Service["Offer Service"]
    class Offer_Financial_Parameter["Offer Financial Parameter"]
    class Offer_Installment_Part["Offer Installment Part"]
    class Offer_Installment["Offer Installment"]
    class Product_Catalog["Product Catalog"]
    RELIP_Service_Variant --> RELIP_Service : unnamed
    RELIP_Service_Variant_Term --> RELIP_Service_Variant : unnamed
    Offer_RELIP_Service_Variant_Installment --> Offer_RELIP_Service_Variant : unnamed
    Offer_RELIP_Service --> Offer_Service : unnamed
    Offer_RELIP_Service_Variant --> Offer_RELIP_Service : unnamed
    Offer_Service --> Offer_Financial_Parameter : unnamed
    Offer_Financial_Parameter --> MOD_Tariff : unnamed
    Offer_Financial_Parameter --> Financing_Package : unnamed
    Offer_Financial_Parameter --> MOD_Financing_Scheme_Variant : unnamed
    Offer_Financial_Parameter --> Product_Variant : based on
    Offer_Financial_Parameter --> Product_Variant : unnamed
    Offer_Financial_Parameter --> Financing_Scheme : unnamed
    Offer_Financial_Parameter --> MOD_Product : unnamed
    Offer_Financial_Parameter --> MOD_Tariff : unnamed
    Offer_RELIP_Service_Variant --> RELIP_Service_Variant_Term : unnamed
    Offer_Service --> Service : unnamed
    Financing_Package_Item --> Financing_Package : unnamed
    Financing_Package_Item --> Financing_Scheme : unnamed
    MOD_Product --> Product_Variant : unnamed
    Product_To_Financing_Package --> Financing_Package : unnamed
    Product_To_Financing_Package --> MOD_Product : unnamed
    Offer_Installment_Part --> Offer_Installment : unnamed
    Offer_Installment_Part --> Installment_Part_Type : unnamed
    Offer_Installment --> Offer_Financial_Parameter : unnamed
    MOD_Financing_Scheme_Variant --> Financing_Scheme : unnamed
```
