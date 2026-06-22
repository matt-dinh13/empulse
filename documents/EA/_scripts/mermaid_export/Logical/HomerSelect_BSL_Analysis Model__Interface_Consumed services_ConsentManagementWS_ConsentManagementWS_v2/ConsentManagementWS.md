# ConsentManagementWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/ConsentManagementWS/ConsentManagementWS_v2
- **Diagram ID**: 115528
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class SendConsentEnquiryFault["SendConsentEnquiryFault"]
    class OperatorType["OperatorType"]
    class SendConsentEnquiryResponse["SendConsentEnquiryResponse"]
    class SendConsentEnquiryRequest["SendConsentEnquiryRequest"]
    class ConsentManagementWS_v2["ConsentManagementWS_v2"]
    ConsentManagementWS_v2 ..> SendConsentEnquiryRequest : unnamed
    ConsentManagementWS_v2 ..> SendConsentEnquiryResponse : unnamed
    SendConsentEnquiryRequest ..> OperatorType : unnamed
    ConsentManagementWS_v2 ..> SendConsentEnquiryFault : unnamed
```
