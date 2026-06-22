# DOT Adapter API - DOT Adapter Controller

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)
- **Diagram ID**: 139538
- **Elements**: 24
- **Connectors**: 25

```mermaid
classDiagram
    class Status["Status"]
    class Recommendations["Recommendations"]
    class PhotoQuality["PhotoQuality"]
    class CompareCabinetPhotoResult["CompareCabinetPhotoResult"]
    class CompareCabinetPhotoResponse["CompareCabinetPhotoResponse"]
    class ComparePhotoSamplesResult["ComparePhotoSamplesResult"]
    class ComparePhotoSamplesResponse["ComparePhotoSamplesResponse"]
    class ComparePhotoResponse["ComparePhotoResponse"]
    class CheckPhotoQualityResponse["CheckPhotoQualityResponse"]
    class CheckDocumentQualityResponse["CheckDocumentQualityResponse"]
    class CheckDocumentQualityRequest["CheckDocumentQualityRequest"]
    class PhotoQualityRequestConfiguration["PhotoQualityRequestConfiguration"]
    class CheckPhotoQualityRequest["CheckPhotoQualityRequest"]
    class ComparePhotoRequest["ComparePhotoRequest"]
    class CompareCabinetPhotoRequest["CompareCabinetPhotoRequest"]
    class ComparePhotoSamplesRequest["ComparePhotoSamplesRequest"]
    class CheckQuality["CheckQuality"]
    class CheckQuality["CheckQuality"]
    class Cabinet["Cabinet"]
    class Document["Document"]
    class Samples["Samples"]
    class Compare["Compare"]
    class Photo["Photo"]
    class DOTA["DOTA"]
    CheckQuality --> CheckDocumentQualityResponse : unnamed
    CompareCabinetPhotoResponse ..> CompareCabinetPhotoResult : unnamed
    CompareCabinetPhotoResponse ..> CompareCabinetPhotoResult : unnamed
    ComparePhotoSamplesResponse ..> ComparePhotoSamplesResult : unnamed
    ComparePhotoSamplesResponse ..> ComparePhotoSamplesResult : unnamed
    CheckPhotoQualityResponse ..> Recommendations : unnamed
    CheckPhotoQualityResponse ..> PhotoQuality : unnamed
    CheckPhotoQualityRequest ..> PhotoQualityRequestConfiguration : unnamed
    Photo o-- CheckQuality : /check-quality
    CheckQuality ..> CheckPhotoQualityRequest : unnamed
    CheckQuality --> CheckPhotoQualityResponse : unnamed
    CompareCabinetPhotoResult ..> Status : unnamed
    CheckQuality ..> CheckDocumentQualityRequest : unnamed
    DOTA o-- Photo : /photo
    Cabinet ..> CompareCabinetPhotoRequest : unnamed
    Compare o-- Cabinet : /cabinet
    Cabinet --> CompareCabinetPhotoResponse : unnamed
    DOTA o-- Document : /document
    Compare o-- Samples : /samples
    Samples ..> ComparePhotoSamplesRequest : unnamed
    Samples --> ComparePhotoSamplesResponse : unnamed
    Compare ..> ComparePhotoRequest : unnamed
    Photo o-- Compare : /compare
    Compare --> ComparePhotoResponse : unnamed
    Document o-- CheckQuality : /check-quality
```
