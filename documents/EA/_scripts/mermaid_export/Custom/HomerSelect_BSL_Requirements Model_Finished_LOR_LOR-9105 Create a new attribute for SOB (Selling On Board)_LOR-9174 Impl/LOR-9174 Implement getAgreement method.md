# LOR-9174 Implement getAgreement method

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)/LOR-9174 Implement getAgreement method
- **Diagram ID**: 150845
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph TD
    Agreement["Agreement"]
    External_Reference["External Reference"]
    PrintoutDataSource["PrintoutDataSource"]
    External_Reference["External Reference"]
    PreparedDocument["PreparedDocument"]
    GetAgreement["GetAgreement"]
    n_01_335_Get_agreement_documentation_externally["01.335 Get agreement documentation externally"]
    Create_validation_error_message["Create validation error message"]
    LOR_9174_Implement_getAgreement_method["LOR-9174 Implement getAgreement method"]
    LOR_9105_Create_a_new_attribute_for_SOB_Selling_On_Board["LOR-9105 Create a new attribute for SOB (Selling On Board)"]
    LOR_9174_Implement_getAgreement_method -->|unnamed| LOR_9105_Create_a_new_attribute_for_SOB_Selling_On_Board
    External_Reference -->|External Reference| PreparedDocument
    External_Reference -->|External Reference| PrintoutDataSource
    Agreement -->|unnamed| PrintoutDataSource
    GetAgreement -->|unnamed| Agreement
    Agreement -->|unnamed| PreparedDocument
    GetAgreement -->|unnamed| n_01_335_Get_agreement_documentation_externally
    n_01_335_Get_agreement_documentation_externally -->|unnamed| Create_validation_error_message
```
