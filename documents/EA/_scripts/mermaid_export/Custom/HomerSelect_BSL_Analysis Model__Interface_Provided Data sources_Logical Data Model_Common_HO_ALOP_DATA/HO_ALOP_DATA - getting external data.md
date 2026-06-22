# HO_ALOP_DATA - getting external data

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA
- **Diagram ID**: 164467
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph TD
    Get_Installment_Plan_data_from_ASQ["Get Installment Plan data from ASQ"]
    HO_ALOP_DATA_filling_rules["HO_ALOP_DATA filling rules"]
    Get_PaymentChannel_data_by_paymentChannelId["Get PaymentChannel data by paymentChannelId"]
    Get_Offer_by_offerId_from_SQS["Get Offer by offerId from SQS"]
    Get_application_data_by_code["Get application data by code"]
    Get_Applicant_by_Id_from_CIF["Get Applicant by Id from CIF"]
    Get_tariff_items_related_to_the_account["Get tariff items related to the account"]
    HO_ALOP_DATA_filling_rules -->|unnamed| Get_tariff_items_related_to_the_account
    HO_ALOP_DATA_filling_rules -->|unnamed| Get_Applicant_by_Id_from_CIF
    HO_ALOP_DATA_filling_rules -->|unnamed| Get_application_data_by_code
    HO_ALOP_DATA_filling_rules -->|unnamed| Get_Offer_by_offerId_from_SQS
    HO_ALOP_DATA_filling_rules -->|unnamed| Get_PaymentChannel_data_by_paymentChannelId
    HO_ALOP_DATA_filling_rules -->|unnamed| Get_Installment_Plan_data_from_ASQ
```
