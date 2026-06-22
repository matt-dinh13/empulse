# CustomerOfferWS_v21 - GetCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21
- **Diagram ID**: 157935
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class CustomerOffer["CustomerOffer"]
    class CustomerOfferDataSet["CustomerOfferDataSet"]
    class n_02_835_Provide_Product_Offers_for_External_system["02.835 Provide Product Offers for External system"]
    class GetCustomerOfferResultCode["GetCustomerOfferResultCode"]
    class GetCustomerOfferResponse["GetCustomerOfferResponse"]
    class GetCustomerOfferRequest["GetCustomerOfferRequest"]
    class GetCustomerOfferFault["GetCustomerOfferFault"]
    class CustomerOfferWS_21["CustomerOfferWS_21"]
    CustomerOfferWS_21 ..> GetCustomerOfferFault : unnamed
    CustomerOfferWS_21 ..> GetCustomerOfferRequest : unnamed
    CustomerOfferWS_21 ..> GetCustomerOfferResponse : unnamed
    GetCustomerOfferFault ..> GetCustomerOfferResultCode : unnamed
    n_02_835_Provide_Product_Offers_for_External_system <|.. CustomerOfferWS_21 : unnamed
    GetCustomerOfferRequest ..> CustomerOfferDataSet : unnamed
    GetCustomerOfferResponse ..> CustomerOffer : unnamed
```
