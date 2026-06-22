# LOR-9169 Implement updateApprovedApplication method

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)/LOR-9169 Implement updateApprovedApplication method
- **Diagram ID**: 150842
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    UpdateApproved["UpdateApproved"]
    MOD_ApplicationDetailRestTO["{MOD}ApplicationDetailRestTO"]
    AbstractApplicationRestTO["AbstractApplicationRestTO"]
    LOR_9169_Implement_updateApprovedApplication_method["LOR-9169 Implement updateApprovedApplication method"]
    LOR_9105_Create_a_new_attribute_for_SOB_Selling_On_Board["LOR-9105 Create a new attribute for SOB (Selling On Board)"]
    LOR_9169_Implement_updateApprovedApplication_method -->|unnamed| LOR_9105_Create_a_new_attribute_for_SOB_Selling_On_Board
    MOD_ApplicationDetailRestTO -->|unnamed| AbstractApplicationRestTO
```
