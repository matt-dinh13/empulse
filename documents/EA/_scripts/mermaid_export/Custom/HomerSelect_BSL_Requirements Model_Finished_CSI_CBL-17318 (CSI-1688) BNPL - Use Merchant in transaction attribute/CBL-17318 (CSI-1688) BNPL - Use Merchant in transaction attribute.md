# CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute
- **Diagram ID**: 145952
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    TransactionSupplements_v2_Transaction_Supplement_Create_Tran["TransactionSupplements_v2 : Transaction Supplement - Create Transaction Supplement v2"]
    Use_case_model_Transaction_Supplement_request_creation_Use_c["Use case model : Transaction Supplement request creation - Use case model"]
    Use_case_model_Transaction_Supplement_authorization_confirma["Use case model : Transaction Supplement authorization/confirmation - Use case model"]
    HO_ALOP_DATA_HO_ALOP_DATA["HO_ALOP_DATA : HO_ALOP_DATA"]
    CSI_1800_BNPL_Add_Partner_name_and_Seller_additional_date_to["CSI-1800 BNPL - Add Partner name and Seller additional date to Transaction Supplement"]
    TransactionSupplements_v2_Transaction_Supplement_Create_Tran -->|unnamed| CSI_1800_BNPL_Add_Partner_name_and_Seller_additional_date_to
    Use_case_model_Transaction_Supplement_request_creation_Use_c -->|unnamed| CSI_1800_BNPL_Add_Partner_name_and_Seller_additional_date_to
    Use_case_model_Transaction_Supplement_authorization_confirma -->|unnamed| CSI_1800_BNPL_Add_Partner_name_and_Seller_additional_date_to
    HO_ALOP_DATA_HO_ALOP_DATA -->|unnamed| CSI_1800_BNPL_Add_Partner_name_and_Seller_additional_date_to
```
