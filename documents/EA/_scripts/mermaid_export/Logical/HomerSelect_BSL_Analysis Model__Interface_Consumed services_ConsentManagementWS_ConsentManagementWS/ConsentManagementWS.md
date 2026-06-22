# ConsentManagementWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/ConsentManagementWS/ConsentManagementWS
- **Diagram ID**: 111823
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class SendConsentEnquiryFault["SendConsentEnquiryFault"]
    class OperatorType["OperatorType"]
    class SendConsentEnquiryResponse["SendConsentEnquiryResponse"]
    class SendConsentEnquiryRequest["SendConsentEnquiryRequest"]
    class ConsentManagementWS["ConsentManagementWS"]
    ConsentManagementWS ..> SendConsentEnquiryRequest : unnamed
    ConsentManagementWS ..> SendConsentEnquiryResponse : unnamed
    SendConsentEnquiryRequest ..> OperatorType : unnamed
    ConsentManagementWS ..> SendConsentEnquiryFault : unnamed
```
