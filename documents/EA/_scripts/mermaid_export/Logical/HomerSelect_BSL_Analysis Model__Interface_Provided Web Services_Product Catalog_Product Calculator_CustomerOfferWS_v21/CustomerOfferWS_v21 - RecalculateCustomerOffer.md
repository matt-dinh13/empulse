# CustomerOfferWS_v21 - RecalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21
- **Diagram ID**: 157934
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    class CustomerOffer["CustomerOffer"]
    class RecalculateCustomerOfferResultCode["RecalculateCustomerOfferResultCode"]
    class ServiceChoice["ServiceChoice"]
    class MOD_RecalculateCustomerOfferRequest["{MOD}RecalculateCustomerOfferRequest"]
    class RecalculateCustomerOfferResponse["RecalculateCustomerOfferResponse"]
    class RecalculateCustomerOfferFault["RecalculateCustomerOfferFault"]
    class CustomerOfferWS_21["CustomerOfferWS_21"]
    CustomerOfferWS_21 ..> RecalculateCustomerOfferFault : unnamed
    CustomerOfferWS_21 ..> RecalculateCustomerOfferResponse : unnamed
    CustomerOfferWS_21 ..> MOD_RecalculateCustomerOfferRequest : unnamed
    MOD_RecalculateCustomerOfferRequest ..> ServiceChoice : unnamed
    RecalculateCustomerOfferFault ..> RecalculateCustomerOfferResultCode : unnamed
    RecalculateCustomerOfferResponse ..> CustomerOffer : unnamed
    MOD_02_830_Recalculate_Product_Offers_for_External_system <|.. CustomerOfferWS_21 : unnamed
```
