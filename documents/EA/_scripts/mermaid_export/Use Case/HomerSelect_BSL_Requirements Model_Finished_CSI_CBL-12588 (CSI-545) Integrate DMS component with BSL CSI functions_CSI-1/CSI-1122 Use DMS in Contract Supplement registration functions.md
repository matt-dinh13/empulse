# CSI-1122 Use DMS in Contract Supplement registration functions

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions/CSI-1122 Use DMS in Contract Supplement registration functions
- **Diagram ID**: 148949
- **Elements**: 8
- **Connectors**: 10

```mermaid
graph LR
    ADD_Validate_Contract_Supplement_Documents_for_registration["{ADD}Validate Contract Supplement Documents for registration"]
    n_13_270_Register_Contract_supplement(("13.270 Register Contract supplement"))
    ADD_13_290_Preview_Contract_Supplement_Document(("{ADD}13.290 Preview Contract Supplement Document"))
    Generate_documents_list_for_supplement_registration["Generate documents list for supplement registration"]
    n_13_271_Register_supplement_automatically(("13.271 Register supplement automatically"))
    n_13_275_Show_supplement_registration(("13.275 Show supplement registration"))
    System_event[/"System event"/]
    User[/"User"/]
    User --> n_13_275_Show_supplement_registration
    System_event --> n_13_271_Register_supplement_automatically
    User --> n_13_270_Register_Contract_supplement
    User --> ADD_13_290_Preview_Contract_Supplement_Document
    n_13_270_Register_Contract_supplement -->|unnamed| ADD_Validate_Contract_Supplement_Documents_for_registration
    n_13_271_Register_supplement_automatically -.->|include| n_13_270_Register_Contract_supplement
    n_13_270_Register_Contract_supplement -->|unnamed| Generate_documents_list_for_supplement_registration
    n_13_271_Register_supplement_automatically -->|unnamed| Generate_documents_list_for_supplement_registration
    n_13_275_Show_supplement_registration -->|unnamed| ADD_Validate_Contract_Supplement_Documents_for_registration
    n_13_275_Show_supplement_registration -->|unnamed| Generate_documents_list_for_supplement_registration
```
