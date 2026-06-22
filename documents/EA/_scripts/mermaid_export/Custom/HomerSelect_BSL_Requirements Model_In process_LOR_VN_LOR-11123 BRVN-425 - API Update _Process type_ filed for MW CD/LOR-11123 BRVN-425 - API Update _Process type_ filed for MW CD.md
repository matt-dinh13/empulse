# LOR-11123 BRVN-425 - API Update "Process type" filed for MW CD

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/VN/LOR-11123 BRVN-425 - API Update "Process type" filed for MW CD
- **Diagram ID**: 163896
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    Contract_Negotiation_Process_Type["Contract Negotiation Process Type"]
    ADD_Process_type["{ADD}Process type"]
    CreateAndEvaluate["CreateAndEvaluate"]
    Management_Create["Management : Create"]
    MOD_Contract["{MOD}Contract"]
    MOD_ApplicationDetailRestTO["{MOD}ApplicationDetailRestTO"]
    Application_Application["Application : Application"]
    Logical_Data_Model_Contract["Logical Data Model : Contract"]
    LOR_11123_BRVN_425_API_Update_Process_type_filed_for_MW_CD["LOR-11123 BRVN-425 - API Update 'Process type' filed for MW CD"]
    ADD_Process_type -->|based on| Contract_Negotiation_Process_Type
    CreateAndEvaluate -->|unnamed| ADD_Process_type
    MOD_ApplicationDetailRestTO -->|unnamed| ADD_Process_type
    MOD_Contract -->|unnamed| Contract_Negotiation_Process_Type
```
