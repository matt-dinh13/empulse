# Contract Insurance Services - GET: Contract Insurance Service offer preview create v3

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3
- **Diagram ID**: 161865
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class MOD_08_349_Generate_Insurance_offer_preview["{MOD}08.349 Generate Insurance offer preview"]
    class ADD_CreateInsuranceOfferPreview_v3["{ADD}CreateInsuranceOfferPreview_v3"]
    class ADD_InsuranceOfferPreview_v3["{ADD}InsuranceOfferPreview_v3"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    Contract_Insurance_Services --> ADD_InsuranceOfferPreview_v3 : unnamed
    Contract_Insurance_Services ..> MOD_08_349_Generate_Insurance_offer_preview : unnamed
    Contract_Insurance_Services --> ADD_CreateInsuranceOfferPreview_v3 : unnamed
```
