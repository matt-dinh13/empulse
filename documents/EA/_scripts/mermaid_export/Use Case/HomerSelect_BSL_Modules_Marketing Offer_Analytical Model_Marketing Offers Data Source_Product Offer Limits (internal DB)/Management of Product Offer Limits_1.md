# Management of Product Offer Limits

```mermaid
graph TD
    MOD_SetProductOfferLimitRequest_validation["{MOD}SetProductOfferLimitRequest - validation"]
    MOD_Create_Product_Offer_Limit_from_ImportOfferLimitRequest["{MOD}Create Product Offer Limit from ImportOfferLimitRequest"]
    n_02_901_Set_product_offer_limits["02.901 Set product offer limits"]
    ProductOfferLimitsWS_SetValidityOfProductOfferLimits_Product["ProductOfferLimitsWS.SetValidityOfProductOfferLimits : ProductOfferLimitsWS - SetValidityOfProductOfferLimits method"]
    ProductOfferLimitsWS_SetProductOfferLimit_ProductOfferLimits["ProductOfferLimitsWS.SetProductOfferLimit : ProductOfferLimitsWS - SetProductOfferLimit"]
    External_System["External System"]
    Campaign_system_SAS["Campaign system (SAS)"]
    Product_Offer_Limits_Validity_validation["Product Offer Limits Validity - validation"]
    n_02_904_Set_validity_of_product_offer_limits["02.904 Set validity of product offer limits "]
    Import_of_Product_Offer_Limits_ResponseOfImportOfferLimitsWS["Import of Product Offer Limits : ResponseOfImportOfferLimitsWS"]
    Use_Case_Import_of_Product_OfferLimits_communication_scheme["Use Case :Import of Product OfferLimits - communication scheme"]
    Import_of_Product_Offer_Limits_ProductOfferLimitsWS_ImportOf["Import of Product Offer Limits :ProductOfferLimitsWS - ImportOfferLimits method"]
    BSL["BSL"]
    Job_IMPORT_OFFER_LIMITS["Job IMPORT_OFFER_LIMITS"]
    ImportOfferLimitRequest_validation["ImportOfferLimitRequest - validation"]
    n_02_900_Import_product_offer_limits["02.900 Import product offer limits"]
    n_02_900_Import_product_offer_limits -->|unnamed| ImportOfferLimitRequest_validation
    n_02_900_Import_product_offer_limits -->|unnamed| Job_IMPORT_OFFER_LIMITS
    n_02_904_Set_validity_of_product_offer_limits -->|unnamed| Product_Offer_Limits_Validity_validation
    n_02_900_Import_product_offer_limits -->|unnamed| MOD_Create_Product_Offer_Limit_from_ImportOfferLimitRequest
    n_02_901_Set_product_offer_limits -->|unnamed| MOD_SetProductOfferLimitRequest_validation
    Campaign_system_SAS -->|unnamed| n_02_904_Set_validity_of_product_offer_limits
    Campaign_system_SAS -->|unnamed| n_02_900_Import_product_offer_limits
    External_System -->|unnamed| n_02_904_Set_validity_of_product_offer_limits
```
