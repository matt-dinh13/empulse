# LOR-9669 BSL API: New method getting multiple applications

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9524 Additional Field on BSL: "Reason for using BSL"/LOR-9669 BSL API: New method getting multiple applications
- **Diagram ID**: 153702
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    MOD_Applications["{MOD}Applications"]
    ApplicationDetailsRestTO["ApplicationDetailsRestTO"]
    LOR_9669_BSL_API_New_method_getting_multiple_applications["LOR-9669 BSL API: New method getting multiple applications"]
    LOR_9524_Additional_Field_on_BSL_Reason_for_using_BSL["LOR-9524 Additional Field on BSL: 'Reason for using BSL'"]
    LOR_9669_BSL_API_New_method_getting_multiple_applications -->|unnamed| LOR_9524_Additional_Field_on_BSL_Reason_for_using_BSL
    MOD_Applications -->|unnamed| ApplicationDetailsRestTO
```
